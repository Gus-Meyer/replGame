let readLineSync = require('readline-sync');
console.log( "Thanks for playing my game!" );
console.log( "You are walking along and you see three paths: one leads to the woods; one to the city; and one to the lake." );
let option = readLineSync.question( "Which path do you take: the woods, the city, the lake?  " );

switch(option) {
  case "the woods":
    console.log( "You walk along a pleasant wooded path and see deer!" );
    break;
  case "the city":
    console.log( "You walk into the city and see lots of buildings and people." );
    break;
  case "the lake":
    console.log( "Wow, this lake has lots of boats on it!" );
    break;
  default: 
    console.log( "A mountain lion chases you to the city" );
    console.log( "You vow never to get close to the woods again" );
} 
if(option == "the woods"){
  console.log('This is a really beautiful path!')
  console.log('You see mountains, a river, and trees.')
  let optionWoods = readLineSync.question( "Do you go to the mountains, rivers, or trees.  " );
  switch(optionWoods) {
    case "mountains":
      console.log( "You look at that mountain and think you can climb it" );
      break;
    case "rivers":
      console.log( "You go up to the river and see otters!" );
      break;
    case "trees":
      console.log( "You see lots of trees." );
      break;
    default: 
      console.log( "You get really tired" );
      console.log( "You vow never to go to the woods again" );
  } 
}

if(option == "the city"){
  console.log('This is a really big city!')
  console.log('You see a bar, a store and an alley.')
  let optionCity = readLineSync.question( "Do you go to the bar, store, or alley.  " );
  switch(optionCity) {
    case "bar":
      console.log( "You smile and order a single malt scotch" );
      break;
    case "store":
      console.log( "You get your credit card ready" );
      break;
    case "alley":
      console.log( "You immediately question your life choices ");
      break;
    default: 
      console.log( "You can't type" );
      console.log( "Try answering the question using the answers provided" );
  } 
}

if(option == "the lake"){
  console.log('You see a beach, boat, and park')
  //console.log('You see a bar, a store and an alley.')
  let optionCity = readLineSync.question( "Do you go to the beach, boat, or park.  " );
  switch(optionCity) {
    case "beach":
      console.log( "You suntan on the beach and get sunburned." );
      break;
    case "boat":
      console.log( "You get invited on the boat and water ski!" );
      break;
    case "park":
      console.log( "You have a picnic!");
      break;
    default: 
      console.log( "You missed out" );
      console.log( "Try answering the question using the answers provided" );
  } 
}
console.log('I hope you have been enjoying yourself, we are almost done.')
console.log('You are now very tired and are wondering what to do.  ')
let optionSleep = readLineSync.question( "Where would you like to sleep?: a tent, a hotel, a raft?  " );

switch(optionSleep) {
  case "a tent":
    console.log( "You have the best night of sleep on your air mattress" );
    break;
  case "a hotel":
    console.log( "The bed makes your back hurt for a week." );
    break;
  case "a raft":
    console.log( "What are you thinking, you'll fall off!" );
    break;
  default: 
    console.log( "You gotta sleep somewhere." );
    console.log( "Try the tent, it's comfy" );
}

console.log('Thank you for playing my game!')
