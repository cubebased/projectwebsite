addEventListener('load', (event)=>{
    console.log("load");
    frontanimation()
})

function frontanimation() {
    console.log("Start animation");
    prepare_randomimages();
    const container = document.querySelector(".front-animation");
    for (var i = 0; i<=500; i++){
        const blocks = document.createElement('img');
        blocks.classList.add('block');
        blocks.style.backgroundImage = getrandomimage();
        container.appendChild(blocks);
    }
    animateblocks()
}

let filearray = [];
function prepare_randomimages(){
    for( var i = 0; i <= 31 ;i++){
        filearray.push(i + ".jpg");
    }
}

//let imagecounter = 0;
function getrandomimage(){
    let image = filearray[Math.floor(Math.random() * filearray.length)];
    //if(imagecounter>=filearray.length-1){imagecounter=0;}
    //let image = filearray[imagecounter++];
    return "url('./pic/" + image + "')";
}

function animateblocks(){

    anime({
        targets: '.block',
        translateY: function(){
            //return anime.random(0,1000);
            return -3000;
        },

        easing: 'linear',
        duration: 60000,
        delay: anime.stagger(1),
    })

}