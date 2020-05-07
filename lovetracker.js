var flames = document.querySelector(".flames")
flames.addEventListener('click',function(){
	var first = document.querySelector("#firstpart").value
	 console.log(first)
     var second = document.querySelector("#secondpart").value
      console.log(second)
       var result = document.querySelector(".result")
      console.log(result)
      
      if(first==""){
      	alert('Enter your name')
      	
      }else if(second==""){
      	alert("Enter second name")
      	
      }

       




function ll(string1,string2){
	var n =[]
	var s1 = string1.split("")
	var s2 = string2.split("")
	for (var i = 0; i < s1.length; i++) {
		for (var j = 0; j < s2.length; j++) {
			// console.log(string1[i])
			// console.log(string2[j])
			var s = s1.sort()
			var s3 = s2.sort()
			// console.log(s)
			// console.log(s3)
			if(string1[i]==string2[j]){
				console.log(n.push(string1[i]));
				console.log(n)
			}
		}
	}
	var flames ="flames"
	
       
	for (var k = 1; k <=flames.length; k++) {
		// console.log([flames[k]])
		var p = flames.split("")
		var sp = p.splice(n.length,k)
		console.log(sp+  "   value remove")
		console.log(p+   "   value left")
		
		// console.log(p.splice(1))
		if(k==flames.length){
		    var r =(p[n.length-1])
		    console.log(r)
		   result.innerHTML=r;
		   if(first==""){
      	  alert('Enter your name')
      	  result.innerHTML="";
      	
          }else if(second==""){
      	alert("Enter second name")
      	result.innerHTML="";
      	
          }else if(string1!==string2[j]){
				result.innerHTML="OOPS NO MATCH!!!"
			}
      }

		   if(r=='a'){
		   	result.innerHTML="Affair";
          }else if(r=='m'){
          	result.innerHTML="Yeaahh!!! its Marriage"

          }else if(r=="l"){
          	result.innerHTML="Love is in the airrr!!!!!"
          }else if(r=="f"){
          	result.innerHTML="You guyz are Friends"
          }else if(r=="e"){
          	result.innerHTML="Enemy!!!!"
          }else if(r=="s"){
          	result.innerHTML="Hi she is your sister"
          }	

		


		

		// console.log(p)
		// p.push[m]
		// console.log(m)

		// console.log(p)


		  
					
				}

}ll(first,second)

})


var reset = document.querySelector(".reset")
      console.log(reset)
      var first = document.querySelector("#firstpart")
      var second = document.querySelector("#secondpart")
      var result = document.querySelector(".result")
      reset.addEventListener('click',function(){
      	first.value="";
      	second.value="";
         result.innerHTML="";

      })
