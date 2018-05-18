//Output DVD's
var movies = '';

function movi(){
	 movies += 
    "<div class='" + dvd.type + " movies col-lg-3 col-md-4 col-sm-6 col-xs-12'>" +
	    "<div class='media text-center well'>" +
	    	"<div class='media-heading'>" +
	    		"<h4>" + dvd.title + "</h4>" +
	    	"</div>" +
	    	"<div class='media-object'>" +
	    			"<img class='img-responsive center-block' src='" + dvd.image + "' alt='" + dvd.title + " -dvd Image'>" +
	    	"</div>" +
	    	"<div class='media-body text-left row'> <hr>" + 		
	    		"<b>Author: </b>" + dvd.author + " <br> <b>Publisher: </b>" + dvd.publisher +
	    		"<br><b>Release: </b>" + dvd.release + " <br> <b>Genre: </b>" + dvd.genre +
		    	"<br><div class='col-lg-6 col-xs-12'>" +
		    		"<span class='label label-info'>" + dvd.type + "</span>" +
		    	"</div>" +
		    	"<div class='col-lg-6 col-xs-12'>" +
		    		"Rating <br>" +
		    	"</div>" +
	    	"</div>" +
	    "</div>" +
	"</div>"
    ;
}

for (var i = 0; i < dvds.length; i++) {
	var dvd = dvds[i];
	movi();
}

$("#movies").html(movies);

