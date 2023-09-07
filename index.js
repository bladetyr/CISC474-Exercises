$( document ).ready(function() {
    console.log( "ready!" );
});

/*
$( "#nameform" ).on( "submit", function( event ) {
    alert("here");
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    //event.preventDefault();
    return(fname.concat(lname));
  });
*/

$(document).on("click", "#go", function( event ) {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    event.preventDefault();
    const input = fname.concat(' ',lname);
    document.querySelector('#jumbotron').append(input);
    return false;
});