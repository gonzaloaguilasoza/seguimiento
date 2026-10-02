// Redirige la descarga del idioma al archivo publicado junto a la app y luego carga el lector.
(function(){
  var origFetch = self.fetch.bind(self);
  self.fetch = function(input, init){
    var url = typeof input === 'string' ? input : (input && input.url) || '';
    if (/spa\.traineddata(\.gz)?$/.test(url)) return origFetch(url.replace(/spa\.traineddata(\.gz)?$/, 'spa.wasm'), init);
    return origFetch(input, init);
  };
})();
importScripts('worker.min.js');
