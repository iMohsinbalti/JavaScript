const input =
  "S;M;plasticCup()  C;V;mobile phone  C;C;coffee machine  S;C;LargeSoftwareBook  C;M;white sheet of paper  S;V;pictureFrame";

//Enter your code here

const j = [];

const newc = input.split("  ");
newc.forEach((element) => {
  j.push(element.split(";"));
});

for (let i = 0; i < j.length; i++) {
  if (j[i][0] === "S") {
    if (j[i][1] === "V") {
      let t = j[i][2].split(/(?=[A-Z])/).join(" ");
      console.log(t.toLowerCase());
    }
    if (j[i][1] === "C") {
      let t = j[i][2].split(/(?=[A-Z])/).join(" ");
      console.log(t.toLowerCase());
    }
    if (j[i][1] === "M") {
      var t = j[i][2].split(/(?=[A-Z])/).join(" ");
      t = t.replace("()", "");
      var e = t.split(" ");
      let f = e[0];
      e = e[1].toLowerCase();
      console.log(f.concat(" ", e));
    }
  }
  if (j[i][0] === "C") {
    if (j[i][1] === "C") {
      let [first, ...second] = j[i][2].split(" ");
      second = second.join(" ");
      const c = first.replace(first[0], first[0].toUpperCase());

      const e = second.replace(second[0], second[0].toUpperCase());
      const f = c.concat(e);
      console.log(f);
    }
    if (j[i][1] === "V") {
      let [first, ...second] = j[i][2].split(" ");
      second = second.join(" ");
      const c = first.replace(first[0], first[0].toLowerCase());

      const e = second.replace(second[0], second[0].toUpperCase());
      const f = c.concat(e);
      console.log(f);
    }

    if (j[i][1] === "M") {
      let k = j[i][2].split(" ");
      let n = k.shift();
      let h = k.map((m) => {
        return m.replace(m[0], m[0].toUpperCase());
      });
      h.unshift(n);
      h.push("()");
      console.log(h.join(""));
    }
  }
}
