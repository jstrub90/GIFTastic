iRKDe4cGfkqhdC7ypGjOjCsIzUisj5ax

$(document).ready(function(){

    $('button').on('click', function() {
        var nature = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + nature + "&api_key=iRKDe4cGfkqhdC7ypGjOjCsIzUisj5ax&limit=10";

        $.ajax({
            url: queryURL,
            method: 'GET'
        })