window.onload = () => {

    var canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
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
    text.text = "Hello World"

    container.addChild(image);
    container.addChild(text);
    container.draw(context);

};

interface Drawable {
    draw(context: CanvasRenderingContext2D);
}

class DisplayObject implements Drawable {
    x = 0;
    y = 0;
    scaleX = 1;
    scaleY = 1;
    alpha = 1;
    globalAlpha = 1;

    parent: DisplayObjectContainer;

    draw(context: CanvasRenderingContext2D) {
        if (this.parent) {
            this.globalAlpha = this.parent.globalAlpha * this.alpha;
        } else {
            this.globalAlpha = this.alpha;
        }
        context.globalAlpha = this.globalAlpha;
        this.render(context);
    }

    render(context: CanvasRenderingContext2D) { }
}

class DisplayObjectContainer extends DisplayObject {
    list: DisplayObject[] = [];

    render(context: CanvasRenderingContext2D) {
        for (let displayObject of this.list) {
            displayObject.draw(context);
        }
    }

    addChild(child: DisplayObject) {
        this.list.push(child);
        child.parent = this;
    }

}

class TextField extends DisplayObject {
    text = "";
    color = "";
    fontSize = 10;
    fontName = "";
    render(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        // context.globalAlpha = this.alpha;
        context.font = this.fontSize.toString() + "px " + this.fontName.toString();
        context.fillText(this.text, this.x, this.y + this.fontSize);

    }
}

class Bitmap extends DisplayObject {
    private image: HTMLImageElement = null;
    private isLoaded = false;
    constructor() {
        super();
        this.image = document.createElement("img");
    }
    private _src = "";
    set src(value: string) {
        this._src = value;
        this.isLoaded = false;
    }

    render(context: CanvasRenderingContext2D) {
        // context.globalAlpha = this.alpha;
        if (this.isLoaded) {
            context.drawImage(this.image, this.x, this.y, this.image.width * this.scaleX, this.image.height * this.scaleY);
        }
        else {
            this.image.src = this._src;
            this.image.onload = () => {
                context.drawImage(this.image, this.x, this.y, this.image.width * this.scaleX, this.image.height * this.scaleY);
                this.isLoaded = true;
            }
        }
    }
}



