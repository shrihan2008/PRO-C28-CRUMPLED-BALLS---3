class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
       
    }
    fly(){
        this.sling.bodyA = null;
    }

    

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(6);
            if(pointA.x<220){
            line(pointA.x-30, pointA.y, pointB.x-30, pointB.y);
            }
            else
            {
                line(pointA.x+25, pointA.y, pointB.x-25, pointB.y);
            }
        }
        
    }
    
}