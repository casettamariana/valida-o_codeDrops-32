const fields = document.querySelectorAll("[required]");

//console.log(fields);


function ValidateField(field){
    // lógiva para verificar se existem erros
    function verifyErrors() {
        let foundError = false;

        for (let error in field.validity) {
            // se não for customError
            // então verifica se tem erro
            if (field.validity[error] && !field.validity.valid) {
                foundError = error;
            }
        }

        return foundError;
    }

    function customMessage(typeError){
        const messages = {
            text: {
                valueMissing: "Por favor, preencha este campo"
            },
            email: {
                valueMissing: "Email é obrigatório",
                typeMismatch: "Por favor, preencha um email válido"
            }
        }

        return messages[field.type][typeError];
    }
    
    function setcustomMessage(message) {
        const spanError = field.parentNode.querySelector("span.error");

        if(message){
            spanError.classList.add("active");
            spanError.innerHTML = message;
        } else {
            spanError.classList.remove("active");
            spanError.innerHTML = "";
        }
        
        
    }

    return function(){

        const error = verifyErrors();
        
        if (verifyErrors() ) {
            const message = customMessage(error);
            field.style.borderColor = "red";
            setcustomMessage(message);
        } else {
            field.style.borderColor = "green";
            setcustomMessage();
        }
    }
}

















function customValidation(event) {
    
    const field = event.target;


    const error = ValidateField(field);
    const validation = ValidateField(field)    
    
    validation()

}

// verificar se tem algum campo inválido
for (field of fields) {
    field.addEventListener("invalid", event => {
        // eliminar o bubble
        event.preventDefault();

        customValidation(event);
    });
    field.addEventListener("blur", customValidation);
}

document.querySelector("form").addEventListener("submit", event => {
    console.log("Enviar o formulário");

    event.preventDefault();
});