class Paper {
    constructor(x, y, r, w, h) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0,
          density:1.2
      }
      this.body=Bodies.circle(this.x, this.y, (20-20)/2, options)
      this.x = x;
      this.y = y;
      this.r = r;
      this.w=w;
      this.h=h;

      this.image= loadImage("paper.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      //strokeWeight(4);
      //stroke("black");
      //fill(255);
      ellipse(0,0,20,20);
      pop();
    }
  };
  