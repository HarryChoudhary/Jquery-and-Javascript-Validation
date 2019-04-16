$(document).ready(function(){
	
jQuery.validator.addMethod("special",function(value,element){
	return /^[0-9]{10,10}$/.test(value);
},"Please enter in specified pattern");
	
	$("#Formjs").validate({
		rules:{
			USER_ID:
			{
				required:true,
				rangelength:[2, 6]
			},
			EMAIL:
				{
				required:true,
				email:true
				},
    		agree:
    		{
    			required:true
    		},
    		gender:
    		{
    			required:true
    		},
    		PASSWORD:
    			{
    			  required:true,
    			  alphanumeric:true,
    		      rangelength: [6, 23]
    			},
    		PASSWORD1:
    			{
    			required:true,
    			equalTo:PASSWORD
    			},
    		DOB:
    			{
    			required:true
    			},
    		country:
    			{
    			required:true
    			},
    		USERNAME:
    			{
    			lettersonly:true,
    			required:true
    			},
    		MOB:
    			{
    			required:true,
    			special:true
    			}
			},
		messages:
			{
			USER_ID:"Please enter valid User name",
			EMAIL:
				{
				required:"Please Enter Email ",
				email:"Enter correct email"
				},
			MOB:
				{
				required:"Please enter mobile no",
				special:"Enter 10 digit no"
				}
			
			},
	});
});
