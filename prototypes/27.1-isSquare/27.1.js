function Square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
   }

let sq = new Square(11,11,11,11);

Square.prototype.isSquare = function (){

    return (this.a === this.b && this.b===this.c && this.c===this.d)? true:false;
}

console.log(sq.isSquare());

