
exports.getDate = function() {

  let hoje = new Date();

  let opcoes = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }

  return hoje.toLocaleDateString("en-us", opcoes);
}

exports.getDay = function() {

  let hoje = new Date();

  let opcoes = {
    weekday: "long",
  }
  return hoje.toLocaleDateString("en-us", opcoes);
}
