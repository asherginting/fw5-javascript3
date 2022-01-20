const cekHariKerja = (day) => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            const dataDay = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"]
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error("Hari ini bukan hari kerja"))
            }
        }, 3000)
    })
}

async function kapanKerja() { //membuat sebuah fungsi
    try {
        const res = await cekHariKerja("Rabu") //menjalankan sebuah fungsi
        console.log(res) //menampilkan varibael result
    } catch (err){ //melakukan pengecekan apakah terjadi error
        console.log(err)
    }
}

cekHariKerja()  //menjalankan sebuah fungsi
.then((res)=> { //menjalankan sebuah data
    console.log(res) //menampilkan variabel result
})
.catch((err)=> { //menampilkan isi error
    console.log(err)
})