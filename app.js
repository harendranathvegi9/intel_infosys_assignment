 var express = require('express');
 var app= express();
//  var mongod=require('mongod');
//  var DB= new mongod.db( 'stock', new mongod.Server( 'localhost', 27017, {}), {}); 
var mongodb=require('./domain/schema');
var nodemailer = require('nodemailer');
var router = express.Router();
app.use('/sayHello', router);
router.get('/',handleSayHello);
//router.post('/', handleSayHello); // handle the route at yourdomain.com/sayHello
function handleSayHello(req, res) {
    // Not the movie transporter!
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'harisvegi999@gmail.com', // Your email id
            pass: 'gettalent' // Your password
        }

    });
    //var text = 'Hello world from \n\n' + req.body.name;
    var text='hai\n\n';
    var mailOptions = {
    from: 'harisvegi999@gmail.com', // sender address
    to: 'softhari3@gmail.com', // list of receivers
    subject: 'Email Example', // Subject line
    text: text //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
};
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res.json({yo: 'error'});
    }else{
        console.log('Message sent: ' + info.response);
        res.json({yo: info.response});
    };
});
}

app.post('/post',function(req,res){
    var data=new mongodb({ name: 'Rover' });
    data.save(function(err,result){
        if(err)
        console.log(err);
        else
        console.log("saving"+result);
    })
})
app.get('/get',function(req,res){
    mongodb.find(function(err,result){
        if(err)
        console.log(err);
        else
       res.send(result);
    })
})
// app.route('/api/stockdata/symbol',function(error,result){

// DB.collections('stock').find({'name':'hari'},function(error,result){
//     console.log(result);
// });
// })
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
