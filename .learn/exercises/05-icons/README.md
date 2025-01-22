# `05` Positioning the Interaction Icons Section

In this step, you will organize the interaction icons in the body of the post, such as the "like", "comment", "send", and "save" buttons.

![content-card](../../assets/content-card-structure.png)

## Instructions 📝

- **Organize the icons in the HTML**: group the "like", "comment", and "send" icons in a `<span>` or `<div>` container with a specific class, such as `.share`, and place the "save" icon in a separate container, for example, a `<span>` or `<div>` with a class like `.save`.

Example HTML structure:

```html
  <div class="share">
    <i class="fa fa-heart"></i>  <!-- Like icon -->
    <i class="fa fa-comment"></i>  <!-- Comment icon -->
    <i class="fa fa-paper-plane"></i>  <!-- Send icon -->
  </div>
  <div class="save">
    <i class="fa fa-bookmark"></i>  <!-- Save icon -->
  </div>
```

- **Style with Flexbox in CSS**: apply `display: flex` to the `.content-card` class to organize the `.share` and `.save` containers in a horizontal line. Align the icons with `justify-content: space-between` in `.content-card`. Ensure the icons are vertically centered with `align-items: center`.

- **Style the icons section**: make sure the icons inside `.share` have uniform spacing between them. Use the `gap` property to achieve this. Adjust the size of the icons, for example, with `font-size: 24px`.
