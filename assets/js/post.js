if (typeof(Worker) !== "undefined") {
    // Yes! Web worker support!
    // Code highlight
    addEventListener('load', function() {
      var code = document.querySelector('code');
      var worker = new Worker('/assets/js/worker-highlight.js');
      worker.onmessage = function(event) { code.innerHTML = event.data; }
      worker.postMessage(code.textContent);
    })
} else {
    console.log("Browser not supported!")
}
