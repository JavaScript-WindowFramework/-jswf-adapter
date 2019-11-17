#!/usr/bin/env node
const fs = require("fs");
try {
  const prefix = process.argv[2] ? process.argv[2] : "";
  if (prefix) {
    const fileName = "package.json";
    const package = JSON.parse(fs.readFileSync(fileName).toString());
    fs.writeFileSync(
      fileName,
      JSON.stringify(
        { ...package, version: package.version + prefix },
        undefined,
        "  "
      )
    );
  }
} catch (e) {
  console.error(e);
  process.exit(-1);
}
