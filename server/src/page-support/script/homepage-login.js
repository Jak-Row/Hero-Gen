  // User management
  let currentUser = null;
  
  // DOM Elements
  const loginBtn = document.getElementById('loginBtn');
  const signupBtn = document.getElementById('signupBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  const loginStatus = document.getElementById('loginStatus');
  const loginModal = document.getElementById('loginModal');
  const signupModal = document.getElementById('signupModal');
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const createHeroBtn = document.getElementById('createHeroBtn');
  const myHeroesLink = document.getElementById('myHeroesLink');
  const heroHistory = document.getElementById('heroHistory');
  const heroList = document.getElementById('heroList');
  
  // Event Listeners
  loginBtn.addEventListener('click', () => loginModal.style.display = "block");
  signupBtn.addEventListener('click', () => signupModal.style.display = "block");
  logoutBtn.addEventListener('click', logout);
  myHeroesLink.addEventListener('click', (e) => {
  e.preventDefault();
  if (!currentUser) {
  alert('Please log in to view your heroes');
  return;
  }
  heroHistory.scrollIntoView({ behavior: 'smooth' });
  loadHeroHistory();
  heroHistory.style.display = "block";
  });
  
  // Close modals when clicking outside
  window.onclick = function(event) {
  if (event.target == loginModal) {
  loginModal.style.display = "none";
  }
  if (event.target == signupModal) {
  signupModal.style.display = "none";
  }
  }
  
  // Close buttons for modals
  document.querySelectorAll('.close').forEach(closeBtn => {
  closeBtn.onclick = function() {
  loginModal.style.display = "none";
  signupModal.style.display = "none";
  }
  });
  
  loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  login(username, password);
  });
  
  signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('signupUsername').value;
  const password = document.getElementById('signupPassword').value;
  signup(username, password);
  });
  
  createHeroBtn.addEventListener('click', createHero);
  
  // Add smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
  e.preventDefault();
  
  document.querySelector(this.getAttribute('href')).scrollIntoView({
  behavior: 'smooth'
  });
  });
  });
  
  // Add parallax effect to hero section
  window.addEventListener('scroll', function() {
  const scrollPosition = window.pageYOffset;
  document.querySelector('.hero').style.backgroundPositionY = scrollPosition * 0.7 + 'px';
  });
  
  // Add animation to feature
  const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
  if (entry.isIntersecting) {
  entry.target.style.opacity = 1;
  entry.target.style.transform = 'translateY(0)';
  }
  });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.feature').forEach(item => {
  item.style.opacity = 0;
  item.style.transform = 'translateY(50px)';
  observer.observe(item);
  });
  
  // Functions
  function login(username, password) {
  const users = JSON.parse(localStorage.getItem('users')) || {};
  if (users[username] && users[username].password === password) {
  currentUser = username;
  updateLoginStatus();
  loginModal.style.display = "none";
  alert('Login successful!');
  loadHeroHistory();
  } else {
  alert('Invalid username or password');
  }
  }
  
  function signup(username, password) {
  const users = JSON.parse(localStorage.getItem('users')) || {};
  if (users[username]) {
  alert('Username already exists');
  } else {
  users[username] = { password: password, heroes: [] };
  localStorage.setItem('users', JSON.stringify(users));
  signupModal.style.display = "none";
  alert('Signup successful! Please log in.');
  }
  }
  
  function logout() {
  currentUser = null;
  updateLoginStatus();
  heroHistory.style.display = "none";
  }
  
  function updateLoginStatus() {
  if (currentUser) {
  loginStatus.textContent = `Welcome, ${currentUser}!`;
  loginBtn.style.display = "none";
  signupBtn.style.display = "none";
  logoutBtn.style.display = "inline-block";
  heroHistory.style.display = "block";
  } else {
  loginStatus.textContent = "";
  loginBtn.style.display = "inline-block";
  signupBtn.style.display = "inline-block";
  logoutBtn.style.display = "none";
  heroHistory.style.display = "none";
  }
  }
  
  function createHero() {
  if (!currentUser) {
  alert('Please log in to create a hero');
  return;
  }
  window.location.href = "Create-Superhero.html";
  }
  
  function loadHeroHistory() {
  if (!currentUser) return;
  const users = JSON.parse(localStorage.getItem('users'));
  const heroes = users[currentUser].heroes;
  heroList.innerHTML = '';
  heroes.forEach(hero => {
  const li = document.createElement('li');
  li.textContent = `${hero.name} - Created on ${hero.createdAt}`;
  heroList.appendChild(li);
  });
  }
  
  // Check login status on page load
  updateLoginStatus();