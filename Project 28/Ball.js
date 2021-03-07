class Ball {
    constructor(x,y,r){
        var options = {
            isStatic: false,
            'restitution': 0.2,
            'friction': 0.1
        }
        this.r = r;
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
        this.image = loadImage("images/basketball.png");
    }

    display(){
        var angle = this.body.angle;

        push();
        imageMode(CENTER);
        image(this.image,100,490,65,65);

        translate(this.body.position.x,this.body.position.y);
        rotate(angle); 
        
        pop();
    }
}