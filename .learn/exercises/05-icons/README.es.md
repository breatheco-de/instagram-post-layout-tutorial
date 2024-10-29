# `05` Posicionamiento de la sección de iconos de interacción

En este paso, organizarás los íconos de interacción en el cuerpo del post, como los botones de "me gusta", "comentar", "enviar" y "guardar".

![content-card](../../assets/content-card-structure.png)


## Instrucciones 📝

- **Organiza el posicionamiento de los íconos** dentro del del `div.content-card`, crea un `div.icons` y dentro de este fijate de agrupar los iconos en dos elementos:
    - **`span.share`**: Contiene los iconos "me gusta", "comentar", "enviar".  
    - **`span.save`**: Contiene el icono "save".

```html
    <i class="fa fa-heart"></i>  <!-- Like icon -->
    <i class="fa fa-comment"></i>  <!-- Comment icon -->
    <i class="fa fa-paper-plane"></i>  <!-- Send icon -->
    <i class="fa fa-bookmark"></i>  <!-- Save icon -->
```
- **Usa flexbox** para alinear los íconos de "me gusta", "comentar" y "enviar" a la izquierda, y el ícono de "guardar" a la derecha.
- **Estiliza la sección de íconos** con CSS para asegurar que estén bien alineados y espaciados, simulando la interfaz de Instagram.
