//client only code

Template.leaderboard.helpers({
  players: function () {
    return Players.find({}, { sort: { name: 1 } });
  }
});

Template.player.helpers({
  getName: function () {
    console.log(this); 
    return this.name;
  }
});