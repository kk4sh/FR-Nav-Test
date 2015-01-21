//server only code

Meteor.startup(function () {
  if (Players.find().count() === 0) {
    var names = ["Ada Lovelace", "Grace Hopper", "Marie Curie",
                 "Carl Friedrich Gauss", "Nikola Tesla", "Claude Shannon"];
    _.each(names, function (name) {
      Players.insert({
        name: name,        
        score: Math.floor(Random.fraction() * 10) * 5
      });
    });
  }
});


Meteor.publish('AllPlayers', function () {
  console .log ( 'pub players'); 
    return Players.find({},{fields: {'name':1}});
});

Meteor.publish('player', function (id) {
    return Players.find({ "_id": id });
});