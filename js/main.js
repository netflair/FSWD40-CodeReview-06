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



    //PUSHING INTO ARRAY -----------------------------------------------------
    $('#pushBtn').on('click', function() {
        comics.push({
            "id": "com8",
            "image": "./img/comic/com1.jpg",
            "title": "FUCK YEAH",
            "type": "COMIC",
            "author": "Charles Soule / Marco Checchetto",
            "pages": "32",
            "publisher": "Marvel Comics",
            "release": "2016",
            "rating": "0",
            "desc": "Before their military heroism in the Clone Wars, before their tragic battle on Mustafar, and many decades before their final confrontation on the Death Star… they were Master Obi-Wan Kenobi and his Padawan learner, Anakin Skywalker. It's been a few years since Obi-Wan pledged to train the young \"chosen one,\" but even as they have grown closer through training, it has been a difficult road. Now, called to a remote planet for assistance, Master and Padawan may be pushed to the breaking point. Writer Charles Soule (Lando, She-Hulk, Daredevil) and artist Marco Checchetto (Star Wars: Shattered Empire, Avengers World, Punisher) bring us a tale of the Jedi at the height of their power…",
            "descImg": "./img/comic/comsamp1.jpeg"
        });
        draw = '';
        $('#comic').html(comicLoop());
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