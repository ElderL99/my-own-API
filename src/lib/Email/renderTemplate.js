import fs from "fs";
import path from "path";

export const renderTemplate = (templateName, variables = {}) => {
  try {
    const templatePath = path.resolve(`src/templates/${templateName}`);
    let html = fs.readFileSync(templatePath, "utf8");

    // Reemplazar {{variable}} en el html
    Object.keys(variables).forEach((key) => {
      html = html.replace(new RegExp(`{{${key}}}`, "g"), variables[key]);
    });

    return html;
  } catch (error) {
    console.error("❌ Error renderizando plantilla:", error);
    throw error;
  }
};
