# `06` Añadir la sección de likes y la descripción del post

En este paso, añadirás la sección que muestra la cantidad de likes y una breve descripción del post.

![postcard-text](../../assets/postcard-text.png)

## 📝 Instrucciones 

1. **Agrega una etiqueta `div.post-content`** justo debajo del cierre del `div.icons`. 
2. **Agrega una etiqueta `<p>`** dentro del `div.post-content` para mostrar el texto de los likes. Puedes utilizar este texto de ejemplo: 

```html
<p>
    Liked by <strong>4GeeksAcademy</strong>, 
    <strong>html5</strong>, 
    <strong>Web</strong> and 
    <strong>100.000 others</strong>
</p>
```
3. **Agrega una segunda etiqueta `<p>`** para la descripción del post. Usa un párrafo de ejemplo como "Lorem ipsum dolor sit amet...".

4. **Estiliza ambas secciones con CSS** usa una fuente legible y un tamaño adecuado para el texto y asegúrate de que haya espacio suficiente entre los likes y la descripción. Para esto tendras que crear un selector para los párrafo dentro de `.post-content` y deberás darle las siguientes propiedades:

```html

.post-content p {
    font-family: sans-serif;
    font-size: 14px;
}
```