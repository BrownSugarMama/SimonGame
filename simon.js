//Added jquery element
$(document).ready(function () {
    console.log('hello world')

// Declaration of the varibles for my arrays
var random = [];
var liteID = [];
var lite;
var clicked = [];
var i;
var j = 0;
var count = 1;
var on;
var off;
var strict;
var x;

//Timer for how long light is lit to show user. Light will spped up after round 10
function change1() {
    
    if (count <= 10) {
        off = 400;
        on = 800;
    }
    
    else {
        off = 250;
        on = 500;
    }
    
    //Setting X as the interval function for both the regular and strict modes. Regular = interval  Strict = Timeout
    x = setInterval(function () {
    //Square 1 - Green (#one - .light1 - .dark1)
    if (random[j] == 1) {
        lite = 'light1';
        $('#one').addClass(lite);
        $('#audio1')[0].play();
        liteID.push(1);
    
    setTimeout(function () {
        $('#one').removeClass(lite);}, off);
    }
    //Square 2 - Red (#two - .light2 - .dark2)
        else if (random[j] == 2) {
            lite = 'light2';
            $('#two').addClass(lite);
            $('#audio2')[0].play();
            liteID.push(2);
    
    setTimeout(function () {
        $('#two').removeClass(lite);}, off);
    }
    //Square 3 - Yellow (#three - .light3 - .dark3)
        else if (random[j] == 3) {
        lite = 'light3';
        $('#three').addClass(lite);
        $('#audio3')[0].play();
        liteID.push(3);
    
    setTimeout(function () {
        $('#three').removeClass(lite);}, off);
    }
    //Square 4 - Red (#four - .light4 - .dark4)
    else {
        lite = 'light4';
        $('#four').addClass(lite);
        $('#audio4')[0].play();
        liteID.push(4);
    
    setTimeout(function () {
        $('#four').removeClass(lite);}, off);
    }
    j++;
    
    if (j >= count) {clearInterval(x);}
    }, on);
    }


function checking() {
    if (liteID.length == clicked.length) {
    if (liteID.join() == clicked.join()) {
    if (count == 20) {

        setTimeout(function () {
            alert("You win!");
            location.reload();
        }, 1000);
    }

// user wins at round 20
     else {
        setTimeout(function () {
        $('#count').text(count + 1);
        count++;
        liteID = [];
        clicked = [];
        j = 0;
        change1();
        }, 1000);
        }
        }

    else {
        if (strict == 1) {location.reload();}
        else {setTimeout(function () {
        $('#count').text('!!');
        liteID = [];
        clicked = [];
        j = 0;
        change1();
        }, 1000);
        }
        }
        }
        }

//To turn the game on
$('#on').on('click', function () {
$('#count').text('--');
for (i = 0; i < 20; i++) {
    random[i] = Math.ceil((Math.random() * 4));
    }

$('#strict').on('click', function () {
    strict = 1;
    });

//To start the game (may merge 'start' with 'on')
$('#start').on('click', function () {
$('#count').text(count);
change1();
});

//User play functions. Allows user to repeat game array.

//Square 1 - Green (#one - .light1 - .dark1)
$('#one').on('click', function () {
$('#one').addClass('light1');
$('#audio1')[0].play();
    clicked.push(1);

setTimeout(function () {
    $('#one').removeClass('light1');
}, 
250); checking();});

//Square 2 - Red (#two - .light2 - .dark2)
$('#two').on('click', function () {
$('#two').addClass('light2');
$('#audio2')[0].play();
    clicked.push(2);

setTimeout(function () {
    $('#two').removeClass('light2');
}, 
250); checking();});

//Square 3 - Yellow (#three - .light3 - .dark3)
$('#three').on('click', function () {
$('#three').addClass('light3');
$('#audio3')[0].play();
    clicked.push(3);

setTimeout(function () {
    $('#three').removeClass('light3');
}, 
250);checking();});

//Square 4 - Red (#four - .light4 - .dark4)
$('#four').on('click', function () {
$('#four').addClass('light4');
$('#audio4')[0].play();
    clicked.push(4);

setTimeout(function () {
    $('#four').removeClass('light4');
    }, 250); checking();});
});

//To turn the game off
$('#off').on('click', function () {
    location.reload();});

})//End of jquery statement

