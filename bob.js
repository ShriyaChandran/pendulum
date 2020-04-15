class Bob{
    constructor(x,y,width,height){
        var options= {
            'fricton': 0.0,
            'density ':0.1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        push();
        rectMode(CENTER);
        fill("khaki");
        rect(0, 0, this.width, this.height);
        pop();
    }
}
