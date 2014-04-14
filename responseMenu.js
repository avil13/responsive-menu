(function($) {
    $.fn.responseMenu = function(options) {

        if (this === undefined) {
            return "error";
        }

        var settings = $.extend({
            'subSelector': '.sub',
            'showCss': 'show',
            'withSubCss': 'has-sub',
            'clonedCss': false
        }, options);


        var sub = $(settings.subSelector);
        var cloneEl = [];
        var donorEl = [];


        $.each(sub, function(i, j) {
            var $t = $(j),
                a = $t.parent().children('a'),
                a1 = a.clone(false);

            // test selector for show in tests
            if (settings.clonedCss)
                a1.addClass(settings.clonedCss);

            var lis = $t.children('li');

            if (lis[0]) {
                var li = $(lis[0]).clone(false);
                $t.prepend(li.html(a1));
                cloneEl.push(li);
                donorEl.push(a);
            }
        });



        this.response = function() {

            $.each(donorEl, function(i, j) {

                // testselector for show, this element has submenu
                if (settings.withSubCss)
                    $(j).parent().addClass(settings.withSubCss);

                $(j).on('click', function() {
                    $(this)
                        .parent()
                        .children(settings.subSelector)
                        .toggleClass(settings.showCss);
                    return false;
                });
            });


            $.each(cloneEl, function(i, j) {
                $(j).show();
            });
        };
        this.response();



        this.default = function() {
            $.each(donorEl, function(i, j) {

                // testselector for show, this element has submenu
                if (settings.withSubCss)
                    $(j).parent().removeClass(settings.withSubCss);

                $(j).off('click');
            });

            $.each(cloneEl, function(i, j) {
                $(j).hide();
            });

            this.find('.show').removeClass(settings.showCss);
        };


        return this;
    };

})(jQuery);


