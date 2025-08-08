function Cadastro()
{
    const nome = document.getElementById("nome").value;
    const cidade = document.getElementById("cidade").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    localStorage.setItem("emailCadastrado", email);

    localStorage.setItem("senhaCadastrada", senha);

    console.log(email,senha)
    


    if(nome === "" || cidade === "" || email === "" || senha === "")
    {
        mensagem.textContent = "Por favor, preencha todos os campos";
        mensagem.className = "erro";
        return;

    }
    else 
    {

        mensagem.textContent = "Cadastrado com sucesso!";
        mensagem.className = "sucesso";

    }

}

document.addEventListener("DOMContentLoaded", function () {
    fetch("/data/cidades-brasileiras.json")
      .then(response => response.json())
      .then(data => {
        const datalist = document.getElementById("lista-cidades");
        data.forEach(cidade => {
          const option = document.createElement("option");
          option.value = cidade.nome;
          datalist.appendChild(option);
        });
      })
      .catch(error => {
        console.error("Erro ao carregar cidades:", error);
      });
  });
