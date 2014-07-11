$(document).ready( function(){
	var titulo = "Curso de Desarrollo Web";
    jQuery(window).scroll(function(){
        var scrollTop = jQuery(window).scrollTop();
        if(scrollTop >= 390){ jQuery('#aflotar').addClass("flotante"); }
        else{ jQuery('#aflotar').removeClass("flotante"); }
    });
    $("#silabo").css("display","block");
	$("#plataforma").css("display","none");
	$("title").html("Silabo del "+titulo);
    $("#menu>a").on('click',function(e){
		e.preventDefault();
		var strAncla=$(this).attr('href');
		if(strAncla=="#silabo"){
			$("#silabo").css({"display":"block", "margin": "25px 0px 0px"});
			$("#silabo").addClass("efectoone");
			$("#plataforma").css("display","none");
			$("#software").css("display","none");
			$("title").html("Silabo del "+titulo);
		}
		else if(strAncla=="#plataforma"){
			$("#silabo").css("display","none");
			$("#software").css("display","none");
			$("#plataforma").css({"display":"block", "margin": "25px 0px 0px"});
			$("#plataforma").addClass("efectoone");
			$("title").html("Plataforma del "+titulo);
		}
		else if(strAncla=="#software"){
			$("#silabo").css("display","none");
			$("#plataforma").css("display","none");
			$("#software").css({"display":"block", "margin": "25px 0px 0px"});
			$("#software").addClass("efectoone");
			$("title").html("Software para el "+titulo);
		}
	});
});