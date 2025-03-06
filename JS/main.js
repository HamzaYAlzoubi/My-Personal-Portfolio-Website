const links_btn = document.querySelector("header .fa-bars");
const header = document.querySelector("header");
const container = document.querySelector(".container");


let list = document.createElement("div");
list.className = "listInPhonescreen";
list.innerHTML = `
<nav>
    <ul>
        <li><a href="#Home" class="active">Home</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Testimonials">Testimonials</a></li>
        <li><a href="#Skills">My Skills</a></li>
        <li><a href="#Contact">Contact</a></li>
    </ul>
</nav>`;

header.appendChild(list);

links_btn.onclick = function () {
    if (list.style.display === "block") {
        list.style.display = "none";
    }else{
        list.style.display = "block";
    }
    window.onscroll = function (params) {
        list.style.display = "none";
    }
}
