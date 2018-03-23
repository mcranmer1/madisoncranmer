console.log('Be like Browser.');

// Randomizer
var max = 2;
var randNum = Math.floor( Math.random() * max );

// Store URL
var img0 = '../img/professionalpic.jpg';
var img1 = '../img/madimountain.jpg';

// Change Image
$('#replace').attr( 'src', eval('img' + randNum) );

