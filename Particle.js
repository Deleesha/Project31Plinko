class Particle {

    constructor(x,y,radius){

        var ball_options = {
            restitution : 0.5 , density : 0.5 , isStatic : false
        }
        
        this.body = Bodies.circle(x,y,radius, ball_options);
        this.radius = 15;
        this.colour=color(random(0,255),random(0,255),random(0,255))
        this.x = x;
        this.y = y;
        
        World.add(world,this.body);

    }

    

    display(){

        var position = this.body.position;
        var angle = this.body.angle;
        //elipseMode(RADIUS);
        push();
        translate(position.x,position.y);
        rotate(angle);
        circle(0, 0,this.radius);
        pop();
     
    }

}