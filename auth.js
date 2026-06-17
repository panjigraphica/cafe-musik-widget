async function loginSpotify() {

  alert("Tombol bekerja");

  window.location =
    "https://accounts.spotify.com/authorize?client_id=" +
    CONFIG.CLIENT_ID +
    "&response_type=code&redirect_uri=" +
    encodeURIComponent(CONFIG.REDIRECT_URI);

}
