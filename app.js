let money = document.getElementById("moneyr")
let currency = document.getElementById("currencyr")
let btn = document.getElementById("btnir")
let h1 = document.getElementById("h12")

btn.addEventListener("click" , () => {
    h1.innerHTML = (Number(money.value) / currency.value)
})

