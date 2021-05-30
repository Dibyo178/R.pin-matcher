function getPin() {
    const random = Math.random() * 10000;
    const pin = (random + '').split('.')[0];

    // recursive way..
    if (pin.length === 4) {
        return pin;
    }
    else {
        console.log('shorter:', pin)
        return getPin();
    }
}

// display generate pin..

function generatePin(){
    const pinInput = document.getElementById('generateBox');
    pinInput.value = getPin();
}

// handle calculator button event..



const buttonCalculator=document.getElementById('digits-container');
buttonCalculator.addEventListener('click',function(event){
       const digit=event.target.innerText;

       if(isNaN(digit)){
        //    handle backspace
        //  handle clear

        if(digit=='C'){
            const inputTyped=document.getElementById('screen');
           inputTyped.value='';
        }
        else if(digit=='<'){
            const deleteNumber=document.getElementById('screen').value;

            if(deleteNumber!=''){
                document.getElementById('screen').value=deleteNumber.slice(0,-1);
            }
        }
       }
       else{
           const inputTyped=document.getElementById('screen');
           inputTyped.value=inputTyped.value+digit;
       }
})

// verifyPin match..

function verifyPin(){
    const pin = document.getElementById('generateBox').value;
    const pinTyped=document.getElementById('screen').value;

    if(pin===pinTyped){
        document.getElementById('pin-match').style.display='block';
        
        document.getElementById('screen').value ='';
        document.getElementById('generateBox').value ='';
         document.getElementById('pin-mismatch').style.display='none';
    }
    else{
        document.getElementById('pin-mismatch').style.display='block';

        document.getElementById('screen').value ='';
        document.getElementById('generateBox').value ='';
        document.getElementById('pin-match').style.display='none';

        reduce();
    }
}

function reduce(){
    let action=document.getElementById('action').innerText;

    if(action>0){
        var remaining=action-1;
        document.getElementById('action').innerText=remaining;
    }
    if(action==remaining){
        document.getElementById('submit').disabled=true;
    }
}

