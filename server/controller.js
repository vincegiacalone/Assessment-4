module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "A dubious friend may be an enemy in camouflage.", "A faithful friend is a strong defense.", "A fresh start will put you on your way.", "A friend asks only for your time not your money."];
  
        // choose random fortune
        let randomIndexTwo = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndexTwo];
  
        res.status(200).send(randomFortune);
    },
    getAffirmation: (req, res) => {
        const affirmations = ["You are capable of achieving anything you set your mind to!", "You have the power to create the life you desire!", "Every challenge you face is an opportunity to grow stronger."];
     
        // choose random affirmation
        let randomIndex = Math.floor(Math.random() * affirmations.length);
        let randomAffirmation = affirmations[randomIndex];
     
        res.status(200).send(randomAffirmation);
     },
     getQuote: (req, res) => {
        const quotes = ["The only way to do great work is to love what you do. - Steve Jobs", "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill", "Believe you can and you're halfway there. - Theodore Roosevelt"];
        
        // choose random quote
        let randomIndex = Math.floor(Math.random() * quotes.length);
        let randomQuote = quotes[randomIndex];
        
        res.status(200).send(randomQuote);
    },
    getImage: (req, res) => {
        // You can use an array of image URLs or fetch a random image from an external API
        const images = ["https://i.ebayimg.com/images/g/ynEAAOSwLY9iByaB/s-l1600.jpg", "https://rukminim2.flixcart.com/image/850/1000/l2m78280/poster/n/e/u/large-motivational-quotes-for-study-quotes-wall-frames-for-original-imagdx8gxxmn7zks.jpeg?q=90&crop=false", "https://rukminim2.flixcart.com/image/850/1000/poster/u/3/m/think-positive-motivational-quote-poster-pkmq55-medium-original-imaebpwyjfdnz5rh.jpeg?q=90&crop=false"];
        
        // choose random image
        let randomIndex = Math.floor(Math.random() * images.length);
        let randomImage = images[randomIndex];
        
        res.status(200).send(randomImage);
    }
};