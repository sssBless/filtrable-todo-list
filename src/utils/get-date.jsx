export function getDate() {
  let now = new Date();
  return (
    now.getDay() +
    "/" +
    (now.getMonth() + 1) +
    "/" +
    now.getDate() +
    now.toString().substring(15, 24)
  );
}
