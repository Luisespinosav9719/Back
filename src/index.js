import {app ,mdb } from "./app";


app.listen(process.env.PORT || 4000);

console.log("Server on port ", process.env.PORT || 4000);
