$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");

        var newDevouredState = {
            devoured: newDevoured
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to", newDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#bur").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});

























// $(function () {
//     $(".create-form").on("submit", function (event) {
//         event.preventDefault();

//         var newBurger = {
//             burger_name: $("#newburger").val().trim(), devoured: 0
//         };

//         $.ajax("/api/burgers", {
//             type: "POST",
//             data: newBurger
//         }).then(function () {
//             console.log("Added new burger");
//             location.reload();
//         });
//     });

//     $(".eatburger").on("click", function (event) {
//         event.preventDefault();

//         var id = $(this).data("id");
//         var devouredState = {
//             devoured: 1
//         };

//         $.ajax("/api/burgers/" + id, {
//             type: "PUT",
//             data: devouredState
//         }).then(function () {
//             console.log("Burger Devoured");
//             location.reload()
//         })
//     });
//     $(".trashburger").on("click", function(event) {
//         event.preventDefault();

//         var id = $(this).data("id");

//         $.ajax({
//             type: "DELETE",
//             url: "/api/burgers" + id
//         }).then(location.reload());
//     })



// });














// $(function() {
//     $(".change-devoured").on("click", function(event) {
//       var id = $(this).data("id");
//       var newDevoured = $(this).data("newdevoured");

//       var newDevouredState = {
//         devoured: newDevoured
//       };

//       // Send the PUT request.
//       $.ajax("/api/burgers/" + id, {
//         type: "PUT",
//         data: newDevouredState
//       }).then(
//         function() {
//           console.log("changed devoured to", newDevoured);
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });

//     $(".create-form").on("submit", function(event) {
//       // Make sure to preventDefault on a submit event.
//       event.preventDefault();

//       var newBurger = {
//         name: $("#bur").val().trim(),
//         devoured: $("[name=devoured]:checked").val().trim()
//       };

//       // Send the POST request.
//       $.ajax("/api/burgers", {
//         type: "POST",
//         data: newBurger
//       }).then(
//         function() {
//           console.log("created new burger");
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });

//     $(".delete-burger").on("click", function(event) {
//       var id = $(this).data("id");

//       // Send the DELETE request.
//       $.ajax("/api/burgers/" + id, {
//         type: "DELETE"
//       }).then(
//         function() {
//           console.log("deleted burger", id);
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
//   });





















