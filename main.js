function time(){   

    var date = new Date();  // Date object to be created 

    var hrs = date.getHours();  // 24 hrs 
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var AMPM = '' ;     // string variable 


    
    
    document.getElementById('mins').innerText = min + '\n'+ ' mins';
    document.getElementById('sec').innerText = sec + '\n'+' secs';
    

    if (hrs > 12 ){
        hrs =  hrs - 12  ;
        AMPM = 'PM';  // 
        document.getElementById('hours').innerText = hrs +   '\n'+ ' hour';
        document.getElementById('AMPM').innerText = AMPM;

    }
    else {
        document.getElementById('hours').innerText = hrs +   '\n'+ ' hour';
        AMPM = 'AM';
        document.getElementById('AMPM').innerText = AMPM;
    }
 

    
}

time();
setInterval( time , 1000) // 1 sec me refresh hona

function time2(){   

    var date = new Date();  // Date object to be created 

    var hrs = date.getHours();  // 24 hrs 
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var AMPM = '' ;     // string variable 


    
    
    document.getElementById('mins2').innerText = min + '\n'+ ' mins';
    document.getElementById('sec2').innerText = sec + '\n'+' secs';
    

    if (hrs > 12 ){
        hrs =  hrs - 12  ;
        AMPM = 'PM';  // 
        document.getElementById('hours2').innerText = hrs +   '\n'+ ' hour';
        document.getElementById('AMPM2').innerText = AMPM;

    }
    else {
        document.getElementById('hours2').innerText = hrs +   '\n'+ ' hour';
        AMPM = 'AM';
        document.getElementById('AMPM2').innerText = AMPM;
    }
 

    
}

time2();
setInterval( time2 , 1000)

 

// For image Changing Code 

