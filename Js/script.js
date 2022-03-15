//Business or Backend Logic
function Contact(first, last, street, city, county) {
  this.firstName = first;
  this.lastName = last;
  this.street = street;
  this.city = city;
  this.county = county;
}

Contact.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
}

//User Interface or Frontend Logic 
$(document).ready(function () {
  $("form#new-contact").submit(function (event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedStreet = $("input#new-street").val();
    var inputtedCity = $("input#new-city").val();
    var inputtedCounty = $("input#new-county").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedStreet, inputtedCity, inputtedCounty);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function () {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".street").text(newContact.street);
      $(".city").text(newContact.city);
      $(".county").text(newContact.county);
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-street").val("");
    $("input#new-city").val("");
    $("input#new-county").val("");

  });

});