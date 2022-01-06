let fs = require("fs");

fs.writeFile("newfile.txt", "Hello world!", (err) => {
  if (err) throw err;
  console.log("File is created successfully.");
});