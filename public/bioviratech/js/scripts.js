(function ($) {
    "use strict";

    var ClockDate = $("#clock").data("date");
    $("#clock").countdown(ClockDate, function (event) {
        var $this = $(this).html(
            event.strftime(
                "<ul>" +
                "<li><span>%D<small>days</small></span></li>" +
                "<li><span>%H<small>hours </small></span></li>" +
                "<li><span>%M<small>minutes</small></span></li>" +
                "<li><span>%S<small>seconds</small></span></li>" +
                "</ul>"
            )
        );
    });

})(jQuery);