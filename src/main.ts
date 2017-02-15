class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

window.onload = () => {

    var canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    var context = canvas.getContext("2d");
    var container = new DisplayObjectContainer();
    var image = new DrawBitmap();
    var text = new DrawText();
    container.addChild(image);
    container.addChild(text);
    container.draw(context);

};

interface Drawable {
    draw(contextId, x: number, y: number);
}

class DisplayObjectContainer implements Drawable {
    list = [];
    addChild(x) {
        this.list.push(x);
    }
    draw(contextId) {
        for (let element of this.list) {
            element.draw(contextId);
        }
    }
}

class DrawText extends DisplayObjectContainer {
    draw(contextId) {
        var text = new Text();

    }
}

class DrawBitmap extends DisplayObjectContainer {

    draw(contextId) {
        var image = new Image();
        image.src = "captain.jpg";
        image.onload = () => {
            contextId.drawImage(image, 0, 0);
        }

    }
}



