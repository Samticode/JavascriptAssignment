const link = document.querySelector('a');

setInterval(()=>{
    number = Math.floor(Math.random() * 2 ) + 1;

    if (number === 1){
        linkName = 'whatYear'
    } else {
        linkName = 'createDish'
    }
    
    website = './' + linkName + '/' + linkName + '.html';
    link.setAttribute('href', website);
},1000);
