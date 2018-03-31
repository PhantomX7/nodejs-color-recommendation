const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname));

app.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'views/index.html'));
})

// port config
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
  console.log('Press Ctrl+C to quit.')
})
