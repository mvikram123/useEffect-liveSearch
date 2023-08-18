import React, { useEffect, useState } from "react"




const countries=["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia",
"Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin",
"Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi",
"Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia",
"Comoros","Congo","Costa Rica","Cote d'Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Democratic Republic of the Congo",
"Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea",
"Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana",
"Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras",
"Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica",
"Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea, North","Korea, South","Kosovo","Kuwait","Kyrgyzstan","Laos",
"Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia",
"Maldives",
"Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia",
"Moldova",
"Monaco",
"Mongolia",
"Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands",
"New Zealand","Nicaragua","Niger","Nigeria","North Macedonia","Norway","Oman",
"Pakistan",
"Palau",
"Palestine",
"Panama",
"Papua New Guinea",
"Paraguay",
"Peru",
"Philippines",
"Poland",
"Portugal",
"Qatar",
"Romania",
"Russia",
"Rwanda",
"Saint Kitts and Nevis",
"Saint Lucia",
"Saint Vincent and the Grenadines",
"Samoa",
"San Marino",
"Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles",
"Sierra Leone",
"Singapore",
"Slovakia",
"Slovenia","Solomon Islands","Somalia","South Africa","South Sudan","Spain",
"Sri Lanka","Sudan","Suriname",
"Sweden","Switzerland",
"Syria","Taiwan",
"Tajikistan","Tanzania",
"Thailand","Timor-Leste","Togo","Tonga",
"Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu",

]

const LiveSearch=()=>{
    const[searchTerm,setSearchTerm]=useState("")
    const[filteredCountries,setFilteredCountries]=useState(countries);


    useEffect(()=>{

        filterCountries()
    },[searchTerm])


    const filterCountries=()=>{

       let x=countries.filter((country)=>country.toLowerCase().includes(searchTerm.toLowerCase())==true)
       setFilteredCountries(x)
    }




    return (

        <div>

            <input type="text" placeholder="" onChange={(event)=>setSearchTerm(event.target.value)}  
            value={searchTerm}></input>
             <button onClick={filterCountries}>Search</button>
  
            
            {
                filteredCountries.map((country)=>
                <p>{country}</p>
                )
            }
             </div>
    )
}
export default LiveSearch;