export function getLocalStorage(prop: string) {
  return localStorage.getItem(prop);
}
export function setLocalStorage(prop: string, val: string) {
  localStorage.setItem(prop, val);
}
export function removeLocalStorage(prop: string) {
  localStorage.removeItem(prop);
}
