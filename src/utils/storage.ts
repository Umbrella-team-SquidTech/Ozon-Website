export function getLocalStorage(prop: string, parse: boolean = false) {
  const val = localStorage.getItem(prop);
  return val ? (parse ? JSON.parse(val) : val) : null;
}
export function setLocalStorage(prop: string, val: string) {
  localStorage.setItem(prop, val);
}
export function removeLocalStorage(prop: string) {
  localStorage.removeItem(prop);
}
