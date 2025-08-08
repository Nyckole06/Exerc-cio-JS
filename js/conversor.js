function converterMoeda()
{
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const resultado = document.getElementById("resultado");

    amount.innerText = "Conversão:";
    fromCurrency.innerText = " ";
    toCurrency.innerText = " ";

    fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
    .then(response => response.json())

    .then (data => {

        console.log(data)

        if(data.erro)
        {
            amount.innerText = "Insira um novo valor";
            fromCurrency.innerText = " ";
            toCurrency.innerText = " ";
            return;
        }

        resultado.innerText = ' '+ data.rates[toCurrency];

    })

}