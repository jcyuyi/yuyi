onmessage = function(event) {
  importScripts('/assets/js/highlight.pack.js');
  var result = self.hljs.highlightAuto(event.data);
  postMessage(result.value);
}
