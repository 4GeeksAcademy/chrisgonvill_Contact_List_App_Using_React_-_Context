const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Contacts: []
		},
		actions: {

			getContacts: async () => {
				try {
					const response = await fetch(
						"https://playground.4geeks.com/apis/fake/contact/agenda/chris_gonvill"
					);
					if (response.ok) {
						const data = await response.json();
						let store = getStore();
						setStore({ ...store, Contacts: data });
						console.log(Contacts)
					}
				} catch (error) {
					console.error("Error fetching :", error);
				}
			},
			addContact: async (data) => {
				try {
					const response = await fetch(
						"https://playground.4geeks.com/apis/fake/contact/agenda/chris_gonvill",
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify(data)
						}
					);
					if (response.ok) {
						const responseData = await response.json();
						console.log(responseData);
					} else {
						console.error("Error al enviar el contacto al servidor");
					}
				} catch (error) {
					console.error("Error fetching:", error);
				}
			}
		}
	};
};

export default getState;
