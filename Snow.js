class Snow {
    constructor(x, y) {
        var options = { density: 0.1, frictionAir: 0.1 };
        this.body = Bodies.circle(x, y, 20, options);
        this.x = x;
        this.y = y;
        this.radius = 20;
        this.image1 = loadImage("Images/snow4.webp");
        this.image2 = loadImage("Images/snow5.webp");
        World.add(world, this.body);
    }
    updatePos() {
        if (this.body.position.y > 600) {
            Matter.Body.setPosition(this.body, { x: random(0, 1000), y: random(-50, 0) });
        }
    }
    display(imageChosen) {
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        var img = imageChosen;
        if (img === "1") {
            image(this.image1, 0, 0, this.radius, this.radius);
        }
        else if (img === "2") {
            image(this.image2, 0, 0, this.radius, this.radius);
        }
        pop();
    }
}