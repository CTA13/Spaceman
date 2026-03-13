const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

// Files to convert — add more entries here as you create new spec sheets
const files = [
  '6210-C.md',
  '6695-CL.md'
];

const css = fs.readFileSync('Style.css', 'utf8');

files.forEach(file => {
  const md = fs.readFileSync(file, 'utf8');
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${path.basename(file, '.md')}</title>
  <style>${css}</style>
</head>
<body class="markdown-body">
${marked(md)}
</body>
</html>`;

  const outFile = file.replace('.md', '.html');
  fs.writeFileSync(outFile, html);
  console.log(`✓ Built ${outFile}`);
});