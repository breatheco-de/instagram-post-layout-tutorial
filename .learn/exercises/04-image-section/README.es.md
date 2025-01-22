# `04` Agregar la imagen principal

En este paso, agregarás la imagen principal de tu post de Instagram. 

![image](../../assets/imagen-structure.png)

### Instrucciones

## Agregar la etiqueta de imagen

1. Dentro del `div.image`, coloca una etiqueta `<img>` para mostrar la imagen.
2. Usa la siguiente ruta para la imagen: `../../assets/img-postcard.png`.
3. El código de ejemplo debería verse así:

   ```html
   <img src="../.learn/assets/img-postcard.png" class="post-image" />
   ```

### Paso 2: Estilizar la imagen con CSS

1. Asegúrate de que la imagen se ajuste al diseño del post: utilizaa la clase `.post-image` para aplicar los estilos.

     ```css
     .post-image {
         width: 100%;
     }
     ```