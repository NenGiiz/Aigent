var aigent_video =  videojs('aigent_video', {
    aspectRatio: '16:9'
  });

// Get the modal
var modal = document.getElementById("videoModal");

// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("btn-close")[0];


aigent_video.on('ready', function() {
        
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
        aigent_video.play();
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
        aigent_video.stop();
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }
});