const showUser = (req, res) => {
    console.log('show User');
    res.send('show user');
}
const addUser = (req, res) => {
    console.log('add User');
    res.send('add user');
}

module.exports = {
    showUser, addUser
}