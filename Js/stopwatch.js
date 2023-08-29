    const secField = document.getElementById('sec-field');
    const minField = document.getElementById('min-field');
    const hrField = document.getElementById('hr-field');
    const secValue = secField.innerText;
    const minValue = minField.innerText;
    const hrValue = hrField.innerText;
    let second = parseInt(secValue);
    let minute = parseInt(minValue);
    let hour = parseInt(hrValue);



function start (){
      intervalId = setInterval(increaseTime, 1000);
}
function stop(){
    clearInterval(intervalId);
}

function reset(){
    secField.innerText ='00';
    minField.innerText='00';
    hrField.innerText ='00';
    second=0;
    minute=0;
    hour =0;
}

const increaseTime = ()=>{
  
   second++;
   if(second ===60){
    minute++;
    secField.innerText ='00';
    second =0;
    
    if(minute===60){
        hour++;
        hrField.innerText =hour;
        minField.innerText = '00';
        secField.innerText ='00';
        second=0;
        minute=0;

    }else{
        minField.innerText = minute;
        secField.innerText ='00';
        sec =0;
       }
   }else{
    secField.innerText = second;
    
    
   }
 
}

