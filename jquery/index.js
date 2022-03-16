$(document).ready(function(){

    var loginUsername;
	var loginPassword;
	var account = [loginUsername, loginPassword];



    
    $("#login_btn2").click(function(){

        var loginUsernameEntry = $("#lemail").val();
		var loginPasswordEntry = $("#lpass").val();
		if (loginUsernameEntry == account[0] && loginPasswordEntry == account[1]) {
			console.log("Current Username " + account[0]);
			console.log("Current Password " + account[1]);
			console.log("Logged In");
		} else {
			console.log("Attempted Username " + loginUsernameEntry);
			console.log("Attempted Password " + loginPasswordEntry);
			console.log("Login Falied");
		};
	




        $("#main").animate({left:"22.5%"},400); 
        $("#main").animate({left:"30%"},500); 
        $("#loginform").css("visibility","hidden");
        $("#loginform").animate({left:"25%"},400);
        
        $("#signupform").animate({left:"17%"},400);
        $("#signupform").animate({left:"30%"},500);
        $("#signupform").css("visibility","visible");

    }); 


    $("#signup_btn2").click(function(){
        
        var createUsernameEntry = $("#sname").val();
		var createPasswordEntry = $("#spass").val();
		var createEmailEntry = $("#semail").val();
        var createUsernameValid = false;
        var createPasswordValid = false;
        var createEmailValid = false;
        var createUsernameObject = $("#sname");
        var createPasswordObject = $("#spass");
        var createEmailObject = $("#semail");
        var validate = /^\s*[a-zA-Z0-9,\s]+\s*$/;
        var validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!validate.test(createUsernameEntry) || (createUsernameEntry).length == 0) {
            $(createUsernameObject).addClass("error")
        $(createUsernameObject).css("color", "red");
            $(createUsernameObject).val("No special characters or spaces.")
          } else {
        $(createUsernameObject).css("color", "green");
            createUsernameValid = true;
            var createUsername = $(createUsernameObject).val();
          }

          
    if(!validate.test(createPasswordEntry) || (createPasswordEntry).length == 0) {
        $(createPasswordObject).addClass("error");
        $(createPasswordObject).val("No special characters or spaces.");
        $(createPasswordObject).attr('type','text');
        $(createPasswordObject).css("color", "red");
      } else {
        $(createPasswordObject).attr('type','password');
        $(createPasswordObject).css("color", "green");
        createPasswordValid = true;
        var createPassword = $(createPasswordObject).val();
      }
      
      if(!validateEmail.test(createEmailEntry)) {
          $(createEmailObject).css("color", "red");
        $(createEmailObject).addClass("error");
        $(createEmailObject).val("Enter a valid email");
      } else {
        createEmailValid = true;
        $(createEmailObject).css("color", "green");

        console.log("Account Email " + createEmailObject.val())
      }
        
      $(createUsernameObject).on('click', function () {
        $(this).val("");  
        $(this).removeClass("error");
      });
      
      $(createPasswordObject).on('click', function () {
        $(this).val("");  
        $(this).removeClass("error");
      });
      
      $(createEmailObject).on('click', function () {
        $(this).val("");
        $(this).removeClass("error");
      });
      
          account = [createUsername, createPassword];
          console.log("Account Username " + account[0]);
          console.log("Account Password " + account[1]);


          if(createUsernameValid == true && createPasswordValid == true && createEmailValid == true) {
            $("#main").animate({left:"77.5%"},400); 
        $("#main").animate({left:"70%"},500);
        $("#signupform").css("visibility","hidden");
        $("#signupform").animate({left:"75%"},400);
        
        $("#loginform").animate({left:"83.5%"},400);
        $("#loginform").animate({left:"70%"},500);
        $("#loginform").css("visibility","visible");
          };
          
        

       
    });




    $("#signup_btn").click(function(){
        // $("#sname").val() = "";
		//  $("#spass").val() = "";
		//  $("#semail").val() = "";

        $("#lpass").val("");
        $("#lemail").val("");

        $("#main").animate({left:"22.5%"},400); 
        $("#main").animate({left:"30%"},500); 
        $("#loginform").css("visibility","hidden");
        $("#loginform").animate({left:"25%"},400);
        
        $("#signupform").animate({left:"17%"},400);
        $("#signupform").animate({left:"30%"},500);
        $("#signupform").css("visibility","visible");

    }); 
    $("#login_btn").click(function(){
        $("#sname").val("");
        $("#spass").val("");
        $("#semail").val("");

        $("#main").animate({left:"77.5%"},400); 
        $("#main").animate({left:"70%"},500);
        $("#signupform").css("visibility","hidden");
        $("#signupform").animate({left:"75%"},400);
        
        $("#loginform").animate({left:"83.5%"},400);
        $("#loginform").animate({left:"70%"},500);
        $("#loginform").css("visibility","visible");
    });
    

});








