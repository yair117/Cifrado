let mensajeCopiado;
//Sirve para quitar las letras con caracteres eseciales y convertirlos a un caracter simple
const quitarAcentos = (texto) => {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const cifrar = () => {
  let texto = quitarAcentos(
    document.getElementById("texto").value.toLowerCase()
  );
  if (!texto || texto.trim() === "") {
    alert(
      "Error: Caja de texto vacia, por favor escriba algo para cifrar o descifrarlo"
    );
  } else {
    //Se crea un diccionario con las letras a cambiar y su sognificado
    let dic = {
      a: "ai",
      e: "enter",
      i: "imes",
      o: "ober",
      u: "ufat",
    };
    let cifrado = texto.replace(/a|e|i|o|u/gi, (letra) => {
      return dic[letra];
    });
    mensajeCopiado = cifrado;
    document.getElementById("copiar").disabled = false;
    document.getElementById("salida").innerHTML = cifrado;
    
  }
};

const descifrar = () => {
  let texto = quitarAcentos(
    document.getElementById("texto").value.toLowerCase()
  );
  if (!texto || texto.trim() === "") {
    alert(
      "Error: Caja de texto vacia, por favor escriba algo para cifrar o descifrarlo"
    );
  } else {
    let dic = {
      ai: "a",
      enter: "e",
      imes: "i",
      ober: "o",
      ufat: "u",
    };
    let descifrar = texto.replace(/ai|enter|imes|ober|ufat/gi, (letra) => {
      return dic[letra];
    });
    mensajeCopiado = descifrar;
    document.getElementById("copiar").disabled = false;
    document.getElementById("salida").innerHTML = descifrar;
  }
};

const copiar = () => {
  let copiado = document.createElement("input");
  copiado .setAttribute("value", mensajeCopiado);
  document.body.appendChild(copiado);
  copiado.select();
  copiado.setSelectionRange(0,99999);
  navigator.clipboard.writeText(copiado.value);
  document.body.removeChild(copiado);
  alert("Mensaje copiado!");

};
