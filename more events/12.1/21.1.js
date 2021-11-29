let userInpue = document.querySelector('.userInput');
const btn = document.querySelector('.clickBtn');


    userInpue.addEventListener('keyup',(e)=>{
        btn.addEventListener('click', (event)=> 
        {
            if( userInpue.value > 18 ){
                userInpue.value = "you can drink";
            } 

        });
        btn.addEventListener('click', (event)=> 
        {
            if( userInpue.value < 18 ){
                userInpue.value = "you are young";
            } 

        });
       
    })
    
