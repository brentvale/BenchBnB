(function(root){
  var CHANGE_EVENT = "change";
  var _benches = [];
  
  var resetBenches = function(benches){
    _benches = benches;
  }
  
  root.BenchStore = $.extend({}, EventEmitter.prototype, {
    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback)
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT);
      resetBenches(payload.benches);
    },
    all: function(){
      //return a shallow copy so consumer cannot mutate original
      return _benches.slice(0);
    },
    indexOf: function(id){
      for(var i = 0; i < _benches.length; i++){
        if(_benches[i].id === id){
          return i;
        }
      }
      return -1;
    },
    dispatcherID: AppDispatcher.register(function(payload){
        if(payload.actionType === BenchConstants.BENCHES_RECEIVED){
          resetBenches(payload.benches);
          BenchStore.emitChange();
        }
    }), 
    emitChange: function (){
      this.emit(CHANGE_EVENT);
    }
  })
  
})(this)