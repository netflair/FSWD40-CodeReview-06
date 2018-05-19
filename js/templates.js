//Movie Template
var movies = '';
var dvd = '';
function movi(){
	 movies += 

	    "<div class='" + dvd.type + " movies col-lg-3 col-md-4 col-sm-6 col-xs-12'>" +
	    	//media
		    "<div class='media text-center well'>" +
		    	//media-heading
		    	"<div class='media-heading' data-toggle='modal' data-target='#" + dvd.id + "'>" +
		    		"<h4>" + dvd.title + "</h4><hr>" +
		    	"</div>" +
		    	//media-object
		    	"<div class='media-object' data-toggle='modal' data-target='#" + dvd.id + "'>" +
		    			"<img class='img-responsive center-block' src='" + dvd.image + "' alt='" + dvd.title + " -dvd Image'>" +
		    	"</div>" +
		    	//media-body
		    	"<div class='media-body text-left row'> <hr>" + 	
		    		"<b>Author: </b>" + dvd.author + " <br> <b>Publisher: </b>" + dvd.publisher +
		    		"<br><b>Release: </b>" + dvd.release + " <br> <b>Genre: </b>" + dvd.genre +
		    		//label
			    	"<br><hr><div class='col-xs-3'>" +
			    		"<span class='label label-info'>" + dvd.type + "</span>" +
			    	"</div>" +
			    	//stars
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

		"</div>" +
	//Modal DVD
	"<div id='" + dvd.id + "' class='modal fade stopVid modalBox'>"+
		"<div class='modal-dialog modal-lg'>" +
			//modal-content ----------------------------------------
			"<div class='modal-content'>" +
				//modal-header
				"<div class='modal-header'>" +
					"<button type='button' class='close stopVid' data-dismiss='modal'>&times;</button>" +
          			"<h4 class='modal-title'>" + dvd.title + "</h4>" +
          		"</div>" +
          		//modal-body
				"<div class='modal-body'>" + dvd.desc + "<hr>" +
					"<div class='embed-responsive embed-responsive-16by9'>" +
  						"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/" + dvd.trailer + "?rel=0&amp;showinfo=0' allow='encrypted-media' allowfullscreen ></iframe>" +
					"</div>" +
				"</div>" +
				//modal-footer
				"<div class='modal-footer'>" +
					"<button type='button' class='btn btn-default stopVid' data-dismiss='modal'>close</button>" +
          		"</div>" +
			"</div>" + 
		"</div>" +
	"</div>"
    ;

}

//Soundtracks Template
var music = '';
var cd = '';
function sound(){
	 music += 

	    "<div class='" + cd.type + " movies col-lg-3 col-md-4 col-sm-6 col-xs-12'>" +
	    	//media
		    "<div class='media text-center well'>" +
		    	//media-heading
		    	"<div class='media-heading' data-toggle='modal' data-target='#" + cd.id + "'>" +
		    		"<h4>" + cd.title + "</h4><hr>" +
		    	"</div>" +
		    	//media-object
		    	"<div class='media-object' data-toggle='modal' data-target='#" + cd.id + "'>" +
		    			"<img class='img-responsive center-block' src='" + cd.image + "' alt='" + cd.title + " -dvd Image'>" +
		    	"</div>" +
		    	//media-body
		    	"<div class='media-body text-left row'> <hr>" + 	
		    		"<b>Composer: </b>" + cd.author + " <br> <b>Publisher: </b>" + cd.publisher +
		    		"<br><b>Release: </b>" + cd.release + " <br> <b>Genre: </b>" + cd.genre +
		    		//label
			    	"<br><hr><div class='col-xs-3'>" +
			    		"<span class='label label-danger'>" + cd.type + "</span>" +
			    	"</div>" +
			    	//stars
			    	"<div class='col-xs-9'>" +
			    		"<ul class='rating text-right'>" +
			    			"<li class='star glyphicon glyphicon-star'></li>" +
			    			"<li class='star glyphicon glyphicon-star'></li>" +
			    			"<li class='star glyphicon glyphicon-star'></li>" +
			    			"<li class='star glyphicon glyphicon-star'></li>" +
			    			"<li class='star glyphicon glyphicon-star'></li>" +
			    			"<li class='starR'>(" + cd.rating + ")</li>" +
			    		"</ul>" +
			    	"</div>" +

		    	"</div>" +

		    "</div>" +

		"</div>" +
	//Modal CD
	"<div id='" + cd.id + "' class='modal fade'>"+
		"<div class='modal-dialog modal-lg'>" +
			//modal-content ----------------------------------------
			"<div class='modal-content'>" +
				//modal-header
				"<div class='modal-header'>" +
					"<button type='button' class='close' data-dismiss='modal'>&times;</button>" +
          			"<h4 class='modal-title'>" + cd.title + "</h4>" +
          		"</div>" +
          		//modal-body
				"<div class='modal-body'>" + 
				"<table class='table'>" + cd.desc + "</table>" + 
				"</div>" +
				//modal-footer
				"<div class='modal-footer'>" +
					"<button type='button' class='btn btn-default' data-dismiss='modal'>close</button>" +
          		"</div>" +
			"</div>" + 
		"</div>" +
	"</div>"
    ;

}


