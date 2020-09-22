const fields = document.querySelectorAll("[required]");

//console.log(fields);


function customValidation(event){
    const field = event.target;

    // lógiva para verificar se existem erros
    function verifyErrors(){
        let foundError = false;

        for(let error in field.validity){
            // se não for customError
            // então verifica se tem erro
            if(error != "customError" && field.validity[error]){
                foundError = error;
            }
        }

        return foundError;
    }

    const error = verifyErrors();
    console.log("Error Exists: ", error);


    if(error) {
        // trocar mensagem de required
        field.setCustomValidity("Esse campo é obrigatório");
    } else {
        field.setCustomValidity("");
    }

    
}

// verificar se tem algum campo inválido
for(field of fields){
    field.addEventListener("invalid", customValidation);
}


















document.querySelector("form").addEventListener("submit", event => {
    console.log("Enviar o formulário");

    event.preventDefault();
});