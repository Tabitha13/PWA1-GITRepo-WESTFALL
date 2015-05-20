/*
Name: Tabitha Westfall
Date: May 8th 2015
Assignment: Goal 1: Asssignment: Duel #1
 */

//self-executing function

(function (){

    console.log('fight');

    fighter1 = {name:'Spiderman', damage:20, health:100};
    fighter2 = {name:'Batman', damage:20, health:100};

    /*
    var spiderArr = ["Spiderman", 20, 100];
    var batArr = ["Batman", 20, 100];

   //names
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //damage
    var player1Damage = 20;
    var player2Damage = 20;

    //health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;
    */

    var round = 0;
    var btn = document.querySelectorAll('fight_btn a');
    //console.log(btn);



   btn.onclick= function fight(){
      //  console.log('in the fight function');
       // alert(fighter1.name+':'+fighter1.health+" *START* "+fighter2.name+":"+fighter2.health);



        //loop that makes program go 10 times
       for(var i=0; i<10; i++) {
            //random formula is - Math.floor(Math.random() * (max-min) +(min);

            var minDamage1 = fighter1.damage *.5;
            var minDamage2 = fighter2.damage *.5;

            var f1 = Math.floor(Math.random()*(fighter1.damage-minDamage1)+(minDamage1));
            var f2 = Math.floor(Math.random()*(fighter2.damage-minDamage2)+(minDamage2));

            //console.log(f1);
            //console.log(f2);

            //inflict damage
            fighter1.health-= f1;
            fighter2.health-= f2;

            console.log(fighter1.name+':'+fighter1.health+"  "+fighter2.name+":"+fighter2.health);

            var results = winnerCheck();
            console.log(results);

            if(results==="no winner"){
                round++;
                alert(fighter1.name+':'+fighter1.health+" *Round "+ round+" is over * "+fighter2.name+":"+fighter2.health);

            }else{
                alert(results);
                break;
            };


        };

    };

    function winnerCheck(){

       // console.log("in winner check function");

        var result ="no winner";

        if(fighter1.health<1 && fighter2.health<1){
            result = "You both die";
        }else if (fighter1.health <1){
            result =fighter2.name+ " wins!!"
        }else if (fighter2.health<1){
            result =fighter1.name+ " wins!!"
        };

        return result;

    };



    /*** Program starts below! ***/

    console.log('program starts');
   fight();

})();


