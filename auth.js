async function loginSpotify() {

  const spotifyUrl =
    "https://accounts.spotify.com/authorize" +
    "?client_id=e4f09ace85354ef196201a7fccda6798" +
    "&response_type=code" +
    "&redirect_uri=" +
    encodeURIComponent(
      "https://panjigraphica.github.io/cafe-musik-widget/callback.html"
    ) +
    "&scope=user-read-currently-playing%20user-read-playback-state";

  window.location.href = spotifyUrl;

}
