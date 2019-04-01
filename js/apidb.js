

results = null;
var apidb = {
    apiUrl: "https://api.themoviedb.org/3/",
    imgUrl: "https://image.tmdb.org/t/p/w300",
    imgUrlw4: "https://image.tmdb.org/t/p/w400",
    apiKey: "&api_key=63cc26fefa727967e62c45e86bae448e",
   
    getMovie: function(id){
        var rUrl = apidb.apiUrl + "movie/" + id + "?"  + apidb.apiKey;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var jObject = JSON.parse(this.responseText);
                var genres = "";
                for(i = 0; i < jObject.genres.length; i++){
                    genres += jObject.genres[i].name + ", ";
                }
                var country = (jObject.production_countries[0] === undefined) ? "" : jObject.production_countries[0].name;
                var movie = new Object();
                movie.id = jObject.id;
                movie.title = (jObject.title !== undefined) ? jObject.title : "";
                movie.image = (jObject.poster_path !== undefined) ? apidb.imgUrlw4 + jObject.poster_path : "";
                movie.vote_average = (jObject.vote_average !== undefined) ? jObject.vote_average : "";
                movie.runtime = (jObject.runtime !== undefined) ? jObject.runtime : "";
                movie.overview = (jObject.overview !== undefined) ? jObject.overview : "";
                movie.genres = genres;
                movie.country = country;
                results = movie;
            }
        };
        xhttp.open("GET", rUrl, false);
        xhttp.send();
        return false;
    },

    getBannerMovies: function(){
        var rQuery = "discover/movie?primary_release_year=2019&sort_by=vote_average.desc";
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var jObject = JSON.parse(this.responseText);
                var results = jObject["results"];
                for(i = 0; i <= 5; i++){
                    if(i == 2) {continue;}
                    $("#first_pictures").append(apidb.bannerView(results[i]));  
                }
            }
        };
        xhttp.open("GET", apidb.apiUrl + rQuery + apidb.apiKey, false);
        xhttp.send();
        return false;
    },

    getMainListMovies: function(page){
        var rQuery = "discover/movie?sort_by=popularity.desc";
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var jObject = JSON.parse(this.responseText);
                var results = jObject["results"];
                if(page == "home"){
                    for(i = 0; i < 5; i++){
                        $("#second_pictures").append(apidb.mainListView(results[i]));  
                    }
                } else if(page == "discover"){
                    for(i = 0; i < 15; i++){
                        $("#second_pictures").append(apidb.mainListView(results[i]));  
                    }
                }
            }
        };
        xhttp.open("GET", apidb.apiUrl + rQuery + apidb.apiKey, false);
        xhttp.send();
        return false;
    },

    filterByTitle: function(title){
        var rUrl = apidb.apiUrl + "search/movie?"  + apidb.apiKey + "&query=" + title;
        var xhttp = new XMLHttpRequest();
        $(".loader").show();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                $(".loader").hide();
                var jObject = JSON.parse(this.responseText);
                var results = jObject["results"];
                for(i = 0; i < results.length; i++){
                    console.log(results[i].title + " = " + title);
                    if(results[i].title.toLowerCase().localeCompare(title.toLowerCase()) === 0){
                        window.location.href = "search-results.html?_q=" + results[i].id;
                        break;
                    }
                }
            }
        };
        xhttp.open("GET", rUrl, false);
        xhttp.send();
        return false;
    },

    filterMovies: function(params){
        alert(params);
    },

    bannerView: function(movie){
        var url = apidb.imgUrl + movie.poster_path;
        var html = "\n\
            <div class='col20'> \n\
                <img class=slide-image src='" + url + "' alt='" + url + "'>\n\
            </div> \n\
        ";
        return html;
    },

    mainListView: function(movie){
        var date = new Date(movie.release_date);
        var imageUrl = apidb.imgUrl + movie.poster_path;
        var html = "<div class='col20 extend'>\n\
            <img class=slide-image2 src='" + imageUrl + "' alt='" + imageUrl + "'>\n\
            <div class='row pop_up'>\n\
                <div class='col100 pop-up-title'>\n\
                    <h3>" + movie.title + "</h3>\n\
                    <span class='ratings'>PG 13</span>\n\
                </div>\n\
                <div class='col100 pop-up-body'>\n\
                    <div class='imdb_class'>\n\
                        <span class='IMDb'>IMDb: " + movie.vote_average + "</span>\n\
                        <span class='year'>" + date.getFullYear() + "</span>\n\
                        <span class='min'>141 min</span>\n\
                    </div>\n\
                    <div class='paragraph'>\n\
                        <p>" + movie.overview + "</p>\n\
                        <p>\n\
                            Country: <span style='color:#ffcc99;'>United States</span><br>\n\
                            Genre: <span style='color:#ffcc99;'>Drama?Thriller</span><br/>\n\
                            Realesd: <span style='color:#ffcc99;'>" + movie.release_date + "</span>\n\
                        </p>\n\
                    </div>\n\
                    <div class='trailer_section'>\n\
                        <a> <i class='fa fa-play-circle'></i>Watch the trailer</a>\n\
                    </div>\n\
                </div>\n\
            </div>\n\
        </div>";
        return html;
    }
};

