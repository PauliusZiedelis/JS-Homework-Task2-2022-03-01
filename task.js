function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Task1
function task1(laps){
    for(; laps>0; laps--){
        (laps!=1) ? console.log(`liko ${laps} ratai`) :  console.log(`liko ${laps} ratas`);
    }   
}
task1(10);

//Task2
function task2(laps){
    let speedSum=0;
    for(let i=0; i < laps; i++){
        speedSum+=rand(120, 200);
    } 
    console.log(`Vidutinis greitis ${laps} ratų buvo ${speedSum/laps}`);
}
for(let i=0; i < 10; i++){
    task2(10);
}

//Task3
function task3(laps, gasLeft){ 
    for(let i=1; i <= laps; i++){
        gasLeft-=rand(3, 6);
        if(gasLeft<0){
             console.log(`%cKuro neužteko!`, "color:red");
             break;
        }
        console.log(`%cKuro užteko!`, "color:green");
    }
}
for(let i=0; i < 10; i++){
    task3(10, 44);
}

//Task4
function task4(){
    let lowestSpeed=Infinity;
    for (let i=0;i<10;i++){
        for (let i=0;i<5;i++){
            const speed=rand(20, 120);
            if(speed<lowestSpeed){
                lowestSpeed=speed;
            }
        }
    }
    console.log(`Mažiausias greitis posūkyje buvo ${lowestSpeed}`);
}

for(let i=0; i < 10; i++){
    task4();
}

//Task5
function task5(){
    let distance = 0;
    let sum=Infinity;
    do {
        const isokoKengura=rand(0, 1);
        const pasuktiVaira=rand(0, 1);
        const paspaustiStabdzius=rand(0, 1);
        sum=isokoKengura+pasuktiVaira+paspaustiStabdzius;
        distance++;
    } while (sum!=0);
    console.log(`Automobilis nuvaziavo ${distance} kilometrus, iki avarijos`);
}
for(let i=0; i < 10; i++){
    task5();
}