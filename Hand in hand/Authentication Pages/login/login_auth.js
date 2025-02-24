const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvam9tZWp1eWF0bWFxcnN6aXN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk1NDI0MzcsImV4cCI6MjA1NTExODQzN30.WFtmzAJs3EQ6DHC1QQ5qPjYw2WmPovfQipo5axI8G_k';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);
document.querySelector('.login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    // Get Input Values
    const email = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    // Supabase Authentication - Sign In
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      alert('Login failed: ' + error.message);
    } else {
      alert('Login successful!');
      window.location.href = 'dashboard.html'; // Redirect to dashboard or another page
    }
  });
  supabase.auth.getSession().then(({ data }) => {
    if (!data.session) {
      window.location.href = 'login.html'; // Redirect to login page if not authenticated
    }
  });