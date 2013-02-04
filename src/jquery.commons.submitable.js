/*!
 * jQuery Commons Submitable plugin.
 * Rubens Mariuzzo, 2013.
 */
! function($) {

    $(document).on('click.commons.data-api', '[data=submitable]', function(event) {
        
        var $this = $(event.target),
            action = $this.data('action'),
            $form = $this.parents('form:first');
            
        if ($this.is(':button, input[type="submit"]')) {
            $this.on('click', function() {
                if (action) {
                    $form.attr('action', action);
                }
                $form.submit();
            });
        }
        else if ($this.is('select')) {
            $this.on('change', function() {
                if (action) {
                    $form.attr('action', action);
                }
                $form.submit();
            });
        }
    });

}(window.jQuery)