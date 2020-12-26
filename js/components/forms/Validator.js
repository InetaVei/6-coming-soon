class Validator {
    static isValidName(name) {
        // ne tuscias tekstas
        const notEmptyString = Validator.notEmptyString(name);
        if (notEmptyString !== true) return notEmptyString;

        //tik abeceles raides
        const onlyAlphabet = Validator.onlyAlphabet(name);
        if (onlyAlphabet !== true) return onlyAlphabet;

        // tik pirma raide didzioji
        const onlyFirstLetterUppercase = Validator.onlyFirstLetterUppercase(name);
        if (onlyFirstLetterUppercase !== true) return onlyFirstLetterUppercase;

        return true;
    }

    static isValidEmail(email) {
        const notEmptyString = Validator.notEmptyString(email);
        if (notEmptyString !== true) return notEmptyString;
    }
    static isValidMessage(message) {
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
    static onlyAlphabet(text) {
        const abc = 'abcdefghijklmnoprstuvzABCDEFGHIJKLMNOPRSTUVZ';
        return Validator.onlyAllowedSymbols(text, abc);
    }
    static onlyNumbers(text) {
        const abc = '123456789';
        return Validator.onlyAllowedSymbols(text, abc);
    }

    static onlyAllowedSymbols(text, allowedSymbols) {
        for (let t of text) {
            let singleAllowedTextSymbol = false;
            for (let a of allowedSymbols) {
                if (a === t) {
                    singleAllowedTextSymbol = true;
                    break;
                }
            }
            // jei bent viena text raide yra neleistina, tai radom kritine klaida
            if (!singleAllowedTextSymbol) {
               return `Rastas neleistinas "${t}" simbolis`;
            }

        }
        return true;
    }

    static onlyFirstLetterUppercase(text) {
        // 1. visas raides konvertuoti i mazasias
        let lower = text.toLowerCase();
        // 2. pirmaja raide paversti didziaja
        let convert = lower[0].toUpperCase() + lower.slice(1);
        // 3. palyginame ka gavome su inputu 
        if (text !== convert) {
            return 'Pirmasis simbolis turi buti didzioji raide, o visi kiti - mazosios'
        }

        return true;
    }
}

export { Validator }