'use strict';


$(document).ready (function() {




function generateNewDiv(submittedText) {
    
    return `
    <li>
      <span class="shopping-item">${submittedText}</span>
        <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
      <span class="button-label">delete</span>
        </button>
        </div>
    </li>
    `;
  }

function addNewDiv(newDiv) {
    $('ul').append('', newDiv);
}

function mainOne() {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        const submittedText = $('.js-shopping-list-entry').val();
        addNewDiv(generateNewDiv(submittedText));    
    })
}
$(mainOne());





function toggleCheck() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        let thisItem = $(this).closest('li').find('.shopping-item');
        thisItem.toggleClass('shopping-item__checked');
    })
}
$(toggleCheck());







function deleteDiv() {
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
        console.log('hello');
    })
}
$(deleteDiv());









})