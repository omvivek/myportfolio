import fs from "fs";
import path from "path";

// ✅ Fill your dynamic data here
const data = {
  projectName: "My Portfolio Website",
  projectDescription: "A personal portfolio website built using React + Vite to showcase my work and skills.",
  liveDemoLink: "https://your-portfolio-link.com",
  authorName: "omvivek",
  githubUsername: "omvivek",
};

// ✅ Auto-generate folder structure
function getFolderTree(dir, indent = "") {
  const items = fs.readdirSync(dir);
  let output = "";

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stats = fs.statSync(fullPath);

    if (item === "node_modules" || item === ".git") continue;

    output += indent + "- " + item + "\n";

    if (stats.isDirectory()) {
      output += getFolderTree(fullPath, indent + "  ");
    }
  }

  return output;
}

data.folderStructure = getFolderTree("./src");

// ✅ Read template
let template = fs.readFileSync("README_TEMPLATE.md", "utf8");

// ✅ Replace placeholders
for (const [key, value] of Object.entries(data)) {
  template = template.replace(`{{${key}}}`, value);
}

// ✅ Write final README.md
fs.writeFileSync("README.md", template);

console.log("✅ README.md updated successfully!");
