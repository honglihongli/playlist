let songlist = ["Mirrors","Maxwell's Silver Hammer","Umbrella","Shadaroba"];

$(".button").click(function() {
  songlist.forEach(function(song) {
  songs = song + "<br>";
  $(".Placeholder").append(songs);
});
});