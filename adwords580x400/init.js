(function() {
  var gwdAd = document.getElementById('gwd-ad');
  var wrapper = document.getElementsByClassName('wrapper')[0];
  var clickArea = document.getElementById('click_area');
  /**
   * Handles the DOMContentLoaded event. The DOMContentLoaded event is
   * fired when the document has been completely loaded and parsed.
   */
  
  function animationLoop() {
    wrapper.classList.add('start_animation');
    setTimeout(function () {
      wrapper.classList.remove('start_animation');
      setTimeout(animationLoop, 10);
    }, 15000);
  }
  
  function handleClickAreaAction(e) {
    e.preventDefault();
  }
  
  function handleDomContentLoaded(event) {
    animationLoop();
    clickArea.addEventListener('click', handleClickAreaAction);
  }
  
  /**
   * Handles the WebComponentsReady event. This event is fired when all
   * custom elements have been registered and upgraded.
   */
  function handleWebComponentsReady(event) {
    // Start the Ad lifecycle.
    setTimeout(function() {
      gwdAd.initAd();
    }, 0);
  }
  
  /**
   * Handles the event that is dispatched after the Ad has been
   * initialized and before the default page of the Ad is shown.
   */
  function handleAdInitialized(event) {}
  
  window.addEventListener('DOMContentLoaded',
    handleDomContentLoaded, false);
  window.addEventListener('WebComponentsReady',
    handleWebComponentsReady, false);
  window.addEventListener('adinitialized',
    handleAdInitialized, false);
})();
