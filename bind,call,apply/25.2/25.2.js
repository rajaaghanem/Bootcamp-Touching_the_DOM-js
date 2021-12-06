const obj = {
    name: "Rajaa",
    print1 : function(){
        console.log(this.name);
    },
    print2 : function(print1){
        setTimeout(print1, 200);
    }
    // print2: function(){
    //     setTimeout(function(){
    //         console.log(this.name);
    //     }.bind(this),200)
    // }
}


obj.print1();
// obj.print2();
obj.print2(obj.print1.bind(obj));




