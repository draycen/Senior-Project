
// const contactForm = document.querySelector(".contactcontainer")

// if (contactForm){
//     contactForm.addEventListener("submit",(e)=>
//     {
//         //call api
//     })
// }


const serviceItems = document.querySelector(".services");
const popup = document.querySelector(".popup-box")
const popupCloseBtn = popup.querySelector(".popup-close-btn");
const popupCloseIcon = popup.querySelector(".popup-close-icon");
serviceItems.addEventListener("click",function(event){
    console.log(event.target.tagName)
if(event.target.tagName.toLowerCase() == "button"){
    const item =event.target.parentElement;
    const h2 = item.querySelector("h2").innerHTML;
    const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
    popup.querySelector("h2").innerHTML = h2;
    popup.querySelector(".popup-body").innerHTML = readMoreCont;
    popupBox();
}

})

popupCloseBtn.addEventListener("click", popupBox);
popupCloseIcon.addEventListener("click", popupBox);

popup.addEventListener("click", function(event){
if(event.target == popup){
    popupBox();
}
})

function popupBox(){
popup.classList.toggle("open");
}

