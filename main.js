function time(){
    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let AMPM = '' ;


    
    
    document.getElementById('mins').innerText = min + '\n'+ ' minutes';
    document.getElementById('sec').innerText = sec + '\n'+' seconds';
    

    if (hrs > 12 ){
        hrs =  hrs - 12  ;
        AMPM = 'PM';
        document.getElementById('hours').innerText = hrs +   '\n'+ ' hours';
        document.getElementById('AMPM').innerText = AMPM;

    }
    else {
        document.getElementById('hours').innerText = hrs +   '\n'+ ' hours';
        AMPM = 'AM';
        document.getElementById('AMPM').innerText = AMPM;
    }
 

    
}

time();
setInterval( time , 1000)


function getTimeDetails(){
    var takeWakeUpValue = document.getElementById('wakeUpTimeId').value;
    var LunchTimeValue = document.getElementById('LunchTimeId').value;
    var NightTimeValue = document.getElementById('NightTimeId').value;
    var SetNapTimeValue = document.getElementById('SetNapTimeId').value;
    
    document.getElementById('Wake').innerText ="Wake Up Time is : " + takeWakeUpValue;
    document.getElementById('lunch').innerText ="Lunch Time is   : " + LunchTimeValue;
    document.getElementById('nap').innerText ="Nap Time is     : " + NightTimeValue;
    document.getElementById('night').innerText ="Night Time is   : " + SetNapTimeValue;
}

