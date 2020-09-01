<?php

  include('database.php');

  $query = "";
  $result = mysqli_query($connection, $query);

  echo $_POST['id'];
  echo $_POST['name'];
  echo $_POST['description'];


 ?>
