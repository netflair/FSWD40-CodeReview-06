$(document).ready(function() {

    //DISPLAY ITEMS --------------------------------------------------------------------	

    //DVDs -------------------------------------- 
    function dvdLoop() {
        for (var i = 0; i < dvds.length; i++) {
            dvd = dvds[i];
            movi();
        }
        //Output
        $('#dvdItems').html(movies);
    }

    //Stop YouTubeVid playing after Modal close
    $(function() {
        $('.stopVid').click(function() {
            //store current ID 
            var modalID = $(this).closest('.modalBox').attr('id');
            //reassign src = vid stops   
            $("#" + modalID + " iframe").attr('src', $("#" + modalID + " iframe").attr('src'));
        });
    });



    //CDs -------------------------------------- 
    function cdLoop() {
        for (var j = 0; j < cds.length; j++) {
            cd = cds[j];
            sound();
        }
        //Output
        $('#cdItems').html(music);
    }




    //COMICS -------------------------------------- 
    function comicLoop() {

        for (var k = 0; k < comics.length; k++) {
            com = comics[k];
            comic();
        }
        //Output
        $('#comicItems').html(draw);
    }


    //Rating Stars --------------------------------------------------------
    $('.star').hover(function() {
        $(this).addClass('starred');
        $(this).prevAll('.star').addClass('starred');
    }, function() {
        $(this).removeClass('starred');
        $(this).prevAll('.star').removeClass('starred');
    });

    $('.star').click(function(e) {
        $(this).addClass('starred-chosen');
        $(this).prevAll('.star').addClass("starred-chosen");
    });


    //Fire Loop Functions to display items on page load ----------------------
    dvdLoop();
    cdLoop();
    comicLoop();



    //Getting Values ----------------------------------------------------------
    //DVD-------------------------------
    var movTitle = $('#movTitle').val();
    var movImage = $('#movImage').val();
    var movAuthor = $('#movAuthor').val();
    var movGenre = $('#movGenre').val();
    var movPublisher = $('#movPublisher').val();
    var movRelease = $('#movRelease').val();
    var movTrailer = $('#movTrailer').val();
    var movDesc = $('#movDesc').val();
    //CD-------------------------------
    var cdTitle = $('#cdTitle').val();
    var cdImage = $('#cdImage').val();
    var cdAuthor = $('#cdAuthor').val();
    var cdGenre = $('#cdGenre').val();
    var cdPublisher = $('#cdPublisher').val();
    var cdRelease = $('#cdRelease').val();
    var cdTrailer = $('#cdTrailer').val();
    var cdDesc = $('#cdDesc').val();


    //PUSHING INTO ARRAY -----------------------------------------------------
    //DVD
    $('#dvdBtn').on('click', function() {
        dvds.push({
            "id" : "dvd20",
			"image" : ""+ movImage +"", 
			"title": ""+ movTitle +"", 
			"type": "DVD", 
			"author": ""+ movAuthor +"",
			"genre": ""+ movGenre +"",
			"publisher": ""+ movPublisher +"",
			"release": ""+ movRelease +"",
			"rating": "0",
			"trailer": ""+ movTrailer +"",
			"desc": ""+ movDesc +""
        });
        movies = '';
        $('#dvdItems').html(dvdLoop());
    });

    //CD
    $('#cdBtn').on('click', function() {
        cds.push({
            "id" : "ost20",
			"image" : ""+ cdImage +"", 
			"title": ""+ cdTitle +"", 
			"type": "CD", 
			"author": ""+ cdAuthor +"",
			"genre": ""+ cdGenre +"",
			"publisher": ""+ cdPublisher +"",
			"release": ""+ cdRelease +"",
			"rating": "0",
			"desc": ""+ cdDesc +""
        });
        music = '';
        $('#cdItems').html(cdLoop());
    });







    //--
});