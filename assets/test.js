// Generated by CoffeeScript 1.7.1
(function() {
  var Application, app;

  Application = (function() {
    var getYo, yo;

    function Application() {}

    yo = 1;

    getYo = function() {
      return this.yo;
    };

    return Application;

  })();

  app = new Application();

  alert(app.getYo);

}).call(this);
