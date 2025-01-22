# `04` Agregar la imagen principal

En este paso, agregarás la imagen principal de tu post de Instagram. 

![image](../../assets/imagen-structure.png)


## 📝 Instrucciones

1. Dentro del `div.image`, coloca una etiqueta `<img>` para mostrar la imagen.
2. Usa la siguiente ruta para la imagen: `../../assets/img-postcard.png`.
3. El código de ejemplo debería verse así:

   ```html
   <img src="../.learn/assets/img-postcard.png" class="post-image" />
   ```

4. **Estilizar la imagen con CSS.** Asegúrate de que la imagen se ajuste al diseño del post, utiliza la clase `.post-image` para aplicar los estilos.

     ```css
     .post-image {
         width: 100%;
     }
     ```