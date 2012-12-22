function initializeStream()
{
    var video = document.getElementById("video");
    
    video.width = window.innerWidth;
    video.height = window.innerHeight + 35; // Hide the controls
    
    $("document").mousemove(function(){disableSync();});    
}

function disableSync()
{
    window.location = "index.html";
}
