const promiseOne = new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log('promise one resolved')
    }, 1000)
})