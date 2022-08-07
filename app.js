async function getQuote() {
  let response = await fetch("https://api.kanye.rest/");
  let data = await response.json();
  console.log(data);
  let h2 = document.querySelector("#kanye-quote");
  h2.innerText = data.quote;
  handleClick(data.quote);
}

getQuote();

let button = document.querySelector("#new-quote-button");

function handleClick(quote) {
  let li = document.createElement("li");
  li.innerText = quote;
  let ol = document.querySelector("#kanye-quote-history");
  ol.appendChild(li);
  console.log(quote);
}

button.addEventListener("click", getQuote);
