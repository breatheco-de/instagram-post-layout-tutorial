const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../../../app/index.html'); 

test('should contain a div with class "card"', () => {
    const content = fs.readFileSync(filePath, 'utf-8');
    expect(content).toMatch(/<div\s+class\s*=\s*"card"\s*>/);
});

test('should contain a div with class "header-card"', () => {
    const content = fs.readFileSync(filePath, 'utf-8');
    expect(content).toMatch(/<div\s+class\s*=\s*"header-card"\s*>\s*<\/div>/);
});

test('should contain a div with class "image"', () => {
    const content = fs.readFileSync(filePath, 'utf-8');
    expect(content).toMatch(/<div\s+class\s*=\s*"image"\s*>\s*<\/div>/);
});

test('should contain a div with class "content-card"', () => {
    const content = fs.readFileSync(filePath, 'utf-8');
    expect(content).toMatch(/<div\s+class\s*=\s*"content-card"\s*>\s*<\/div>/);
});

