document.getElementById('generatePass').addEventListener('click', generatePass);
let combinedPass = [];
function generatePass () {
    if(serviceName.value.length > 0 && servicePass.value.length > 0) {
    let serviceName = document.getElementById('serviceName');
    let servicePass = document.getElementById('servicePass');
    let vowels = 0;
    let nonVowels = 0;
    let nameArray = serviceName.value.split('');
    let passArray = servicePass.value.split('');
   

    combinedPass.splice(0, 0, nameArray[nameArray.length - 1]);

    nameArray.forEach( (char) => {
        if (/^[aeiou]$/.test(char.toLowerCase())) {
            vowels += 1
        };
    });
    if(vowels > 0) {
        combinedPass.push(nameArray[vowels - 1])
    }
    else {
        combinedPass.push(nameArray[vowels])
    };

    combinedPass.splice(2, 0, passArray.join(''));

//    cia noriu padaryti single line/arrow
    nameArray.forEach( (char) => {
        if (!(/^[aeiou]$/.test(char.toLowerCase()))) {
            nonVowels += 1
        };
    });
    combinedPass.push(nonVowels);

    combinedPass.push(nameArray[0]);

    document.getElementById('output').textContent = combinedPass.join('');
    };

    function clearInputs() {
        serviceName.value = '';
        servicePass.value = '';
    };

    console.log(combinedPass);
    clearInputs();
};