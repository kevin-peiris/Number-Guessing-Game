let randomNumber=(Math.floor(Math.random()*10)+1);
console.log(randomNumber);

function Clear(){
    let lblOutput=document.getElementById("output");
    document.getElementById("number").value="";
    lblOutput.innerHTML="";
}

function Guess(){
    let number=new Number(document.getElementById("number").value);

    let lblOutput=document.getElementById("output");

    if (number==0){
        lblOutput.innerHTML="Please enter a number!";
    }else if(number>randomNumber){
        lblOutput.innerHTML="Your Number is greater than the guessing number!";
    }else if(number<randomNumber){
        lblOutput.innerHTML="Your Number is lower than the guessing number!";
    }else{
        lblOutput.innerHTML="Yay You guessed the correct number!!!";
    }
}
