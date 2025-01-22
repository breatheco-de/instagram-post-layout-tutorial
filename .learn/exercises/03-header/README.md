# `03` Create the post header

Build the header section of your Instagram post.

![header-post](../../assets/header-post.png)

In this section, you should use flexbox to align the avatar and username to the left and the post options to the right. Make sure everything is well aligned horizontally.

### Instructions 📝

1. In the `index.html` file, inside the `<div class="header-card">`, add these two main elements:

- `div.details-container`: Create a `<div>` with the class `user-details`. Inside this `<div>`, include an `<i>` tag for the "HTML5" icon (use the class `fa fa-html5`).

Then create another `<div>` with the class `user-details` and place the texts "HTML5" and "Rigoberto" inside it. It should look like this:

```html
<div class="details-container">
    <i class="fa fa-html5"></i>
    <div class="user-details">
        <span>HTML5</span>
        <span>Rigoberto</span>
    </div>
</div>
```

- `div.menu`: Below the `div.details-container`, create another `<div>` with the class `menu`, and inside this `<div>`, add the "menu" icon using Font Awesome (use the icon `fa fa-ellipsis-v`).

💡 Make sure the **Font Awesome** library is included in your HTML file. You can do this by adding this link in the `<head>` section:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
```

2. **Style with CSS**. Adjust the design to be clear, organized, and attractive. Follow these suggestions:

**For `.header-card`**:
- Use `display: flex` to organize the elements in a horizontal line.
- Apply `justify-content: space-between` so that the elements are separated towards the left and right ends.
- Add `align-items: center` to vertically align everything in the center.
- Don't forget `padding: 10px`.

**For `.details-container`:**
- Use `display: flex` so that the icon and text are in a line.
- Add `gap: 8px` to create a small space between the icon and the text.

**For `.user-details`:**
- Use `display: flex` so that the icon and text are in a line.
- Add `flex-direction: column` so that the elements are placed one below the other.

**As an extra**
- Create selectors for the HTML and ellipsis icons and apply `font-size: 30px` to make both more visible.
- Create a selector for `body` and give it a black background color.
- Create a selector for the `div.card` element and give it a white background color, a width of 35%, and `margin: auto` to center it automatically.

### 💡 HINT

If you find it difficult to position elements using flexbox, you might want to practice first with the following fun proposal [Flexbox Froggy](https://flexboxfroggy.com/#en).