function getTimeDetails(){


    // For time Calculation 
    var date = new Date();
    var hrs = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var AMPM = '' ;   
    
    document.getElementById('mins').innerText = min + '\n'+ ' mins';
    document.getElementById('sec').innerText = sec + '\n'+' secs';
    
  

    if ( hrs > 12 ){
        hrs =  hrs - 12  ;
        AMPM = 'PM';
        document.getElementById('hours').innerText = hrs +   '\n'+ ' hour';
        document.getElementById('AMPM').innerText = AMPM;

    }
    else {
        document.getElementById('hours').innerText = hrs +   '\n'+ ' hour';
        AMPM = 'AM';
        document.getElementById('AMPM').innerText = AMPM;
    }
 

    var takeWakeUpValue = document.getElementById('wakeUpTimeId').value;
    var LunchTimeValue = document.getElementById('LunchTimeId').value;
    var NightTimeValue = document.getElementById('NightTimeId').value;
    var SetNapTimeValue = document.getElementById('SetNapTimeId').value;
    
    // Setting value on Page 

    document.getElementById('Wake').innerText ="Wake Up Time is : " + takeWakeUpValue;
    document.getElementById('lunch').innerText ="Lunch Time is   : " + LunchTimeValue;
    document.getElementById('nap').innerText ="Nap Time is     : " +  SetNapTimeValue;
    document.getElementById('night').innerText ="Night Time is   : " +NightTimeValue ;


    // Code for Image Change 
                      // 7AM - 8AM  // [7AM , - , 8AM]
    var arrWakeTime = takeWakeUpValue.toString().split(" "); // 
    var arrLunchTime = LunchTimeValue.toString().split(" ");
    var arrNapTime = SetNapTimeValue.toString().split(" ");
    var arrNightTime = NightTimeValue.toString().split(" ");


    console.log('Wake Up Time : ' ,   arrWakeTime);
    console.log('Lunch Time  ', arrLunchTime);
    console.log('Night Time   ', arrNightTime);
    console.log('Nap Time is  ', arrNapTime);
    
    var img = '';
   // 7AM === 7AM

    if ( (arrWakeTime[0] === arrLunchTime[0]  === arrNapTime[0] ===  arrNightTime [0]) === (hrs+AMPM) ){
        console.log("Yes all the times are equal so displaying the welcome home image  ");
        img = "<img  src='assets/welcomeHome.jpg' alt=''></img>"
    }

   else if (arrWakeTime[0] === (hrs+AMPM)){
            img = "<img  src='assets/Component 30 – 1.svg' alt=''>"
            document.getElementById('imageTag').innerHTML  = img;
            document.getElementById('grabSomeBreakfastheading').innerText ="GRAB SOME HEALTHY BREAKFAST    !!!. ";
            document.getElementById('messageParaAsPerTime').innerText ="GOOD MORNING  !! WAKE UP  !!   .";
          
            document.getElementById('imageTag').style.height ='70%'
            document.getElementById('imageTag').style.width ='70%'
           
            
            console.log("Yes they  is our wake up time  ")


   }

   else if (arrLunchTime[0] === (hrs+AMPM)){
        img = "<img  src='assets/Component 31 – 1.svg' alt=''>"
        document.getElementById('imageTag').innerHTML  = img;
        document.getElementById('grabSomeBreakfastheading').innerText ="LET'S HAVE SOME LUNCH     !!.  ";
        document.getElementById('messageParaAsPerTime').innerText ="GOOD AFTERNOON !! TAKE SOME SLEEP   !!!!!.  ";
        document.getElementById('imageTag').style.height ='100%'
        document.getElementById('imageTag').style.width ='70%'
   
    
        console.log("Yes they  is our lunch time  ")
   }


   else if (arrNapTime[0] === (hrs+AMPM)){
    img = "<img  src='assets/goodEveningImage.png' alt=''>"
    document.getElementById('imageTag').innerHTML  = img;
    document.getElementById('grabSomeBreakfastheading').innerText ="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING  !!!   ";
    document.getElementById('messageParaAsPerTime').innerText ="GOOD EVENING    !!  .";
    document.getElementById('imageTag').style.height ='100%'
    document.getElementById('imageTag').style.width ='70%'


    console.log("Yes they  is our evening  time  ")
    }


    else if (arrNightTime[0] === (hrs+AMPM))
    {
        img = "<img  src='assets/goodNightImage.png' alt=''>"
        document.getElementById('imageTag').innerHTML  = img;
        document.getElementById('grabSomeBreakfastheading').innerText
         ="CLOSE YOUR EYES AND GO TO SLEEP !!!!!.";
         document.getElementById('messageParaAsPerTime').innerText="GOOD NIGHT   !!  .. ";
    

        document.getElementById('imageTag').style.height ='100%'
        document.getElementById('imageTag').style.width ='70%'


        console.log("Yes they  is our night time  ")
    }


/*
    else {
        if ( arrNapTime[0] === (hrs+AMPM)){
            img = "<img  src='assets/goodNightImage.png' alt=''>"
            document.getElementById('imageTag').innerHTML  = img;
           document.getElementById('imageTag').style.height ='70%'
           document.getElementById('imageTag').style.width ='70%'
           
            
            console.log("Yes they are equal ")
        }
    }

    */
 

 /*
    var img = " <img  src='assets/goodNightImage.png' alt=''>" 
    if ( arrNapTime[0] === (hrs+AMPM)){
        document.getElementById('imageTag').innerHTML  = img;
       document.getElementById('imageTag').style.height ='70%'
       document.getElementById('imageTag').style.width ='70%'
        
        console.log("Yes they are equal ")
    }

*/
    // Testing purpose 
    
    
    console.log(hrs);
    console.log(AMPM);



    
}


function getDetailsTimingforMobile(){

    var mobileWakeUptimeValue =document.getElementById('wakeUpTimeIdMobile').value
    var mobileLunchtimeValue= document.getElementById('LunchTimeIdMobile').value
    var mobileNaptimeValue = document.getElementById('SetNapTimeIdMobile').value
    var mobileNighttimeValue =document.getElementById('NightTimeIdMobile').value

    console.log("Mobile Wake Time  ",mobileWakeUptimeValue);
    console.log("Mobile Lunch Time  ",mobileLunchtimeValue);
    console.log("Mobile Nap Time  ",mobileNaptimeValue);
    console.log("Mobile Night Time  ",mobileNighttimeValue );

    document.getElementById('mobileWakeUptime').innerText="Wake Time is   : " + " " + mobileWakeUptimeValue
    document.getElementById('mobileLunchtime').innerText="Lunch Time is  : " + " " +mobileLunchtimeValue
    document.getElementById('mobileNaptime').innerText="Nap Time is  : "+ " " + mobileNaptimeValue
    document.getElementById('mobileeveningtime').innerText="Night Time is  : "+ " " +mobileNighttimeValue




}
