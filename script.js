const facts = [
    "I am 20 years old.",
    "I love mountains and enjoy hiking.",
    "I aspire to visit all the famous mountain ranges around the world.",
    "I find peace and tranquility when I'm close to nature, especially mountains.",
    "Exploring new trails and reaching new heights is my passion.",
    "Curious – Always eager to learn new technologies.",
    "Innovative – Enjoys creating unique and practical solutions.",    
    "Detail-oriented – Focuses on precision and accuracy.",    
    "Analytical – Thinks critically and evaluates data effectively.",    
    "Problem-solver – Enjoys tackling challenges logically.",
    "Adaptable – Quickly adjusts to new tools and environments.",    
    "Self-motivated – Takes initiative without needing constant guidance.",
    "Hardworking – Puts in effort and dedication in every task.",
    "Team player – Collaborates well and values group success.",    
    "Independent thinker – Forms opinions based on logic, not trends.",    
    "Tech-savvy – Comfortable with emerging tools and platforms.",    
    "Organized – Keeps tasks structured and well-planned.",    
    "Goal-driven – Works with clear objectives in mind.",    
    "Perseverant – Doesn’t give up easily, even when things get tough.",    
    "Resourceful – Finds solutions even with limited resources.",    
    "Quick learner – Picks up new concepts and skills efficiently.",    
    "Creative – Thinks outside the box for unique approaches.",    
    "Logical – Approaches problems with a structured mindset.",    
    "Open-minded – Accepts feedback and explores different perspectives.",    
    "Passionate – Genuinely enjoys working on tech-driven projects."
];

document.getElementById('factButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').innerText = facts[randomIndex];
});
