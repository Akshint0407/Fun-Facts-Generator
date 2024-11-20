const facts = [
    "I am 20 years old.",
    "I love mountains and enjoy hiking.",
    "I aspire to visit all the famous mountain ranges around the world.",
    "I find peace and tranquility when I'm close to nature, especially mountains.",
    "Exploring new trails and reaching new heights is my passion."
];

document.getElementById('factButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').innerText = facts[randomIndex];
});
