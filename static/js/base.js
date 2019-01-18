console.log("base.js connected");

//colpr changing effects of brand
$(".brand-u").hover(()=>{
	var randcolor = randomcolor();
	var time = 0;
	for(var i=1; i<=13; i++){
		var id = "#let" + String(i);
		time = time +170;
        $(id).css('transition',String(time) + "ms");
        $(".fa-spa").css('color', String(randcolor));
		$(id).css('color', String(randcolor));
		// $(id).css({textShadow: String(randcolor) + " 0 0 3px"});
	}
});

// random color generator
function randomcolor()  {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb("+r+", "+g+", "+b+")"
}

// to show navItems on clicking bars
$(".bars-u").click(()=>{
    $(".navContent-u").slideToggle();
});
// to read the screen width and set display block if px > 900
$(document).ready(()=> {
    function checkWidth() {
        var windowSize = $(window).width();

        if (windowSize >= 1150) {
            $(".navContent-u").css("display", "block");
        }else if (windowSize < 1150)  {
            $(".navContent-u").css("display", "none");
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});

// to scroll down the category on hover
$(".dropdown-u").hover(()=>{
    $(".dropdownContent-u").fadeToggle();
});

//focus effects on search bar
$(".searchArea").focus(()=>{
    var randcolor = randomcolor();
    $(".searchBar").css('border', '2px solid ' + String(randcolor));
    $(".searchBar").css('box-shadow', "2px 0px 3px " + String(randcolor));
    $(".fa-search").css('color', String(randcolor));
});
$(".searchArea").blur(()=>{
    var randcolor = randomcolor();
    $(".searchBar").css('border', '2px solid rgb(226, 226, 226)');
    $(".searchBar").css('box-shadow', 'none');
    $(".fa-search").css('color', 'white');
});

// code for showing search reasult
$('.searchArea').keyup(()=>{
    var searchText = $('.searchArea').val();
    console.log(searchText.length);
    if(searchText.length > 0){
        $(".searchContent").css('display', 'block');
    }else{
        $(".searchContent").css('display', 'none');
    }
});

//code only for phone
if (window.matchMedia("(min-resolution: 192dpi)").matches) {
    $(".bars-u").click(()=>{
        var randcolor = randomcolor();
        var time = 0;
        for(var i=1; i<=13; i++){
            var id = "#let" + String(i);
            time = time +170;
            $(id).css('transition',String(time) + "ms");
            $(".fa-spa").css('color', String(randcolor));
            $(id).css('color', String(randcolor));
            // $(id).css({textShadow: String(randcolor) + " 0 0 3px"});
        }
    });
}
//ajax for search
$(()=>{
    $('#search').keyup(()=> { 
        $.ajax({
            type: "POST",
            url: "/accounts/search/",
            data: {
                'search_text': $('#search').val(),
                'csrfmiddlewaretoken': $("input[name=csrfmiddlewaretoken]").val()
            },
            dataType: "html",
            success: (res,status,xhr)=> {
                $('#search_results').html(res);
                console.log(res);
            }
        });
    });
});
