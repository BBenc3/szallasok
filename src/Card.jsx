import { Fragment } from "react"
import { myrequest } from "./myrequest"
import { Form } from "./Form"


export default function Card(_data) {
    const data = _data.data

        return (
        <Fragment>
            <div className="card">
                <div className="card-header">
                    <p>{data.name}</p>
                </div>
                <div className="card-body">
                    <p>
                        <a href="" target="_blank"> {data.hostname}</a>
                        <br/>Elhelyezkedés: {data.location}
                        <br/>Ár: {data.price} Ft
                        <br/>Min. Éjszakák: {data.minimum_nights}
                    </p>
                </div>
                <div className="card-footer">
                    <button className="btn card-btn" onClick={()=>{
                        myrequest(`https://nodejs.sulla.hu/data/${data.id}`, "POST")
                    }}>Módosítás</button>
                    <button className="btn card-btn" onClick={()=>{
                        myrequest(`https://nodejs.sulla.hu/data/${data.id}`, "DELETE")
                        .then(window.location.reload)
                    }}>Törlés</button>
                </div>
            </div>
        </Fragment>
        )
    }