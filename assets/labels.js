$(document).ready(function() {
    // Fetch the label and its text
    var placeholderText = $("label[for='FN']").text();

    // Remove the unnecessary label
    $("label[for='FN']").remove();

    // Set the placeholder attribute
    // and enable the plugin for broswer not supporting it
    $("#FN").attr('placeholder', placeholderText).enablePlaceholder();
});