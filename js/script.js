// let songlist = ["Mirrors","Maxwell's Silver Hammer"];
// let authorlist = ["Justin Timberlake", "The Beatles"];
// let imageList = ["https://upload.wikimedia.org/wikipedia/en/9/91/JTMirrorsCover.png","https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Maxwells_silver_hammer_beatles.jpg/160px-Maxwells_silver_hammer_beatles.jpg"];
// let lengthList = ["8:05","3:27"];
// let linkList = ["https://www.youtube.com/watch?v=uuZE_IRwLNI","https://www.youtube.com/watch?v=mJag19WoAe0"];
let mirrorsinformation = {
  songName: "Mirrors",
  songArtist: "Justin Timberlake",
  songImage: "https://upload.wikimedia.org/wikipedia/en/9/91/JTMirrorsCover.png",
  songLength: "8:05",
  songLink: "https://www.youtube.com/watch?v=uuZE_IRwLNI"
}
let beatlesinformation = {
  songName: "Maxwell's Silver Hammer",
  songArtist: "The Beatles",
  songImage: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Maxwells_silver_hammer_beatles.jpg/160px-Maxwells_silver_hammer_beatles.jpg",
  songLength: "3:27",
  songLink: "https://www.youtube.com/watch?v=mJag19WoAe0"
}
let objectholder = [mirrorsinformation,beatlesinformation];
$(".button").click(function() {
  $(".list").empty();
  $(".list2").empty();
  $(".list3").empty();
  $(".list4").empty();
  $(".list5").empty();
  var nextSong = $(".inputs").val();
  var nextAuthor = $(".input2").val();
  var nextimage = $(".input3").val();
  var nextlength = $(".input4").val();
  var nextlink = $(".input5").val();
  let information = {
    songName: nextSong,
    songArtist:nextAuthor,
    songImage:nextimage,
    songLength:nextlength,
    songLink:nextlink,
  }
  objectholder.push(information);
  objectholder.forEach(function(object) {

  $(".list").append("<li>"+object.songName+"</li>");
  $(".list2").append("<li>"+object.songArtist+"</li>");
  $(".list3").append("<li><img src ="+object.songImage+"></li>");
  $(".list4").append("<li>"+object.songLength+"</li>");
  $(".list5").append("<li><a href =" +object.songLink + " target='_blank'>Play</a></li>");
  })
})
// $(".button").click(function() {
//   var nextSong = $(".inputs").val();
//   $(".list").empty();
//   songlist.push(nextSong);
//   songlist.forEach(function(song){
//     $(".list").append(`<li>${song}</li>`)
//   })
//   var nextAuthor = $(".input2").val();
//   $(".list2").empty();
//   authorlist.push(nextAuthor);
//   authorlist.forEach(function(author){
//     $(".list2").append(`<li>${author}</li>`)
//   })
//   var nextimage = $(".input3").val();
//   $(".list3").empty();
//   imageList.push(nextimage);
//   imageList.forEach(function(image){
//     $(".list3").append("<img src ="+image+">")
//   })
//   var nextlength = $(".input4").val();
//   $(".list4").empty();
//   lengthList.push(nextlength);
//   lengthList.forEach(function(length){
//     $(".list4").append(`<li>${length}</li>`)
//   })
//   var nextlink = $(".input5").val();
//   $(".list5").empty();
//   linkList.push(nextlink);
//   linkList.forEach(function(link){
//     $(".list5").append(`<li><a href = "${link}" target="_blank">Listen</a></li>`)
//   })
// });