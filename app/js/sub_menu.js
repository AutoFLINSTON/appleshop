var id_menu = new Array('sub_menu_1','sub_menu_2','sub_menu_3','sub_menu_4','sub_menu_5','sub_menu_6');
startList = function allclose() {
	for (i=0; i < id_menu.length; i++){
		document.getElementById(id_menu[i]).style.display = "none";
	}
}
function openMenu(id){
	for (i=0; i < id_menu.length; i++){
		if (id != id_menu[i]){
			document.getElementById(id_menu[i]).style.display = "none";
		}
	}
	if (document.getElementById(id).style.display == "block"){
		document.getElementById(id).style.display = "none";
	}else{
		document.getElementById(id).style.display = "block";
	}
}
window.onload=startList;


window.onload = function() { 

	var scrollUp = document.getElementById('toTop'); 

	scrollUp.onmouseover = function() { 
		scrollUp.style.opacity=0.5;
		scrollUp.style.filter  = 'alpha(opacity=50)';
	};

	scrollUp.onmouseout = function() { 
		scrollUp.style.opacity = 0.3;
		scrollUp.style.filter  = 'alpha(opacity=30)';
	};

	scrollUp.onclick = function() {
		window.scrollTo(0,0);
	};



	window.onscroll = function () { 
		if ( window.pageYOffset > 0 ) {
			scrollUp.style.display = 'block';
		} else {
			scrollUp.style.display = 'none';
		}
	};
};