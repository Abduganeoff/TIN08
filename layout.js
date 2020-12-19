const getError = (errors, prop) => {
    try {
        return errors.mapped()[prop].msg;
    } catch (err) {
        return '';
    }
}


module.exports = ({result, errors} ) => {
    const temp = result ? result : 0;
    return `
             <div>
                <form method = "POST">
                    <input name ="firstInput" placeholder="1st value"/>
                    ${getError(errors, 'firstInput')}
                    <input name="secondInput" placeholder="2nd value" />
                    ${getError(errors, 'secondInput')}
                    <h1>Result: ${temp}</h1>
                    <button>Calculate</button>
                </form >
            </div >
        `;
};