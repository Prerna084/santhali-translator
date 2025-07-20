require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Translate } = require('@google-cloud/translate').v2;
const fs = require("fs");
const XLSX = require("xlsx");

const app = express();
app.use(cors());
app.use(express.json());

const apiKey = process.env.GOOGLE_API_KEY;
const translate = new Translate({ key: apiKey });

app.post('/translate', async (req, res) => {
  const { text, target } = req.body;
  try {
    const [translation] = await translate.translate(text, target);
    res.json({ translation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Excel saving endpoint
app.post('/save-translation', (req, res) => {
  const { input, output, direction, updatedText } = req.body;
  const EXCEL_FILE = "translations.xlsx";

  // Always use the correct header
  let data;
  if (fs.existsSync(EXCEL_FILE)) {
    const workbook = XLSX.readFile(EXCEL_FILE);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    // Remove empty or invalid rows (keep header and rows with Language+Input)
    data = data.filter(
  (row, idx) =>
    idx === 0 || // keep header
    (Array.isArray(row) && row.some(cell => cell && cell.toString().trim() !== ""))
);
    // If the header is not correct, reset it
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

  // ... existing code ...
  // Try to find an existing row with the same input and language
  let found = false;
  const normDirection = direction ? direction.trim().toLowerCase() : "";
  const normInput = input ? input.trim() : "";

  for (let i = 1; i < data.length; i++) {
    const rowDirection = data[i][1] ? data[i][1].trim().toLowerCase() : "";
    const rowInput = data[i][2] ? data[i][2].trim() : "";
    if (rowDirection === normDirection && rowInput === normInput) {
      // If updatedText is provided, update only the Updated Text column
      if (updatedText !== undefined && updatedText !== null && updatedText !== "") {
        data[i][4] = updatedText;
      } else {
        // Otherwise, update the Output and clear Updated Text
        data[i][3] = output;
        data[i][4] = "";
      }
      found = true;
      break;
    }
  }
// ... existing code ...

  // Try to find an existing row with the same input and language
  
  // If not found, add a new row
  if (!found) {
    data.push([
      null, // We'll fill Sl. No. below
      direction,
      input,
      output,
      updatedText || ""
    ]);
  }

  // Recalculate serial numbers
  for (let i = 1; i < data.length; i++) {
    data[i][0] = i;
  }

  // Write back to Excel
  const newWorksheet = XLSX.utils.aoa_to_sheet(data);
  const newWorkbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, "Translations");
  XLSX.writeFile(newWorkbook, EXCEL_FILE);

  res.json({ success: true, message: "Translation saved/updated in Excel!" });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));