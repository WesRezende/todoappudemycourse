//Select Todo
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//Delete todo
$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation;
});

//Create Todo

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    let todoText = $(this).val();
    $(this).val("");
    $("ul").append(
      "<li><span> <i class='fas fa-trash-alt'></i> </span> " +
        todoText +
        "</li>"
    );
  }
});

//Select plus sign
$("#toggle-icon").on("click", function() {
  $("input[type='text']").fadeToggle();
});
