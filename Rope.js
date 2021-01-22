class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 25
        }
        this.rope = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.rope);
    }


    display(){
       if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
         var pointB = this.pointB+5;
        
        stroke("black");
       // strokeWeight(10);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        } 
    }
    
    fly(){
        this.rope.bodyA = null;
    }

    attach(body){
		this.rope.bodyA=body;
	}

}

