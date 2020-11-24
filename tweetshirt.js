window.onload = function () {
    var button = document.getElementById("previewButton");
    button.onclick = previewHandler;
};

function previewHandler(){
    var canvas = document.getElementById("tshirtCanvas");
    var context = canvas.getContext("2d");
    fillBackgroundColor(canvas, context);

    var selectObj = document.getElementById("shape");
    var index = selectObj.selectedIndex;
    var shape = selectObj[index].value;

    if (shape == "squares") {
        for (var squares = 0; squares <20; squares++) {
            drawSquare(canvas, context);
        }
    } else if (shape == "circles") {
        for (var circles = 0; circles < 20; circles++) {
            drawCircle(canvas, context);
        }
    }

    // Added this instead of API call as book URL is out of date
    var selectObjTweet = document.getElementById("tweets");
    var indexTweet = selectObjTweet.selectedIndex;
    var tweets = selectObjTweet[indexTweet].value;

    if (tweets == "tweet1") {
            context.font = "30px Arial";
            context.strokeText("Funny Tweet Saying", 160, 110);
        } else if (tweets == "tweet2") {
            context.font = "30px Arial";
            context.strokeText("Humorous Tweet No 23.", 150, 110);
    }

    drawBird(canvas, context);

}

function fillBackgroundColor(canvas, context) {
    var selectObj = document.getElementById("backgroundColor");
    var index = selectObj.selectedIndex;
    var bgColor = selectObj.options[index].value;
    context.fillStyle = bgColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSquare(canvas, context) {
    var w = Math.floor(Math.random() * 40);
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);
    context.fillStyle = "lightblue";
    context.fillRect(x, y, w, w);
}

function drawCircle(canvas, context){
    var radius = Math.floor(Math.random() * 40);
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);

    context.beginPath();
    context.arc(x, y, radius, 0, degreesToRadians(360), true);
    context.fillStyle = "lightblue";
    context.fill();
}

function degreesToRadians (degrees){
    return (degrees * Math.PI)/180
}

function drawBird(canvas, context) {
    var twitterBird = new Image();
    twitterBird.src = "twitterBird.png";
    twitterBird.onload = function() {
        context.drawImage(twitterBird, 20, 120, 70, 70);
    };
}





