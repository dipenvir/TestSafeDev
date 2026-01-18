// INTENTIONALLY INSECURE: demo secrets for SafeDev testing

const AWS_ACCESS_KEY = "AKIA1234567890ABCDEF"; // triggers AWS Access Key found
const GITHUB_PAT = "ghp_1234567890abcdefghijklmnopqrstuvwxyzABCD"; // triggers GitHub PAT found (36 chars after ghp_)

const SECRET_KEY = "my-app-secret"; // triggers SECRET_KEY=...
const JWT_SECRET = "my-jwt-secret"; // triggers JWT_SECRET=...

console.log("SafeDev demo repo running", { AWS_ACCESS_KEY, GITHUB_PAT, SECRET_KEY, JWT_SECRET });
