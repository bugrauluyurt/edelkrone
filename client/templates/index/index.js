// YouTube API will call onYouTubeIframeAPIReady() when API ready.
// Make sure it's a global variable.
onYouTubeIframeAPIReady = function () {

    // New Video Player, the first argument is the id of the div.
    // Make sure it's a global variable.
    player = new YT.Player("player", {

        height: "720", 
        width: "1280", 

        // videoId is the "v" in URL (ex: http://www.youtube.com/watch?v=LdH1hSWGFGU, videoId = "LdH1hSWGFGU")
        videoId: "hZmbtIzTlzM", 

        // Events like ready, state change, 
        events: {

            onReady: function (event) {
                // Play video when player ready.
                // event.target.playVideo();
            },
            onStateChange: function(e){
		        if (e.data === YT.PlayerState.ENDED) {
		            player.playVideo(); 
		        }
			}
        },
        playerVars: {
        	rel: 0,
        	controls: 0,
        	wmode: "transparent"
        },

        suggestedQuality: "hd720"
    });
};
YT.load();

Template.index.helpers({
	// 'checkValue': function(val1, val2){
	// 	if(val1 == val2){
	// 		return "selected";
	// 	}
	// }
});