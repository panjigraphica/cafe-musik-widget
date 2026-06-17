const authUrl =
  "https://accounts.spotify.com/authorize?" +
  params.toString();

console.log(authUrl);

window.open(authUrl, "_self");
