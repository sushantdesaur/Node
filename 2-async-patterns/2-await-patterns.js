const {readfile} = require('fs');

readfile("./content/firt.txt", "utf8", (err,data)=>{
        if (err) {
            return
        } else {
            console.log(data);
        }
})
