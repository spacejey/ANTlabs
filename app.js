const showBtn = document.getElementById('btn-show')
const text1Input = document.getElementById('text1')
const text2Input = document.getElementById('text2')
const string1Diff = document.getElementById('string1-diff')
const string2Diff = document.getElementById('string2-diff')

function onClick() {
  const text1 = text1Input.value
  const text2 = text2Input.value
  const differences = findDifferences(text1, text2)
  highlightDifferences(text1, text2, differences)
}

function findDifferences(text1, text2) {
  const differences = []
  for (let i = 0; i < Math.max(text1.length, text2.length); i++) {
    if (text1[i] !== text2[i]) {
      differences.push(i)
    }
  }
  return differences
}

function highlightDifferences(text1, text2, differences) {
  let string1HTML = ''
  let string2HTML = ''

  for (let i = 0; i < Math.max(text1.length, text2.length); i++) {
    if (differences.includes(i)) {
      string1HTML += `<span class="highlight-pink">${text1[i] || ' '}</span>`
      string2HTML += `<span class="highlight-green">${text2[i] || ' '}</span>`
    } else {
      string1HTML += text1[i] || ' '
      string2HTML += text2[i] || ' '
    }
  }

  string1Diff.innerHTML = string1HTML
  string2Diff.innerHTML = string2HTML
}

showBtn.addEventListener('click', onClick)
