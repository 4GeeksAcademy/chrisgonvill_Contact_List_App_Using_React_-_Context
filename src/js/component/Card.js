import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = () => {
    const { store, actions } = useContext(Context)
    console.log(store.Contacts)

    useEffect (() => {
        actions.getContacts()
    },[])

    return (
        <div className="container">
            {store.Contacts.map((item, index) => (

                <div className="card mb-3" style={{ maxwWidth: "540px" }} key={index}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://cdn.icon-icons.com/icons2/1042/PNG/512/Contact_Icon_icon-icons.com_76434.png" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title">{item.full_name}</h2>
                                <h2 className="card-title">{item.email}</h2>
                                <h2 className="card-title">{item.agenda_slug}</h2>
                                <h2 className="card-title">{item.address}</h2>
                                <h2 className="card-title">{item.phone}</h2>
                                
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};