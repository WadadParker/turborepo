import express from "express";

const app = express();

app.get("/" , (req,res) => {
    res.json({
        message: "Hello World"
    })
})

app.listen(4001, ()=> {
    console.log("Server started ra")
})

//  We need to introduce a package that backend can import
// So we add common module, that can be used by all applications