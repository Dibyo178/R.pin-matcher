// // Pin match hide...

// document.getElementsByClassName('notify').style.display='none';


// Generate pin number...

var generateBtn=document.getElementById('generateBtn');

generateBtn.addEventListener('click',function(){

    var num=1000;

// document.getElementById('generateBox').value=(Math.ceil(num+Math.random()*1000));
document.getElementById('generateBox').value=(num+Math.ceil(Math.random()*9000));

   
})

// calculator part..

let screen =document.getElementById('screen');

let screenValue='';

const buttons= document.getElementsByClassName('button');

for(item of buttons){
    item.addEventListener('click',function(e){
        let buttonText=e.target.innerText;
        console.log('button clicked',buttonText);

      
        if(buttonText =='C'){
            screenValue ='';
            screen.value =screenValue;
        }
else if(buttonText =='<'){
    deleteNumber();  // Delete number function call()..
} 
        else{
            screenValue +=buttonText
            screen.value =screenValue;
        }
        
    })
    
}


// Delete number...

function deleteNumber(){

    var deleteNumber=document.getElementById('screen').value;

    if(deleteNumber!=''){
        document.getElementById('screen').value=deleteNumber.slice(0,-1)
    }
}

// submit button...



const submitBtn=document.getElementById('submit');
submitBtn.addEventListener('click',function(){
    let InputGenerate=document.getElementById('generateBox').value;

 let CalculatorInput=document.getElementById('screen').value;

    if(InputGenerate == CalculatorInput){
        console.log('click')
        document.getElementById('pin-match').style.display='block';

        document.getElementById('screen').value ='';
        document.getElementById('generateBox').value ='';

        document.getElementById('pin-mismatch').style.display='none';

        document.getElementById('action').innerText='3';
    }
    else{
        document.getElementById('pin-mismatch').style.display='block';

        document.getElementById('screen').value ='';
        document.getElementById('generateBox').value ='';

        document.getElementById('pin-match').style.display='none';

        reduce(); // 3 try left function call()
    }
})


// 3 try left..

function reduce(){
   let action=document.getElementById('action').innerText;

    if(action>0){
        var remaining=action-1;

        document.getElementById('action').innerText=remaining;

        if(remaining==0){
            document.getElementById('submit').disabled=true;
        }
    }
}

