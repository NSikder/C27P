class Box{
    constructor(x, y, width, height) {
      var options = {
          'friction':1.0,
          'isStatic':true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      rectMode(CENTER);
      fill(200,200,200);
      rect(pos.x,pos.y, this.width, this.height);
      pop();
    }
  };
  