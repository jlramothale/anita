$(document).ready(function(){

    var req = window.location.href.split('?');
    var params = req[1].split('&');
    var genre = params[0].split("=")[1];
    var year = params[1].split("=")[1];
    apidb.filterMovies([genre, year]);

    $("#frmFilterByTitle").submit(function(){
        var title = $("#search").val();
        apidb.filterByTitle(title);
        return false;
    });
});
