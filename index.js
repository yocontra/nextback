var tick = process.setImmediate || process.nextTick;

module.exports = function(callback){
  return function(){
    var args = arguments;
    tick(function(){
      callback.apply(null, args);
    });
  };
};