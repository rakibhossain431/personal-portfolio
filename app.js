let tabLinks = document.querySelectorAll(".tab-links")
let tabContent = document.querySelectorAll(".tab-content")
// let activeLink = document.getElementsByClassName(".active-link")
// let activetab = document.getElementsByClassName(".active-tab")


// function opentab(tabname){
//     for(let tabLink of tabLinks){
//          tabLink.classlist.remove("activeLink");
//     }
//     for(let tabContents of tabContent){
//        tabContents.classlist.remove("activetab");
//     }

// }
// opentab()

tabLinks.forEach(tabLinks =>{
    tabLinks.addEventListener('click', function(){
        tabLinks.forEach(btn =>tabLinks.classList.remove('active-link'))
    })
})
