const mongoose = require ('mongoose');
const color = require ('colors')

function ConnectedDB () {
    mongoose.connect(process.env.BASE_URL)
    .then(
        (conx) => {
            console.log(conx.connection.host , color.green("DB connected"));
        }
    )
    .catch(
        (err) => {
            console.log (err , color.red("DB not connected"));
        }
    )
}

module.exports = ConnectedDB ;