$("document").ready(
function(){
        //click event
        $("#btn2").click(
            function(){
                console.log("click event is working");
            }
        );
    

    //double click
    $("#btn").dblclick(
        function(){
            console.log("double click event is working");
        }
    );
  //mouseover
  $("#mrq").mouseover(
    function(){
        console.log("hai");
        this.stop();
  
    }
  );
//mouseleave or mouseout
$("#mrq").mouseleave(function(){
    this.start();
});
//hover
$("#mrq").hover(function(){
    this.stop();
},function(){
    this.start();
}
);

//keyup 
$("input[name='nm']").keyup(function(){
    var x;
    x=$("input[name='nm']").val();
    $("#msg").html(x);
});

//Focus 

$("input[name='ph']").focus(function(){
    var x;
    $("input[name='ph']").css("backgroundColor","green").css("color","white");
    
});
//blur
$("input[name='ph']").blur(function(){
    var x=$("input[name='ph']").val();
    $("input[name='ph']").css("backgroundColor","white").css("color","black");
    if(x==""){
        $("#msg2").html("Field is Required");
        $("input[name='ph']").css("backgroundColor","red").css("color","black");
    }
    else{
        $("#msg2").html(" ");
    }
    
});

    }
);

