window.addEventListener('load', ()=>{

    /*Aqui buscamos los botones y el display */
    const keypadButtons = document.getElementsByClassName('keypad--button')
    const display = document.querySelector('.calculator--display')
    /*Convierto la conexion HTML en un arreglo (Array) */
    const keypadButtonsArray =Array.from(keypadButtons)
    /*Agregamos un evento para cada click de un boton */
    keypadButtonsArray.forEach (button =>{
        button.addEventListener('click', ()=>{
           calculadora(display, button)
            // console.log(button);
        })
    })
});

function calculadora (display,button){
    /*Funcion que decide que hacer  para cada boton*/
    switch(button.innerHTML){
        case'C':
        borrar (display)
            break;
        case'=':
        calcular (display)
            break;
        default:
            actualizar (display, button)
            break;
    }
}

function calcular (display){
    display.innerHTML=eval(display.innerHTML);
}

function actualizar (display, button){
    if(display.innerHTML ==0){
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML
}

function borrar(display){
    if(display.innerHTML != 0){
        display.innerHTML = 0;
    }
}