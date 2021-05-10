class Polygon {
    constructor(x, y, r) {
      var options = {
          isStatic:false,
          'restitution':0.5,
          'friction':0.5,
          'density':1,
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.body=Bodies.circle(this.x,this.y,this.r/2,options)
      this.image=loadImage("polygon.png")
      
      World.add(world, this.body);
    }
    
    display(){
      var polygonpos =this.body.position;
      
      push();
      translate(polygonpos.x, polygonpos.y);
      ellipseMode(CENTER);
      stroke("white");
      fill("white");
      ellipse(0, 0, this.r, this.r);
      imageMode(CENTER);
	    image(this.image,0,0,55, 55,this.r/2)
      pop();
    }
  };