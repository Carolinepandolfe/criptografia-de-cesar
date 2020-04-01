const axios = require("axios");
const fs = require("fs");
const sha1 = require('sha1');

const api = "https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=";
const token = "07486efd789916558eba8a6aa60975434a34b87e";


const decifrar = (cifrado, casa) => {
    let decifrado = '';

    for (palavra of cifrado) {
    const unicode = palavra.charCodeAt();

    if ((unicode >= 65 && unicode <= 90) || (unicode >= 97 && unicode <= 122)) {
        let code = unicode - casa

        if (code < 65 || code < 97) {
            let newCode = 26 - casa + unicode
            decifrado = decifrado.concat(String.fromCharCode(newCode))
        } else {
            decifrado = decifrado.concat(String.fromCharCode(code))
        }
    } else {
        decifrado = decifrado.concat(palavra)
    }
}
    return decifrado;
}

async function reqHttp(){
    const res = await axios.get(`${api}${token}`);

    const exist = fs.existsSync('answer.json');

        if(!exist){
            fs.appendFileSync('answer.json', JSON.stringify(res.data));
        }
        const fraseDecifrada = decifrar(res.data.cifrado, res.data.numero_casas);

        res.data.decifrado = fraseDecifrada;

        res.data.resumo_criptografico = sha1(fraseDecifrada);

        fs.writeFileSync('answer.json', JSON.stringify(res.data));
} 

reqHttp()
