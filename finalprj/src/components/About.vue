<template>
    <div class="AboutMe">
      <section class="about-section">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <div class="about-images">
          <img v-for="(image, index) in images" :key="index" :src="image" alt="About Me Image" class="about-image" />
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutMe',
    data() {
      return {
        title: 'About Me',
        description: "I'm Jessica Hanschke, a passionate graphic designer and a web developer student. I love creating beautiful and functional websites that provide great user experiences.",
        images: [
          require('@/assets/design1.jpg'),
          require('@/assets/design2.jpg'),
          require('@/assets/webdev.jpg'),
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  html, body {
    height: 100%;
    margin: 0;
    background-color: #f0f8ff; /* Same light background color */
  }
  
  .AboutMe {
    display: flex;
    justify-content: center;
    align-items: flex-start; /* Align items to the top */
    padding: 50px;
    width: 100%;
    min-height: 100vh; /* Ensure it takes at least full viewport height */
    background-color: #f0f8ff; /* Ensure background color applies */
  }
  
  .about-section {
    text-align: center;
    width: 100%; /* Full width for section */
  }
  
  .about-section h1 {
    font-size: 4rem;
    color: #1e90ff;
    margin-bottom: 20px;
  }
  
  .about-section p {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 30px;
  }
  
  .about-images {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .about-image {
    width: 200px; 
    height: 200px; 
    object-fit: cover; 
    border-radius: 10px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  }
  </style>
  