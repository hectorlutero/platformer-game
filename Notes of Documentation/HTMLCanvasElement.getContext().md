HTMLCanvasElement.getContext()

1. The method `HTMLCanvasElement.getContext()` returns a graphic in canvas or `null` if the element is not identified;

2. Thats the syntax:

```javascript
canvas.getContext(contextType, contextAttributes);
```

3. The method `HTMLCanvasElement.getContext()` returns a graphic and receives two parameters, **contextType** and **contextAttributes**, otherwise it returns `null`.

4. Parameter **contextType**, it's a **DOMString** that receives the identifier of the canvas context, there are four possible values, **"2d"**, **"webgl"**, **"webgl2**", **"bitmaprenderer"**, where 2D is for bidimensional render, webgl and webgl2 is for 3D and bitmaprenderer is for replace canvas with **ImageBitmap**.

5. The method `HTMLCanvasElement.getContext()` receives two parameters, **contextType** and **contextAttributes**, in contextType it can deal with 2d, 3d or bitmaprenderer, otherwise it returns `null`.

6. Parameter **contextAttributes**, are some attributes that you can set for each 2d or webgl (3d) contextTypes, regarding transparency, depths (3D) quality, performance, and behavior.

7. `getcontext()` deals with 2d, 3d or bitmap image renders as the contentType first parameter, in the second parameter contextAttributes, it deals or for 2d or for webgl (3d) attributes, regarding transparency, depths, quality, performance, and behavior.

8. HTMLCanvasElement.getContext() returns the following values: **CanvasRenderingContext2D**, **WebGLRenderingContext**, **WebGL2RenderingContext** and finally **ImageBitmapRenderingContext**, otherwise if the contextType doesn't match it returns `null`.
