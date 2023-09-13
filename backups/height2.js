
(function() {
    document.getElementById("scratch").onload = function() {scratchHeight()};
    function scratchHeight() {
        document.getElementById("scratch").style.height = document.getElementById("scratch-page").style.height;
    }

    document.getElementById("home").onload = function() {homeHeight()};
    function homeHeight() {
        document.getElementById("home").style.height = document.getElementById("home-page").style.height;
    }

    document.getElementById("videos").onload = function() {videosHeight()};
    function videosHeight() {
        document.getElementById("videos").style.height = document.getElementById("videos-page").style.height;
    }

    document.getElementById("episodes").onload = function() {episodesHeight()};
    function episodesHeight() {
        document.getElementById("episodes").style.height = document.getElementById("episodes-page").style.height;
    }

    document.getElementById("sponsors").onload = function() {sponsorsHeight()};
    function sponsorsHeight() {
        document.getElementById("sponsors").style.height = document.getElementById("sponsors-page").style.height;
    }

    document.getElementById("login").onload = function() {loginHeight()};
    function loginHeight() {
        document.getElementById("login").style.height = document.getElementById("login-page").style.height;
    }
})