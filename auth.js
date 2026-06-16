function generateRandomString(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars.charAt(
      Math.floor(Math.random() * chars.length)
    );
  }

  return result;
}

async function sha256(plain) {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);

  return await crypto.subtle.digest(
    "SHA-256",
    data
  );
}

function base64encode(input) {
  return btoa(
    String.fromCharCode(...new Uint8Array(input))
  )
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

async function loginSpotify() {

  const verifier =
    generateRandomString(128);

  localStorage.setItem(
    "code_verifier",
    verifier
  );

  const challenge =
    base64encode(
      await sha256(verifier)
    );

  const params =
    new URLSearchParams();

  params.append(
    "client_id",
    CONFIG.CLIENT_ID
  );

  params.append(
    "response_type",
    "code"
  );

  params.append(
    "redirect_uri",
    CONFIG.REDIRECT_URI
  );

  params.append(
    "scope",
    CONFIG.SCOPES.join(" ")
  );

  params.append(
    "code_challenge_method",
    "S256"
  );

  params.append(
    "code_challenge",
    challenge
  );

  window.location =
    "https://accounts.spotify.com/authorize?" +
    params.toString();
}