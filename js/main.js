$(document).ready( function(){
	var titulo = "Curso de Desarrollo Web";
    jQuery(window).scroll(function(){
        var scrollTop = jQuery(window).scrollTop();
        if(scrollTop >= 450){ jQuery('#aflotar').addClass("flotante"); }
        else{ jQuery('#aflotar').removeClass("flotante"); }
    });
    $("#silabo").css("display","block");
	$("#luisgagocasas").css("display","none");
	$(".val1").addClass("marcado");
	$("#apellidos").css("display","none");
    $("#menu>a").on('click',function(e){
		e.preventDefault();
		var strAncla=$(this).attr('href');
		if(strAncla=="#silabo"){
			$("#silabo").css({"display":"block", "margin": "25px 0px 0px"});
			$("#silabo").addClass("efectoone");
			$("#silaboaplicaciones").css("display","none");
			$("#luisgagocasas").css("display","none");
			$("title").html("Silabo del "+titulo);
			$(".val1").addClass("marcado");
			$(".val2").removeClass("marcado");
			$(".val3").removeClass("marcado");
		}
		else if(strAncla=="#silaboaplicaciones"){
			$("#silaboaplicaciones").css({"display":"block", "margin": "25px 0px 0px"});
			$("#silaboaplicaciones").addClass("efectoone");
			$("#plataforma").css("display","none");
			$("#horario").css("display","none");
			$("#luisgagocasas").css("display","none");
			$("title").html("Silabo del "+titulo);
			$(".val1").addClass("marcado");
			$(".val2").removeClass("marcado");
			$(".val3").removeClass("marcado");
		}
		else if(strAncla=="#luisgagocasas"){
			$("#silabo").css("display","none");
			$("#silaboaplicaciones").css("display","none");
			$("#luisgagocasas").css({"display":"block", "margin": "25px 0px 0px"});
			$("#luisgagocasas").addClass("efectoone");
			$("title").html("Profesor de "+titulo);
			$(".val1").removeClass("marcado");
			$(".val2").removeClass("marcado");
			$(".val3").addClass("marcado");
		}
	});
	// Cuenta regresiva
	var $countdown = $('.countdown');
    $countdown.scountdown({
    	// timestampgenerator.com
        timestamp: parseInt(1420902000000, 10),
        callback: function (d, h, m, s) {
            $(".dias", $countdown).text(d);
            $(".horas", $countdown).text(h);
            $(".minutos", $countdown).text(m);
            $(".segundos", $countdown).text(s);
    	}
	});
});
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-42042618-4', 'auto');
ga('require', 'linkid', 'linkid.js');
ga('require', 'displayfeatures');
ga('send', 'pageview');