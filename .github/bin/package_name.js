#!/usr/bin/env node
try {
  const prefix = process.argv[2] ? process.argv[2] : "";
  if (prefix) {
    const fileName = "package.json";
    const package = JSON.parse(fs.readFileSync(fileName).toString());
    fs.writeFileSync(
      fileName,
      JSON.stringify({ ...package, name: package.name + prefix })
    );
  }
} catch {
  console.error("Can't access package.json");
}
