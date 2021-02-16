class Ground {

    constructor (x,y,width,height){

        var otions = {
            isStatic : true,
            'restitution': 0,
            'friction' : 0,
            'density' : 1,
        }
        this.bodies = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        world.add(world,this.body);
    }
display() {
    rectMode(CENTER);
    fill(255);
var pos = this.body.position;
rect(this.body.position.x,tis.body.position.y,this.width,this.height);
  }
}