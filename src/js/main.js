window.onload = function () {
    // paralax
    $(".tels__img_left").paroller({ factor: -0.02, type: 'foreground', direction: 'vertical', transition: 'transform 0.2s ease-in' });
    $(".tels__img_right").paroller({ factor: 0.02, type: 'foreground', direction: 'vertical', transition: 'transform 0.2s ease-in' });

}