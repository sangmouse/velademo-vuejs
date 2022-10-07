// Short duration JWT token (5-10 min)
export function setJwtToken(token: string) {
  sessionStorage.setItem("jwt", token);
}
export function getJwtToken() {
  return sessionStorage.getItem("jwt");
}

// Longer duration refresh token (30-60 min)
export function getRefreshToken() {
  return sessionStorage.getItem("refreshToken");
}

export function setRefreshToken(token: string) {
  sessionStorage.setItem("refreshToken", token);
}

export function geturl() {
  return sessionStorage.getItem("url");
}

export function seturl(token: string) {
  sessionStorage.setItem("url", token);
}
