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


describe('Post image tests in Learnpack', () => {
    test('There should be a div with the class "image"', () => {
      expect(html.includes('<div class="image">')).toBe(true);
    });
  
    test('The "image" div should contain an <img> tag with the class "post-image"', () => {
      const regex = /<img\s+[^>]*class=["']post-image["'][^>]*>/;
      const imageExists = regex.test(html);
      expect(imageExists).toBe(true);
    });
  
    test('CSS should ensure the image occupies 100% of the container’s width', () => {
      const styles = findInCSS(css, '.post-image');
      expect(styles).toContain('width: 100%');
    });
  });
  
