/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */



module.exports = function getTimeForEducation(
  focus = 'family', 
  knowsProgramming = true,
  config = {
    family: 4, 
    friends: 10,
    normal_life: 20,
    profession: 30,
    carrier: 40,
    top_peformance: 60
    }
  ) 
  {
    var score_time = 800;
    
    var result;
  
    
      switch(focus)
      {
        
        case "family":
          if(knowsProgramming == true){
          result = score_time / config.family;}
          else{
            result = 1300 / config.family;
          }
          
          
        break;

        case "friends":
            if(knowsProgramming == true)
            {
              result = score_time / config.friends;
            }
            else{
              result = 1300 / config.friends;
            }
          
          break;
        case "normal_life":
            if(knowsProgramming == true)
            {
              result = score_time / config.normal_life;
            }
            else
            {
              result = 1300 / config.normal_life;
            }
          
        break;
        case "profession":
            if(knowsProgramming == true)
            {
              result = score_time / config.profession;
            }
            else
            {
              result = 1300 / config.profession;
            }

            
        break;
        case "carrier":
            if(knowsProgramming == true)
            {
              result = score_time / config.carrier;
            }
            else{
              result = 1300/ config.carrier;
            }
          
        break;
        case "top_peformance":
            if(knowsProgramming == true)
            {
            result = score_time / config.top_peformance;
            }
            else{
              result = 1300 / config.top_peformance;
            }
            
        break;
      }
      return Math.ceil(result);
     
      
      
};