// define view html
// document.write("id: " + movie.id + "<br/>");
// document.write("title: " + movie.title + "<br/>");
// document.write("year: " + movie.release_date + "<br/>");
// document.write("ratings: " + movie.vote_average + "<br/>");
// document.write("description: " + movie.overview  + "<br/>");
// document.writeln("image: " + apidb.imgUrl + movie.poster_path);
// document.writeln("<br/>");
// document.writeln("<br/>");

// id: 331482
// title: Little Women
// year: 2019-12-25
// ratings: 0
// description: Four sisters come of age in America in the aftermath of the Civil War.
// image: https://image.tmdb.org/t/p/w300//evW02VpkBe9u1pIu1zzJWnPdf5H.jpg

// id: 331986
// title: The Public
// year: 2019-04-05
// ratings: 0
// description: Ensemble drama inspired by a 2007 LA Times story written by Chip Ward. "The Public" is the nickname given to one of the central characters in the film: The Los Angeles Public Library. The story revolves around the library inhabitants, many of whom are mentally ill, who seek shelter and warmth inside its walls during two of the coldest days in recent memory.
// image: https://image.tmdb.org/t/p/w300//gvTJ3B47x72rtw2wfzsr9NwZ0Qb.jpg

// id: 340933
// title: Agontimé
// year: 2019-01-01
// ratings: 0
// description: Priestess, slave, queen. After two centuries trapped in Sao Luis, Brazil, Agontimé breaks free and embarks back to her homeland, the Kingdom of Dahomey – current Benin –, hoping to retake the sacred place that is her by right.
// image: https://image.tmdb.org/t/p/w300//5rQDA2dlhO6jwB9wecdJ2nEdWWK.jpg

// id: 339395
// title: Georgetown
// year: 2019-04-26
// ratings: 0
// description: Ulrich Mott, an ambitious social climber, marries a wealthy widow in Washington D.C. in order to mix with powerful political players.
// image: https://image.tmdb.org/t/p/w300//aJYCVEoLAjR38BHGft5B5yQ72ri.jpg

// id: 342470
// title: All the Bright Places
// year: 2019-05-01
// ratings: 0
// description: Based on the internationally bestselling novel by Jennifer Niven, All The Bright Places tells the story of Violet Markey and Theodore Finch, who meet and change each other’s lives forever. As they struggle with the emotional and physical scars of their past, they come together, discovering that even the smallest places and moments can mean something. This compelling drama provides a refreshing and human take on the experience of mental illness, its impact on relationships, as well as the beauty and lasting impact of young love.
// image: https://image.tmdb.org/t/p/w300//e34YeYURkjkhAfXk1qtnu7cBXhS.jpg 