<template>
    <div class="Blog">
      <section class="blog-section">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
  
        <div class="card-container">
          <div class="card">
            <img src="@/assets/travel1.jpg" alt="Travel Destination 1" class="card-image" />
            <div class="card-content">
              <h2>Singapore Changi Airport</h2>
              <p>Singapore Changi Airport is a major international airport that serves Singapore, and is one of the largest transportation hubs in Asia.</p>
            </div>
          </div>
  
          <div class="card">
            <img src="@/assets/travel2.jpg" alt="Travel Destination 2" class="card-image" />
            <div class="card-content">
              <h2>Bird Paradise</h2>
              <p>The waterfall at Bird Paradise in Singapore is a breathtaking centerpiece, standing at an impressive 30 meters high.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Blog',
    data() {
      return {
        title: 'Travel Blog',
        description: 'Join me as I explore breathtaking destinations around the world!',
      };
    },
  };
  </script>
  
  <style scoped>
  .Blog {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px;
    background-color: #f0f8ff;
    height: 100vh;
  }
  
  .blog-section {
    text-align: center;
  }
  
  .blog-section h1 {
    font-size: 4rem;
    color: #1e90ff;
  }
  
  .blog-section p {
    font-size: 2rem;
    color: #ff69b4;
    margin-bottom: 30px;
  }
  
  .card-container {
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 20px;
  }
  
  .card {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 300px;
    height: 400px;
    overflow: hidden;
    transition: transform 0.3s;
  }
  
  .card:hover {
    transform: scale(1.05);
  }
  
  .card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .card-content {
    padding: 15px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .card-content h2 {
    font-size: 1.5rem;
    color: #333;
  }
  
  .card-content p {
    font-size: 1rem;
    color: #666;
  }
  </style>
  