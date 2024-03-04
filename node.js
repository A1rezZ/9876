console.log('gachi');

const readline = require('readline');

const datavirta = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

datavirta.question('1', function(lukuuksi) {
    datavirta.question('lukukaksi ', function(lukukaksi) {
      lukuuksi = parseInt(lukuuksi)
        if (lukuuksi < 1 || lukuuksi > 10){
            console.log('luku taytyy olla 1-10')
            datavirta.close()
        }
        else if (lukukaksi < 1 || lukukaksi > 10){
            console.log('luku taytyy olla 1-10')
            datavirta.close()
        }
        else {
          lukukaksi = parseInt(lukukaksi)
          console.log(`lukujen summa, ${lukuuksi + lukukaksi}`);
          console.log(`lukujen erotus, ${lukuuksi - lukukaksi}`);
          console.log(`lukujen tulo, ${lukuuksi * lukukaksi}`);
          console.log(`lukujen osamaara, ${lukuuksi / lukukaksi}`);
          let listik = []
          if (lukuuksi > lukukaksi){
            while(lukuuksi !== lukukaksi){
                lukukaksi += 1
                listik.push(lukukaksi)
            }
            listik.pop()
            console.log(`${listik}`)
          }
          if (lukukaksi > lukuuksi){
            while(lukukaksi !== lukuuksi){
                lukuuksi += 1
                listik.push(lukuuksi)
            }
            listik.pop()
            console.log(`${listik}`)
          }
          datavirta.close();
      }
    });
  });