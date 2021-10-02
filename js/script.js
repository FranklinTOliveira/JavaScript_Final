// JavaScript source code

// pull up images
function getMyImages() {
    let myImages = new Array(
        { src: './img/images/magic8ball_1.png', width: 500, height: 500, },
        { src: './img/images/magic8ball_2.png', width: 500, height: 500, },
        { src: './img/images/magic8ball_3.png', width: 500, height: 500, },
        { src: './img/images/magic8ball_4.png', width: 500, height: 500, },
        { src: './img/images/magic8ball_5.png', width: 500, height: 500, },
        { src: './img/images/magic8ball_6.png', width: 500, height: 500, },
        { src: './img/images/magic8ball_7.png', width: 500, height: 500, },
        { src: './img/images/magic8ball_8.png', width: 500, height: 500, },
        { src: './img/images/magic8ball_9.png', width: 500, height: 500, },
        { src: './img/images/magic8ball_10.png', width: 500, height: 500, },
        { src: './img/images/magic8ball_11.png', width: 500, height: 500, },
        { src: './img/images/magic8ball_12.png', width: 500, height: 500, },
        { src: './img/images/magic8ball_13.png', width: 500, height: 500, },
        { src: './img/images/magic8ball_14.png', width: 500, height: 500, },
        { src: './img/images/magic8ball_15.png', width: 500, height: 500, },
        { src: './img/images/magic8ball_16.png', width: 500, height: 500, },
        { src: './img/images/magic8ball_17.png', width: 500, height: 500, },
        { src: './img/images/magic8ball_18.png', width: 500, height: 500, },
        { src: './img/images/magic8ball_19.png', width: 500, height: 500, },
        { src: './img/images/magic8ball_20.png', width: 500, height: 500, }
    );
    return myImages;
};

// select a random image
function selectRandomImage(myImages) {
    let number = Math.floor(Math.random() * myImages.length);
    return myImages[number];
};

// remove the previously loaded image
function refresh() {
    let box = document.getElementById('imageContainer');
    box.innerHTML = '';
};

// make the effects of all this appear in box2
function populateBox(specificImage) {
    let box = document.getElementById('imageContainer');
    let magic8BallImage = document.createElement('img');
    magic8BallImage.setAttribute('src', specificImage.src);
    magic8BallImage.setAttribute('width', specificImage.width);
    magic8BallImage.setAttribute('height', specificImage.height);
    box.appendChild(magic8BallImage);
 };

// validate validates
// returns true when the question is more than 5 characters
// returns false when the question is 5 or less characters
function isValid() {

    let question = document.getElementById("question").value;

    if (question.length <= 5) {
        alert("The question may have no less than 5 characters.");
        return false;
    };

    let Char = "?";
    if ((Char.match(/\W/g)) == "") {
        alert("You must ask a question.")
        return false;
    };

    return true;
};




// do all this
function handleClick() {
    if (isValid()) {
        let eightBallPicture = getMyImages();
        let myImage = selectRandomImage(eightBallPicture);

        refresh();

        populateBox(myImage);
    };
};


// trigger the action upon a button click
function setUpHandler() {
    let button = document.getElementById('button');
    button.addEventListener("click", handleClick);
};

// Load DOM Content
window.addEventListener('DOMContentLoaded', setUpHandler);
