const express = require('express'); 
const app = express(); 
app.get('/', (_req, res) => {
     let output = ''; 
     for (let i = 0; i <= 10; i++) {
         output += `${i}\n`; 
         if (i % 2 === 0) { 
            output += ' par\n'; 
        } 
    } 
    res.send(`<pre>${output}</pre>`); }); 
   app.listen(3000, () => console.log('Servidor executando na porta 3000' ));
