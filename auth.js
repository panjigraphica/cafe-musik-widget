async function loginSpotify() {
  alert("TOMBOL DIKLIK");

  window.location.href =
    "https://accounts.spotify.com/authorize?client_id=e4f09ace85354ef196201a7fccda6798&response_type=code&redirect_uri=https://panjigraphica.github.io/spotify-widget/configure&show_dialog=true&scope=user-read-private%20user-read-email%20user-modify-playback-state%20user-read-playback-position%20user-library-read%20streaming%20user-read-playback-state%20user-read-recently-played%20playlist-read-private";
}
