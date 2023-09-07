$( document ).ready(function() {
    console.log( "ready!" );
});

$(document).on("click", "#go", function( event ) {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    event.preventDefault();
    const input = fname.concat(' ',lname);
    document.querySelector('#jumbotron').append(input);
    return false;
});