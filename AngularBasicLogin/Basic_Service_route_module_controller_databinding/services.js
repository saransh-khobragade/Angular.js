app.service('LoginService', function($http) {
		
		return{
			gettoken:function(Username,Password,callback){
				
				var string="{\"email\": \""+Username+"\",\"password\": \""+Password+"\"}"
				var data=JSON.parse(string);
				var config = {
						headers : {
							'Content-Type': 'application/json'
						}
					}
				
				return $http.post('https://reqres.in/api/login',data, config).then(function successCallback(response) {
							return response;
				});
			}
		}
    }
);

app.service('ListAllUser', function($http) {
		
		return{
			Details:function(){
	
				var config = {
						headers : {
							'Content-Type': 'application/json'
						}
					}
				
				return $http.get('https://reqres.in/api/users?page=2', config).then(function(data, status, header, config) {
					return data.data;
				});
			}
		}
    }
);	 
  
         