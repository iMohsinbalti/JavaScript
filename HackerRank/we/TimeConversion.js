const s = "12:12:45AM";
const n = s.substring(0, 8);
const m = n.substring(2, 8);
const h = n.substring(0, 2);
if (s.includes("AM") && !h.includes("12")) {
  console.log(n);
}
if (s.includes("PM")) {
  const ns = (parseInt(n) + 12).toString();
  const ms = ns.concat(m);
  console.log(ms);
}
if (s.includes("AM") && h.includes("12")) {
  var ns = (parseInt(n) - 12).toString();
  ns = ns + "0";

  const ms = ns.concat(m);
  console.log(ms);
}
