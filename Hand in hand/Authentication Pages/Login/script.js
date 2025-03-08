import { createClient } from "https://esm.sh/@supabase/supabase-js";

// Supabase Credentials (Replace with your actual credentials)
const SUPABASE_URL = "https://cojomejuyatmaqrszisy.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvam9tZWp1eWF0bWFxcnN6aXN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk1NDI0MzcsImV4cCI6MjA1NTExODQzN30.WFtmzAJs3EQ6DHC1QQ5qPjYw2WmPovfQipo5axI8G_k";

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Handle Login Form Submission
document.querySelector(".login-form").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent form reload
    // Get user input values
    const email = document.getElementById("Email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validate inputs
    if (!email || !password) {
        alert("Email and Password are required!");
        return;
    }
    try {
        const { data: authUser, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });    
        if (error) {
            throw new Error(error.message);
        }
        console.log("User logged in successfully:", authUser);
        alert("Login successful! Redirecting...");
        window.location.href = "/Hand in hand/index.html";
    } catch (error) {
        console.error("Login failed:", error);
        alert(`Login Error: ${error.message || "Something went wrong. Please try again."}`);
    } 
});
