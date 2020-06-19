const express = require('express')
const app = express()
const port = 3000

app.use(express.static('img'))

app.get('/', (request, response) => {
    response.send('Hello!')
})

app.get('/123', (request, response) => {
    response.send( '<script>' + 
    'var elem = document.getElementById("t");' +
     ' t.onclick = function() {' +
       'if(this.style.backgroundColor)' +
        '  this.style.backgroundColor = "";' +
       ' else' +
          ' this.style.backgroundColor = "red"; ' +       
    '} </script>' +              
    '<style type="text/css">' +
   'TABLE {' +
    'width: 300px;' +
   ' border: 1px solid black; ' +
   ' border-bottom: none; ' +
  ' }' +
   'TD {' +
     'background: yellow;' +
   ' border-bottom: 1px solid black;' +
  ' }' +
'</style>' +
'<table>' +
'<tr id ="t" >' +
'<td>бабочка</td>' +
'</tr>' +
'<tr>' +
'<td><img src="img_w.jpg" alt="butterfly"></td>' +
'</tr>' +
'</table>' )
});


app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})