let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

const variables = [
  { name: "nom", value: nom },
  { name: "age", value: age },
  { name: "ville", value: ville },
  { name: "score", value: score },
  { name: "actif", value: actif },
];

console.log("=== Partie A : ?? ===");
variables.forEach(v => {
  console.log(`${v.name} ?? "valeur par défaut" ->`, v.value ?? "valeur par défaut");
});

console.log("\n=== Partie B : || ===");
variables.forEach(v => {
  console.log(`${v.name} || "valeur par défaut" ->`, v.value || "valeur par défaut");
});

console.log("\n=== Partie C : Comparaison ?? vs || ===");
variables.forEach(v => {
  const resultatNullish = v.value ?? "valeur par défaut";
  const resultatOr = v.value || "valeur par défaut";
  const comparaison = (resultatNullish === resultatOr) ? "même résultat" : "résultat différent";
  console.log(`${v.name} : ?? et || -> ${comparaison}`);
});