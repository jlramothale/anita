

var apidb = {

    apiUrl: "https://api.themoviedb.org/3/",
    imgUrl: "https://image.tmdb.org/t/p/w300/",
    apiKey: "&api_key=63cc26fefa727967e62c45e86bae448e",

    getBannerMovies: function(){
        var rQuery = "discover/movie?primary_release_year=2019&sort_by=vote_average.asce";
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var jObject = JSON.parse(this.responseText);
                var results = jObject["results"];
                for(i = 0; i < 5; i++){
                    apidb.bannerView(results[i]);
                }
            }
        };
        xhttp.open("GET", apidb.apiUrl + rQuery + apidb.apiKey, false);
        xhttp.send();
    },

    getMainListMovies: function(page){
        var rQuery = "discover/movie?primary_release_year=2019&sort_by=vote_average.asce";
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var jObject = JSON.parse(this.responseText);
                var results = jObject["results"];
                if(page == "home"){
                    for(i = 0; i < 5; i++){
                        apidb.mainListView(results[i], page);
                    }
                } else if(page == "discover"){
                    for(i = 0; i < 15; i++){
                        apidb.mainListView(results[i], page);
                    }
                }
            }
        };
        xhttp.open("GET", apidb.apiUrl + rQuery + apidb.apiKey, false);
        xhttp.send();
    },

    bannerView: function(movie){
        // define view html
        document.write("id: " + movie.id + "<br/>");
        document.write("title: " + movie.title + "<br/>");
        document.write("year: " + movie.release_date + "<br/>");
        document.write("ratings: " + movie.vote_average + "<br/>");
        document.write("description: " + movie.overview  + "<br/>");
        document.writeln("image: " + apidb.imgUrl + movie.poster_path);
        document.writeln("<br/>");
        document.writeln("<br/>");
    },

    mainListView: function(movie, page){
        // define view html
    }
};






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