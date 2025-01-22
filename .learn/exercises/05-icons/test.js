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




describe('Icon layout test for Learnpack', () => {

    test('The "content-card" should contain a div with the class "icons"', () => {
      expect(html.includes('<div class="icons">')).toBe(true);
    });
  
    test('The "icons" div should contain a span with the class "share" and the correct icons', () => {
      expect(html.includes('<span class="share">')).toBe(true);
      expect(html.includes('<i class="fa fa-heart"></i>')).toBe(true);  // Like icon
      expect(html.includes('<i class="fa fa-comment"></i>')).toBe(true); // Comment icon
      expect(html.includes('<i class="fa fa-paper-plane"></i>')).toBe(true); // Send icon
    });
  
    test('The "icons" div should contain a span with the class "save" and the save icon', () => {
      expect(html.includes('<span class="save">')).toBe(true);
      expect(html.includes('<i class="fa fa-bookmark"></i>')).toBe(true);  // Save icon
    });
  
    test('CSS should apply Flexbox to align "share" and "save" sections', () => {
      const styles = findInCSS(css, '.icons');
      expect(styles).toContain('display: flex');
      expect(styles).toContain('justify-content: space-between');
    });
  
  });
  