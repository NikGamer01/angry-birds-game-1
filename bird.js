class Bird {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      push ()
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      rectMode(CENTER);
      fill("yellow");
      stroke("pink");
      strokeWeight(5);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
  