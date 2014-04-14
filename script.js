var sub = $('.sub');
var cloneEl = [];
var donorEl = [];

$.each(sub, function(i, j) {
    var $t = $(j);
    var a = $t.parent().children('a');
    var a1 = a.clone(false);
    a1.addClass('cloned');

    var lis = $t.children('li');
    // debugger;
    if (lis[0]) {
        var li = $(lis[0]).clone(false);
        $t.prepend(li.html(a1));
        cloneEl.push(li);
        donorEl.push(a);
    }
});

var responsive = function() {
    $.each(donorEl, function(i, j) {
        $(j).parent().addClass('has-sub');

        $(j).on('click', function() {
            $(this).parent().children('.sub').toggleClass('show');
            return false;
        });
    });


    $.each(cloneEl, function(i, j) {
        $(j).show();
    });
};
responsive();


var simple = function() {
    $.each(donorEl, function(i, j) {
        $(j).parent().removeClass('has-sub');
        $(j).off('click');
    });

    $.each(cloneEl, function(i, j) {
        $(j).hide();
    });

    $('.nav').find('.show').removeClass('show');
};