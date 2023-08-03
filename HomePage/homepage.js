// -----Navbar Logics-----
// Navigation Highlighting
// Getting the ID
const home = document.getElementById("home");
const gift = document.getElementById("gift");
const order = document.getElementById("order");
const pay = document.getElementById("pay");
const store = document.getElementById("store");
// Helper Function To Remove The .active-link Class From All Links
function removeActiveLink() {
    home.classList.remove("active-link");
    gift.classList.remove("active-link");
    order.classList.remove("active-link");
    pay.classList.remove("active-link");
    store.classList.remove("active-link");
}
// Adding Event Listener To Links
home.addEventListener("click" , function(){
    removeActiveLink();
    home.classList.add("active-link");
})
gift.addEventListener("click" , function(){
    removeActiveLink();
    gift.classList.add("active-link");
})
order.addEventListener("click" , function(){
    removeActiveLink();
    order.classList.add("active-link");
})
pay.addEventListener("click" , function(){
    removeActiveLink();
    pay.classList.add("active-link");
})
store.addEventListener("click" , function(){
    removeActiveLink();
    store.classList.add("active-link");
})