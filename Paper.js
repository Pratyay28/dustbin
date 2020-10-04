class Paper {
    constructor(x,y,width,height) {
      options ={
        restitution: 1.0
    }
    this.body=Bodies.circle(200,100,20,ball_options);
    World.add(world,this.body);

      
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
     eclipse(pos.x,pos.y,20,20)
    }
  };
 