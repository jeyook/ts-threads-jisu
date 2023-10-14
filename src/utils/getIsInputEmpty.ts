export default function getIsInputsEmpty(...args: any[]) {
  for (let i = 0; i < arguments.length; i++) {
    if (!arguments[i]) return true;
  }
  return false;
}
