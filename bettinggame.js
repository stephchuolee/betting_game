
var userMoney = 100; 

function status(){
  $('#money').html("You have: " + userMoney);
}

function restart(){
  $('#restart').click(function(){
    location.reload();
  });
}


$('#something').click(function() {
    location.reload();
});
// function restart(){
//   $('#restart').css('display':'hidden')
// }


  $(document).ready(function(){
    status();

    $('#game_form').submit(function(event) {
      event.preventDefault();

      if (userMoney < 5){
        return;
      }

      var number = Math.floor(Math.random() * 10) + 1
      console.log(number)

        var bet = +$('#bet').val()
        if (bet < 5 || bet > 10){
          alert("Bet must be between $5 and $10. Bet again.")
        } else { var guess = +$('#guess').val()
            if (guess == number) {
            userMoney = userMoney - bet + (bet * 2);


          } else if (guess == number - 1 || guess == number + 1){
            userMoney = userMoney;
          } else {
            userMoney = userMoney - bet;
          }

        }
      status();

      if (userMoney < 5){
        alert("Game Over");
        restart();
      }
    });
  });





// Part 1: Logic 

// function between(x, min, max) {
//   return x >= min && x <= max;
// }

// function placeBet(){
//   var bet = prompt("Place a bet between $5 - $10");
//   console.log(bet)
//   if (between(bet, 5, 10)){
//     var guess = +$('form').find('.bet').val();
//     // if (between(guess, 1, 10)){
//       if (guess == number) { 
//         userMoney = userMoney + (bet * 2); 
//         alert("You now have" + userMoney);
//       } else if (guess == number - 1 || guess == number + 1) { userMoney = userMoney; 
//         alert ("You now have " + userMoney);
//       } else { 
//         userMoney = userMoney - bet; 
//         alert ("You now have " + userMoney);
//       };
//   } else alert("You did not place a bet between $5 - $10")
// }

// do {
  // placeBet();
// } while (userMoney > 0)

