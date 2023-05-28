$(document).ready(function () {
    $('.card-wrapper--active')
        .find('.card__button')
        .on('click', ClickButton);

    $('.card-wrapper:not(.card-wrapper--active)')
        .on('click', '.card__button', function () {return false;})
        .on('click', CancelReserved);
});

function ClickButton() {
    $(this)
        .parents('.card-wrapper')
        .on({
            'mouseleave': SetReserved,
            'touchend': SetReserved,
        });
    // $(this).parents('.card-wrapper').on('touchend ', SetReserved);

}

function SetReserved() {
    $(this)
        .off('mouseleave')
        .removeClass('card-wrapper--active')
        .addClass('card-wrapper--selected')
        .find('.card-wrapper__overlay, .card-wrapper__reserved-wrapper')
        .fadeIn('200',function (){
            $(this).on('click', CancelReserved);
        });
}

function CancelReserved() {
    console.log($(this));
    $(this)
        .parents('.card-wrapper--selected')
        .removeClass('card-wrapper--selected')
        .addClass('card-wrapper--active')
        .find('.card-wrapper__overlay, .card-wrapper__reserved-wrapper')
        .fadeOut('200');

    // }
}
