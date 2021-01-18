class Arrow {
    constructor(x, y, width, height) {
      var options = {
        isStatic: false,
        restitution: 1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("download.png");
      World.add(world, this.body);
    }
  
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      //rotate(angle);
      //ellipseMode(RADIUS);
      //ellipse(0, 0, this.width, this.height);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }