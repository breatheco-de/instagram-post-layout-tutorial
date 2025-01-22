const fs = require('fs');
const path = require('path');

// path files
const html = fs.readFileSync(path.resolve(__dirname, '../../../index.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, '../../../styles.css'), 'utf8');

// Auxiliary function to search for selectors within the CSS
const findInCSS = (cssContent, selector) => {
  const regex = new RegExp(`${selector}\\s*\\{([^}]*)\\}`, 'gm');
  const match = regex.exec(cssContent);
  return match ? match[1] : null;
};


describe('Post content structure and styling for Learnpack', () => {

  test('The <div> with class "post-content" should contain a paragraph with likes using <strong>', () => {
    const likesRegex = /<p>\s*Liked by\s*<strong>\s*4GeeksAcademy\s*<\/strong>,\s*<strong>\s*html5\s*<\/strong>,\s*<strong>\s*Web\s*<\/strong>\s*and\s*<strong>\s*100[,.]000 others\s*<\/strong>\s*<\/p>/i;

    expect(likesRegex.test(html)).toBe(true);
  });
  

  test('The <div> "post-content" should have a second paragraph that starts with "Lorem ipsum dolor"', () => {
    const descriptionRegex = /<p>\s*Lorem ipsum dolor/;
    expect(descriptionRegex.test(html)).toBe(true);
  });
  

  test('The CSS should apply a readable font and appropriate size to the paragraphs', () => {
    const styles = findInCSS(css, '.post-content p');
    expect(styles).toContain('font-family:');
    expect(styles).toContain('font-size:');
  });
});


