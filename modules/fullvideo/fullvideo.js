/* Magic Mirror
 * Module: fullvideo
 *
 * By Stacy E. Webb
 * MIT Licensed.
 */

/* Add to config.js
{
  module: 'fullvideo',
  position: 'fullscreen_below',
  config: {
    full_video: './modules/fullvideo/windygrass.mp4'
  }
},
*/
// full_video = "https://i.giphy.com/media/xT9DPKLUNd7GJi642A/giphy.mp4";
Module.register("fullvideo",{
	// Default module config.
	defaults: {
		full_video: './modules/fullvideo/windygrass.mp4',
		//loop: true,
	},
	getScripts: function() {
		return ["bundle.js"];
	},
	// get stylesheet
	getStyles: function() {
		return ["wtc-controller-video.css"];
	},
	// Override dom generator.
	getDom: function() {
		var video =  document.createElement("video");
		video.classname = 'muted loop playsinline data-controller="Video" data-fullscreen="true" data-fallback="./modules/fullvideo/poster.png"'
		video.src = this.config.full_video;
		video.autoplay = true;
		//video.loop = this.config.loop;
		return video;
	}
});