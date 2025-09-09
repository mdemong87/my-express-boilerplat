const dotenv = require("dotenv");
const path = require("path");

const environment = process.env.NODE_ENV || "development";
const envPath = path.join(process.cwd(), `.env.${environment}`);
dotenv.config({ path: envPath });

module.exports = { environment };
