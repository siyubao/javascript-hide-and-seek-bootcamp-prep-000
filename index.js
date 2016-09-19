function getFirstSelector(s) {
  return document.querySelector(s)
}

function nestedTarget() {
  return document.querySelector('div')
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}

function increaseRankBy(n) {
  const elem = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = elem.length; i < l; i++) {
    let sub = elem[i].children

    for (let j = 0, k = sub.length; j < k; j++) {
      sub[j].innerHTML = parseInt(sub[j].innerHTML) + n
    }
  }
}
