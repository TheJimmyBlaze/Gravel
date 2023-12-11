
const onlyNumbers = e => {
    
    //No spaces
    if (e.key.trim() === '') return e.preventDefault();

    //Tabs
    if (e.key === 'Tab') return;

    //Allow arrows, back, and delete
    if (e.key.includes('Arrow')) return;
    if (e.key === 'Backspace') return;
    if (e.key === 'Delete') return;

    //Only numbers
    return Number.isFinite(Number(e.key)) || e.preventDefault();
};

export default onlyNumbers;