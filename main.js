'use strict';

const images = [
    { 'id': 1, 'url': './img/chrono.jpg'},
    { 'id': 2, 'url': './img/inuyasha.jpg'},
    { 'id': 3, 'url': './img/ippo.png'},
    { 'id': 4, 'url': './img/tenchi.jpg'},
    { 'id': 5, 'url': './img/tenjhotenge.jpg'},
    { 'id': 6, 'url': './img/yuyuhakusho.jpg'},
];

const divContainer = document.getElementById('containerImage')
const pagination = document.querySelector('.pagination')

function loadImages(array){
    array.forEach(item => {
        let img = document.createElement('img')
        let divItem = document.createElement('div')
        let pagItem = document.createElement('div')
        pagItem.setAttribute('class', 'paginationBullet')
        pagItem.setAttribute('id', item.id)
        divItem.setAttribute('class', 'item')
        divItem.setAttribute('id', item.id)
        img.setAttribute('src', item.url)
        divItem.appendChild(img)
        divContainer.appendChild(divItem)
        pagination.appendChild(pagItem)
    })
}

loadImages(images)

let items = document.querySelectorAll('.item');

function previous(){
    divContainer.insertBefore(items[items.length - 1], items[0])
    items = document.querySelectorAll('.item')   
    activatePagination()
}

function next(){
    divContainer.appendChild(items[0])
    items = document.querySelectorAll('.item')
    activatePagination()
}

function autoSlide(){
    setInterval(next, 4000)
}


autoSlide()

function activatePagination(){
    let pagination = document.querySelectorAll('.paginationBullet')
    pagination.forEach(pag => {
        pag.classList.remove('active')
        if(pag.id == items[0].id){
            pag.classList.add('active')
        }
    })
}

activatePagination()



