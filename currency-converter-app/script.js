const dropList = document.querySelectorAll(".drop-list select");
const getButton = document.querySelector("form button");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");

for (let i = 0; i < dropList.length; i++) {
    for(currency_code in country_list){
        // Default currencies
        let selected;
        if(i === 0){
            selected = currency_code === "TRY" ? "selected" : "";
        }else if(i === 1){
            selected = currency_code === "USD" ? "selected" : "";
        }
        // creating option tag with passing currency code as a text and value
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        // inserting options tag inside select tag
        dropList[i].insertAdjacentHTML("beforeend", optionTag)
    }
    
    dropList[i].addEventListener("change", e => {
        loadFlag(e.target);
    })
}

const loadFlag = (element) => {
    for(code in country_list){
        if(code == element.value){
            let imgTag = element.parentElement.querySelector("img");
            imgTag.src = `https://flagsapi.com/${country_list[code]}/flat/64.png`
        }
    }
}


getButton.addEventListener("click", e => {
    e.preventDefault();
    getExchangeRate();
})

const getExchangeRate = () => {
    const amount = document.querySelector(".amount input");
    let amountValue = amount.value;
    if(amountValue == "" || amountValue == "0"){
        amount.value = "1";
        amountValue = 1;
    }
    let url = `https://v6.exchangerate-api.com/v6/7a22dda1511f2d097206e801/latest/${fromCurrency.value}`;
    fetch(url)
    .then(res => res.json())
    .then(result => {
        let exchangeRate = result.conversion_rates[toCurrency.value];
        let totalExchangeRate = (amountValue * exchangeRate).toFixed(2);
        const exchangeRateText = document.querySelector(".exchange-rate");
        exchangeRateText.innerHTML = `${amountValue} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value}`;
    })
}