# `06` Add the likes section and post description

In this step, you will add the section that shows the number of likes and a brief description of the post.

![postcard-text](../../assets/postcard-text.png)

## 📝 Instructions

1. **Add a tag `div.post-content`** just below the closing `div.icons`.
2. **Add a `<p>` tag** inside the `div.post-content` to display the likes text. You can use this example text:

```html
<p>
    Liked by <strong>4GeeksAcademy</strong>, 
    <strong>html5</strong>, 
    <strong>Web</strong> and 
    <strong>100,000 others</strong>
</p>
```
3. **Add a second `<p>` tag** for the post description. Use a sample paragraph like "Lorem ipsum dolor sit amet...".

4. **Style both sections with CSS** using a readable font and an appropriate text size, and ensure there is enough space between the likes and the description. For this, you will need to create a selector for the paragraphs inside `.post-content` and give them the following properties:

```css
.post-content p {
    font-family: sans-serif;
    font-size: 14px;
}
```
