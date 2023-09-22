let icon = document.getElementsByClassName('icon-hamburger')[0]
let Header_UL = document.querySelector('.Header_UL') 





icon.addEventListener("click",()=>{

 
Header_UL.classList.toggle('newClass') 
//  Header_UL.style.display = "flex"
console.log(Header_UL.className) 
 console.log(Header_UL.classList.contains("newClass")) 


if(Header_UL.classList.contains("newClass") === true)
{
let Hamburgeru = document.getElementById('Hamburgeru')
 let a = document.createElement("img")
Hamburgeru.setAttribute('src','../images/icon-close.svg') 
console.log(a) 
Hamburgeru.appendChild(a)  
}
else 
{

    let Hamburgeru = document.getElementById('Hamburgeru')
    let b= document.createElement("img")
   Hamburgeru.setAttribute('src','../images/icon-hamburger.svg') 
   console.log(b) 
   Hamburgeru.appendChild(b)  


}

})




Header_UL.classList.remove('newClass')
