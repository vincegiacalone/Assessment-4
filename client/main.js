const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)



const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)



const affirmationBtn = document.getElementById("affirmationButton");

const getAffirmation = () => {
    axios.get("http://localhost:4000/api/affirmation/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

affirmationBtn.addEventListener('click', getAffirmation);

const quoteBtn = document.getElementById("quoteButton");

const getQuote = () => {
    axios.get("http://localhost:4000/api/quote/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

quoteBtn.addEventListener('click', getQuote);

const imageBtn = document.getElementById("imageButton");

const getImage = () => {
    axios.get("http://localhost:4000/api/image/")
        .then(res => {
            const data = res.data;
            // Assuming data is a URL of the image, you can display it in an <img> tag
            // Example: document.getElementById("motivationImage").src = data;
            // Alternatively, you can open the image in a new tab using window.open(data);
            alert("Here's your motivational image: " + data);
    });
};

imageBtn.addEventListener('click', getImage);