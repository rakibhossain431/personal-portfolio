let tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");


tabs.forEach(tab =>{
  tab.addEventListener('click', ()=>{
   let target = document.querySelector(tab.dataset.tabTarget)
   tabContents.forEach(tabContents =>{
    tabContents.classList.remove('active')
   })
   tabs.forEach(tab =>{
    tab.classList.remove('active')
   })
   target.classList.add('active')
   tab.classList.add('active')
  })
})

const sidemenu = document.getElementById('sidemenu')
function openmenu(){
    sidemenu.style.right ='0';
}
function closemenu(){
    sidemenu.style.right = '-200px';
}

// for(let sidemenu of sidemenu){
//   console.log(sidemenu.classList)
// }
// auto typed
