//code shared between client and server

Players = new Mongo.Collection("players");


if (Meteor.isServer) {
  FastRender.route('/player/:_id', function(params) {
    this.subscribe('player', params._id);
  });
}

Router.configure({
    waitOn: function() {
			return Meteor.subscribe('AllPlayers');
  }   
});

Router.route('/player/:_id', {
  
 name:'player',
 fastRender: true,
 template: 'leaderboard', 
 data: function () {
      
      var thePlayer = Players.findOne(this.params._id);
      console.log( thePlayer); 
      return {selectedPlayer: thePlayer}; 
  }
  , 
  action: function() {
     if (this.ready())
        this.render();
  }
});


Router.route('home', {
    path: '/',
    template: 'leaderboard',
	fastRender: true,
    action: function() {
   
    if (this.ready()) {     
        this.render();
          }
    }, 
    data:  function() {
      return Players.find (); 
    }, 
    
  });
