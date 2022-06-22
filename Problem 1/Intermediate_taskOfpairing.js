process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});
function taskOfpairing(freq){          
    let cont = freq.reduce((n,value) => n + Math.floor( value / 2 ), 0 );
    let Impars = freq.filter((e) => { if (e % 2) return e });
    cont += Math.floor( Impars.length / 2 );
    return cont  
}
function main() {
    const n = parseInt(readLine().trim(), 10);
    const freq  = [];
    for (let index = 0; index < n; index ++) {
        let nDum = readLine();
        freq.push(parseInt(nDum))
        currentLine ++;
    }        
    const resp = taskOfpairing(freq);       
    process.stdout.write(resp) 
    process.exit();    
}

