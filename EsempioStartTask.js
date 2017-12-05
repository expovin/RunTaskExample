var fs = require('fs');
var https = require('https');
var http = require('http');
var request = require('request');


const key = 'abcdefghijklmnop';
const hostname = "win-pl3fatrobtj";
const port = 4242;
var taskid ="ce2a6212-6684-42b5-ac44-78797a18cccc";
var taskName="Reload License Monitor";
var startTaskbyID="task/{id}/start/synchronous";
var startTaskbyName="task/start/synchronous?name=";


var headers = {
    'Content-Type' : 'application/json; charset=utf-8',
    'x-qlik-xrfkey' : key,
    'X-Qlik-User' : 'UserDirectory=Internal; UserId=sa_repository '
};


var options = {
    uri : "http://"+hostname+":"+port+'/qrs/'+startTaskbyID.replace("{id}",taskid),
    key: fs.readFileSync("./certs/client_key.pem"),
    cert: fs.readFileSync("./certs/client.pem"),
    ca: fs.readFileSync("./certs/root.pem")
};

options.uri = options.uri.concat('?xrfkey='+key);

console.log("Options : ", options);

request.post(options , function (err, response, body){
    if (err || response.statusCode != 200)
        console.log("Error Post Action : ",err);
    else {
        console.log(body);
    }

})