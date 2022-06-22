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
    let cont = 0;
    let queueD = false
    let length = freq.length
    for (let element of freq){        
        cont += Math.floor(element / 2)
        if(element % 2 && queueD){
          cont ++;
          queueD = false
        } else if(element % 2 ){
            queueD = true
        }
    } 
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
