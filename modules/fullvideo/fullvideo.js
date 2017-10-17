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
Module.register("fullvideo", {
  // Default module config.
  defaults: {
    full_video: './modules/fullvideo/windygrass.mp4',
    loop: true,
  },
  start: function() {
    Log.info('Starting module: ' + this.name);
  },
  getScripts: function() {
    return ["wtc-controller-video.js",
           "bundle.js"];
  },
  // get stylesheet
  getStyles: function() {
    return ["wtc-controller-video.css"];
  },

  // Override dom generator.
  getDom: function() {
    var wrapper = document.createElement("video");
    wrapper.setAttribute('muted','');
    wrapper.setAttribute('playsinline', '');
    wrapper.setAttribute('loop', '');
    wrapper.setAttribute('data-controller','Video');
    wrapper.setAttribute('data-fullscreen','true');
    var videoelm = document.createElement("source");
    videoelm.src = this.config.full_video;
    videoelm.type = "video/mp4";
    wrapper.appendChild(videoelm);

    return wrapper;
  }
});