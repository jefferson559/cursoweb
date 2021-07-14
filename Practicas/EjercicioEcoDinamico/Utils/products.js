const request = require('postman-request');


const getAllproducts=(callBack)=>{
       request('https://fakestoreapi.com/products',(error, response, body ) =>
       {      
       //callBack(body)
       if(error){
           return callBack(error,undefined)
        }
       if(response)
       {
            if(body){
                return callBack(undefined,body)
            }
              
            
            returncallBack("No se encontraron productos",undefined)
            
        }
       //console.log('error:', error); // Print the error if one occurred
        //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //console.log('body:', body); 
    });
   
}
 
module.exports={
    getAllproducts 
}
