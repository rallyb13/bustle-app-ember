Bustle.HomeController = Ember.Controller.extend({
  whichPicture: "css/img/benjaminsbooks.jpg",
  actions: {
    switchPicture: function() {
      var imageArray = ["css/img/benjaminsbooks.jpg", "css/img/food.jpg", "css/img/movies.jpg", "css/img/music.jpg"];
      var i = imageArray.indexOf(this.get("whichPicture"));
      this.set('whichPicture', imageArray[i+1]);
    }
  }
});
