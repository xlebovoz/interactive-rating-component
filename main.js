const ratingsContainer = document.querySelector('.ratings');
var select = 0;

if (ratingsContainer) {
  ratingsContainer.onclick = function(event) {
    if (event.target.className === 'rate') {
      const allRates = document.querySelectorAll('.rate');
      allRates.forEach(function(rate) {
        rate.style.backgroundColor = '';
        rate.style.color = '';
      });
      
      event.target.style.backgroundColor = 'white';
      event.target.style.color = 'black';

      const selectedRating = event.target.textContent;
      select = selectedRating
      
      console.log('Вы выбрали:', select);
    }
  }
}

document.getElementById('submit').addEventListener('click', go);

function go() {
  if (select != 0) {
    document.getElementById('main').style.display = 'none';
    document.getElementById('end').style.display = 'block';
  } else {
    alert('rate us')
  }
};