// Simple demo data for articles and authors
const newsArticles = [
  {
    title: "Kenya’s Tech Startups Raise Record Funding in 2025",
    category: "tech",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    author: "Mary Njenga",
    authorImg: "https://randomuser.me/api/portraits/women/50.jpg",
    date: "2025-06-06",
    excerpt: "Kenya’s tech startups secured over $500 million in funding, signaling a new era for innovation in East Africa.",
    featured: true,
  },
  {
    title: "Nairobi Stock Exchange Sees Historic Growth",
    category: "business",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    author: "James Maina",
    authorImg: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "2025-06-05",
    excerpt: "The NSE hit record highs this quarter, led by banking and tech sector gains.",
    featured: false,
  },
  {
    title: "Government Announces New Tech Tax Policy",
    category: "politics",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    author: "Lucy Wambui",
    authorImg: "https://randomuser.me/api/portraits/women/65.jpg",
    date: "2025-06-03",
    excerpt: "A new tax bill targeting digital services will impact both startups and consumers.",
    featured: true,
  },
  {
    title: "Digital Banking Revolutionizes Rural Kenya",
    category: "business",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    author: "Samuel Kiptoo",
    authorImg: "https://randomuser.me/api/portraits/men/75.jpg",
    date: "2025-06-02",
    excerpt: "Mobile banking is bringing financial services to millions in rural areas.",
    featured: false,
  },
  {
    title: "AI-Powered Journalism: The Future is Now",
    category: "tech",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=600&q=80",
    author: "Mary Njenga",
    authorImg: "https://randomuser.me/api/portraits/women/50.jpg",
    date: "2025-06-01",
    excerpt: "Newsrooms are adopting AI to speed up reporting and fact-checking.",
    featured: true,
  },
];

// Author data
const authors = [
  {
    name: "Mary Njenga",
    img: "https://randomuser.me/api/portraits/women/50.jpg",
    role: "Senior Tech Journalist",
    bio: "Covers African startups, innovation, and digital trends.",
  },
  {
    name: "James Maina",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    role: "Business Correspondent",
    bio: "Specializes in finance, stocks, and the Kenyan economy.",
  },
  {
    name: "Lucy Wambui",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    role: "Political Analyst",
    bio: "Focus on policy, government, and regulation.",
  },
  {
    name: "Samuel Kiptoo",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
    role: "Field Reporter",
    bio: "Brings rural and grassroots stories to the forefront.",
  },
];

// Populate Latest News
function renderLatestNews() {
  const latestNews = document.getElementById('latest-news');
  latestNews.innerHTML = newsArticles
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4)
    .map(article => newsCard(article))
    .join('');
}

// Populate Featured Stories
function renderFeaturedStories() {
  const featured = newsArticles.filter(a => a.featured);
  const featuredDiv = document.getElementById('featured-stories');
  featuredDiv.innerHTML = featured.map(article => featuredCard(article)).join('');
}

// Populate Category News
function renderCategoryNews(category = "all") {
  const categoryNews = document.getElementById('category-news');
  let filtered = newsArticles;
  if (category !== "all") {
    filtered = filtered.filter(a => a.category === category);
  }
  categoryNews.innerHTML = filtered.map(article => newsCard(article)).join('');
}

// Render Author Profiles
function renderAuthors() {
  const authorDiv = document.getElementById('author-profiles');
  authorDiv.innerHTML = authors.map(author => `
    <div class="author-card">
      <img src="${author.img}" alt="${author.name}" />
      <h4>${author.name}</h4>
      <div class="role">${author.role}</div>
      <p>${author.bio}</p>
    </div>
  `).join('');
}

// News Card Template
function newsCard(article) {
  return `
    <div class="news-card" tabindex="0">
      <img src="${article.image}" alt="${article.title}">
      <h3>${article.title}</h3>
      <div class="meta">By ${article.author} • ${article.date}</div>
      <div class="excerpt">${article.excerpt}</div>
    </div>
  `;
}

// Featured Card Template
function featuredCard(article) {
  return `
    <div class="featured-card">
      <img src="${article.image}" alt="${article.title}">
      <h3>${article.title}</h3>
      <div class="meta">By ${article.author} • ${article.date}</div>
      <div class="excerpt">${article.excerpt}</div>
    </div>
  `;
}

// Category Filter Events
document.addEventListener('DOMContentLoaded', () => {
  renderLatestNews();
  renderFeaturedStories();
  renderCategoryNews();
  renderAuthors();

  // Category Filter
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderCategoryNews(this.dataset.category);
    });
  });

  // Dark Mode Toggle
  const darkBtn = document.getElementById('toggle-dark');
  darkBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    darkBtn.innerHTML = document.body.classList.contains('dark')
      ? '<i class="fa fa-sun"></i>' : '<i class="fa fa-moon"></i>';
  });

  // Contact Form (Fake Submission)
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us!');
    this.reset();
  });
});
