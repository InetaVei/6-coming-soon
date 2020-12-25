class Validator {
    static isValidName( name ) {
        return true;
    }
    static isValidEmail( email ) {
        return true;
    }
    static isValidMessage( message ) {
        return true;
    }

    static notEmptyString(text) {
        if (typeof text !== 'string') {
            return 'turi buti tekstas';
        }
        if (text === '') {
            return 'Turi buti ne tuscias tekstas';
        }
        return true;
    }
}

export { Validator }