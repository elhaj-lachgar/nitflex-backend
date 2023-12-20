


function ErrorRoute ( err , req , res , next ) {
    let errors = {};
    if (process.env.NODE_ENV == "dev"){
        errors.stutas = err.stutas;
        errors.stack = err.stack;
        errors.error = err.message;
    }

    else{
        errors.error = err.message;
        errors.stutas = err.stutas;
    }

    return res.status(err.status||500).json(errors);
}

module.exports = ErrorRoute;