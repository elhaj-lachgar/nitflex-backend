
const color = require ('colors');

function UnhandledError ( error , server ) {
    console.log(color.red(error));

    server.close(()=>{
        console.log(color.yellow("server shut down"));
        server.exit(1);
    })
}

module.exports = UnhandledError;