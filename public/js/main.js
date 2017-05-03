$('.your_climbs_btn').click(() => {
    $('.users_climbs').slideToggle();
});

$('.filter_btn').click(() => {
    console.log('button clicked');
    $('#filter_slider').slideToggle();
});


//grade selector
var stepSlider = document.getElementById('slider-step');

noUiSlider.create(stepSlider, {
    start: [1, 5],
    step: 1,
    connect: true,
    range: {
        'min': 1,
        'max': 5
    }
});
