# platformer-game

# Drawing an object on screen

To draw on canvas, you need to select the canvas element, and get the context.

```javascript
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
```

After set the size of the canvas screen through properties width and height.

```javascript
canvas.width = 1024; // Mereley example values
canvas.height = 576;
```

then we can draw whatever we want, using properties like fillStyle

```javascript
context.fillStyle = "red";
context.fillRect(0, 0, 100, 100);
```

fillStyle

# Gravity system
