function submitData(userName, userEmail) {
    const formData = {
        name: userName,
        email: userEmail,
    }
    
    const configureObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    };

    return (
        fetch("http://localhost:3000/users", configureObj)
        .then(response => {
            return response.json();
        })
        .then(object => {
            const h1 = document.createElement("h1");
            const body = document.querySelector("body");
            h1.textContent = object.id;
            body.appendChild(h1);
        })
        .catch((error) => {
            const errorMessage = document.createElement("h1");
            const body = document.querySelector("body");
            errorMessage.textContent = "Unauthorized Access";
            body.appendChild(errorMessage);
        })
    )
}