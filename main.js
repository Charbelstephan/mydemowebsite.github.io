$(document).ready(function () {

    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $("#makeup-nav").click(function () {
        getActiveNavItem("#makeup-nav", ".nav-item");
        $(".content").addClass("hide-content");
        $("#portfolio").removeClass("hide-content");
    });

    $("#about-nav").click(function () {
        getActiveNavItem("#about-nav", ".nav-item");
        $(".content").addClass("hide-content");
        $("#about").removeClass("hide-content");
    });

    $("#contact-nav").click(function () {
        getActiveNavItem("#contact-nav", ".nav-item");
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


function getActiveNavItem(navItemClicked, navItemsClass) {
    console.log(`${navItemClicked} - ${navItemsClass}`);
    $(navItemsClass).removeClass("active");
    $(navItemClicked).addClass("active");
}