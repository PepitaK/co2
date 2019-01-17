

<h1>"# co2/population" <br></h1>
<br>Heroku : https://reaktorco2.herokuapp.com/ 
<br>
<h2>Tietoa </h2>
<p>Sovellus käyttää MongoDB -tietokantaa pilvestä. Käyttäjä voi Select -valikosta valita haluamansa maan tai alueen, ja tarkastella sen väestön kehitystä, sekä hiilidioksidipäästöjä sivulle tulostuvista kuvioista.  </p>
<h2>API</h2>
<br>API : https://reaktorco2.herokuapp.com/getall
<p>Yllä olevasta linkistä API, jossa json-muodossa data. </p>
<h3>Datan rakenne</h3>
<p>Alussa Population -data, jonka sisällä test, jonka sisällä saman CountryCoden omaava setti Co2 -taulusta</p>
{"_id":"5c31e6695e3672651fa19bf6","CountryName":"Aruba",<br>
"CountryCode":"ABW","IndicatorName":"Population_total",<br>
"IndicatorCode":"SP.POP.TOTL",<br>
"_1960":"54211","_1961":"55438","_1962":"56225"...,<br>
<b>"test":[{"_id":"5c31e7145e3672651fa19cfd","CountryName":"Aruba",<br></b>
        <pre>    "CountryCode":"ABW","IndicatorName":"CO2 emissions(kt)",<br></pre>
            "IndicatorCode":"EN.ATM.CO2E.KT",<br>
            "_1960":"","_1961":"","_1962":""...}]
 <br>}
