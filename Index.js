export async function handler(event) {

    const facts = [
        "Dead skin cells are a main ingredient in household dust",
        "Sudan has more pyramids than any country in the world",
        "The circulatory system is more than 60,000 miles long",
        "German chocolate cake was invented in Texas",
        "The Philippines consists of 7,641 islands",
        "There’s enough gold inside Earth to coat the planet",
        "Adequate hydration is essential for digestion, temperature regulation, and joint health",
        "Adults need 7-9 hours of sleep per night for optimal health and cognitive function",
        "Mental health significantly impacts physical health, influencing disease risk and lifespan",
        "Handwashing is a primary defense against the spread of infectious diseases",
        "Quitting smoking drastically reduces the risk of heart disease and lung cancer",
        "Moderate alcohol consumption can lower the risk of heart disease, but excessive drinking is harmful",
        "Regular health screenings can catch diseases early when they're more treatable",
        "Vaccinations prevent deadly diseases like measles, polio, and influenza",
        "Oral hygiene is linked to reduced risks of heart disease and stroke",
        "Sun protection helps prevent skin cancer and premature aging",
        "Maintaining a healthy weight through diet and exercise prevents type 2 diabetes and heart disease",
        "Omega-3 fatty acids improve heart health and support brain function",
        "Mindfulness and meditation can lower stress and blood pressure",
        "Processed foods are high in unhealthy fats, sugars, and salts, contributing to heart disease and obesity",
        "High fiber intake supports digestive health and helps prevent diabetes",
        "Calcium and vitamin D are crucial for bone health, reducing the risk of osteoporosis",
        "Personal hygiene practices prevent infections and promote overall health",
        "Strong social connections improve mental health and increase longevity",

    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    const fact = facts[randomIndex];

    let response = {
        statusCode: 200,
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(fact)
    }
}
