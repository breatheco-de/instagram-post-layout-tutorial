const fs = require('fs');
const path = require('path');

// Ruta del archivo index.html
const filePath = path.join(__dirname, 'index.html');

describe('Initial HTML Setup', () => {
  test('should create index.html file', () => {
    expect(fs.existsSync(filePath)).toBe(true);
  });


  test('should contain basic HTML structure', () => {
    const content = fs.readFileSync(filePath, 'utf-8');

   // Check the basic structure regardless of spaces or line breaks
    expect(content).toMatch(/<!DOCTYPE html>\s*<html[^>]*>\s*<head>/i);
    expect(content).toMatch(/<meta charset=["']UTF-8["']\s*\/?>/i);
    expect(content).toMatch(/<meta name=["']viewport["'][^>]*>/i);
    expect(content).toMatch(/<title>.*<\/title>/i);
    expect(content).toMatch(/<body>\s*<\/body>\s*<\/html>/i);
});


test('should link to styles.css or ./styles.css', () => {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Verifica que el enlace al CSS sea exactamente './styles.css' o 'styles.css'
  const regex = /<link rel="stylesheet" href="(\.\/styles\.css|styles\.css)">/;
  expect(content).toMatch(regex);
});
});
