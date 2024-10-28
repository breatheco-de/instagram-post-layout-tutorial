const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../../../app/index.html'); 

test('should contain the specified HTML structure', () => {
    const content = fs.readFileSync(filePath, 'utf-8');

   
    expect(content).toMatch(/<div class="card">\s*<div class="header-card"><\/div>\s*<div class="image"><\/div>\s*<div class="content-card"><\/div>\s*<\/div>/);
});
