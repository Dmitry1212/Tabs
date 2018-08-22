(function($) {
    $(document).ready(function() {
        $('#tabs').on('click', '.tab', function(event) {
            $('.active').removeClass('active');
            $(this).addClass('active');
            $($(this).data('tab')).addClass('active');
        });
    });
})(jQuery);