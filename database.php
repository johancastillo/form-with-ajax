<?php

  $connection = mysqli_connect(
    'localhost',
    'usuario',
    'contraseña',
    'task'
  );

  //Comprobación
  if($connection){
    echo "Database is connected";
  }

?>
