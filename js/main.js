$(document).ready( function(){
	var titulo = "Curso de Desarrollo Web";
    jQuery(window).scroll(function(){
        var scrollTop = jQuery(window).scrollTop();
        if(scrollTop >= 450){ jQuery('#aflotar').addClass("flotante"); }
        else{ jQuery('#aflotar').removeClass("flotante"); }
    });
    $("#silabo").css("display","block");
	$("#plataforma").css("display","none");
	$("#horario").css("display","none");
	$("title").html("Silabo del "+titulo);
	$(".val1").addClass("marcado");
	$("#apellidos").css("display","none");
    $("#menu>a").on('click',function(e){
		e.preventDefault();
		var strAncla=$(this).attr('href');
		if(strAncla=="#silabo"){
			$("#silabo").css({"display":"block", "margin": "25px 0px 0px"});
			$("#silabo").addClass("efectoone");
			$("#plataforma").css("display","none");
			$("#horario").css("display","none");
			$("title").html("Silabo del "+titulo);
			$(".val1").addClass("marcado");
			$(".val2").removeClass("marcado");
			$(".val3").removeClass("marcado");
			$(".val4").removeClass("marcado");
		}
		else if(strAncla=="#plataforma"){
			$("#silabo").css("display","none");
			$("#horario").css("display","none");
			$("#plataforma").css({"display":"block", "margin": "25px 0px 0px"});
			$("#plataforma").addClass("efectoone");
			$("title").html("Plataforma del "+titulo);
			$(".val1").removeClass("marcado");
			$(".val2").addClass("marcado");
			$(".val3").removeClass("marcado");
			$(".val4").removeClass("marcado");
		}
		else if(strAncla=="#horarios"){
			$("#silabo").css("display","none");
			$("#plataforma").css("display","none");
			$("#horario").css({"display":"block", "margin": "25px 0px 0px"});
			$("#horario").addClass("efectoone");
			$("title").html("Software para el "+titulo);
			$(".val1").removeClass("marcado");
			$(".val2").removeClass("marcado");
			$(".val3").addClass("marcado");
			$(".val4").removeClass("marcado");
		}
	});
	$("#frmcheck").submit(function(){
        var formulario = $("#frmcheck").serializeArray();
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "mailchimp/mail.php",
            data: formulario
        }).done(function(respuesta){
            $("#mensaje").html(respuesta.mensaje).fadeIn();
        });
        return false;
    });
	$("#nombre").focus(function() {
		$("#apellidos").css("display","inline-block");
		$(".msj").css("display","none");
	});
});