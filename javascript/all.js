"use strict";

// ------ Hamburger ------
let ham_b = document.querySelector("div.ham_b");
ham_b.addEventListener("click", function(){
    let ham_menu = document.querySelector("ul.ham-menu");
    let hbtns = document.querySelectorAll(".hbtn");
    ham_menu.classList.toggle("active");
    hbtns.forEach(function(hbtn){
        hbtn.classList.toggle("active");
    });
    let ham_mask = document.querySelector("div#ham_mask");
    ham_mask.classList.toggle("noshow");
    ham_mask.addEventListener("click", function(){
        ham_mask.setAttribute("style", "animation: fadeout 1s linear")
        ham_mask.classList.add("noshow");
        ham_menu.classList.remove("active");
        hbtns.forEach(function(hbtn){
            hbtn.classList.remove("active");
    });
    });
});

let p_subsel = document.querySelector("ol.ham_subsel");

$("li.pli").on("click", function(){
    $("ol.ham_subsel").slideToggle();
});


let pli_btn = document.querySelector("li.pli");
pli_btn.addEventListener("click", function(){
    let p_vertical = document.querySelector("span.vertical");
    p_vertical.classList.toggle("active");
    let p_horizontal = document.querySelector("span.horizontal");
    p_horizontal.classList.toggle("active");
    let p_title = document.querySelector(".pli a");
    p_title.classList.toggle("currentpage");
});

// 選單 like
function menulike_check(){
    let m_filled = document.querySelectorAll("img.mheart_filled");
    let m_empty = document.querySelectorAll("img.mheart_empty");
    let likes = localStorage.getItem("l_items");
    m_filled.forEach(function(mb, i){
        if(likes != undefined && likes != "[]"){
            mb.classList.add("-on");
            m_empty[0].classList.add("-off");
            m_empty[1].classList.add("-off");
        }else{
            mb.classList.remove("-on");
            m_empty[0].classList.remove("-off");
            m_empty[1].classList.remove("-off");
        }
    });
};

menulike_check();




// ------ Footer RWD ------
let ftitle = document.getElementsByClassName("ftitle");
for(let i = 0; i < ftitle.length; i++){
    let fsub = document.getElementsByClassName("fsub");
    let farrow = document.getElementsByClassName("arrow");
    ftitle[i].addEventListener("click", function(){

        let fmenu_name = document.getElementsByClassName("fmenu_name");
        if(fsub[i].style.maxHeight == ""){
            fsub[i].style.maxHeight = fsub[i].scrollHeight + "px"; // 設定 CSS：max-height
            farrow[i].style.transform = "rotate(-180deg)";
        }else{
            fsub[i].style.maxHeight = ""; // 移除 CSS： max-height
            farrow[i].style.transform = "rotate(0deg)";
        }
        fmenu_name[i].classList.toggle("currentpage");
    });
}


// ----- Scroll 事件: 動畫 active-------

    window.addEventListener("scroll", function(){
        let slidein = document.getElementsByClassName("slidein");
        for(let i = 0; i < slidein.length; i++){
            if( ((this.scrollY + this.innerHeight) - slidein[i].offsetHeight / 3) > slidein[i].offsetTop){
                    // console.log("here");
                
                slidein[i].classList.add("active");
            }else{
                slidein[i].classList.remove("active");
            };
        }
    
        let fadein = document.getElementsByClassName("fadein");
        for(let i = 0; i < fadein.length; i++){
            if( ((this.scrollY + this.innerHeight) - fadein[i].offsetHeight / 3) > fadein[i].offsetTop){
                // console.log("here");
            
                fadein[i].classList.add("active");
            }else{
                fadein[i].classList.remove("active");
            };
        }
    
        let shrink = document.getElementsByClassName("shrink");
        for(let i = 0; i < shrink.length; i++){
            if( ((this.scrollY + this.innerHeight) - shrink[i].offsetHeight / 3) > shrink[i].offsetTop){
                // console.log("here");
            
                shrink[i].classList.add("active");
            }else{
                shrink[i].classList.remove("active");
            };
        }
        
    });


// ----- newsletter input ------
$("input.the_btn").on("click", function(){
    alert("Thank you for subscribing!");
    $("input.the_text").val("");
});

//---- Back to top ---------
$(function(){
	$('#backtop').click(function(){ 
		$('html,body').animate({scrollTop: 0}, 700);
	});
	$(window).scroll(function() {
		if ( $(this).scrollTop() > 350 ){
			$('#backtop').fadeIn(500);
		} else {
			$('#backtop').stop().fadeOut(500);
		}
	}).scroll();
});

$(window).on("scroll", function(){
    if ($(document).scrollTop() >= $(document).height() - $(window).height() - 200){
        $('#backtop').css("animation", "popping 2s ease infinite");
    }else{
        $('#backtop').css("animation", "none");
    };

    // if ($(document).scrollTop() >= $(document).height() - $(window).height() - 200)
});
