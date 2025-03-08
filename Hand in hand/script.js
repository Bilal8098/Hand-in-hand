import { createClient } from "https://esm.sh/@supabase/supabase-js";

// Replace with your Supabase project credentials
const SUPABASE_URL = "https://cojomejuyatmaqrszisy.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvam9tZWp1eWF0bWFxcnN6aXN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk1NDI0MzcsImV4cCI6MjA1NTExODQzN30.WFtmzAJs3EQ6DHC1QQ5qPjYw2WmPovfQipo5axI8G_k";

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.addEventListener("DOMContentLoaded", async () => {
    const userList = document.getElementById("user-list");

    try {
        const { data: categories, error } = await supabase.from("categories").select("*");

if (error) throw error;

categories.forEach(category => {
    const li = document.createElement("li");
    li.textContent = `${category.CATEGORYID} - ${category.CATEGORYNAME}`;
    userList.appendChild(li);
    if (!categories || categories.length === 0) {
        userList.innerHTML = "<li>No data found</li>";
    }
    
        });
    } catch (error) {
        console.error("Error fetching users:", error);
    }
});
