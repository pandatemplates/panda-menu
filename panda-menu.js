/*!
 * Panda Menu v1.0.0
 * https://github.com/pandatemplates/panda-menu
 *
 * Copyright 2022 PandaTemplates and other contributors
 * Released under the MIT license
 */
! function (e) {
    e.fn.pandamenu = function () {
        return this.each(function () {
            var t = e(this),
                iTms = t.find('.LinkList ul > li').children('a'),
                iLen = iTms.length;
            for (var i = 0; i < iLen; i++) {
                var i1 = iTms.eq(i),
                    t1 = i1.text();
                if (t1.charAt(0) !== '_') {
                    var i2 = iTms.eq(i + 1),
                        t2 = i2.text();
                    if (t2.charAt(0) === '_') {
                        var l1 = i1.parent();
                        l1.append('<ul class="sub-menu m-sub"/>');
                    }
                }
                if (t1.charAt(0) === '_') {
                    i1.text(t1.replace('_', ''));
                    i1.parent().appendTo(l1.children('.sub-menu'));
                }
            }
            for (var i = 0; i < iLen; i++) {
                var i3 = iTms.eq(i),
                    t3 = i3.text();
                if (t3.charAt(0) !== '_') {
                    var i4 = iTms.eq(i + 1),
                        t4 = i4.text();
                    if (t4.charAt(0) === '_') {
                        var l2 = i3.parent();
                        l2.append('<ul class="sub-menu2 m-sub"/>');
                    }
                }
                if (t3.charAt(0) === '_') {
                    i3.text(t3.replace('_', ''));
                    i3.parent().appendTo(l2.children('.sub-menu2'));
                }
            }
            t.find(".LinkList ul li ul").parent('li').addClass('has-sub');
        })
    }
}(jQuery);
