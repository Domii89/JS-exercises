let string = 'This sentence will not be very sophisticated';

function LongestWord(str){
    let words = str.split(' '),
    word = '',
    maxLength = 0;

    for(var i = 0; i < words.length; i++){
        if(words[i].length > maxLength){
            word = words[i];
            maxLength = words[i].length;
        }
    }
    
    return[word, maxLength];
}
console.log(LongestWord(string));