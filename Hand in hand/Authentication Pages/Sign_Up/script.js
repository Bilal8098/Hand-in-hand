import { createClient } from "https://esm.sh/@supabase/supabase-js";

// Supabase Credentials (Replace with your actual credentials)
const SUPABASE_URL = "https://cojomejuyatmaqrszisy.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvam9tZWp1eWF0bWFxcnN6aXN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk1NDI0MzcsImV4cCI6MjA1NTExODQzN30.WFtmzAJs3EQ6DHC1QQ5qPjYw2WmPovfQipo5axI8G_k";

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Handle Form Submission
document.getElementById("registerBtn").addEventListener("click", async (event) => {
    event.preventDefault(); // Prevent form reload

    // Get user inputs
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const birthdate = document.getElementById("birthdate").value;
    const location = document.getElementById("location").value.trim();

    // Validate inputs
    if (!username || !email || !password) {
        alert("Username, Email, and Password are required!");
        return;
    }

    try {
        // **1️⃣ Supabase Authentication: Create User**
        const { data: authUser, error: authError } = await supabase.auth.signUp({
            email,
            password
        });

        if (authError) throw authError;
        console.log("User signed up successfully:", authUser);

        // **2️⃣ Insert User Data into "users" Table**
        const { data: userData, error: userError } = await supabase.from("users").insert([
            {
                username,
                email,
                password: password,
                birthdate,
                location
            } 
        ]);

        if (userError) throw userError;
        console.log("User added to database:", userData);

        // **3️⃣ Redirect to Login Page**
        alert("Registration successful! Redirecting to login...");
        window.location.href = "/Hand in hand/Authentication Pages/Login/Login_Page.html";

    } catch (error) {
        console.error("Error during sign-up:", error);
        alert(`Error: ${error.message}`);
    }
});
