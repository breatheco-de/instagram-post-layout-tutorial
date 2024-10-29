const fs = require('fs');
const path = require('path');

// path files
const html = fs.readFileSync(path.resolve(__dirname, '../../../app/index.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, '../../../app/styles.css'), 'utf8');

// Auxiliary function to search for selectors within the CSS
const findInCSS = (cssContent, selector) => {
  const regex = new RegExp(`${selector}\\s*\\{([^}]*)\\}`, 'gm');
  const match = regex.exec(cssContent);
  return match ? match[1] : null;
};


describe('Post content structure and styling for Learnpack', () => {

  test('El <div> con clase "post-content" debe contener un párrafo con los likes usando <strong>', () => {
    const likesRegex = /<p>\s*Liked by\s*<strong>4GeeksAcademy<\/strong>,\s*<strong>html5<\/strong>,\s*<strong>Web<\/strong>\s*and\s*<strong>100\.000 others<\/strong>\s*<\/p>/;
    expect(likesRegex.test(html)).toBe(true);
  });
  

  test('El <div> "post-content" debe tener un segundo párrafo que comience con "Lorem ipsum dolor"', () => {
    const descriptionRegex = /<p>\s*Lorem ipsum dolor/;
    expect(descriptionRegex.test(html)).toBe(true);
  });
  

  test('El CSS debe aplicar una fuente legible y tamaño adecuado a los párrafos', () => {
    const styles = findInCSS(css, '.post-content p');
    expect(styles).toContain('font-family:');
    expect(styles).toContain('font-size:');
  });
});


