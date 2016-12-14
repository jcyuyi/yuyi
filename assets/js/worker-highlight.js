onmessage = function(event) {
  importScripts('highlight.pack.js');
  var result = self.hljs.highlightAuto(event.data);
  console.log(result.value);
  postMessage(result.value);
}
