// ===============================
// RK COMPUTER PREMIUM SCRIPT
// ===============================

// LOADER

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";
loader.style.transition = "0.8s";

setTimeout(() => {
loader.style.display = "none";
}, 800);

}, 1500);

});

// ===============================
// CUSTOM CURSOR
// ===============================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

if(cursor){

cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

}

});

// ===============================
// MOBILE MENU
// ===============================

const menuBtn =
document.querySelector(".menu-btn");

const mobileMenu =
document.querySelector(".mobile-menu");

if(menuBtn){

menuBtn.addEventListener("click", () => {

mobileMenu.classList.toggle("active");

});

}

document
.querySelectorAll(".mobile-menu a")
.forEach(link => {

link.addEventListener("click", () => {

mobileMenu.classList.remove("active");

});

});

// ===============================
// DARK / LIGHT MODE
// ===============================

const themeBtn =
document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "light"){

document.body.classList.add("light-mode");

themeBtn.innerHTML =
'<i class="fa-solid fa-sun"></i>';

}

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("light-mode");

if(
document.body.classList.contains(
"light-mode"
)
){

localStorage.setItem(
"theme",
"light"
);

themeBtn.innerHTML =
'<i class="fa-solid fa-sun"></i>';

}else{

localStorage.setItem(
"theme",
"dark"
);

themeBtn.innerHTML =
'<i class="fa-solid fa-moon"></i>';

}

});

// ===============================
// OPEN / CLOSED STATUS
// 10AM-2PM
// 5PM-8PM
// ===============================

function updateShopStatus(){

const status =
document.getElementById("shopStatus");

if(!status) return;

const now = new Date();

const hour = now.getHours();
const minute = now.getMinutes();

const currentTime =
hour + minute / 60;

const morningOpen =
currentTime >= 10 &&
currentTime < 14;

const eveningOpen =
currentTime >= 17 &&
currentTime < 20;

if(
morningOpen ||
eveningOpen
){

status.innerHTML =
'<span></span> Currently Open';

status.style.color =
'#00ff88';

}else{

status.innerHTML =
'<span style="background:red;box-shadow:0 0 12px red;"></span> Currently Closed';

status.style.color =
'#ff6666';

}

}

updateShopStatus();

setInterval(
updateShopStatus,
60000
);

// ===============================
// REVEAL ON SCROLL
// ===============================

const reveals =
document.querySelectorAll(
'.service-card,.design-card,.about-card,.stat-box,.contact-card'
);

function revealElements(){

reveals.forEach(item => {

const top =
item.getBoundingClientRect().top;

if(
top <
window.innerHeight - 100
){

item.classList.add("show");

}

});

}

window.addEventListener(
"scroll",
revealElements
);

revealElements();

// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(
".nav-links a"
);

window.addEventListener(
"scroll",
() => {

let current = "";

sections.forEach(section => {

const sectionTop =
section.offsetTop;

if(
window.scrollY >=
sectionTop - 200
){

current =
section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(
link.getAttribute("href")
===
"#" + current
){

link.classList.add("active");

}

});

}
);

// ===============================
// SMOOTH CARD HOVER
// ===============================

const cards =
document.querySelectorAll(
".service-card,.design-card"
);

cards.forEach(card => {

card.addEventListener(
"mousemove",
(e) => {

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateX =
((y / rect.height) - 0.5)
* -10;

const rotateY =
((x / rect.width) - 0.5)
* 10;

card.style.transform =
`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)
`;

});

card.addEventListener(
"mouseleave",
() => {

card.style.transform =
`
perspective(1000px)
rotateX(0deg)
rotateY(0deg)
translateY(0px)
`;

});

});

// ===============================
// NAVBAR BLUR EFFECT
// ===============================

const navbar =
document.getElementById("navbar");

window.addEventListener(
"scroll",
() => {

if(
window.scrollY > 50
){

navbar.style.background =
"rgba(0,0,0,.6)";

}else{

navbar.style.background =
"rgba(0,0,0,.15)";

}

}
);

// ===============================
// RIPPLE BUTTON EFFECT
// ===============================

document
.querySelectorAll(".btn")
.forEach(btn => {

btn.addEventListener(
"click",
function(e){

const ripple =
document.createElement("span");

const rect =
this.getBoundingClientRect();

const size =
Math.max(
rect.width,
rect.height
);

ripple.classList.add(
"ripple"
);

ripple.style.width =
size + "px";

ripple.style.height =
size + "px";

ripple.style.left =
e.clientX -
rect.left -
size/2 +
"px";

ripple.style.top =
e.clientY -
rect.top -
size/2 +
"px";

this.appendChild(ripple);

setTimeout(() => {

ripple.remove();

},600);

});

});

// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(`
RK COMPUTER

Apnar Digital Sathi

25 Years Of Trust
Since 2001

Website Loaded Successfully
`);
