# `03` Crear el encabezado del post

Construye la sección de encabezado de tu post de Instagram. En esta sección, deberás usar flexbox para alinear el icono de HTML y el nombre de Rigoberto a la izquierda mientras que las opciones del post iran a la derecha. Asegúrate de que todo esté bien alineado horizontalmente, como lo muestra la imagen.

![header-post](../../assets/header-post.png)


## 📝 Instrucciones

1. En el archivo `index.html` dentro del `<div class="header-card">`, agrega estos dos elementos principales:  

- `div.details-container`: Crea un `<div>` con la clase `user-details`. Dentro de este `<div>` incluye una etiqueta `<i>` para el ícono "HTML5" (usa la clase `fa fa-html5`).

Luego crea otro  `<div>` con la clase `user-details` y colocale dentro los textos "HTML5" y  "Rigoberto". Al finalizar se deberia ver asi:

```html
<div class="details-container">
	<i class="fa fa-html5"></i>
	<div class="user-details">
		<span>HTML5</span>
		<span>Rigoberto</span>
	</div>
</div>
```

- `div.menu`: Debajo del `div.details-container` crea otro `<div>` con la clase `menu`, dentro de este `<div>` agrega el ícono de "menú" usando Font Awesome (usa el ícono `fa fa-ellipsis-v`).  

💡 Asegúrate de que la librería de **Font Awesome** esté incluida en tu archivo HTML. Puedes hacerlo agregando este enlace en la sección `<head>`:  

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
```
       
2. **Estiliza con CSS**. Ajusta el diseño para que sea claro, ordenado y atractivo. Sigue estas sugerencias:

**Para `.header-card`**:
- Usa `display: flex` para organizar los elementos en línea horizontal.
- Aplica `justify-content: space-between` para que los elementos estén separados hacia los extremos izquierdo y derecho.
- Agrega `align-items: center` para que todo quede alineado verticalmente al centro.
- No te olvides del `padding: 10px`

**Para `.details-container`:**
- Usa `display: flex` para que el ícono y el texto estén en línea.
- Agrega `gap: 8px` para crear un pequeño espacio entre el ícono y el texto.

**Para `.user-details`:**
- Usa `display: flex` para que el ícono y el texto estén en línea.
- Agrega `flex-direction: column` para que los elementos se coloquen uno debajo del otro.


**Como extra**
- Crea selectores para el icono HTML y elipsis y aplicale un `font-size: 30px` para que ambos sean más visibles.
- Crea un selector para `body` y dale un color de fondo negro.
- Crea un selector del elemento `div.card` y dale un color de fondo blanco, un ancho de 35% y margen `auto` para que se centre de forma automatica.

### 💡 PISTA

 Si se te dificulta el posicionamiento de elementos a través de flexbox, quizás quieras practicar antes con la siguiente propuesta lúdica [Flexbox Froggy](https://flexboxfroggy.com/#es).