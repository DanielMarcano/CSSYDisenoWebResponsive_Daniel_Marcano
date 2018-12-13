$(function() {
  $('#gifName').hover(function(event) {
    $(this).toggleClass('changeColor');
  });
  $('#searchGifButton').click(function(event) {
    searchGiphy($('#gifName').val());
  });
  $('#gifName').keyup(function(event) {
    searchGiphy($(this).val());
  });
});

const searchGiphy = (search) => {

  let api = "6ByPYxb0YrpGYd8DBUMJVrhqvns7YFZQ";

  $.ajax({
    url: "https://api.giphy.com/v1/gifs/search",
    type: 'GET',
    data: {
      api_key: api,
      q: search,
      limit: 5
    },
    success: (data) => {
      showResults(data.data);
    },
    error: (data) => {
    }
  });
};

const showResults = (resultData) => {
  $('#giphyResults').empty();
  $.each(resultData, function(key, giphyObject) {
    $('#giphyResults').append(`
      <img class="giphyResultImage" src="${giphyObject.images.fixed_height.url}"/>
      `);
  });
};
