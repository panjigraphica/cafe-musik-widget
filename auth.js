async function loginSpotify() {

  const spotifyUrl =
    "https://accounts.spotify.com/authorize" +
    "?client_id=e4f09ace85354ef196201a7fccda6798" +
    "&response_type=code" +
    "&redirect_uri=https%3A%2F%2Fpanjigraphica.github.io%2Fcafe-musik-widget%2Fcallback.html" +
    "&scope=user-read-currently-playing%20user-read-playback-state";

  location.href = spotifyUrl;

}
