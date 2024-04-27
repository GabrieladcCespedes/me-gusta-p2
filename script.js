/**Gabriela Céspedes*/

/**se define la variable text que almacena lo que hay en la clase like1  */
var text1 = document.querySelector(".like1");
/**se define la variable text que almacena lo que hay en la clase like2  */
var text2 = document.querySelector(".like2");
/**se define la variable text que almacena lo que hay en la clase like3 */
var text3 = document.querySelector(".like3");

var texts = [text1, text2, text3];
console.log(texts);

var contador = [0,0,0];

function likes(index) {
    contador[index] ++;
    //console.log(contador);
    texts[index].innerText = contador[index] + "like(s)";

}