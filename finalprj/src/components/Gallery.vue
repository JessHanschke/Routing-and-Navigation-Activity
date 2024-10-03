<template>
    <div class="Gallery">
      <section class="gallery-section">
        <h1>{{ title }}</h1>
        <div class="gallery-container">
          <img v-for="(image, index) in images" :key="index" :src="image" alt="Gallery Image" class="gallery-image" />
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Gallery',
    data() {
      return {
        title: 'All the Things I Love',
        images: [
          require('@/assets/1.jpg'),
          require('@/assets/image2.jpg'),
          require('@/assets/image3.jpg'),
          require('@/assets/image4.jpg'),
          require('@/assets/image5.jpg'),
          require('@/assets/image6.jpg'),
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .Gallery {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
    background-color: #f0f8ff;
  }
  
  .gallery-section {
    text-align: center;
  }
  
  .gallery-section h1 {
    font-size: 4rem;
    color: #1e90ff;
    margin-bottom: 30px;
  }
  
  .gallery-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }
  
  .gallery-image {
    width: 100%;
    height: 200px; 
    object-fit: cover; 
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s;
  }
  
  .gallery-image:hover {
    transform: scale(1.05);
  }
  </style>
  