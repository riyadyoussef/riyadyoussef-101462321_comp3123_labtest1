function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Resolved Promise after 500ms');
        }, 500);
    });
}

function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject('Rejected Promise after 500ms');
        }, 500);
    });
}

resolvedPromise()
    .then(message => console.log(message))
    .catch(error => console.log(error));

rejectedPromise()
    .then(message => console.log(message))
    .catch(error => console.log(error));
