$(document).ready(function(){
    
    apidb.getMainListMovies("discover");

    $("#frmFilter").submit(function(){
        var params = $(this).serialize().split("&");
        apidb.filterMovies(params);
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