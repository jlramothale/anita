
$(document).ready(function(){
    
    apidb.getBannerMovies();
    apidb.getMainListMovies("home");
    
    $("#frmFilterByTitle").submit(function(){
        var title = $("#search").val();
        apidb.filterByTitle(title);
        return false;
    });
});