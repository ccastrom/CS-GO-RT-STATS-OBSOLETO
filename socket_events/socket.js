  const socket_connection= (io)=>{
    io.on("connection",()=>{
        console.log("connection was made")
        io.emit("update",'testing');
       
    })

    

   
  }
  const socket_hud_data=(io,payload)=>{
    io.emit('round_data',payload);
  }

  

module.exports={
    socket_connection,
    socket_hud_data
};


