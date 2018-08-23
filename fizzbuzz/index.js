'use strict';

function fizzBuzz(n) {
  if(n % 15 === 0) return 'fizzbuzz';
  if(n % 5 === 0) return 'buzz';
  if(n % 3 === 0) return 'fizz';
  return n;
}

function generateHtml(fizzbuzzItem) {
  let className = '';
  if(typeof fizzbuzzItem === 'string') {
    className = fizzbuzzItem;
  }

  return `
    <div class="fizz-buzz-item ${className}">
      <span>${fizzbuzzItem}</span>
    </div>
  `;
}


function main() {
  $('#number-chooser').submit(event => {
    event.preventDefault();

    const count = $('#number-choice').val()
    $('#number-choice').val('');

    const fizzResults = [];

    for(let i = 1; i <=count; i++) {
      fizzResults.push(fizzBuzz(i));
    }

    const htmlElements = fizzResults.map(result => generateHtml(result));

    $('.js-results').html(htmlElements);
  });

}

$(main);