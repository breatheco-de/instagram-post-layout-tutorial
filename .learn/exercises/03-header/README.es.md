# `03` Crear el encabezado del post

Construye la sección de encabezado de tu post de Instagram.

![header-post](../../assets/header-post.png)

En esta sección, deberás usar flexbox para alinear el avatar y el nombre del usuario a la izquierda y las opciones del post a la derecha. Asegúrate de que todo esté bien alineado horizontalmente.

### Instrucciones 📝

### 1. Edita el archivo HTML
Dentro del `<div class="header-card">`, agrega estos dos elementos principales:  

**a. `span.html-icon`:**
- Crea un `<span>` con la clase `html-icon`.  
- Dentro de este `<span>` incluye: una etiqueta `<i>` para el ícono HTML5 (usa la clase `fa fa-html5`) y un texto que contenga:  `HTML5` y  `Rigoberto`.  

**b. `span.menu`:**
- Crea otro `<span>` con la clase `menu`, dentro de este `<span>` agrega el ícono de menú usando Font Awesome (usa el ícono `fa fa-ellipsis-v`).  
- **IMPORTANTE**: Asegúrate de que la librería de **Font Awesome** esté incluida en tu archivo HTML. Puedes hacerlo agregando este enlace en la sección `<head>`:  

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
```
       
## Estiliza con CSS

Ajusta el diseño para que sea claro, ordenado y atractivo. Sigue estas sugerencias:

### Para `.header-card`:
- Usa `display: flex` para organizar los elementos en línea horizontal.
- Aplica `justify-content: space-between` para que los elementos estén separados hacia los extremos izquierdo y derecho.
- Agrega `align-items: center` para que todo quede alineado verticalmente al centro.

### Para `.html-icon`:
- Usa `display: flex` para que el ícono y el texto estén en línea.
- Agrega `gap: 8px` para crear un pequeño espacio entre el ícono y el texto.
- Usa `font-size: 24px` para que el ícono sea más visible.

💡 **PISTA:** Si se te dificulta el posicionamiento de elementos a través de flexbox, quizás quieras practicar antes con la siguiente propuesta lúdica [Flexbox Froggy](https://flexboxfroggy.com/#es).