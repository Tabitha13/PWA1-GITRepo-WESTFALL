/*
Name: Tabitha Westfall
Date: May 8th 2015
Assignment: Goal 1: Asssignment: Duel #1
 */

//self-executing function

(function (){

    console.log('fight');

    fighter1 = {name:Spiderman, damage:20, health:100};
    fighter2 = {name:Batman, damage:20, health:100};
    
    /*  var spiderArr = ["Spiderman", 20, 100];
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


    function fight(){
        console.log('in the fight function');
        alert(spiderArr[0]+':'+spiderArr[2]+" *START* "+batArr[0]+":"+spiderArr[2]);

        //loop that makes program go 10 times
        for(var i=0; i<10; i++) {
            //random formula is - Math.floor(Math.random() * (max-min) +(min);

            var minDamage1 = spiderArr[1] *.5;
            var minDamage2 = batArr[1] *.5;

            var f1 = Math.floor(Math.random()*(spiderArr[1]-minDamage1)+(minDamage1));
            var f2 = Math.floor(Math.random()*(batArr[1]-minDamage2)+(minDamage2));

            //console.log(f1);
            //console.log(f2);

            //inflict damanage
            spiderArr[2]-= f1;
            batArr[2]-= f2;

            console.log(spiderArr[0]+':'+spiderArr[2]+"  "+batArr[0]+":"+batArr[2]);

            var results = winnerCheck();
            console.log(results);

            if(results==="no winner"){
                round++;
                alert(spiderArr[0]+':'+spiderArr[2]+" *Round "+ round+" is over * "+batArr[0]+":"+batArr[2]);

            }else{
                alert(results);
                break;
            };


        };

    };

    function winnerCheck(){

        console.log("in winner check function");

        var result ="no winner";

        if(spiderArr[2]<1 && batArr[2]<1){
            result = "You both die";
        }else if (spiderArr[2] <1){
            result =batArr[0]+ " wins!!"
        }else if (batArr[2]<1){
            result =spiderArr[0]+ " wins!!"
        };

        return result;

    };



    /*** Program starts below! ***/
    console.log('program starts');
    fight();

})();


