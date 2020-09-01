$(function(){
  console.log('JQuery is Working')

  $('#search').keyup(function(){
    let search = $('#search').val();
    $.ajax({
      url: 'task-search.php',
      type: 'POST',
      data: {search: search},
      success: function(response){
        JSON.parse(response)
      }
    })
  })
});
