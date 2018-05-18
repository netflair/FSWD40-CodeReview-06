//Movie Template
var movies = '';
var dvd = '';
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

		    	"<br><hr><div class='col-xs-3'>" +
		    		"<span class='label label-info'>" + dvd.type + "</span>" +
		    	"</div>" +

		    	"<div class='col-xs-9'>" +
		    		"<ul class='rating text-right'>" +
		    			"<li class='star glyphicon glyphicon-star'></li>" +
		    			"<li class='star glyphicon glyphicon-star'></li>" +
		    			"<li class='star glyphicon glyphicon-star'></li>" +
		    			"<li class='star glyphicon glyphicon-star'></li>" +
		    			"<li class='star glyphicon glyphicon-star'></li>" +
		    			"<li class='starR'>(" + dvd.rating + ")</li>" +
		    		"</ul>" +
		    	"</div>" +

	    	"</div>" +

	    "</div>" +

	"</div>"
    ;
}

