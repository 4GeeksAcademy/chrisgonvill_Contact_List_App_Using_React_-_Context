import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Demo = () => {
    const { store, actions } = useContext(Context);
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        phone: "",
        address: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.addContact(formData); 
    };

	return (
		
		<div className="container">
            <form onSubmit={handleSubmit}>
				<div class="col-12">
					<label for="inputName" class="form-label">Full Name</label>
					<input type="text" class="form-control" id="inputName" placeholder="Chuck Norris" />
				</div>
				<div className="mb-3">
					<label for="exampleInputEmail1" className="form-label">Email Adress</label>
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="chuck_norris@chuckkicksyourass.com" />
					<div id="emailHelp" className="form-text"></div>
				</div><div class="col-12">
					<label for="inputPhone" class="form-label">Phone Number</label>
					<input type="text" class="form-control" id="inputPhone" placeholder="1 800 Chuck Norris" />
				</div><div class="col-12">
					<label for="inputAddress" class="form-label">Address</label>
					<input type="text" class="form-control" id="inputAddress" placeholder="4321 Chuck Norris St" />
				</div>
				<button type="submit" className="btn btn-primary">Agregar Contacto</button>
            </form>
        </div>
    );
};