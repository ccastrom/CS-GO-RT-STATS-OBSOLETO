module.exports.socket_events= (io)=>{
  io.on('connection', () => {
    console.log('a user connected');

  });
}