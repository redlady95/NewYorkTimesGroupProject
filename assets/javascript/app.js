 
        //on click event
        $("#search").on("click", function () {

            //create a query
            //var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";


            //var iniDate = 20120101;
            //var endDate = 20190228;
            var iniDate = $("#ini-date").val().trim()+"0101";
            iniDate=parseInt(iniDate); 
            var endDate = $("#end-date").val().trim()+"1231";
            endDate=parseInt(endDate); 
            console.log(iniDate, endDate); 
            var query = $("#exampleFormControlInput1").val().trim(); 
            var filter = 'news_desk:("Sports") AND glocations:("NEW YORK CITY")';
            var apiKey = "xD3kkxS8Ju3BRR99VVaBCrAdJVFinyEg";

            //   var queryURL = `/articlesearch.json?q=${query}&fq=${filter}`;
            //   var queryURL = "/articlesearch.json?q="+query+"&fq="+filter;
            //var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=xD3kkxS8Ju3BRR99VVaBCrAdJVFinyEg"
            var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&fq=" + filter + "begin_date=" + iniDate + + "end_date=" + endDate + "&api-key=" + apiKey;

            //ajax call using the query  
            $.ajax({
                url: queryURL,
                method: "GET"
            })

                //promise function
                .then(function (response) {

                    console.log(response);

                });
        });
  