$(function(){$("#gifName").hover(function(s){$(this).toggleClass("changeColor")}),$("#searchGifButton").click(function(s){searchGiphy($("#gifName").val())}),$("#gifName").keyup(function(s){searchGiphy($(this).val())})});const searchGiphy=s=>{$.ajax({url:"https://api.giphy.com/v1/gifs/search",type:"GET",data:{api_key:"6ByPYxb0YrpGYd8DBUMJVrhqvns7YFZQ",q:s,limit:5},success:s=>{showResults(s.data)},error:s=>{}})},showResults=s=>{$("#giphyResults").empty(),$.each(s,function(s,e){$("#giphyResults").append(`\n      <img class="giphyResultImage" src="${e.images.fixed_height.url}"/>\n      `)})};