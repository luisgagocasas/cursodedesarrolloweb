<?php
include_once('MCAPI.class.php');
$respuesta = new stdClass();
$apikey="b2cd7758d262f7adbd3300bf15ba6af6-us3";
$mailchimp = new MCAPI($apikey,true);
$email=$_POST['correo'];
$nombre=$_POST['nombre'];
$apellido=$_POST['apellido'];
$listId="e27cad8940";
$merge_vars = array('NOMBRES'=>$nombre, 'APELLIDOS'=>$apellido);

$resultado=$mailchimp->listSubscribe($listId,$email,$merge_vars);
//Controlamos los errores
if (!$mailchimp->errorCode){
    $respuesta->mensaje ="\tCode=".$mailchimp->errorCode."\n";
    $respuesta->mensaje .="\tMsg=".$mailchimp->errorMessage."\n";
}
else {
   $respuesta->mensaje = "<span class=\"icon-trophy copacolor\"></span> Revise su correo para confirmar tu suscripción. <span class=\"icon-trophy copacolor\"></span>";
}
echo json_encode($respuesta);
?>