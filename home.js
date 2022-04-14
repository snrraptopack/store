let cart = document.querySelector('#cart')
let message = document.querySelector('.message')



cart.addEventListener('mouseover',show)
function show(){
    
    message.style.display='block'
}
cart.addEventListener('mouseleave' ,hide)
function hide(){
    message.style.display='none'
}
let parent = document.querySelector('.thumb')
let thumbChange= document.querySelector('.thumbs')
let all = document.querySelectorAll('.thumbs')
all.forEach(thumbChange=>thumbChange.addEventListener('click',display))
let main = document.querySelector('#main')
function display(){
    main.src='images/image-product-'+this.alt+'.jpg'
    // this.classList.toggle('add') 
    switch(this){
        case parent.firstChild:
            console.log('hello')
            break;
    }

     let images = document.querySelector('#images')
     images.src='images/image-product-'+this.alt+'.jpg'
}

// let main1 = document.querySelector('#main1')
// main.addEventListener('click',function(){
//     //main1.src='images/image-product-'+this.alt+'.jpg'
//     main1.style.display="inherit"
//     main1.src=main.src
// })

let counts=1
let count = document.querySelector('.count')
let minus= document.querySelector('.minus')

minus.addEventListener('click',substract)

function substract(){    
   if(counts<2){
       console.log('hey cant reduce it')
   }else{
    counts= counts-1
    count.textContent=counts
   }

}

let plus = document.querySelector('.plus')

plus.addEventListener('click', addition)
function addition(){
    counts=counts+1
    count.textContent=counts
}
let deletes = document.querySelector('#del')
let newMessage = document.querySelector('.message-update')
let upadte = document.querySelector('.cartalog')
upadte.addEventListener('click',changes)
function changes(){
    cart.addEventListener('mouseover' ,function(){
        message.style.display="none"
        newMessage.style.display="block"
    })
    // cart.addEventListener('mouseleave' ,function(){
    //     message.style.display="none"
    //     newMessage.style.display="none"
    // })
    let wished= document.querySelector('#product')
    wished.textContent= '$125x'+counts+" "+ counts*125

    
    deletes.innerHTML='<img src="images/icon-delete.svg">'
}

deletes.addEventListener('click',deleted)

function deleted(){
    message.style.display="none"
   newMessage.style.display="none"
   cart.addEventListener('mouseover',function(){
       message.style.display="block"
       newMessage.style.display="none"
   })
    }

