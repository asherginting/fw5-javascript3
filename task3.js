/* Bernyanyi */

let janji = "bernyanyi"

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (janji === "bernyanyi") {
            resolve("Penonton senang")
        }  else {
            reject("Anda tidak bernyanyi")
        }
    }, 2000)
})

p.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})


/* Beli Bakso */
const beliBakso = (harga, duit) => {
    return new Promise((resolve, reject)=>{
        const change = duit - harga

        if (change < 1000) {
            reject ("Saldo tidak mencukupi")
        } else {
            setTimeout(()=>{
                resolve("Pembayaran Sukses")
            }, 2000)
        }
    })
}

const beli = async (harga, duit) => {
    try{
        console.log("Pembayaran dilakukan")
        const result = await beliBakso(harga, duit)
        console.log(result)
    }catch (err){
        console.log(err)
    }finally{
        console.log("Selesai")
    }
}

beli(6000, 6500)