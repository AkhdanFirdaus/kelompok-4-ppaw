$(window).on('resize', () => {
    const width = window.innerWidth
    const height = window.innerHeight
    
    if (width <= 768) {
        $('#intro-section').addClass('flex-column', 'flex-column-reverse')
    } else {
        $('#intro-section').removeClass('flex-column', 'flex-column-reverse')
    }
})


$(window).scroll(() => {
    var height = $(window).innerHeight()
    var topPosition = $(window).scrollTop()
    var bottomPosition = topPosition + height

    if (topPosition >= 100) {
        $('#navigasi').removeClass('position-absolute').addClass('sticky-top')
    } else {
        $('#navigasi').removeClass('sticky-top').addClass('position-absolute')
    }

    $('.animate__animated').each(function() {
        var $element = $(this)
        var elementHeight = $element.outerHeight()
        var elementTopPosition = $element.offset().top
        var elementBottomPosition = elementTopPosition + elementHeight

        if (elementBottomPosition >= topPosition && elementTopPosition <= bottomPosition) {
            $element.addClass('animate__fadeInUp', 'animate__slower')
        } else {
            $element.removeClass('animate__fadeInUp', 'animate__slower')
        }
    })
})