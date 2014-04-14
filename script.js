jQuery(document).ready(function($) {

    var sub = $('.nav').find('.sub');
    var cloneEl = [];

    $.each(sub, function(i, j) {
        var $t = $(j);
        var a1 = $t.parent().find('.level1').clone(false);

        var lis = $t.children('li');
// debugger;
        if(lis[0]){
            var li = $(lis[0]).clone(false);
            $t.prepend( li.html(a1) );
            cloneEl.push(li);
        }
    });





});