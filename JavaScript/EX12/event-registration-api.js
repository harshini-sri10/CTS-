function sendData() {

    let data = {
        name: "John",
        event: "Music Night"
    };

    setTimeout(() => {

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(result => {
                document.getElementById("msg").innerText = "Success!";
                console.log(result);
            })
            .catch(err => {
                document.getElementById("msg").innerText = "Failed!";
            });

    }, 2000);
}
