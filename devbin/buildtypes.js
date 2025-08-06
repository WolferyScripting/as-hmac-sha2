import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { fileURLToPath } from "url";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(dirname, '../');
const files = ["sha256", "sha512", "utils"];
exec(`npx tsc assembly/{${files.join(",")}}.ts --declaration --emitDeclarationOnly --outDir build/types`, {
	cwd: rootDir,
}, (error, stdout, stderr) => {
	for (const file of files) {
        // Read file into a string
        let content = fs.readFileSync(path.join(rootDir, 'build', 'types', `${file}.d.ts`), 'utf8');

        // Modify file contents
        content = content
            .replace(/^import \{.*\n/gm, "")      // (delete the line)
            .replace(/^export \{.*\n/gm, "")      // (delete the line)
            .replace(/^\s*export \{\};\n/gm, "")  // (delete lines with just `export {};`)
            .replace(/^(\s*)export /gm, "$1");     // (remove the 'export' word)

        // Replace spaces with tabs
        let lastContent = "";
        while (content != lastContent) {
            lastContent = content;
            content = content.replace(/^(\t*) {4}/gm, "$1\t");
        }

        const destFile = path.join(rootDir, 'assembly', 'types', 'hmacsha2', `${file}.d.ts`);

        fs.writeFileSync(destFile, content, 'utf-8');
    }

	console.log("Completed!");
});
