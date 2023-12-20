

class Errors extends Error {
    constructor ( message , stutas ){
        super(message);
        this.status = stutas || 500 ;
    }
}


module.exports = Errors;