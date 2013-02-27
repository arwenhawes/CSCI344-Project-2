

(function () {
    "use strict";
    var $ = window.$,

    main = function () {
        console.log("main called!");
        console.log($("#ui_button_1").size())

        var firstChoice = null,
                secondChoice = null, //will store second choice 
                contestantChoice = null,
                morePopular = null, //will store which is more popular
                firstCount = 0, //will count the first choice count from twitter
                secondCount = 0, //will store the second choice count from twitter
                winner = null; //set the contestants choice to win using jquery
                var twitter = new ctwitter.CTwitter();

        console.log("about to attach handler: " + $("#ui_button_1").size());
        $("#ui_button_1").click(function() {
            firstChoice = $("#user_input_1").val();
            console.log("firstChoice updated to: " + firstChoice);
            twitter.stream("statuses/filter", {lang: "en", track: [firstChoice]}, function(stream)
        {
            stream.on("data", function(tweet)
            {
                firstCount = firstCount + 1;
                console.log(firstCount);
            });
        });
        console.log("handler attached!");

        //track first choice
        
        
            
        });
        console.log("first choice: " + firstChoice + " count: " + firstCount);
        //track second choice
        $("#user_input_2").val("enter second choice");
        $("#ui_button_2").click(function() {
            secondChoice = $("#user_input_2").val();
        });

        var twitter2 = new ctwitter.CTwitter();
        twitter2.stream("statuses/filter", {lang: "en", track: [secondChoice]}, function(stream)
        {
            stream.on("data", function(tweet)
            {
                secondCount = secondCount + 1;
            });
        });
        console.log(secondChoice + secondCount);
        //compare first and second tweet
        if (firstCount > secondCount) {
            winner = firstChoice;
        }
        else {
            winner = secondChoice;
        }
        //compare contestantChoice & morePopular
        if (winner === morePopular) {
            //present winning choice

        }

    };
    console.log("about to attach main to jquery");
    $(document).ready(main); //abstracts main
}());