async function updateNowPlaying() {

  const token =
    localStorage.getItem("spotify_token");

  if (!token) return;

  try {

    const response =
      await fetch(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

    if (response.status === 204) return;

    const data =
      await response.json();

    document.getElementById(
      "songTitle"
    ).innerText =
      data.item.name;

    document.getElementById(
      "artistName"
    ).innerText =
      data.item.artists
        .map(a => a.name)
        .join(", ");

    document.getElementById(
      "albumArt"
    ).src =
      data.item.album.images[0].url;

    const progress =
      (data.progress_ms /
      data.item.duration_ms) * 100;

    document.getElementById(
      "progressBar"
    ).style.width =
      progress + "%";

  } catch (e) {
    console.error(e);
  }
}

setInterval(
  updateNowPlaying,
  3000
);

updateNowPlaying();