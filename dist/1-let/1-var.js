System.register([], function (_export) {
  var i;
  return {
    setters: [],
    execute: function () {
      "use strict";

      for (i = 1; i <= 5; i++) {
        $("#btn" + i).on("click", function () {
          alert("Btn: " + i);
        });
      }

      /*
      
      for(var i = 1; i <= 5; i++) {
        (function(x) {
          $('#btn' + x).on('click', function() {
            alert('Btn: ' + x);
          });
        })(i);
      }
      
      for(let i = 1; i <= 5; i++) {
        $('#btn' + i).on('click', function() {
          alert('Btn: ' + i);
        });
      }
      
      */
    }
  };
});
//# sourceMappingURL=../1-let/1-var.js.map