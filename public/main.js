var trash = document.querySelectorAll(".datrash");
var comBtn = document.querySelectorAll(".comBtn");
const comment = document.querySelectorAll(".poemAns");
const comInput = document.querySelectorAll('.comInput');
const poem = document.querySelectorAll('.poem');


// Array.from(trash).forEach(function(element) {
//     element.addEventListener('click', function(){
      // alert ("this works!")
      // console.log(comment);

for (let i = 0; i < trash.length; i++) {
  trash[i].addEventListener('click', () => {
    fetch('poem', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'poem': poem[i].innerHTML,
      })
    }).then(function (response) {
      window.location.reload()
    })

  })
}

for (let i = 0; i < comBtn.length; i++) {
  comBtn[i].addEventListener('click', () => {
    console.log('hello')
    const comment = comInput[i].value
    fetch('poem', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'comment': comment,
        'poem': poem[i].innerHTML
      })
    }).then(function (response) {
      window.location.reload()
    })
  })
}
