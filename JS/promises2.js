function login(user) {
    return new Promise((approve, rejet) => {
        if (user === 'dev') {
            setTimeout(() => {
                return approve({});
            }, 1000);
        } else {
            return rejet({});
        }
    })
}
login('suj').then(() => console.log("approved")).catch(() => console.log("failed"));
login('dev').then(() => console.log("approved")).catch(() => console.log("failed"));