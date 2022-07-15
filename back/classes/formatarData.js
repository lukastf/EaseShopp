
const formatarData = () => {

    let today = new Date();

    let ss = today.getSeconds();
    let m = today.getMinutes();
    let h = today.getHours();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!

    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    } 
    if (mm < 10) {
        mm = '0' + mm;
    } 
    today = 
    h + '_' + 
    m + '_' + 
    ss + '_' + 
    dd + '_' + 
    mm + '_' + 
    yyyy;

    return today;
}

module.exports = formatarData;