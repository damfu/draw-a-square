var sym = "", n = 7;
for (i = 1-n; i < n; i++) {
  for (j = 1-n; j < n; j++) sym += n-1 - Math.abs(i) - Math.abs(j) ?" ":"@"
  console.log(sym);
  sym = "";
}
