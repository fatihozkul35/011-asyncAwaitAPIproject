getCountryInfo("Turkey");

async function getCountryInfo() {
  let url = `https://restcountries.com/v3.1/all`;
  const response = await fetch(url);
  if (!response.ok) {
    //! error handling
    renderError(`Something went wrong! :: ${response.status}`);
    throw new Error();
  }
  const data = await response.json();
  displayFlag(data);
}

function displayFlag(data) {
  // cName = document.getElementById("countryName");
  // cName = document.getElementsByTagName("option");

  // console.log(cName[1].value);

  // console.log(document.getElementsByTagName("select").value);

  data.forEach((item) => {
    const {
      flags: { png: countryFlag },
      name: { common: countryName },
      continents,
      capital,
      languages,
      currencies,
    } = item;

    // Creating Options

    // cName.innerHTML = `<option value="${countryName}" selected>${countryName}</option>`;

    // Display flags

    const cardOfCountry = document.querySelector(".container");

    cardOfCountry.innerHTML = `<div class="card" style="width: 18rem">
        <img
          src=${countryFlag}
          class="card-img-top"
          alt="Here is flag of ${countryName}"
        />
        <div class="card-body">
          <h5 class="card-title">${countryName}</h5>
          <p class="card-text">${continents}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <i class="fas fa-lg fa-landmark"></i> ${capital ?? ""}
          </li>
          <li class="list-group-item">
            <i class="fas fa-lg fa-comments"></i> ${Object.values(
              languages ?? ``
            )}    </li>
          <li class="list-group-item">
            <i class="fas fa-lg fa-money-bill-wave"></i>${Object.values(
              currencies ?? ``
            ).map((c) => " " + c.name + "  `" + c.symbol + "`")}</li>
        </ul>
      </div>`;
  });
}

// function creatingOption() {}
