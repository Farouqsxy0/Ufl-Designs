$(document).ready(function(){
        $(".list-icon").click(function(){
            $(".side-navbar").toggleClass("active-navbar");
            $(".section").toggleClass("shift-page");
            $(".logo").toggleClass("hidden");
        });
});
function showMore(){
    document.getElementById('link').parentElement.removeChild('link');
    document.getElementById('more').style.display = "block";
}
$(document).ready(function(){
    $('.nav-toggle').click(function(){
        var collapse_content_selector = $(this).attr('href');
        var toggle_switch = $(this);
        $(collapse_content_selector).toggle(function(){
            if ($(this).css('display')=='none'){
                toggle_switch.html('Read more...');
            }else{
                toggle_switch.html('hide');
            }
        })
    })
})

function show(ele){
    if (document.getElementById(ele).style.display == 'none')
    {
        document.getElementById(ele).style.display = 'block';
    }
    else 
    {
        document.getElementById(ele).style.display = 'none';
    }
}
function showHide(divId){
    if (document.getElementById(divId).style.display == 'none')
    {
        document.getElementById(divId).style.display = 'block';
        
    }
    else 
    {
        document.getElementById(divId).style.display = 'none';
    }
}
function showHide2(div){
    if (document.getElementById(div).style.display == 'none')
    {
        document.getElementById(div).style.display = 'block';
    }
    else 
    {
        document.getElementById(div).style.display = 'none';
    }
}