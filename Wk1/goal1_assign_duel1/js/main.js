/*
Name: Tabitha Westfall
Date: May 8th 2015
Assignment: Goal 1: Asssignment: Duel #1
 */

//self-executing function

(function (){

    console.log('fight');

    //names
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //damage
    var player1Damage = 20;
    var player2Damage = 20;

    //health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    var round = 1;


    function fight(){
        console.log('in the fight function');
        alert(playerOneName+':'+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);

        //loop that makes program go 10 times
        for(var i=0; i<10; i++) {
            //random formula is - Math.floor(Math.random() * (max-min) +(min);

            var minDamage1 = player1Damage *.5;
            var minDamage2 = player2Damage *.5;

            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+(minDamage1));
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+(minDamage2));

            //console.log(f1);
            //console.log(f2);
            // code will go here
        };

    };

    function winnerCheck(){
    //code will go here};
    }



    /*** Program starts below! ***/
    console.log('program starts');
    fight();

})();


