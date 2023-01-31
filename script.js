//Dom Element to listen on Html
const btnGenerate=document.getElementById('generate'); 
const sliderRangeEl=document.getElementById('myRange');
const UpperCaseChar=document.getElementById('upperCase')
const LowerCaseChar=document.getElementById('lowerCase');
const numericalVal=document.getElementById('num');
const symbolicChar=document.getElementById('specialChar');
const getResultEl=document.getElementById('password');

//object is created from define function below
const randomFunctionGet= {
    lowerC:getLowerRandom,
    upperC: getUpperRandom,
    number:getNumberRandom,
    symbolsC:getSymbolRandom
};
//Listen to the button and checkbox
btnGenerate.addEventListener('click',() =>{
    const length=sliderRangeEl.value;
    const LowerCase=LowerCaseChar.checked;
    const UpperCase=UpperCaseChar.checked;
    const symbolChar=symbolicChar.checked;
    const numberN=numericalVal.checked;
    
    //Display result on text box
    getResultEl.innerText=getGeneratePassword(LowerCase,UpperCase,numberN,symbolChar,length);
});

//Function to generate Random Password
function getGeneratePassword(lowerC,upperC,number,symbolsC,length){

    let resultGeneratedPassword=''; //initializing password
    const Counts=lowerC+upperC+number+symbolsC;//storing total counts of combination password
    console.log("types Count: " +Counts);
    const typeArr=[{lowerC},{upperC},{symbolsC},{number}].filter//unchecked combination filter out
    (
        item=>Object.values(item)[0]
    );
    
    if(Counts===0){
        return "Select Any Password Combination"; //ask user to select at least 1 combination
    }
    for(let i=0; i<length; i+=Counts){ //looping through range of slider value set
        typeArr.forEach(type => {
            const funcN=Object.keys(type)[0];

            resultGeneratedPassword+=randomFunctionGet[funcN]();//generate password of lenghth to the value of slider value
            
        });
    }
    const randomPassword=resultGeneratedPassword.slice(0,length);
    return randomPassword; //return random password that is generated

}
// define function to generate random number, symbol, uppercase,lower case
function getLowerRandom(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);  //following ths concept to get random like in youtube without declearing uppercase and lower case manually because i also know this we can generated this using ASCII code  
}

function getUpperRandom(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function getNumberRandom(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function getSymbolRandom(){
    const symbols=  '@%+\\/!#$^?:)(}{][~-_.'
    return symbols[Math.floor(Math.random()*symbols.length)];
}

console.log(randomSymbol());
