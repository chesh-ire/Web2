class Box{
    constructor(length,breadth,height){
        this.lenght=length;
        this.breadth=breadth;
        this.height=height;
    }
}

class Boxheight extends Box{
    constructor (length,breadth,height,weight){
        super(length,breadth,height);
        this.weight=weight;
    }
}

class BoxWeight extends Boxheight{
    constructor(length,breadth,height,weight,shipmentCost){
        super(length,breadth,height,weight);
        this.shipmentCost=shipmentCost;
    }
    
}

const myBoxCost=new BoxWeight(2,4,4,5,6);

console.log('length',myBoxCost.lenght)
console.log('breadth',myBoxCost.breadth)
console.log('height',myBoxCost.height)
console.log('weight',myBoxCost.weight)
console.log('cost',myBoxCost.shipmentCost)