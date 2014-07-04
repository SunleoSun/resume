class Application
  yo=1

  getYo = () ->
    return this.yo
app = new Application()
alert(app.getYo)