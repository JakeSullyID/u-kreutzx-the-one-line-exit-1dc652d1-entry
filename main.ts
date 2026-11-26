import * as fs from 'fs';
import * as path from 'path';

// This resignation leverages developer folklore by transforming a mundane code review into an ominous adventure hazard.
// This punchline delivers high quotability and surprise by subverting standard resignation tropes with dark fantasy imagery.
// Adding the Jira approval requirement subverts the epic hermit trope with mundane corporate bureaucracy for maximum comedic deflation.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const line = "Effective immediately, I resign to become the bearded hermit warning travelers not to enter the code review without Jira approval.";
fs.writeFileSync(path.join(outputDir, 'entry.txt'), line, 'utf-8');
