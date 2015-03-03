Bustle.HomeController = Ember.Controller.extend({
  whichPicture: "css/img/carousel4.jpg",
  actions: {
    switchPicture: function() {
      var imageArray = ["css/img/carousel4.jpg", "css/img/carousel1.jpg", "css/img/carousel2.jpg", "css/img/carousel3.jpg"];
      var i = imageArray.indexOf(this.get("whichPicture"));
      if ( i<3) {
        this.set('whichPicture', imageArray[i+1]);
      } else {
        this.set('whichPicture', "css/img/carousel4.jpg")
      }
    },
    backSwitchPicture: function() {
      var imageArray = ["css/img/carousel4.jpg", "css/img/carousel1.jpg", "css/img/carousel2.jpg", "css/img/carousel3.jpg"];
      var i = imageArray.indexOf(this.get("whichPicture"));
      if ( i>0) {
        this.set('whichPicture', imageArray[i-1]);
      } else {
        this.set('whichPicture', "css/img/carousel3.jpg")
      }
    }
  }
});
