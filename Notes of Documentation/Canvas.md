Canvas API

1. Canvas API is used to draw manipulate in real time graphics using javascript via HTML Element <canvas>.

2. Canvas API is focused in 2D graphics, but WebGL API also uses <canvas> to draw 2D and 3D graphics accelarated by hardware.

3. Canvas API it's a tool to create 2D and 3D graphics (by WebGL) through HTML element <canvas>

4. In this example you can draw a green rectangle on the screen:

```javascript
const canvas = document.querySelector("canvas"); // selet element
const ctx = canvas.getContext("2d"); // set context to 2d

ctx.fillStyle = "green"; //give a green color to the new element
ctx.fillRect(10, 10, 150, 100); // make a rectangle and set x and y properties and 150 width and 100 height.
```

Where you select canvas element, set the context to 2D graphics, give a color green through the method fillStyle, and draw a rectangle using the method fillRect, on the positions: x axis, 10, y axis, 10, with a width of 150 pixels and 100 pixels height.

5. Canvas API can draw 2d and 3d elements on a HTML document, in the example, we selected the canvas element, set a context to 2d graphics and drew a green rectangle of 150px width and 100px height on the screen.
