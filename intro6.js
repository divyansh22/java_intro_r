setTimeout(function () {
    console.log("hello world!")
}, 3000);

for (let i = 0; i < 5;i++) {
    setTimeout(function(){
        console.log(i)
    }, 2000);
    console.log(i)
}
