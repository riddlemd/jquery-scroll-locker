$.widget('riddlemd.scrollLocker', {
    options : {
        autoLock : true
    },
    lockParams : null,
    _create : function() {
        var $currentWidget = this;
        $(this.element).on('scroll', function(e) {
            if($currentWidget.lockParams) {
                $(this)
                    .scrollTop($currentWidget.lockParams.top)
                    .scrollLeft($currentWidget.lockParams.left);
            }
        });

        if(this.options.autoLock) {
            this.lock();
        }
    },
    lock : function() {
        this.lockParams = {
            top : $(this.element).scrollTop(),
            left : $(this.element).scrollLeft()
        };
    },
    unlock : function() {
        this.lockParams = null;
    },
    toggle : function() {
        if(this.lockedParams) {
            this.unlock();
        } else {
            this.lock();
        }
    }
});
