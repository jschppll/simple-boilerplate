import axios from "axios";

console.log("trying...");

axios("http://localhost:3001/test", {}).then(({ data }) => {
    document.body.innerHTML = data;
});
