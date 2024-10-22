document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.querySelector('.posts');
    const searchInput = document.getElementById('search');
    const profileLink = document.getElementById('profile-link');
    const loginLink = document.getElementById('login-link');
  
    // Mock Data (You would normally fetch this from a backend server)
    const posts = [
      { id: 1, title: 'Understanding Modern Web Design', excerpt: 'This post explores the principles of modern web design...' },
      { id: 2, title: 'JavaScript Best Practices', excerpt: 'In this post, we’ll cover some JavaScript best practices for 2024...' },
      { id: 3, title: 'CSS Grid vs Flexbox', excerpt: 'Flexbox and Grid are two powerful layout systems in CSS. But which is better?' }
    ];
  
    // Function to render posts dynamically
    function renderPosts(posts) {
      postsContainer.innerHTML = '';
      posts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.classList.add('post-preview');
        postElement.innerHTML = `
          <h2><a href="/post/${post.id}">${post.title}</a></h2>
          <p class="excerpt">${post.excerpt}</p>
          <a href="/post/${post.id}" class="read-more">Read More</a>
        `;
        postsContainer.appendChild(postElement);
      });
    }
  
    // Fetch posts (mock data in this case)
    renderPosts(posts);
  
    // Search functionality
    searchInput.addEventListener('input', function() {
      const query = searchInput.value.toLowerCase();
      const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(query) || post.excerpt.toLowerCase().includes(query));
      renderPosts(filteredPosts);
    });
  
    // Handle profile/login links based on authentication status
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      loginLink.style.display = 'none';
      profileLink.style.display = 'block';
    } else {
      loginLink.style.display = 'block';
      profileLink.style.display = 'none';
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');

  // Mock login functionality (you'd normally send this to a backend)
  loginForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Mock authentication (replace with real authentication API)
    if (email === 'test@domain.com' && password === 'password123') {
      localStorage.setItem('authToken', 'mock-jwt-token');  // Mock token
      window.location.href = '/';
    } else {
      alert('Invalid credentials');
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');

  // Mock login functionality (you'd normally send this to a backend)
  loginForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Mock authentication (replace with real authentication API)
    if (email === 'test@domain.com' && password === 'password123') {
      localStorage.setItem('authToken', 'mock-jwt-token');  // Mock token
      window.location.href = '/';
    } else {
      alert('Invalid credentials');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
  
    // Mock login functionality (you'd normally send this to a backend)
    loginForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      // Mock authentication (replace with real authentication API)
      if (email === 'test@domain.com' && password === 'password123') {
        localStorage.setItem('authToken', 'mock-jwt-token');  // Mock token
        window.location.href = '/';
      } else {
        alert('Invalid credentials');
      }
    });
  });  
