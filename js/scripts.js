$(document).ready(function() {
  $("form#groceries").submit(function(event) {
    event.preventDefault();
    const item1 = $("#item1").val();
    const item2 = $("#item2").val();
    const item3 = $("#item3").val();
    const groceryList = [item1, item2, item3]
    groceryList.sort() ;
    $("#groceries").hide();
    //$("#big-list").toUpperCase();
  
    //console.log(groceryList);
    $("#grocery-list").text(groceryList[0]);
    $("#grocery-list2").text(groceryList[1])
    $("#grocery-list3").text(groceryList[2])
  });
});