
// PROMISE CHAINING - the oldway of doing asynchronus programming

//  fetchCurrentUser, fetchArchivedOrders, fetchCurrentOrders are Promise functions

fetchCurrentUser()
.then(function onUser(user){
    return Promise.all([
        fetchArchivedOrders(user.id), 
        fetchCurrentOrders(user.id)
    ]);
})
.then(function onOrders(
    [archivedOrders, currentOrders]
){
    //.. 
});



// SYNC-ASYNC pattern with generator - the old way with generator

runner(function *main() {           // *main = generator, make the things an iterable object, returning values (yield) on next
                                    // runner = utility from library, allowing to run generator async
    var user = yield fetchCurrentUser();

    var [archivedOrders, currentOrders] = 
    yield Promise.all([
        fetchArchivedOrders(user.id), 
        fetchCurrentOrders(user.id)
    ])

    // .. 
})


// ASYNC - the new way

async function main() {
    var user = await fetchCurrentUser(); 

    var [archivedOrders, currentOrders] = await Promise.all([
        fetchArchivedOrders(user.id), 
        fetchCurrentOrders(user.id)
    ])

    // ...
}