$("#addTodo").click(function(){
    const inputTodo = $("#todoInput").val();
    $("#todoList").append("<li><input type='checkbox' > " + inputTodo + "</li>");
    $("input").val("");
})