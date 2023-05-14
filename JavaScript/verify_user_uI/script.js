const inputs = document.querySelectorAll('.code');

inputs[0].focus();
const theNum = [2,3,4,5,6,7];
playerNum = [];
inputs.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <=9) {
           inputs[idx].value = '';
           
            setTimeout(()=> inputs[idx + 1].focus(), 10);
            playerNum.pop(e.key);
            
        } else if (e.key === 'Backspace') {
            setTimeout(()=> inputs[idx - 1].focus(), 10);
        }
    }) 

})

console.log(playerNum);


