var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
window.onload = function () {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var container = new DisplayObjectContainer();
    var image = new DrawBitmap();
    var text = new DrawText();
    container.addChild(image);
    container.addChild(text);
    container.draw(context);
};
var DisplayObjectContainer = (function () {
    function DisplayObjectContainer() {
        this.list = [];
    }
    DisplayObjectContainer.prototype.addChild = function (x) {
        this.list.push(x);
    };
    DisplayObjectContainer.prototype.draw = function (contextId) {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var element = _a[_i];
            element.draw(contextId);
        }
    };
    return DisplayObjectContainer;
}());
var DrawText = (function (_super) {
    __extends(DrawText, _super);
    function DrawText() {
        _super.apply(this, arguments);
    }
    DrawText.prototype.draw = function (contextId) {
        var text = new Text();
    };
    return DrawText;
}(DisplayObjectContainer));
var DrawBitmap = (function (_super) {
    __extends(DrawBitmap, _super);
    function DrawBitmap() {
        _super.apply(this, arguments);
    }
    DrawBitmap.prototype.draw = function (contextId) {
        var image = new Image();
        image.src = "captain.jpg";
        image.onload = function () {
            contextId.drawImage(image, 0, 0);
        };
    };
    return DrawBitmap;
}(DisplayObjectContainer));
//# sourceMappingURL=main.js.map