// const decoder = code =>{
//     let decode = ''
//     for (i = 0; i < code.length; i += ){
//     if (code[i] >= 0){
//         code[i]++ * [i];
//         decode = decode + [i];
//     }
        
//      }
//      return decode
//     }

//     let str1 = '0h2xce5ngbrdy'

//     console.log(decoder(str1))

console.log('================================')

const decoder = str =>{
    let finalStr = ''

    for (i = 0; i < str.length; i++){
        let currentValue = parseInt(str[i]);
            console.log(currentValue)
        if (!isNaN(str[i])){

            console.log(`i before addition is ${i}`)
            i += currentValue
            console.log(`i after addition is ${i}`)
        }else {
            finalStr += str[i]
        }
    }
    return finalStr
}

console.log(decoder('0h2xce5ngbrdy'))