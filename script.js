var yearInput = document.querySelector('#year')
var checkAction = document.querySelector('#check')
var loadingImg = document.querySelector('#loading-img')
var finalResult = document.querySelector('#final-result')
var result = document.querySelector('#result')
var finalImg = document.querySelector('#final-img')

function checkLeap(event) {
  event.preventDefault()

  var year = parseInt(yearInput.value)

  if (year <= 0) {
    alert('Enter a valid year!')  
    return
  } 
  
  finalResult.style.display = 'none'
  loadingImg.style.display = 'block'

  setTimeout(function() {
      loadingImg.style.display = 'none'
      finalResult.style.display = 'block'
  }, 4200)
  
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    // console.log(year, 'is a leap year! :)')
    result.textContent = year + ' is a leap year!'
    finalImg.src = 'assets/yes.gif'
  } else {
    // console.log(year, 'is not a leap year! :(')
    result.textContent = year + ' is not a leap year!'
    finalImg.src = 'assets/sad.gif'
  }
}

checkAction.addEventListener('click', checkLeap)
