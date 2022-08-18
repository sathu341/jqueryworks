$("document").ready(function(){
    console.log("working");
    // $(".bx").hover(function(){
    //     $(".bx").fadeOut(3000);
    // },function(){
    //     $(".bx").fadeIn(2000);
    // })
    // $(".bx").mouseover(function(){
    //     $(".bx").fadeOut(2000);
    // });
    // $(".bx").mouseleave(()=>{
    //     $(".bx").fadeIn(2000);
    // })
     $("#btn").dblclick( ()=>{
        $("#img1").fadeToggle(2000);
     })
    // fad("#m1");
    // fad("#m2");
    // fad("#m3");
    // function  fad(x){
    //      $(x).hover(function(){
    //     $(x).slideUp(3000);
    // },function(){
    //     $(x).slideDown(2000);
    // })
    // }
  cnt=1
  mg=1
    setInterval(fads,2000);
    setInterval(imgsl,3000);
    var im=1;
    function imgsl(){
        if(im>20){
            im=1;
        }
        
        $("#m4").attr('src','images/wild ('+im+').jpg');
        // $("#m4").fadeIn(1000);
        im++;
    }
    function fads(){
        if(cnt>3){
            cnt=1;
        }
        if(mg>20){
            mg=1;
        }
      $("#m"+cnt).slideToggle(2000);
      $("#m"+cnt).attr('src','images/wild ('+mg+').jpg')
      cnt++;
      mg++;
      
    }
});