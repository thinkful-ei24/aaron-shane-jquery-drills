// 'use strict';
// function handleThumbnailClicks() {

//   $('.thumbnail').on('click', function (event) {
//     console.log('click');

//     let selImg = $(this).find('img').attr('src');
//     const imgAlt = $(this).find('img').attr('alt');

//     $('.hero').attr('src', selImg).attr('alt', imgAlt);

//   });
// };
// $(handleThumbnailClicks);

function handleThumbnailClicks() {

  $('.thumbnail').on('click',
  function(event) {
     const imgSrc = $(this).find('img').attr('src');
     const imgAlt = $(this).find('img').attr('alt');

    $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);

    // Accomplishes the same as line 6 with only one use off .attr()
    // by passing it an object with multiple properties.
    // See: http://api.jquery.com/attr/#attr-attributes
    // $('.hero img').attr({'src': imgSrc, 'alt': imgAlt});
  });
}

$(handleThumbnailClicks);