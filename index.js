const testimonials = [
    {
        name: "Cherise G",
        photoUrl: "284.jpg",
        text: "This is simply unbelievable! I would be lost without APPPLE. the very best. Not able to tell you how happy i am with apple.",
    },

    {
        name: "Dihan K",
        photoUrl: "21F1Silverstone1214.jpg",
        text: "This is simply unbelievable! I would be lost without APPPLE. the very best. Not able to tell you how happy i am with apple.",
    },

    {
        name: "Vihan M",
        photoUrl: "21F1Silverstone1214.jpg",
        text: "This is simply unbelievable! I would be lost without APPPLE. the very best. Not able to tell you how happy i am with apple.",
    },
];

const imgEL = document.querySelector("img");
const textEL = document.querySelector(".text");
const usernnameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial()

function updateTestimonial() {
    const { name, photoUrl, text } = 
    testimonials[idx];
    imgEL.src = photoUrl;
    textEL.innerText = text;
    usernnameEl.innerText = name;
    idx++
    if(idx == testimonials.length) {
        idx = 0;
    }
    setTimeout(() =>{
        updateTestimonial()
    },2000)

}