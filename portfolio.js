 var tablinks=document.getElementsByClassName("tab-links");
     var tabcontents=document.getElementsByClassName("tab-contents");
     function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
     }










     let scrollContainer=document.querySelector(".work-list");
            let back=document.getElementById("back");
            let next=document.getElementById("next");
            scrollContainer.addEventListener("wheel",(evt)=>{
                evt.preventDefault();
                scrollContainer.scrollLeft += evt.deltaY;
                scrollContainer.style.scrollBehavior="auto"
            });
            next.addEventListener("click",()=>{
                scrollContainer.style.scrollBehavior="smooth";
                scrollContainer.scrollLeft +=900;
              });
              back.addEventListener("click",()=>{
                scrollContainer.style.scrollBehavior="smooth";
                scrollContainer.scrollLeft -=900;
              });







    var sidemenu=document.getElementById("sidemenu");
    function openmenu(){
        sidemenu.style.right="0";
    }
    function closemenu(){
        sidemenu.style.right="-200px";
    }








    var lastScrollPosition = $(document).scrollTop();
var number = 0;
$(window).on('scroll', function(e) {
    if($(document).scrollTop() > lastScrollPosition ){
        number++;
    }
})

