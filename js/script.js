const imageList = ["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg","img/06.jpg","img/07.jpg","img/08.jpg","img/09.jpg","img/10.jpg", ];
let courrentActiveIndex = 0;
const gallery = document.getElementById('gallery');


let elements = '';

for(let i=0; i<imageList.length; i++){
    elements += `<img class="photo" src="${imageList[i]}">`;
}

gallery.innerHTML= elements;
const images = document.getElementsByClassName('photo');


images [courrentActiveIndex].classList.add('active')

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

nextButton.addEventListener('click' , function(){
    images[courrentActiveIndex].classList.remove('active');
    courrentActiveIndex++;

    if (courrentActiveIndex === images.length){
        courrentActiveIndex = 0;
    }

    images[courrentActiveIndex].classList.add('active');
})


prevButton.addEventListener('click' , function(){
    images[courrentActiveIndex].classList.remove('active');
    courrentActiveIndex--;

    if (courrentActiveIndex === images.length){
        courrentActiveIndex = 0
    }

    images[courrentActiveIndex].classList.add('active');
})