(function () {
    "use strict";
    /*global console: false, ctwitter: false, document: false, name: false, navigator: false, window: false */
    var $ = window.$,
        main = function () {
            //console.log("main called!"); Used to debug .click issues
            //console.log($("#ui_button_1").size());

            var userChoice = null,
                count = 0, //will count the first choice count from twitter
                twitter = new ctwitter.CTwitter();
            $("#fittext_1").fitText();
        //track choice and count it
            //console.log("about to attach handler: " + $("#ui_button_1").size()); Used to debug .click
            $("#ui_button").click(function () {
                userChoice = $("#user_input").val();
                $(".choices h1").hide();
                $("#ui_button").hide();
                $("#user_input").hide();
                $(".choices").append("<h1> Choice:" + userChoice + "</h1>");
                $("h1").css({"border-style": "solid", "border-width": "5px", "border-color": "white"});
                console.log("firstChoice updated to: " + userChoice);
                twitter.stream("statuses/filter", {lang: "en", track: [userChoice]}, function (stream) {
                    stream.on("data", function (tweet) {
                        count = count + 1;
                        console.log(count);
                    });
                });
            //console.log("handler attached!");
                $(".choices").append("<h2> Count:" + count + "</h2>");
                console.log("first choice: " + userChoice + " count: " + count);
                if (count === 0) {
                    $('.winner').avgrund({
                        template: 'Winner!'
                    });
                }
            });
        //present winning choice
        };
    //console.log("about to attach main to jquery");
    $(document).ready(main); //abstracts main
}());