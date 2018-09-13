function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var ranks =  document.querySelectorAll("ul.ranked-list li");
  for (let i = 0; i < ranks.length; i++) {
   var intRank = parseInt(ranks[i].innerHTML);
   ranks[i].innerHTML = intRank + n;
  }
}

function deepestChild() {
  var node = document.getElementById('grand-node');
  while (node.children.length > 0) {
    node = node.children[0];
  }
  return node;
}