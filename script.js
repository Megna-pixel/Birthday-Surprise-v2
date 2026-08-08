const gift = document.getElementById("giftBox");

const giftScreen = document.getElementById("giftScreen");

const home = document.getElementById("home");

const birthday = document.getElementById("birthday");

const surpriseBtn = document.getElementById("surpriseBtn");

gift.onclick = function(){

    gift.classList.add("opening");

    // Flash
    const flash = document.getElementById("flash");

    flash.classList.add("show");

    setTimeout(() => {
        flash.classList.remove("show");
    }, 350);


    // Cinematic fog
    const fog = document.getElementById("fog");

    fog.classList.add("show");

    setTimeout(() => {
        fog.classList.remove("show");
    }, 1800);


    // Heart explosion
    createHearts();


    // Reveal home screen
    setTimeout(() => {

        giftScreen.classList.remove("active");
        giftScreen.classList.add("hidden");

        giftScreen.style.display = "none";

        home.style.display = "flex";
        home.classList.remove("hidden");

        requestAnimationFrame(() => {
            home.classList.add("active");

            document.querySelector(".card").classList.add("show");
        });

    }, 1600);

};


surpriseBtn.onclick=function(){

  home.classList.remove("active");
  home.classList.add("hidden");

  birthday.classList.remove("hidden");

  setTimeout(()=>{

    birthday.classList.add("active");

   },60);

};
function createHearts(){

    const container = document.getElementById("hearts");

    for(let i = 0; i < 45; i++){

        const heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = Math.random() > 0.5 ? "💜" : "✨";

        const angle = Math.random() * Math.PI * 2;
        const distance = 120 + Math.random() * 180;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        heart.style.left = "50%";
        heart.style.top = "50%";

        heart.style.setProperty("--x", x + "px");
        heart.style.setProperty("--y", y + "px");

        heart.style.fontSize =
            (12 + Math.random() * 15) + "px";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1600);
    }
}

const letterBtn = document.getElementById("letterBtn");
const galleryBtn = document.getElementById("galleryBtn");
const cakeBtn = document.getElementById("cakeBtn");
const finalBtn = document.getElementById("finalBtn");

const letterScreen = document.getElementById("letterScreen");
const galleryScreen = document.getElementById("galleryScreen");
const cakeScreen = document.getElementById("cakeScreen");
const finalScreen = document.getElementById("finalScreen");

const letterText = document.getElementById("letterText");

const message =
`Dear Panda 💜

You deserve all the happiness in the world.

Thank you for every smile,
every memory,
and every moment.

May this year bring you success,
peace,
good health,
and endless happiness.

Happy Birthday Panda 🐼❤️`;

letterBtn.onclick = function(){

    birthday.classList.add("hidden");

    letterScreen.classList.remove("hidden");

    typeLetter();

};

galleryBtn.onclick = function(){

    letterScreen.classList.add("hidden");

    galleryScreen.classList.remove("hidden");

};

cakeBtn.onclick = function(){

    galleryScreen.classList.add("hidden");

    cakeScreen.classList.remove("hidden");

};

finalBtn.onclick = function(){

    cakeScreen.classList.add("hidden");

    finalScreen.classList.remove("hidden");

};

function typeLetter(){

    letterText.innerHTML="";

    let i=0;

    const timer=setInterval(()=>{

        letterText.innerHTML += message.charAt(i);

        i++;

        if(i>=message.length){

            clearInterval(timer);

        }

    },35);

}