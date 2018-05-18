$(document).ready(function(){

//DVDs ----------------------------------------------------------------
for (var i = 0; i < dvds.length; i++) {
	dvd = dvds[i];
	movi();
}

//Output
$('#movies').html(movies);

//Stop YouTubeVid playing after Modal close
$(function(){
	$('.stopVid').click(function(){ 
	//store current ID 
	var modalID = $(this).closest('.yes').attr('id');  
	//reassign src = vid stops   
    	$("#" + modalID + " iframe").attr('src', $("#" + modalID + " iframe").attr('src'));
    });
});

//CDs -----------------------------------------------------------------
for (var j = 0; j < cds.length; j++) {
	cd = cds[j];
	sound();
}

//Output
$('#cds').html(music);


//Rating Stars --------------------------------------------------------
$('.star').hover(function(){
 $(this).addClass('starred');
 $(this).prevAll('.star').addClass('starred');
	}, function(){
	$(this).removeClass('starred');
	$(this).prevAll('.star').removeClass('starred');
});

$('.star').click(function(e) {
    $(this).addClass('starred-chosen');
	$(this).prevAll('.star').addClass("starred-chosen");
});



//--
});