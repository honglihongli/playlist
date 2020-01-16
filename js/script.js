let songlist = ["Mirrors","Maxwell's Silver Hammer"];
let authorlist = ["Justin Timberlake", "The Beatles"];
let imageList = ["https://upload.wikimedia.org/wikipedia/en/9/91/JTMirrorsCover.png","https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Maxwells_silver_hammer_beatles.jpg/160px-Maxwells_silver_hammer_beatles.jpg"];
let lengthList = ["8:05","3:27"];
let linkList = ["https://www.youtube.com/watch?v=uuZE_IRwLNI","https://www.youtube.com/watch?v=mJag19WoAe0"];

$(".button").click(function() {
  var nextSong = $(".inputs").val();
  $(".list").empty();
  songlist.push(nextSong);
  songlist.forEach(function(song){
    $(".list").append(`<li>${song}</li>`)
  })
  var nextAuthor = $(".input2").val();
  $(".list2").empty();
  authorlist.push(nextAuthor);
  authorlist.forEach(function(author){
    $(".list2").append(`<li>${author}</li>`)
  })
  var nextimage = $(".input3").val();
  $(".list3").empty();
  imageList.push(nextimage);
  imageList.forEach(function(image){
    $(".list3").append("<img src ="+image+">")
  })
  var nextlength = $(".input4").val();
  $(".list4").empty();
  lengthList.push(nextlength);
  lengthList.forEach(function(length){
    $(".list4").append(`<li>${length}</li>`)
  })
  var nextlink = $(".input5").val();
  $(".list5").empty();
  linkList.push(nextlink);
  linkList.forEach(function(link){
    $(".list5").append(`<li><a href = "${link}" target="_blank">Listen</a></li>`)
  })
});