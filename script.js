// // function currentTime(){
// //     var date = new Date();
// //     var now = date.toLocaleString('en-US',{hour12: false});
// //     document.getElementById('currentTime').innerHTML = now;
// // }

// // setInterval(currentTime,1);

// function currentTime(){
//     var date = new Date();
//     var now = date.toLocaleString('en-US', {hour12: false});
//     document.getElementById('currentTime').innerHTML = now;
// }

// setInterval(currentTime, 1);

// var alarmSound = new Audio ("sound.wav");
   
// function setAlarm(){
//     var alarmTime = document.getElementById('alarmTime' ).value;
//     var now = new Date();
//     var alarm = new Date (now.toDateString() + " " + alarmTime);

//     var timeRemaining = alarm - now;

//     setTimeout (playAlarm, timeRemaining);

//     document.getElementById('alarmTime').disabled = true;
//     }

//     function playAlarm(){
//         alarmSound.play();
//         document.getElementById('alarmTime').disabled = false;
//         }

// // var alramSound = new Audio("sound.wav");

// // function setAlram(){
// //     var alramTime = document.getElementById('alramTime').value;
// //     var now = new Date();
// //     var alram = new Date(now.toDateString() + " " + alramTime);

// //     var timeRemaining = alram - now;

// //     setTimeout(playAlram,timeRemaining);

// //     document.getElementById('alramTime').disbaled = true;
// // }



// // function playAlram(){
// //     alarmSound.play();
// //     document.getElementById('alramTime').disabled = false;
// // }











function currentTime(){
    var date = new Date();
    var now = date.toLocaleString('en-US', {hour12: false});
    document.getElementById('currentTime').innerHTML = now;

}
setInterval(currentTime, 1);

var alarmSound = new Audio("sound.wav");

function setAlarm(){
    var alarmTime = document.getElementById('alarmTime').value;
    var now = new Date();
    var alarm = new Date(now.toDateString() + " " + alarmTime);

    var timeRemaining = alarm - now;

    setTimeout(playAlarm, timeRemaining);

    document.getElementById('alarmTime').disabled = true;
}

function playAlarm(){
    alarmSound.play();
    document.getElementById('alarmTime').disabled = false;

}