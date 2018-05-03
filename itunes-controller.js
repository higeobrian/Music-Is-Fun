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
      
      <ul>
      <li><h5>Title: "${song.title}"</h5></li>
      <li><h6>Album:</h6><br><img src="${song.albumArt}"></br></li>
      <li><h6>Artist: </h6>"${song.artist}"</li>
      <li><h6>Collection: </h6>"${song.collection}"</li>
      <li><h6>Price: </h6>${song.price}</li>
      <li><h6>Preview:</h6><br><audio controls><source src="${song.preview}" type="audio/mpeg"></br></audio></li>
      </ul>
      
  `
    }
    document.getElementById('songs').innerHTML = template
  }


  
}
