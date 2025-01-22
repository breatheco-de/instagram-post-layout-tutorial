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

describe('Header tests for Learnpack', () => {
  test('The header should contain a span with the class "html-icon" and an <img>', () => {
    expect(html.includes('<span class="html-icon">')).toBe(true);
    expect(html.includes('<i class="fa fa-html5">')).toBe(true);
  });

  test('The header should contain a span with the class "menu" and a Font Awesome icon', () => {
    expect(html.includes('<span class="menu">')).toBe(true);
    expect(html.includes('<i class="fas fa-ellipsis-v"></i>')).toBe(true);
  });

  test('The CSS should apply display: flex to the "header-card"', () => {
    const styles = findInCSS(css, '.header-card');
    expect(styles).toContain('display: flex');
  });

  test('The CSS should apply justify-content: space-between to the "header-card"', () => {
    const styles = findInCSS(css, '.header-card');
    expect(styles).toContain('justify-content: space-between');
  });

  test('The CSS should apply display: flex to the "user-avatar" and align elements to the center', () => {
    const styles = findInCSS(css, '.user-avatar');
    expect(styles).toContain('display: flex');
    expect(styles).toContain('align-items: center');
  });

  test('The menu icon should have a font-size of 24px', () => {
    const styles = findInCSS(css, '.menu i');
    expect(styles).toContain('font-size: 24px');
  });
});

