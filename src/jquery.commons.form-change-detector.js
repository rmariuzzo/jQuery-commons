/*!
 * jQuery Commons Form Change Detector plugin.
 * Rubens Mariuzzo, 2013.
 */
! function($) {
    
    // Form Change Detector class definition.

    var FormChangeDetector = function($element) {
        this.$element = $element;
        this.state = null;
    };

    FormChangeDetector.prototype.track = function() {
        this.state = this.$element.serialize();
    };

    FormChangeDetector.prototype.changed = function() {
        return this.state === null || this.state === this.$element.serialize();
    };

    // jQuery plugin definition //

    var old = $.fn.formChangeDetector;

    $.fn.formChangeDetector = function(option) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('formChangeDetector');
            if (!data) $this.data('formChangeDetector', (data = new FormChangeDetector($this)))
            if (option == 'track') data.track();
            else if (option == 'changed') data.changed();
        })
    }

    $.fn.formChangeDetector.Constructor = FormChangeDetector;
    
    // jQuery no conflict //
    
    $.fn.formChangeDetector.noConflict = function() {
        $.fn.formChangeDetector = old;
        return this;
    }

}(window.jQuery)