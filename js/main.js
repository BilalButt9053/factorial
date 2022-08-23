let input=document.getElementById('input');
let butn=document.getElementById('butn');
let fact=document.getElementById('fact');
let no=document.getElementById('no');

butn.addEventListener('click',()=>{
    let number=input.value;
    if(number < 0){
        fact.innerHTML=`Factorial of negative no is not exist.`
        input.value="";
    }else if(isNaN(number)){
        fact.innerHTML=`It is not Number`;
        input.value="";
    }else{
        let factorial=1;
        for(i=1;i<=number;i++){
            factorial*=i;
        }
        no.innerHTML=`Fatorial of : ${number}`;
        fact.innerHTML=`Factorial is : ${factorial}`
        input.value="";
    }
})