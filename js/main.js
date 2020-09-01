$(function(){
  console.log('JQuery is Working')

  $('#search').keyup(function(){
    let search = $('#search').val();
    console.log(search);
  })
});
