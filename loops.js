function forLoop(array){
  
    for(let i = 0 ; i < 25; i++) {
    
    var s = i === 1 ? "I am 1 strange loop." : `I am ${i} strange loops`;
      
      array.push(s);
      
      return array;
      
    }
    }