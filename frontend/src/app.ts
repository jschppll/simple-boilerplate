import axios from "axios";

import "./styles/styles.scss";

axios("http://localhost:3001/test", {}).then(({ data }) => {
    document.body.innerHTML = data;
});
