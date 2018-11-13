// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

  $(".change-devoured").on("click", function () {
    event.preventDefault();
    // console.log("this has been clicked on");
    var id = $(this).data("id");
    // console.log("devour", id)
    var newDevour = $(this).data("newdevour");
    var newDevourState = {
      devoured: newDevour
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function () {
        // Reload the page to get the updated list
        window.location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers/", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function () {
    var id = $(this).data("id");
    console.log("delete button", id);

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

