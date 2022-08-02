const quote= document.getElementById('quote');


/* fetch('https://api.quotable.io/random')
    .then(response=>response.json())
    .then(data =>{
        console.log(`${data.content} -${data.author}`)
    }) */

    const getQuote=()=>{
    fetch('https://api.quotable.io/random')
    .then(response=>response.json())
    .then(data => {
       quote.innerHTML = data.content
    });

    fetch('https://picsum.photos/1600/1000')
    .then((res) =>{
    document.getElementById('img').innerHTML = 
        `<img src=${res.url} />`
    })
};

quote.addEventListener('click',()=> getQuote());
getQuote();