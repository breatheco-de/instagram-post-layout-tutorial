const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html'); // Asegúrate de que la ruta sea correcta

test('should contain the specified HTML structure', () => {
    const content = fs.readFileSync(filePath, 'utf-8');

    // Verifica que el contenido incluya la estructura HTML deseada, sin importar espacios y saltos de línea
    expect(content).toMatch(/<div class="card">\s*<div class="header-card"><\/div>\s*<div class="image"><\/div>\s*<div class="content-card"><\/div>\s*<\/div>/);
});
