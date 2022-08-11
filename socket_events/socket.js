module.exports.socket_events= (io)=>{
    io.on("connection",()=>{
        console.log("connection was made")
        io.emit("update",'testing');
    })

   
  }


