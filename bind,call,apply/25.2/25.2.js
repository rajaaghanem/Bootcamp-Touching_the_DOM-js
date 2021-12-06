const obj = {
    name: "Rajaa",
    print1 : function(){
        console.log(this.name);
    },
    print2: function(print1){
        setTimeout(print1,30000)
    }
}

obj.print1();
obj.print2(obj.print1.bind(obj));




