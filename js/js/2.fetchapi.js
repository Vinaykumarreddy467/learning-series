const URL = "my.json"; 
let data;
fetch(URL)
    .then(response  => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(jsonData = data)
    .then(jsonData => {
        console.log("Fetched JSON Data:", jsonData);    
    })
    .catch(error => {
        console.error("Error fetching JSON data:", error);
    });

console.log(JSON.parse(data));
    