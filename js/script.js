function openQuestion(){
    const music = document.getElementById("bgMusic");

music.volume = 0.25;

music.play();

    let welcome = document.getElementById("welcomePage");

    welcome.classList.add("fade-out");

    setTimeout(function(){

        welcome.style.display="none";

        const questionPage = document.getElementById("questionPage");

questionPage.classList.remove("hidden");

questionPage.style.display = "flex";

    },600);

}
function yesClicked(){

    let question=document.getElementById("questionPage");

    question.classList.add("fade-out");

    setTimeout(function(){

        question.style.display="none";

        document.getElementById("envelopePage").style.display="flex";

    },600);

    setTimeout(function(){

      const envelopePage = document.getElementById("envelopePage");
envelopePage.style.display = "none";

const letter = document.getElementById("letterPage");
letter.classList.remove("hidden");
letter.style.display = "flex";
        index = 0;
document.getElementById("letterText").innerHTML = "";
typeLetter();

    },2600);

}
const noButton = document.getElementById("noButton");
const funnyText = document.getElementById("funnyText");

const messages = [
    "🥺 Come on... don't say maybe!",
    "😂 I saw that!",
    "🌸 Try catching me!",
    "💖 Just press 'Absolutely!'",
    "😆 Nope! Not today!"
];

let count = 0;

noButton.addEventListener("mouseover", function(){

    let x = Math.random() * 180;
    let y = Math.random() * 60;

    noButton.style.left = x + "px";
    noButton.style.top = y + "px";

    funnyText.innerHTML = messages[count % messages.length];

    count++;

});
const birthdayLetter = `Dear Surbhiii,

Happy Birthday! 🎂💖

I hope this year brings you endless happiness, success, laughter, and beautiful memories.

Thank you for being such an amazing friend.

Never stop smiling because your smile makes everyone's day brighter.

Enjoy your special day!

With lots of love,
❤️ Riyaaa`;

let index = 0;

function typeLetter() {

    if (index < birthdayLetter.length) {

        document.getElementById("letterText").innerHTML += birthdayLetter.charAt(index);

        index++;

        setTimeout(typeLetter, 40);

    } else {

        // Letter finished
        setTimeout(function(){

        const letterPage = document.getElementById("letterPage");

letterPage.style.display = "none";

startCountdown();

        },3000);

    }

}
const memories = [
{
    type: "image",
    src: "assets/photos/together1_surbhi.jpeg",
    caption: "The only good picture, we have together haha!!! 🤍"
},
{
    type: "video",
    src: "assets/videos/memory1_surbhi.mp4",
    caption: "Proof that we're serious about bus ki seats 😂"
},
{
    type: "image",
    src: "assets/photos/together2_surbhi.jpeg",
    caption: "No matter where life takes us, these moments will always stay special. 💖"
},
{
    type: "video",
    src: "assets/videos/memory2_surbhi.mp4",
    caption: "I'll miss youuuuu,infact i still do.🌸"
},
{
    type: "image",
    src: "assets/photos/surbhi1.jpeg",
    caption: "Looking effortlessly gorgeous, as always. ✨"
},
{
    type: "image",
    src: "assets/photos/surbhi2.jpeg",
    caption: "That smile deserves to be protected at all costs. 😊💕"
},
{
    type: "image",
    src: "assets/photos/surbhi3.jpeg",
    caption: "Confident. Kind. Beautiful. That's you. 💗"
},
{
    type: "image",
    src: "assets/photos/surbhi4.jpeg",
    caption: "Saving my favourite look for the end... absolutely stunning! 🖤✨"
}
];

let currentMemory = 0;

function startMemories(){

    currentMemory = 0;

    const memoryPage = document.getElementById("memoryPage");

    memoryPage.classList.remove("hidden");
    memoryPage.style.display = "flex";

    showMemory();

}

function showMemory(){

    const img = document.getElementById("memoryImage");
    const video = document.getElementById("memoryVideo");
    const caption = document.getElementById("memoryCaption");

    let item = memories[currentMemory];

    caption.innerHTML = item.caption;

    if(item.type === "image"){

        video.pause();
        video.style.display = "none";

        img.style.display = "block";
        img.src = item.src;

        

    }

    else{

        img.style.display = "none";

        video.style.display = "block";
        video.src = item.src;

        video.load();
        video.play();

        video.onended = function(){
    // Wait for the user to click Next
};

    }

}
function nextMemory(){

    currentMemory++;

    if(currentMemory >= memories.length){

        document.getElementById("memoryPage").style.display = "none";

        const finalPage = document.getElementById("finalPage");

        finalPage.classList.remove("hidden");
        finalPage.style.display = "flex";

        birthdayConfetti();

        return;

    }

    showMemory();

}
window.onload = function () {

    setTimeout(function () {

        document.getElementById("loader").style.display = "none";

    }, 2000);

};
function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "💖";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.animationDuration = (4 + Math.random()*4) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(function(){

        heart.remove();

    },8000);

}

setInterval(createHeart,500);
function showSurprise(){

    alert("🤗 Sending you the biggest virtual hug ever!\n\nHappy Birthday Surbhi ❤️🎂\n\nThank you for existing. 🌸💖");

}
function startCountdown(){

    const countdownPage = document.getElementById("countdownPage");

countdownPage.classList.remove("hidden");
countdownPage.style.display = "flex";

    const count = document.getElementById("countNumber");

    let number = 3;

    count.innerHTML = number;

    const timer = setInterval(function(){

        number--;

        if(number > 0){

            count.innerHTML = number;

        }

        else{

            clearInterval(timer);

            count.innerHTML = "📸";

            setTimeout(function(){

                document.getElementById("countdownPage").style.display="none";

                document.getElementById("memoryPage").style.display="flex";

                startMemories();

            },1000);

        }

    },1000);

}
function birthdayConfetti(){

    confetti({
        particleCount:180,
        spread:120,
        origin:{ y:0.6 }
    });

}