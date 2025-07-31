require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const XLSX = require("xlsx");
const { Translate } = require("@google-cloud/translate").v2;

const app = express();
app.use(cors());
app.use(express.json());

const apiKey = process.env.GOOGLE_API_KEY;
const translate = new Translate({ key: apiKey });

/** ✅ 1. Translate Text */
app.post("/translate", async (req, res) => {
  const { text, target } = req.body;
  try {
    const [translation] = await translate.translate(text, target);
    res.json({ translation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/** ✅ 2. Save Translation to translations.xlsx */
app.post("/save-translation", (req, res) => {
  const { input, output, direction, updatedText } = req.body;
  const EXCEL_FILE = "translations.xlsx";

  let data;
  if (fs.existsSync(EXCEL_FILE)) {
    const workbook = XLSX.readFile(EXCEL_FILE);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    data = data.filter(
      (row, idx) =>
        idx === 0 ||
        (Array.isArray(row) &&
          row.some((cell) => cell && cell.toString().trim() !== ""))
    );

    if (
      !data[0] ||
      data[0][0] !== "Sl. No." ||
      data[0][1] !== "Language" ||
      data[0][2] !== "Input" ||
      data[0][3] !== "Output" ||
      data[0][4] !== "Updated Text"
    ) {
      data = [["Sl. No.", "Language", "Input", "Output", "Updated Text"]];
    }
  } else {
    data = [["Sl. No.", "Language", "Input", "Output", "Updated Text"]];
  }

  let found = false;
  const normDirection = direction ? direction.trim().toLowerCase() : "";
  const normInput = input ? input.trim() : "";

  for (let i = 1; i < data.length; i++) {
    const rowDirection = data[i][1] ? data[i][1].trim().toLowerCase() : "";
    const rowInput = data[i][2] ? data[i][2].trim() : "";

    if (rowDirection === normDirection && rowInput === normInput) {
      if (
        updatedText !== undefined &&
        updatedText !== null &&
        updatedText !== ""
      ) {
        data[i][4] = updatedText;
      } else {
        data[i][3] = output;
        data[i][4] = "";
      }
      found = true;
      break;
    }
  }

  if (!found) {
    data.push([null, direction, input, output, updatedText || ""]);
  }

  for (let i = 1; i < data.length; i++) {
    data[i][0] = i;
  }

  const newWorksheet = XLSX.utils.aoa_to_sheet(data);
  const newWorkbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, "Translations");
  XLSX.writeFile(newWorkbook, EXCEL_FILE);

  res.json({ success: true, message: "Translation saved/updated in Excel!" });
});

/** ✅ 3. Save Feedback to suggested_words.xlsx */
app.post("/save-feedback", (req, res) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== "string" || message.trim() === "") {
      return res.status(400).json({ error: "Feedback message is required." });
    }

    const FEEDBACK_FILE = "feedback_file.xlsx";
    const SHEET_NAME = "Feedback";
    const timestamp = new Date().toLocaleDateString();

    let data;

    if (fs.existsSync(FEEDBACK_FILE)) {
      const workbook = XLSX.readFile(FEEDBACK_FILE);
      const worksheet = workbook.Sheets[SHEET_NAME];
      if (!worksheet) {
        return res.status(500).json({ error: "Feedback sheet not found." });
      }

      data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      data = data.filter(
        (row, idx) =>
          idx === 0 ||
          (Array.isArray(row) &&
            row.some((cell) => cell && cell.toString().trim() !== ""))
      );

      if (
        !data[0] ||
        data[0][0] !== "Sl. No." ||
        data[0][1] !== "Feedback" ||
        data[0][2] !== "Date"
      ) {
        data = [["Sl. No.", "Feedback", "Date"]];
      }
    } else {
      data = [["Sl. No.", "Feedback", "Date"]];
    }

    data.push([data.length, message.trim(), timestamp]);

    const newWorksheet = XLSX.utils.aoa_to_sheet(data);
    const newWorkbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, SHEET_NAME);
    XLSX.writeFile(newWorkbook, FEEDBACK_FILE);

    res.status(200).json({ message: "✅ Feedback saved successfully." });
  } catch (error) {
    console.error("Error saving feedback:", error);
    res.status(500).json({ error: "Server error. Could not save feedback." });
  }
});

/** ✅ Start Server */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
