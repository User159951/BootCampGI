const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];


const Jomla = epic.reduce((acc,value) => {
        return acc === '' ? value : acc + ' ' + value;
 
});

console.log(Jomla)