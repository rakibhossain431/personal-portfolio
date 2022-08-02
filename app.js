let tabLinks = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");


// let tabcontents = document.querySelectorAll('.tab-content')

// tabLinks.addEventLisner('click', ()=> {
//     console.log(tabLinks.classList)
// })
// function rakib(tabname){
//     for(tabLinks of tabLinks){
//        tabLinks.classList.remove('active-link')
//     }
//     for(tabcontents of tabcontents){
//         tabcontents.classList.remove('active-tag')
//     }
//     Event.currentTarget.classList.add('active-link');
//     document.getElementById(tabname).classList.add('active-tag')

// }
// rakib()

// tabLinks.addEventLisener('click', rakib)

/* 
function tabOpen (rakib) {
    for(tabLinks of tabLinks){
       console( rakib.terget)
     }
} */

tabLinks.forEach(tab => {
  tab.addEventListener("click", ()=> {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove(".active-link")
    })

    tabLinks.forEach(tab => {
      tab.classList.remove(".active-link")
    })
    tab.classList.add(".active-link")
    target.classList.add(".active-link")

  })
})