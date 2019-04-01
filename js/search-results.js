$(document).ready(function(){

    var req = window.location.href.split('?');
    var params = req[1].split('=');
    apidb.getMovie(params[1]);

    var html = "<div class='col30'>\n\
            <img src='" + results.image + "'>\n\
        </div>\n\
        <div class='col60'>\n\
        <h1 id='title'>" + results.title + " -" + results.release_date + "</h1>\n\
        <div class='imdb_class'>\n\
            <span class='IMDb' style='background-color:yellow;'>IMDb: " + results.vote_average + "</span>\n\
            <span class='min white'> - " + results.runtime + " min</span>\n\
            <span class='min white'> - PG 16</span>\n\
        </div>\n\
        <br/>\n\
        <h4>Overview</h4>\n\
        <p class='white'>" + results.overview + "</p>\n\
        <p class='white'>\n\
            Country: <span style=color:#ffcc99;>" + results.country + "</span><br>\n\
            Genre: <span style=color:#ffcc99;>" + results.genres + "</span><br>\n\
        </p>\n\
        <h4>Trailer</h4>\n\
        <a href='https://www.themoviedb.org/movie/" + results.id + "-" + results.title + "?language=en-US#' target='_new'>Play Trailer</a>\n\
    </div>";
    $("#movie-results").append(html);

    $("#frmFilterByTitle").submit(function(){
        var title = $("#search").val();
        apidb.filterByTitle(title);
        return false;
    });
});
