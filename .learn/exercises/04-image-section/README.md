# `04` Add the main image

In this step, you will add the main image to your Instagram post.

![image](../../assets/imagen-structure.png)

### Instructions

## Add the image tag

1. Inside the `div.image`, place an `<img>` tag to display the image.
2. Use the following path for the image: `../../assets/img-postcard.png`.
3. The example code should look like this:

    ```html
    <img src="../.learn/assets/img-postcard.png" class="post-image" />
    ```

### Step 2: Style the image with CSS

1. Make sure the image fits the design of the post: use the `.post-image` class to apply the styles.

      ```css
      .post-image {
            width: 100%;
      }
      ```