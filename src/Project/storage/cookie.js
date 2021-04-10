export function getCookie(name = null) {
  const re = new RegExp(`${name}=([^;]+)`);
  const value =
    typeof document !== "undefined" ? re.exec(document.cookie) : null;
  const cookieValue = value != null ? decodeURI(value[1]) : null;
  if (cookieValue === "undefined") {
    return null;
  }
  return cookieValue;
}

export function deleteCookie(name = null) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
