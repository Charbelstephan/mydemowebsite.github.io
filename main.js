$(document).ready(function () {

    $(".nav-item").click(function () {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });

    $("#makeup-nav").click(function () {
        $(".content").addClass("hide-content");
        $("#portfolio").removeClass("hide-content");
    });

    $("#about-nav").click(function () {
        $(".content").addClass("hide-content");
        $("#about").removeClass("hide-content");
    });


});

/* HANDLEBARS CODE */

// Retrieve the template data from the HTML (jQuery is used here).

var template = $('#portfolio-images-handlebar').html();

// Compile the template data into a function
var templateScript = Handlebars.compile(template);

var context = {
    "images": [
        { "imagePath": "./Images/beautiful-1846703_640.jpg" },
        { "imagePath": "./Images/fashion-3080644_640.jpg" },
        { "imagePath": "./Images/girl-1319114_640.jpg" },
        { "imagePath": "./Images/girl-1361904_640.jpg" },
        { "imagePath": "./Images/two-girls-1828539_640.jpg" },
        { "imagePath": "./Images/woman-1028398_640.jpg" },
        { "imagePath": "./Images/woman-2542252_640.jpg" },
        { "imagePath": "./Images/woman-3096664_640.jpg" },
        { "imagePath": "./Images/woman-918458_640.jpg" }
    ]
}
// html = 'My name is Ritesh Kumar. I am a developer.'
var html = templateScript(context);

// Insert the HTML code into the page
$("#portfolio").append(html);


