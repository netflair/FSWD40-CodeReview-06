//Output DVD's
var movies = '';
for (var i = 0; i < dvds.length; i++) {
	var dvd = dvds[i];

    movies += 
    "<div class='" + dvd.type + " movies col-lg-3 col-md-4'>" +
	    "<div class='media text-center well'>" +
	    	"<div class='media-heading'>" +
	    		"<h4>" + dvd.title + "</h4>" +
	    	"</div>" +
	    	"<div class='media-object'>" +
	    			"<img class='img-responsive center-block' src='" + dvd.image + "' alt='" + dvd.title + " -dvd Image'>" +
	    	"</div>" +
	    	"<div class='media-body'>" +
	    		"test" +
	    	"</div>" +
	    "</div>" +
	"</div>"
    ;
}

$("#movies").html(movies);

