function Entrar()
{
    const usuario = document.getElementById("usuario").value;

    const senha = document.getElementById("senha").value;
    
    const emailSalvo = localStorage.getItem("emailCadastrado");

    const senhaSalva = localStorage.getItem("senhaCadastrada");

    
    

    console.log(emailSalvo)

    if(usuario === "" || senha === "")
    {
        mensagem.textContent = "Por favor, preencha todos os campos!";
        mensagem.className = "erro";
        return;
        
    }

    if (usuario === emailSalvo && senha === senhaSalva)
    {
        mensagem.textContent = "Cadastrado com sucesso!";
        mensagem.className = "sucesso";

        window.location.href="select.html";
    }
    else
    {
        mensagem.textContent = "E-mail ou senha inválidos. Tente novamente!";
        mensagem.className = "erro";
    }


}