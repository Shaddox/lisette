module.exports = (client) => {

    client.log = (type, msg, title) => {
      if (!title) title = "Log";
      console.log(`[${type}] [${title}]${msg}`);
    };



};