$(document).ready(function(){

    apidb.getMainListMovies("discover");

    $("#frmFilter").submit(function(){
        window.location.href = "discover-results.html?" + $(this).serialize();
        return false;
    });

    $("#frmFilterByTitle").submit(function(){
        var title = $("#search").val();
        apidb.filterByTitle(title);
        return false;
    });
});

function togleFilter(){
    if($("#hiden_filter").is(":visible")){
        $("#hiden_filter").css({"display" : "none"});
    } else {
        $("#hiden_filter").css({"display" : "block"});
    }
}