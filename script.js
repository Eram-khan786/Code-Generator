let btn=document.querySelector("#new-quotes")
let quote=document.querySelector(".quote")
let author=document.querySelector(".author")

let quotes=[
    {
        quote:"The only limit to our realization of tomorrow will be our doubts of today.",
        author:" Franklin D. Roosevelt"
    },
    {
        quote:"The only way to do great work is to love what you do.",
        author:" Steve Jobs"
    },
    {
        quote:"Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author:"Winston Churchill"
    },
    {
        quote:"The best revenge is massive success.",
        author:"Frank Sinatra"
    },
    {
        quote:"Today I lost something of which I had never thought of:",
        author:"Eram Khan"
    },
 
    {
        quote:"The only limit to our realization of tomorrow will be our doubts of today.",
        author:"Franklin D. Roosevelt"
    },
    {
        quote:"In three words I can sum up everything I've learned about life: it goes on.",
        author:" Robert Frost"
    },
    {
        quote:"Life is 10% what happens to us and 90% how we react to it.",
        author:"Charles R. Swindoll"
    },
    {
        quote:"The future depends on what you do today.",
        author:"Mahatma Gandhi"
    } ,   
    {
        quote:'Amateurs sit and wait for inspiration, the rest of us just get up and go to work.',
        author:"Stephen King"
    }
    ,   
    {
        quote:'Self-awareness and self-love matter. Who we are is how we lead.',
        author:"  Brene Brown"
    },   
    {
        quote:'Life is tough my darling, but so are you.',
        author:"  Stephanie Bennett Henry"
    },   
    {
        quote:"We are all broken, that's how the light gets in.",
        author:" Ernest Hemingway"
    },
    {
        quote:"Don't let your happiness depend on something you may lose.",
        author:" C.S. Lewis"
    },
    {
        quote:"Let me live, love, and say it well in good sentences.",
        author:"Sylvia Plath"
    }   
]

 
btn.addEventListener("click",()=>{
    let random=Math.floor(Math.random()*quotes.length)
    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;
    

})