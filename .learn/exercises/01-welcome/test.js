const fs = require('fs');
const path = require('path');

// path files
const filePath = path.join(__dirname, '../../../index.html');

// Path to check if there is a similar file (in case the student named it incorrectly)
const possibleFilePaths = [
  path.join(__dirname, '../../../style.css'),
  path.join(__dirname, '../../../styles.css')
];

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


test('The file should be named "styles.css"', () => {
  let fileFound = false;
  let fileName = '';

  // Check if the 'styles.css' file exists
  for (const filePath of possibleFilePaths) {
    if (fs.existsSync(filePath)) {
      fileFound = true;
      fileName = path.basename(filePath);
      break;
    }
  }

  // If the file does not exist
  if (!fileFound) {
    throw new Error('No valid CSS file found. Make sure to name it "styles.css" and place it in the correct location.');
  }

  // Check if the file has the correct name
  expect(fileName).toBe('styles.css');
});


//Add the tag link to the index.html file
test('Add the tag <link> to the index.html file', () => {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  const regex = /<link\s+rel\s*=\s*["']stylesheet["']\s+href\s*=\s*["'](\.\/styles\.css|styles\.css)["']\s*\/?>/;

  expect(content).toMatch(regex);
});
});
