const http = require('http').createServer(handler);
const fs = require('fs');
const io = require('socket.io')(http);
const player = require('./player');

const port = process.env.PORT || 8080;
http.listen(port);
console.log('Running on http://localhost:' + port)

function handler (req, res) {
  fs.readFile(__dirname + '/public/index.html', function(e, data) {
    if (e) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data); //write data from index.html
    return res.end();
  });
}

io.sockets.on('connection', socket => {

	socket.on('light', status => {
		console.log(status)
	})

	socket.on('sound', () => {
		// console.log('I need to play a sound now!')
		player.play({ file: './public/intro.wav' });
	})
	socket.on('silence', () => {
		player.setVol(10000)
	})
})