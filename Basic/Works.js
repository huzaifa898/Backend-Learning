// blocking 
const fs = require("fs");const fs = require("fs");
try {
  const result = fs.readFileSync("Contact.txt", "utf-8");
  console.log(result);
} catch (error) {
  console.error("Error reading file:", error);
}
const result = fs.readFileSync("Contact.txt" , "utf-8")
cobsole.log(result)  