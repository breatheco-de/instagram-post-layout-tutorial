const fs = require('fs');
const path = require('path');

// path file index.html
const filePath = path.join(__dirname, '../../../index.html'); 

describe('Initial HTML Setup', () => {

  test('there should be an index.html file in the root of the project', () => {
    expect(fs.existsSync(filePath)).toBe(true);
  });


  test('Add basic HTML structure to the index.html file', () => {
    const content = fs.readFileSync(filePath, 'utf-8');

   // Check the basic structure regardless of spaces or line breaks
    expect(content).toMatch(/<!DOCTYPE html>\s*<html[^>]*>\s*<head>/i);
    expect(content).toMatch(/<meta charset=["']UTF-8["']\s*\/?>/i);
    expect(content).toMatch(/<meta name=["']viewport["'][^>]*>/i);
    expect(content).toMatch(/<title>.*<\/title>/i);
    expect(content).toMatch(/<body>\s*<\/body>\s*<\/html>/i);
});

test('Add link to styles.css, ./styles.css, or style.css', () => {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Modify the regex to include "style.css"
  const regex = /<link rel="stylesheet" href="(\.\/styles\.css|styles\.css|style\.css)">/;
  expect(content).toMatch(regex);
});
});
