module.exports = (client) => {
  
    client.user.setPresence( 
      {
        status: "online", 
        activity: { 
          name: '!help | v1.0', 
          url: null,
          type: "PLAYING"
        }
      }
    );
    
  }  