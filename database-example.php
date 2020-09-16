<?php
/*
###############################################################
#  Crea en el directorio raiz del proyecto un archivo con     #
#  el nombre "database.php" con las mismas configuraciones de #
#  este archivo                                               #
###############################################################
*/

  $connection = mysqli_connect(
    'localhost',
    'usuario',
    'contraseña',
    'tasks_list_app'
  );

?>
