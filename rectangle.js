class HangFrom {
    constructor(x,y,width,height){
      var options = {
        'isStatic':true,
        'density':0.1
      }  
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add (world,this.body);

    }
    display(){
        rectMode(CENTER);
        fill("brown");
        rect(0,0,this.width,this.height);
    }
}