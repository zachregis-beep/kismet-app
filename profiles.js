// Simulated backend for KISMET
let profiles = [];

// Generate 100 random users
for (let i = 1; i <= 100; i++) {
  profiles.push({
    name: "User" + i,
    openness: Math.floor(Math.random() * 101),
    conscientiousness: Math.floor(Math.random() * 101),
    extraversion: Math.floor(Math.random() * 101),
    agreeableness: Math.floor(Math.random() * 101),
    stability: Math.floor(Math.random() * 101)
  });
}

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(profiles);  // Shows all 100 users
  }
  if (req.method === "POST") {
    profiles.push(req.body); // Adds new user if someone fills survey
    res.status(200).json({ success: true, total: profiles.length });
  }
}
