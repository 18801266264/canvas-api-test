
// engine.Ticker.getInstance().register((deltaTime) => {
//     console.log("aaa")
//     bitmap.x += 1;
// });

var canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
var stage = engine.run(canvas);

var container = new engine.DisplayObjectContainer();
container.alpha = 1;
container.x = 50;
container.touchEnabled = true;

var image = new engine.Bitmap();
image.alpha = 0.5;
image.src = "captain.jpg";
image.scaleX = 1;
image.scaleY = 1;
image.x = 50;
image.y = 50;
image.touchEnabled = true;

var text = new engine.TextField();
text.x = 50;
text.y = 50;
text.scaleY = 1;
text.alpha = 0.5;
text.color = "#FF0000";
text.fontName = "Arial";
text.fontSize = 20;
text.text = "Hello World";

container.addChild(image);
container.addChild(text);

stage.addChild(container);

var imageY = image.y;

// image.addEventListener("mousedown", (e) => {
//     console.log("image");
// }, false)
image.addEventListener("mousemove", (e) => {
    image.y += e.movementY;
    console.log(e.movementY);
}, false)

text.addEventListener("mousedown", (e) => {
    console.log("text");
}, false)
container.addEventListener("mousedown", (e) => {
    console.log("container");
}, false)

