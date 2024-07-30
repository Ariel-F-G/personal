var audio = new Audio("https://rautemusik-de-hz-fal-stream15.radiohost.de/techhouse?ref=rm5beta&aw_0_req.userConsentV2=CQCd2QAQCd2QAAFADCDEA9EgAAAAAAAAAAYgAAAAAAFhoAMAAQQhEQAYAAghCCgAwABBCEJABgACCEIqADAAEEIRkAGAAIIQjoAMAAQQhIQAYAAghCSgAwABBCEpABgACCEJaADAAEEIQAAA.YAAAAAAAAAAA&_art=dD0xNzIyMTc1ODc3JmQ9YWFkOTFkN2FiZTNjNzRkYjgxZmE");
    var isPlaying = false;

    document.getElementById("mi-boton").addEventListener("click", function() {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
        } else {
            audio.play();
            isPlaying = true;
        }
    });




