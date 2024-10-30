const fs = require('fs');
const path = require('path');

// path file index.html
const appPath = path.join(__dirname, '../../../app');
const filePath = path.join(__dirname, '../../../app/index.html'); 

describe('Initial HTML Setup', () => {

  test('should create the app folder', () => {
    expect(fs.existsSync(appPath)).toBe(true);
  });

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
  
  // Verify that the link to the CSS is exactly './styles.css' or 'styles.css'
  const regex = /<link rel="stylesheet" href="(\.\/styles\.css|styles\.css)">/;
  expect(content).toMatch(regex);
});
});
