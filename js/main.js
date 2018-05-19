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



    //Fire Loop Functions to display items on page load ----------------------
    dvdLoop();
    cdLoop();
    comicLoop();


    //PUSHING INTO ARRAY AND OUTPUT -----------------------------------------------------
    //DVD--------------------------------
    $('#dvdBtn').on('click', function() {
        //get values
        var movTitle = $('#movTitle').val();
        var movImage = $('#movImage').val();
        var movAuthor = $('#movAuthor').val();
        var movGenre = $('#movGenre').val();
        var movPublisher = $('#movPublisher').val();
        var movRelease = $('#movRelease').val();
        var movTrailer = $('#movTrailer').val();
        var movDesc = $('#movDesc').val();
        //if Roland Emmerich or roland emmerich show alert
        if (movAuthor === "Roland Emmerich" || movAuthor === "roland emmerich") {
            $('#noEmmerich').show();
            //else proceed
        } else {
            $('#noEmmerich').hide();
            //add object to array
            dvds.push({
                "id": "dvd20",
                "image": "" + movImage + "",
                "title": "" + movTitle + "",
                "type": "DVD",
                "author": "" + movAuthor + "",
                "genre": "" + movGenre + "",
                "publisher": "" + movPublisher + "",
                "release": "" + movRelease + "",
                "rating": "0",
                "trailer": "" + movTrailer + "",
                "desc": "" + movDesc + ""
            });
            //output new item
            movies = '';
            $('#dvdItems').html(dvdLoop());
            //scroll to new item
            $('html, body').animate({
                scrollTop: $(".dvd20").offset().top - 100
            }, 1000);
        }
    });

    //CD--------------------------------
    $('#cdBtn').on('click', function() {
        //get values
        var cdTitle = $('#cdTitle').val();
        var cdImage = $('#cdImage').val();
        var cdAuthor = $('#cdAuthor').val();
        var cdGenre = $('#cdGenre').val();
        var cdPublisher = $('#cdPublisher').val();
        var cdRelease = $('#cdRelease').val();
        var cdTrailer = $('#cdTrailer').val();
        var cdDesc = $('#cdDesc').val();
        //add object to array
        cds.push({
            "id": "ost20",
            "image": "" + cdImage + "",
            "title": "" + cdTitle + "",
            "type": "CD",
            "author": "" + cdAuthor + "",
            "genre": "" + cdGenre + "",
            "publisher": "" + cdPublisher + "",
            "release": "" + cdRelease + "",
            "rating": "0",
            "desc": "" + cdDesc + ""
        });
        //output new item
        music = '';
        $('#cdItems').html(cdLoop());
        //scroll to new item
        $('html, body').animate({
            scrollTop: $(".ost20").offset().top - 100
        }, 1000);
    });

    //COMIC-----------------------------
    $('#comBtn').on('click', function() {
        //get values
        var comTitle = $('#comTitle').val();
        var comImage = $('#comImage').val();
        var comAuthor = $('#comAuthor').val();
        var comPages = $('#comPages').val();
        var comPublisher = $('#comPublisher').val();
        var comRelease = $('#comRelease').val();
        var comImgDesc = $('#comImgDesc').val();
        var comDesc = $('#comDesc').val();
        //add object to array
        comics.push({
            "id": "com20",
            "image": "" + comImage + "",
            "title": "" + comTitle + "",
            "type": "COMIC",
            "author": "" + comAuthor + "",
            "pages": "" + comPages + "",
            "publisher": "" + comPublisher + "",
            "release": "" + comRelease + "",
            "rating": "0",
            "desc": "" + comDesc + "",
            "descImg": "" + comImgDesc + ""
        });
        //output new item
        draw = '';
        $('#comicItems').html(comicLoop());
        //scroll to new item
        $('html, body').animate({
            scrollTop: $(".com20").offset().top - 100
        }, 1000);
    });


    //HIDE SHOW FORMS -------------------------------------------------------
    $('#dvd-form').hide();
    $('#cd-form').hide();
    $('#com-form').hide();
    //show dvd
    $('.addDvd').on('click', function() {
        $('#dvd-form').show();
        $('#cd-form').hide(400);
        $('#com-form').hide(400);
        $('#noEmmerich').hide();
    });
    //show cd
    $('.addCd').on('click', function() {
        $('#dvd-form').hide(400);
        $('#cd-form').show();
        $('#com-form').hide(400);
    });
    //show comic
    $('.addComic').on('click', function() {
        $('#dvd-form').hide(400);
        $('#cd-form').hide(400);
        $('#com-form').show();
    });



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

    //--
});