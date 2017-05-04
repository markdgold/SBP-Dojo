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

var powerSelector = document.querySelector('input[name=power]');
var techSelector = document.querySelector('input[name=tech]');
var crimpSelector = document.querySelector('input[name=crimp]');
var oneMoverSelector = document.querySelector('input[name=oneMover]');
var enduroSelector = document.querySelector('input[name=enduro]');
var setBySelector = document.getElementById('setBy');


$('#reset').click(() => {
    setBySelector.selectedIndex = 0;
    powerSelector.checked = false;
    techSelector.checked = false;
    crimpSelector.checked = false;
    enduroSelector.checked = false;
    oneMoverSelector.checked = false;
    stepSlider.noUiSlider.set([1, 5]);
});
