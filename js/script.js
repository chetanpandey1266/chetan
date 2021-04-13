const texts = ['Student', 'Researcher'];
let count=0;
let index=0;
let currText = '';
let letter='';

console.log('Im IN');

(function type(){
    if(count === texts.length){
        count=0;
    }
    currText = texts[count];
    letter = currText.slice(0, ++index);
    console.log(letter)
    document.querySelector(".typing").textContent = letter;
    if(letter.length === currText.length){
        count++;
        index=0;
    }
    setTimeout(type, 400);
})();