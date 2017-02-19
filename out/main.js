var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
window.onload = function () {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var container = new DisplayObjectContainer();
    container.alpha = 0;
    var image = new Bitmap();
    image.alpha = 0.5;
    image.src = "captain.jpg";
    image.x = 100;
    image.y = 100;
    var text = new TextField();
    text.x = 50;
    text.y = 50;
    text.alpha = 0.5;
    text.color = "#FF0000";
    text.fontName = "Arial";
    text.fontSize = 20;
    text.text = "Hello World";
    container.addChild(image);
    container.addChild(text);
    container.draw(context);
};
var DisplayObject = (function () {
    function DisplayObject() {
        this.x = 0;
        this.y = 0;
        this.scaleX = 1;
        this.scaleY = 1;
        this.alpha = 1;
        this.globalAlpha = 1;
    }
    DisplayObject.prototype.draw = function (context) {
        if (this.parent) {
            this.globalAlpha = this.parent.globalAlpha * this.alpha;
        }
        else {
            this.globalAlpha = this.alpha;
        }
        context.globalAlpha = this.globalAlpha;
        this.render(context);
    };
    DisplayObject.prototype.render = function (context) { };
    return DisplayObject;
}());
var DisplayObjectContainer = (function (_super) {
    __extends(DisplayObjectContainer, _super);
    function DisplayObjectContainer() {
        _super.apply(this, arguments);
        this.list = [];
    }
    DisplayObjectContainer.prototype.render = function (context) {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var displayObject = _a[_i];
            displayObject.draw(context);
        }
    };
    DisplayObjectContainer.prototype.addChild = function (child) {
        this.list.push(child);
        child.parent = this;
    };
    return DisplayObjectContainer;
}(DisplayObject));
var TextField = (function (_super) {
    __extends(TextField, _super);
    function TextField() {
        _super.apply(this, arguments);
        this.text = "";
        this.color = "";
        this.fontSize = 10;
        this.fontName = "";
    }
    TextField.prototype.render = function (context) {
        context.fillStyle = this.color;
        // context.globalAlpha = this.alpha;
        context.font = this.fontSize.toString() + "px " + this.fontName.toString();
        context.fillText(this.text, this.x, this.y + this.fontSize);
    };
    return TextField;
}(DisplayObject));
var Bitmap = (function (_super) {
    __extends(Bitmap, _super);
    function Bitmap() {
        _super.call(this);
        this.image = null;
        this.isLoaded = false;
        this._src = "";
        this.image = document.createElement("img");
    }
    Object.defineProperty(Bitmap.prototype, "src", {
        set: function (value) {
            this._src = value;
            this.isLoaded = false;
        },
        enumerable: true,
        configurable: true
    });
    Bitmap.prototype.render = function (context) {
        var _this = this;
        // context.globalAlpha = this.alpha;
        if (this.isLoaded) {
            context.drawImage(this.image, this.x, this.y, this.image.width * this.scaleX, this.image.height * this.scaleY);
        }
        else {
            this.image.src = this._src;
            this.image.onload = function () {
                context.drawImage(_this.image, _this.x, _this.y, _this.image.width * _this.scaleX, _this.image.height * _this.scaleY);
                _this.isLoaded = true;
            };
        }
    };
    return Bitmap;
}(DisplayObject));
//# sourceMappingURL=main.js.map