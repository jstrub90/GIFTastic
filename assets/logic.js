$(document).ready(function(){
    $('button').on('click', function() {
        var nature = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + nature + "&api_key=iRKDe4cGfkqhdC7ypGjOjCsIzUisj5ax&limit=10";

        $.ajax({
            url: queryURL,
            method: 'GET'
        })
        .then(function(response) {


            console.log(response)

            var results = response.data;

            for (var i = 0; i < results.length; i++) {

                var natureDiv = $('<div/>');

                var p =$('<p/>');

                p.text(results[i].rating);

                var natureImage = $('<img/>');

                natureImage.addClass('anImg')

                natureImage.attr('src', results[i].images.fixed_height.url);

                natureImage.attr('data-still', results[i].images.fixed_height_still.url)

                natureImage.attr('data-animate', results[i].images.fixed_height.url)

                .attr('data-state', 'still');

                natureDiv.append(p);

                natureDiv.append(natureImage);

                natureDiv.prependTo($('#gifs'));
            }

            $('.natImg').on('click', function() {
        
                var state = $(this).attr('data-state'); 
                console.log(this);

                if (state == 'still') {
                
                $(this).attr('src', $(this).data('animate'));
                
                $(this).attr('data-state', 'animate');

                } else {
                        
                $(this).attr('src', $(this).data('still'));
                
                $(this).attr('data-state', 'still');
                }      
            });
        });
});
var natureGifs = [''];

    
        $('#submitButton').on('click', function(){
            var natureButton = $("#gif-input").val();

            var newButton = $("<button/>").addClass( "btn btn-primary landscape").attr('data-name',natureButton).html(natureButton);
            
            $("#landscapebuttons").append(newButton);

            queryURL = "https://api.giphy.com/v1/gifs/search?q=" + natureButton + "&api_key=iRKDe4cGfkqhdC7ypGjOjCsIzUisj5ax&limit=10";
                console.log(natureButton);

            $.ajax({
            url: queryURL,
            method: 'GET'
            })

            .done(function(response) {

            var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var natureDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var natureImage = $('<img/>');

                    natureImage.addClass('natImg')

                    natureImage.attr('src', results[i].images.fixed_height_still.url);

                    natureImage.attr('data-still', results[i].images.fixed_height_still.url)

                    natureImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    natureDiv.append(p);

                    natureDiv.append(natureImage);

                    natureDiv.prependTo($('#gifs'));
                }

                $('.natImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });

            $("#gif-input").val("");
            return false;
        })
  
});