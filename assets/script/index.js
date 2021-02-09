// =============================================================================
// document variables 
// =============================================================================

let navnavCarousel      = document.querySelector('.nav-carousel')
// select all elments

navnavCarousel.addEventListener('mouseover', function(e){
   
    let navLinks            = document.querySelector('.nav-active');
    let target = e.explicitOriginalTarget
    if(target){

        //  make text larger
        console.log(target);
        target.classList.add('.text-transform')
    }
        // add color around text
        //add color around nav
        //  console.log(navLinks.children);
    


})


// if mouse leaves then strip everything back to normal
navnavCarousel.addEventListener('mouseleave', function(e){
    let target = e.explicitOriginalTarget
    console.log('leave',target)
    target.classList.remove('.text-transform');
    console.log(target);


})

