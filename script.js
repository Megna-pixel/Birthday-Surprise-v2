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

    }, 1200);

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

    const container=document.getElementById("hearts");

    const rect=gift.getBoundingClientRect();

    for(let i=0;i<100;i++){

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="💜";

        heart.style.left=(rect.left+rect.width/2)+"px";

        heart.style.top=(rect.top+rect.height/2)+"px";

        heart.style.fontSize=(10+Math.random()*18)+"px";

        container.appendChild(heart);

        const angle = Math.random() * Math.PI * 2;
const distance = Math.min(window.innerWidth, window.innerHeight) * (0.25 + Math.random() * 0.25);

const x = Math.cos(angle) * distance;
const y = Math.sin(angle) * distance;

heart.animate(
[
{
    transform: "translate(0,0) scale(.5)",
    opacity: 1
},
{
    transform: `translate(${x}px, ${y}px) scale(1.2)`,
    opacity: 0
}
],
{
    duration: 1400,
    easing: "ease-out",
    fill: "forwards"
}
);

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