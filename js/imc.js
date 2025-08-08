function CalcularImc()
{
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const mensagem = document.getElementById("mensagem");

    const imc = peso/(altura*altura);
    
    if (imc > 32.4)
    {
        mensagem.textContent = "Você está com obesidade";
        
    }

    else if (imc > 19.1)
    {
        mensagem.textContent = "Você tem um peso normal";
        
    }

    else
    {
        mensagem.textContent = "Você está abaixo do peso";

    }

   
}