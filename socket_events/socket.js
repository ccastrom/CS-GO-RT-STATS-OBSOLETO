  const socket_connection= (io)=>{
    io.on("connection",()=>{
        console.log("connection was made")
        io.emit("update",'testing');
       
    })

    

   
  }
  const socket_hud_data=(io,payload,json)=>{
    
    io.emit('round_data',payload,json);
  }

  

module.exports={
    socket_connection,
    socket_hud_data
};