//Comics
var draw = '';
var com = '';
function comic(){
	 draw += 

	    "<div class='" + com.type + " movies col-lg-3 col-md-4 col-sm-6 col-xs-12'>" +
	    	//media
		    "<div class='media text-center well'>" +
		    	//media-heading
		    	"<div class='media-heading' data-toggle='modal' data-target='#" + com.id + "'>" +
		    		"<h4>" + com.title + "</h4><hr>" +
		    	"</div>" +
		    	//media-object
		    	"<div class='media-object' data-toggle='modal' data-target='#" + com.id + "'>" +
		    			"<img class='img-responsive center-block' src='" + com.image + "' alt='" + com.title + " -dvd Image'>" +
		    	"</div>" +
		    	//media-body
		    	"<div class='media-body text-left row'> <hr>" + 	
		    		"<b>Writer/Penciller: </b>" + com.author + " <br> <b>Publisher: </b>" + com.publisher +
		    		"<br><b>Release: </b>" + com.release + " <br> <b>Pages: </b>" + com.pages +
		    		//label
			    	"<br><hr><div class='col-xs-3'>" +
			    		"<span class='label label-success'>" + com.type + "</span>" +
			    	"</div>" +
			    	//stars
			    	"<div class='col-xs-9'>" +
			    		"<ul class='rating text-right'>" +
			    			"<li class='star glyphicon glyphicon-star'></li>" +
			    			"<li class='star glyphicon glyphicon-star'></li>" +
			    			"<li class='star glyphicon glyphicon-star'></li>" +
			    			"<li class='star glyphicon glyphicon-star'></li>" +
			    			"<li class='star glyphicon glyphicon-star'></li>" +
			    			"<li class='starR'>(" + com.rating + ")</li>" +
			    		"</ul>" +
			    	"</div>" +

		    	"</div>" +

		    "</div>" +

		"</div>" +
	//Modal CD
	"<div id='" + com.id + "' class='modal fade'>"+
		"<div class='modal-dialog modal-lg'>" +
			//modal-content ----------------------------------------
			"<div class='modal-content'>" +
				//modal-header
				"<div class='modal-header'>" +
					"<button type='button' class='close' data-dismiss='modal'>&times;</button>" +
          			"<h4 class='modal-title'>" + com.title + "</h4>" +
          		"</div>" +
          		//modal-body
				"<div class='modal-body'>" + com.desc + "<hr>" +
					"<img class='img-responsive center-block' src='" + com.descImg + "' alt='" + com.title + " - Sample'>" +
				"</div>" +
				//modal-footer
				"<div class='modal-footer'>" +
					"<button type='button' class='btn btn-default' data-dismiss='modal'>close</button>" +
          		"</div>" +
			"</div>" + 
		"</div>" +
	"</div>"
    ;

}
