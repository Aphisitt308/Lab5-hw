let n = Math.floor(Math.random() *100) +1;
let submit = document.getElementById('cclick');
let start = document.getElementById('st');
document.querySelector('.input').focus();

let time = 10;
let a = document.getElementById('a').innerHTML;
let b = document.getElementById('b').innerHTML;
let d = document.getElementById('d').innerHTML;
let numpre = document.getElementById('numpre').innerHTML;
submit.addEventListener('click', checknum);
document.getElementById('d').innerHTML = "Your turn : " + time;
start.addEventListener('click', function (){
     time = 10;
     document.getElementById('numpre').innerHTML = '';
     document.querySelector('.input').value ='';
     document.getElementById('a').innerHTML= '';
     document.getElementById('b').innerHTML= '';
     document.getElementById('cclick').disabled = false;
     n = Math.floor(Math.random() *100) +1;
     document.querySelector('.input').disabled = false;
     document.querySelector('.input').value = '';
     document.getElementById('d').innerHTML = "Your turn : " + time;
     

});

function checknum(){
    let Input = document.querySelector('.input').value;
    time--;
    if(time == 9) document.getElementById('numpre').innerHTML = "Previous guesses :"
    document.getElementById('numpre').innerHTML += " " + Input;
    document.getElementById('d').innerHTML = "Your turn : " + time;
    // console.log(n + ' '+ time + ' ' + Input);
    document.querySelector('.input').value = '';
    document.querySelector('.input').focus();
    
    if(time> 0){
         if(n == Input){ 
            document.getElementById('cclick').disabled = true; 
            document.getElementById('st').disabled = false;
            document.querySelector('.input').disabled = true;
            document.getElementById('a').innerHTML = "Congratulations! You got it right!"; 
            document.getElementById('b').innerHTML = "";

        }else if(Input < n){
            document.getElementById('st').disabled = true;
            document.getElementById('a').innerHTML = "wrong!!!";
            document.getElementById('b').innerHTML= "last guess was too low!";
        }else if(Input > n){
            document.getElementById('st').disabled = true;
            document.getElementById('b').innerHTML= "last guess was too high!";

        }else if (isNaN(Input)){
            document.getElementById('b').innerHTML= "Last guesses won't number!!";
        }
    }else if(time == 0){
        document.getElementById('cclick').disabled = true;
        document.getElementById('st').disabled = false;
        document.querySelector('.input').disabled = true;
        document.getElementById('numpre').innerHTML =" ";
        document.getElementById('a').innerHTML = "GAME OVER!!!";

    }
}
