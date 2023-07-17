$(function () {
    var responses = [
        'It is certain',
        'It is decidedly so',
        'Without a doubt',
        'Yes definitely',
        'You may rely on it',
        'As I see it, yes',
        'Most likely',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'Reply hazy try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Do not count on it',
        'My reply is no',
        'My sources say no',
        'Outlook not so good',
        'Very doubtful'
    ];
    var getResponse = function () {
        return responses[Math.floor(Math.random() * responses.length)];
    };
    var count = 0;
    $(".rim").draggable({
        revert: true,
        revertDuration: 200,
        //containment: "body",
        scroll: false,
        start: function () { // hide the response when the shaking starts
            $(".eight").css("opacity", 1);
            $(".triangle").removeClass("active");
            $(".response").removeClass("active");
            $(".rim").removeClass("pulse");
            $(".eye").removeClass("glow");
            $(".ball-container").addClass("no-shadow");
        },
        stop: function () { // reset the counter if they drop it
            count = 0;
            $(".ball-container").removeClass("no-shadow");
        },
        drag: function () { // track the amount of dragging with a counter
            count++;
            shakeBall(count);
        }
    });
    function shakeBall(new_count) { // if the drag distance surpasses 75 then show the response
        if (new_count > 35) {
            $(".eight").css("opacity", 0);
            $(".triangle").addClass("active");
            $(".response").addClass("active");
            $(".response").html(getResponse());
            $(".rim").addClass("pulse");
            //$(".eye").addClass("glow");
            count = 0;
        }
        else {
        }
        console.log(count);
    }
});
