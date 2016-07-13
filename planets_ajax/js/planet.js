function getPlanetDetails() {
			
				$.ajax({
				
					url: "http://localhost:3000/Udemy/planets_ajax/server.php",
					type: "POST",
					data: "planet_name="+$('#planet_name').val(),
					dataType: "json",
					success: function( response , status , http ) {
					
						console.log( response );
						var new_suggestions = '';
						$.each( response , function( index , item ){
							new_suggestions = new_suggestions + " Name : " + item.name + "<br/>";
							new_suggestions = new_suggestions + " No. Of Days in a Year : " + item.no_of_days_in_year + "<br/>";
							new_suggestions = new_suggestions + " Planet Order No. : " + item.order_no + "<br/>";
						});
						$('#suggestion_box').html( new_suggestions );
						
					},
					error: function( http , status , error ) {
						alert("Some Error Occured : " + error );
					}
				
				});
				
			}