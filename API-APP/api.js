//create a fuction to geenrerate the uuid(universally unique identifier)
/**UUIDs are generally used for identifying information that needs to be unique within a system or network thereof. Their uniqueness and low probability in being repeated makes them useful for being associative keys in databases and identifiers for physical hardware within an organization. */

function generateUUID () {
            var date = new Date().getTime();

            if(window.performance && typeof window.performance.now === "function"){
                date += performance.now();  //whebever  windows is performing this function, automatically renew according to the current time
            };
        
        //uuid js generator
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c){
                var r = (date + Math.random()*16)%16 | 0;
                date = Math.floor(date/16); 
                return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });

         return uuid;
}
    //generate new key and insert into input value
    $('#keygen').on('click',function(){
         $('#apiKey').val(generateUUID() );
     });



