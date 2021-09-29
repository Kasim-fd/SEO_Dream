const menu = $('.menu');
const links = $('.links');

menu.click(function (e) { 
    menu.toggleClass('open');
    links.slideToggle(500);
});

// Header
const nav = $('.nav')
const header = $('.header')
const header_container = $('.header .container')
header.css('padding-top', `${parseInt(nav.outerHeight())}px`)
header_container.css('padding-top', `${parseInt(nav.outerHeight()) * 1.7}px`)

// Swiper Slide
const swiper = document.querySelector('.portfolio .swiper')
const swiper_slider = document.querySelector('.portfolio .swiper-slider')
const slide_content = $('.portfolio .swiper .slide .on-hover')

let is_pressed = false;
let drag_start_pos;
let drag_end_pos;
let cursor_x_pos;

swiper.addEventListener('mousedown', (e) => {
    swiper_slider.classList.remove('transition')
    is_pressed = true
    cursor_x_pos = e.offsetX - swiper_slider.offsetLeft
    drag_start_pos = swiper_slider.offsetLeft;
    swiper.style.cursor = 'grabbin'
})

swiper.addEventListener('mouseup', (e) => {
    swiper_slider.classList.add('transition')
    drag_end_pos = swiper_slider.offsetLeft;
    if (drag_end_pos - drag_start_pos < -50) {
        swiper_slider.style.left = `${drag_start_pos - 345}px`
    }
    else if (drag_end_pos - drag_start_pos > 50) {
        swiper_slider.style.left = `${drag_start_pos + 345}px`
    }
    else {
        swiper_slider.style.left = `${drag_start_pos}px`
    }

    if (parseInt(swiper_slider.style.left) == -2937) {
        setTimeout(() => {
            swiper_slider.classList.remove('transition')
            swiper_slider.style.left = `-1557px`
        }, 310);
    }
    if (parseInt(swiper_slider.style.left) == -177) {
        setTimeout(() => {
            swiper_slider.classList.remove('transition')
            swiper_slider.style.left = `-1557px`
        }, 310);
    }
    is_pressed = false
    swiper.style.cursor = 'grab'
})

swiper.addEventListener('mousemove', (e) => {
    if (!is_pressed) return;
    e.preventDefault()
    swiper_slider.style.left = `${e.offsetX - cursor_x_pos}px`
})