import { myrequest } from "./myrequest";

export function Form(as){
    
return(
        <div className="Form">
            <label>Name:</label>
            <input id="inputName" type="text" defaultValue={as.name}/>
            <br/>
            <label>Hostname:</label>
            <input type="text" id="inputHostname" defaultValue={as.hostname}/>
            <br/>
            <label>Elhelyezkedés:</label>
            <input type="text" id="inputLocation" defaultValue={as.location}/>
            <br/>
            <label>Ár:</label>
            <input type="number" id="inputPrice" defaultValue={as.price}/>
            <br/>
            <label>Minimum nap:</label>
            <input type="number" id="inputMinNight" defaultValue={as.minNight}/>
            <br/>

            <button id="buttonSubmit" onClick={()=>{
                let name = document.getElementById("inputName").value;
                let hostname =document.getElementById("inputHostname").value;
                let location = document.getElementById("inputLocation").value;
                let price = document.getElementById("inputPrice").value;
                let minNight = document.getElementById("inputMinNight").value + " éjszaka";

                if (name != "" && hostname != "" && location != "" && price != "" && minNight != "") {
                    let body = {
                        name:name,
                        hostname: hostname,
                        location: location,
                        price: price,
                        minimum_nights: minNight
                    }
                    
                    myrequest("https://nodejs.sulla.hu/data", "POST", body)
                    .then(window.location.reload)
                    
                    alert("Sikeres mentés!")
                }
                else{
                    alert("Minden mező kitöltése kötelező")
                }
            }}>Mentés</button>
        </div>
    )
}
