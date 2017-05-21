$(document).ready( function() {


  var btn = document.getElementsByTagName('button')[0];

  btn.addEventListener("click", function(){
    alert("hello");
    var query = String(document.getElementById("query").value);
    console.log(query);

    //url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=api&limit=2&namespace=0&format=json"
    //url = "https://en.wikipedia.org/w/api.php"

    $.ajax({
          url: "https://en.wikipedia.org/w/api.php",
          jsonp: "callback",
          dataType: "jsonp",
          data: {
              action: "opensearch",
              search: query,
              limit: "25",
              format: "json"
          },
          xhrFields: {
              withCredentials: true
          },
          success: function (data) {
              console.log(data);

              $("article").remove();

              $("body").append("<article> </article>");

              $("article").append("<div>You Searched: " + query + "</div>");

              for (var i = 0; i < data[1].length; i++) {
                $("article").append("<p>" + data[1][i] +  "</p>");
                $("article").append("<p>" + data[2][i] +  "</p>");
                $("article").append("<a href=\"" + data[3][i] + "\"> Click Here to Go to the web page" + "</a>");
                $("article").append("<hr>");

              }
          }
      });

  });

});
