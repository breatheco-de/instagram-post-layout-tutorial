# `05` Posicionamiento de la sección de iconos de interacción

En este paso, organizarás los íconos de interacción en el cuerpo del post, como los botones de "me gusta", "comentar", "enviar" y "guardar".

![content-card](../../assets/content-card-structure.png)


## Instrucciones 📝

- **Organiza los íconos en el HTML**: agrupa los íconos de "me gusta", "comentar" y "enviar" en un contenedor `<span>` o `<div>` con una clase específica, como `.share`, coloca el ícono de "guardar" en un contenedor separado, por ejemplo, un `<span>` o `<div>` con una clase como `.save`.

Ejemplo de estructura HTML: 

```html
  <div class="share">
    <i class="fa fa-heart"></i>  <!-- Ícono de me gusta -->
    <i class="fa fa-comment"></i>  <!-- Ícono de comentar -->
    <i class="fa fa-paper-plane"></i>  <!-- Ícono de enviar -->
  </div>
  <div class="save">
    <i class="fa fa-bookmark"></i>  <!-- Ícono de guardar -->
  </div>
```

- **Estiliza con Flexbox en CSS**: aplica `display: flex` a la clase `.content-card` para organizar los contenedores `.share` y `.save` en línea horizontal. Alinea los íconos con `justify-content: space-between` en `.content-card`. Asegurarte de que los íconos estén alineados verticalmente en el centro `align-items: center`.

- **Estiliza la sección de íconos**: asegúrate de que los íconos dentro de `.share` tengan un espacio uniforme entre ellos. Usa la propiedad `gap` para lograrlo.
Ajusta el tamaño de los íconos, por ejemplo, con `font-size: 24px`.
