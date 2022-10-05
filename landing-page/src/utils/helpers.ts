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

// cart login user sessionStorage
export function setUserCart(useremail: string) {
  sessionStorage.setItem("useremail", useremail);
}
export function getUserCart() {
  return sessionStorage.getItem("useremail");
}

// cart login userID sessionStorage
export function setUserIdCart(userid: string) {
  sessionStorage.setItem("userid", userid);
}
export function getUserIdCart() {
  return sessionStorage.getItem("userid");
}

// name login userID sessionStorage
export function setUserName(username: string) {
  sessionStorage.setItem("username", username);
}
export function getUserName() {
  return sessionStorage.getItem("username");
}


// checkout
export function setCheckoutLogin(check: string) {
  sessionStorage.setItem("checkout", check);
}
export function getCheckoutLogin() {
  return sessionStorage.getItem("checkout");
}

// save cart product in local
export function setCartLocalNotLogin(check: string) {
  sessionStorage.setItem("cartnotlogin", check);
}
export function getCartLocalNotLogin() {
  return sessionStorage.getItem("cartnotlogin");
}