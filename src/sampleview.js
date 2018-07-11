module.exports = function newView() {
    return {
      'write': function(value){
        var d = document.getElementById("board");
        d.innerHTML = value;
      },
      'click': function(id, cb){
        var b = document.getElementById(id);
        b.addEventListener('click', cb, false)
      }
    }
};
