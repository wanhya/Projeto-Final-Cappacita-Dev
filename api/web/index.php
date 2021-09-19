<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="php.css">
    <title>Movies</title>
    
</head>
<body>
    
    <header>
        
        <div class="logo">
             <img src="img/cap.png" />                       
             <div class="menu-itens">
                <a href="http://localhost:9001/movies.html"> Home </a> 
                               
             </div> 
        </div>        
   
</header >


<?php 
$result = file_get_contents("http://node-container:9001/id/comentario");
$comentario = json_decode($result);
?>


<div>

    <thead>
        <h1>Comentários</h1> 

    </thead>

<div class="tabela">

    <?php foreach($comentario as $comentario): ?>
        
        
            <h3>   <?php echo $comentario -> descricao; ?>  </h3> 
         
        
    <?php endforeach; ?>

    </thead>
    
    </div>

</div>
  



</body>

</html>