const navbar = $('.nav')
const banner = $('.banner')
const header_content = $('.header .content')
const header_img = $('.header .img')

// Features
const feats = $('.feats')
const feat = $('.feats .feat')
const overflow = $('.feats .container.overflow')

// Skills
const skills = $('.feats .skills')
const skill = $('.feats .skills .skill')

// About
const about_img = $('.about .image')
const about_content = $('.about .content')

// Services
const serv_title = $('.services .big-title')
const serv_content = $('.services .service')
let serv_title_scaling = false

// Portfolio
const portfolio = $('.portfolio')
const portf_title = $('.portfolio .big-title')
const portf_content = $('.portfolio .swiper')

// Contact
const contact = $('.contact')
const contact_content = $('.contact .container')

navbar.slideUp(0)

window.onload = () => {
    // Header & Navbar
    navbar.slideDown(500)
    setTimeout(() => {
        banner.removeClass('hidden')
    }, 500);
    setTimeout(() => {
        header_content.css('transition', 'left 1s ease-in-out')
        header_content.css('left', '0')
        header_img.css('transition', 'right 1s ease-in-out')
        header_img.css('right', '0')
    }, 300);

    // Features
    if ($('html').scrollTop() >= feats.offset().top - 100) {
        feat.addClass('show')
        setTimeout(() => {
            overflow.css('overflow-y', 'visible')
        }, 200);
    }

    // Skills
    if ($('html').scrollTop() >= skills.offset().top - 275) {
        skill.addClass('show')
    }

    // About
    if ($('html').scrollTop() >= about_img.offset().top - 300) {
        about_img.css('transition', 'left 1s ease-in-out')
        about_img.css('left', '0')
        about_content.css('transition', 'right 1s ease-in-out')
        about_content.css('right', '0')
    }

    // Services
    if ($('html').scrollTop() >= serv_title.offset().top - 400) {
        if (!serv_title_scaling) {
            serv_title.css('transform', 'scale(1)')
            setTimeout(() => {
                serv_title.css('transform', 'scale(.7)')
            }, 200);
            setTimeout(() => {
                serv_title.css('transform', 'scale(1)')
            }, 400);
            setTimeout(() => {
                serv_title.css('transform', 'scale(.7)')
            }, 600);
            setTimeout(() => {
                serv_title.css('transform', 'scale(1)')
            }, 800);
            serv_content.css('bottom', '0')
            serv_title_scaling = true
        }
    }

    // Portfolio
    if ($('html').scrollTop() >= portfolio.offset().top - 350) {
        portf_title.addClass('show')
        portf_content.addClass('show')
    }

    // Contact
    if ($('html').scrollTop() >= contact.offset().top - 350) {
        contact_content.css('bottom', '0')
    }

    window.onscroll = () => {
        // Features
        if ($('html').scrollTop() >= feats.offset().top - 100) {
            feat.addClass('show')
            setTimeout(() => {
                overflow.css('overflow-y', 'visible')
            }, 200);
        }

        // Skills
        if ($('html').scrollTop() >= skills.offset().top - 275) {
            skill.addClass('show')
        }

        // About
        if ($('html').scrollTop() >= about_img.offset().top - 300) {
            about_img.css('transition', 'left 1s ease-in-out')
            about_img.css('left', '0')
            about_content.css('transition', 'right 1s ease-in-out')
            about_content.css('right', '0')
        }

        // Services
        if ($('html').scrollTop() >= serv_title.offset().top - 400) {
            if (!serv_title_scaling) {
                serv_title.css('transform', 'scale(1)')
                setTimeout(() => {
                    serv_title.css('transform', 'scale(.7)')
                }, 200);
                setTimeout(() => {
                    serv_title.css('transform', 'scale(1)')
                }, 400);
                setTimeout(() => {
                    serv_title.css('transform', 'scale(.7)')
                }, 600);
                setTimeout(() => {
                    serv_title.css('transform', 'scale(1)')
                }, 800);
                serv_content.css('bottom', '0')
                serv_title_scaling = true
            }
        }

        // Portfolio
        if ($('html').scrollTop() >= portfolio.offset().top - 350) {
            portf_title.addClass('show')
            portf_content.addClass('show')
        }

        // Contact
        if ($('html').scrollTop() >= contact.offset().top - 350) {
            contact_content.css('bottom', '0')
        }
    }
}