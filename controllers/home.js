Bustle.HomeController = Ember.Controller.extend({
  whichPicture: "css/img/benjaminsbooks.jpg",
  actions: {
    switchPicture: function() {
      var imageArray = ["css/img/benjaminsbooks.jpg", "css/img/food.jpg", "css/img/movies.jpg", "css/img/music.jpg"];
      var i = imageArray.indexOf(this.get("whichPicture"));
      if ( i<3) {
        this.set('whichPicture', imageArray[i+1]);
      } else {
        this.set('whichPicture', "css/img/benjaminsbooks.jpg")
      }
    },
    backSwitchPicture: function() {
      var imageArray = ["css/img/benjaminsbooks.jpg", "css/img/food.jpg", "css/img/movies.jpg", "css/img/music.jpg"];
      var i = imageArray.indexOf(this.get("whichPicture"));
      if ( i>0) {
        this.set('whichPicture', imageArray[i-1]);
      } else {
        this.set('whichPicture', "css/img/music.jpg")
      }
    }
  }
});
