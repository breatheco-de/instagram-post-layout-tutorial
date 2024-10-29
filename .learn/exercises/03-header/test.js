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

describe('Header tests for Learnpack', () => {
  test('The header should contain a span with the class "user-avatar" and an <img>', () => {
    expect(html.includes('<span class="user-avatar">')).toBe(true);
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





// describe('Test del header para Learnpack', () => {


//   test('El header debe contener un span con clase "user-avatar" y un "img"', () => {
//     expect(html.includes('<span class="user-avatar">')).toBe(true);
//     expect(html.includes('<i class="fa fa-html5">')).toBe(true);
//   });

//   test('El header debe contener un span con clase "menu" y un icono de Font Awesome', () => {
//     expect(html.includes('<span class="menu">')).toBe(true);
//     expect(html.includes('<i class="fas fa-ellipsis-v"></i>')).toBe(true);
//   });

//   test('El CSS debe aplicar display: flex al "header-card"', () => {
//     const styles = findInCSS(css, '.header-card');
//     expect(styles).toContain('display: flex');
//   });

//   test('El CSS debe aplicar justify-content: space-between al "header-card"', () => {
//     const styles = findInCSS(css, '.header-card');
//     expect(styles).toContain('justify-content: space-between');
//   });

//   test('El CSS debe aplicar display: flex al "user-avatar" y alinear los elementos al centro', () => {
//     const styles = findInCSS(css, '.user-avatar');
//     expect(styles).toContain('display: flex');
//     expect(styles).toContain('align-items: center');
//   });

//   test('El icono del menú debe tener font-size: 24px', () => {
//     const styles = findInCSS(css, '.menu i');
//     expect(styles).toContain('font-size: 24px');
//   });
// });
