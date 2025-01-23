# `05` Posicionamiento de la sección de iconos de interacción

En este paso, organizarás los íconos de interacción en el cuerpo del post, como los botones de "me gusta", "comentar", "enviar" y "guardar".

![content-card](../../assets/content-card-structure.png)


## 📝 Instrucciones 

1. **Organiza los íconos en el HTML**: Dentro del `<div class="content-card">` crearemos un `<div class="icons">`. Dentro de este div agruparemos los íconos de "me gusta", "comentar", "enviar" y "save".

2. Dentro del `<div class="icons">` crearemos 2 `<span>`. El primero con una clase específica, como `span.share` el cual contendrá los iconos "me gusta", "comentar" y "enviar".
3. Para el segundo `<span>` agregale la clase `.save` y en el contendremos el ícono de "guardar".

Se deberia ver asi: 

```html
<div class="icons">
  <span class="share">
    <i class="fa fa-heart"></i>  <!-- Ícono de me gusta -->
    <i class="fa fa-comment"></i>  <!-- Ícono de comentar -->
    <i class="fa fa-paper-plane"></i>  <!-- Ícono de enviar -->
  </span>
  <span class="save">
    <i class="fa fa-bookmark"></i>  <!-- Ícono de guardar -->
  </span>
</div>
```

4. **Estiliza con Flexbox en CSS**: Crea un selector para `content-card` y aplicale la propiedad `padding`.

5. Crea un selector para la clase `.icons`, aplicale `display: flex` y justificacion `justify-content: space-between` para organizar los contenedores `.share` y `.save`.  Asegurate de ajustar el tamaño de los íconos, por ejemplo, con `font-size: 24px`.

6. **Estiliza la sección de íconos**: Para la sección de iconos dentro de `.share` asegurate tengan un espacio uniforme entre ellos. Usa la propiedad `gap` para lograrlo.


