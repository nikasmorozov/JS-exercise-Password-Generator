document.getElementById('generatePass').addEventListener('click', generatePass);

function generatePass () {
    if(serviceName.value.length > 0 && servicePass.value.length > 0) {
    let serviceName = document.getElementById('serviceName');
    let servicePass = document.getElementById('servicePass');
    let vowels = 0;
    let nonVowels = 0;
    let nameArray = serviceName.value.split('');
    let passArray = servicePass.value.split('');
    let combinedPass = [];

    combinedPass.splice(0, 0, nameArray[nameArray.length - 1]);

    nameArray.forEach(function (char) {
        if (/^[aeiou]$/.test(char.toLowerCase())) {
            vowels += 1
        };
    });
    combinedPass.push(nameArray[vowels - 1]);

    combinedPass.splice(2, 0, passArray.join(''));

//    cia noriu padaryti single line/arrow
    nameArray.forEach(function (char) {
        if (!(/^[aeiou]$/.test(char.toLowerCase()))) {
            nonVowels += 1
        };
    });
    combinedPass.push(nonVowels);

    combinedPass.push(nameArray[0]);

    document.getElementById('output').textContent = combinedPass.join('');
    }
};