$(function() {

  // your code will go here
    $.ajax({
        url: 'https://www.codeschool.com/users/shivjisakina.json',
        dataType: 'jsonp',
        success: function(response) {
             console.log(response.badges[i])

         }
    });

});
