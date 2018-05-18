$(document).ready(function(){
//Output DVD's
for (var i = 0; i < dvds.length; i++) {
	dvd = dvds[i];
	movi();
}


$('#movies').html(movies);



//Rating Stars
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

//---
 });