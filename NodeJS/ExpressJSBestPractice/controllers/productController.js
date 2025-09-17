const showProduct = (req, res) => {
    console.log('show Product');
    res.send('show Product');
}
const addProduct = (req, res) => {
    console.log('add Product');
    res.send('add Product');
}

module.exports = {
    showProduct, addProduct
}