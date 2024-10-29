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

describe('Test de la carta en Learnpack', () => {
    test('La carta debe tener un ancho de 35%', () => {
      const cardStyles = findInCSS(css, '.card');
      expect(cardStyles).toContain('width: 35%');
    });
  
    test('La carta debe estar centrada usando margin: auto', () => {
      const cardStyles = findInCSS(css, '.card');
      expect(cardStyles).toContain('margin: auto');
    });
  
    test('La carta debe tener un color de fondo blanco', () => {
      const cardStyles = findInCSS(css, '.card');
      expect(cardStyles).toContain('background-color: white');
    });
  
    test('El body debe tener un color de fondo negro', () => {
      const bodyStyles = findInCSS(css, 'body');
      expect(bodyStyles).toContain('background-color: black');
    });
  
    test('El <div class="content-card"> debe tener padding aplicado', () => {
      const cardStyles = findInCSS(css, '.content-card');
      expect(cardStyles).toContain('padding');
    });
  
    test('La imagen principal debe tener width: 100%', () => {
      const imageStyles = findInCSS(css, '.post-image');
      expect(imageStyles).toContain('width: 100%');
    });
  });
  


