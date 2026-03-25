import React from 'react';

const CategoryList = () => {
  const categories = [
    {
      id: 1,
      name: "Technology",
      count: 24,
      icon: "💻",
      description: "Latest in tech, programming & innovation"
    },
    {
      id: 2,
      name: "Lifestyle",
      count: 18,
      icon: "🌿",
      description: "Wellness, minimalism & daily living"
    },
    {
      id: 3,
      name: "Photography",
      count: 15,
      icon: "📷",
      description: "Tips, tricks & visual stories"
    },
    {
      id: 4,
      name: "Programming",
      count: 22,
      icon: "👨‍💻",
      description: "Coding tutorials & best practices"
    },
    {
      id: 5,
      name: "Wellness",
      count: 12,
      icon: "🧘",
      description: "Mental health & mindfulness"
    },
    {
      id: 6,
      name: "Travel",
      count: 16,
      icon: "✈️",
      description: "Adventures & travel guides"
    },
    {
      id: 7,
      name: "Food",
      count: 14,
      icon: "🍳",
      description: "Recipes & culinary experiences"
    },
    {
      id: 8,
      name: "Design",
      count: 19,
      icon: "🎨",
      description: "UI/UX, graphics & creativity"
    }
  ];

  return (
    <section className="categories">
      <div className="categories-container">
        <div className="section-header">
          <h2 className="section-title">
            Explore <span className="highlight">Categories</span>
          </h2>
          <p className="section-subtitle">
            Find the perfect topic that matches your interest
          </p>
        </div>

        <div className="categories-grid">
          {categories.map(category => (
            <div key={category.id} className="category-card">
              <div className="category-icon">{category.icon}</div>
              <div className="category-content">
                <h3 className="category-name">
                  {category.name}
                  <span className="category-count">{category.count}</span>
                </h3>
                <p className="category-description">{category.description}</p>
              </div>
              <button className="category-btn">
                <span>Explore</span>
                <span className="arrow">→</span>
              </button>
            </div>
          ))}
        </div>

        <div className="categories-footer">
          <p className="total-categories">
            Total <strong>{categories.length} Categories</strong> and growing
          </p>
          <button className="btn-view-all-categories">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryList;