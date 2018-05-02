function ItunesController(){
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function





  this.getMusic = function getMusic(e){
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }
  

  //Start coding here

  function draw(songs){
    var template = ''
    for (let i = 0; i < songs.length; i++) {
      const song = songs[i];
      template += `
      <div>
      <ul>
      <li><h3>Title: ${song.title}</h3></li>
      <li><h3>Album: <img src="${song.albumArt}"></h3></li>
      <li><h3>Artist: ${song.artist}</h3></li>
      <li><h3>Collection: ${song.collection}</h3></li>
      <li><h3>Price: ${song.price}</h3></li>
      <li><h3>Preview: <audio controls><source src="${song.preview}" type="audio/mpeg"></audio></h3></li>
      </ul>
      </div>
  `
    }
    document.getElementById('songs').innerHTML = template
  }
 




  
}
