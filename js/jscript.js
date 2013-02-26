

var firstChoice = null, //will store first choice
        secondChoice = null, //will store second choice 
        contestantChoice = null,
        morePopular = null, //will store which is more popular
        firstCount = 0, //will count the first choice count from twitter
        secondCount = 0; //will store the second choice count from twitter
winner = null;
function getRand() {
    var choicesForContest = new Array[12];
    choicesForContest[0] = "swimming";
    choicesForContest[1] = "bunnies";
    choicesForContest[2] = "pitch perfect";
    choicesForContest[3] = "rainbows";
    choicesForContest[4] = "Katniss";
    choicesForContest[5] = "London";
    choicesForContest[6] = "Twilight";
    choicesForContest[7] = "hollister";
    choicesForContest[8] = "chocolate";
    choicesForContest[9] = "soccer";
    choicesForContest[10] = "Justin Beiber";
    choicesForContest[11] = "Germany";
    
    var rand = Math.floor(Math.random() * choicesForContest.length);
    return choicesForContest[rand];
}



var main = function() {
    //set the contestants choice to win using jquery
    console.log(getRand);

};


$(document).ready(main); //abstracts main