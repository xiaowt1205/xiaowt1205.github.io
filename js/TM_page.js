$('.content-info-block').click(function (e) {
    $('.collapse').collapse('hide');
});

for (let index = 0; index < $('.filter-collapse-title').length; index++) {
    const collapse = $('.filter-collapse-title')[index];
    const arrow = $('.arrow-icon')[index]

    collapse.onclick = function () {
        arrow.classList.toggle('active')
    }
}
