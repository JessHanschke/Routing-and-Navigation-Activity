<template>
    <div class="ContactMe">
      <section class="contact-section">
        <h1>{{ title }}</h1>
        <p class="description">{{ description }}</p>
        <div class="contact-details">
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <span>{{ email }}</span>
          </div>
          <div class="contact-item">
            <i class="fab fa-facebook"></i>
            <span>{{ facebookName }}</span>
          </div>
          <div class="contact-item">
            <i class="fas fa-phone"></i>
            <span>{{ phoneNumber }}</span>
          </div>
          <div class="contact-item">
            <i class="fab fa-instagram"></i>
            <span>{{ instagramName }}</span>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactMe',
    data() {
      return {
        title: 'Contact Me',
        description: 'Feel free to reach out to me through any of the platforms below!',
        email: 'jessicashanschke@gmail.com',
        phoneNumber: '0917 657 4170',
        facebookName: 'Jessica Soriano Hanschke',
        instagramName: 'Jessica Hanschke',
      };
    },
  };
  </script>
  
  <style scoped>
  .ContactMe {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
    background-color: #f0f8ff;
    height: 100vh;
  }
  
  .contact-section {
    text-align: center;
  }
  
  .contact-section h1 {
    font-size: 4rem;
    color: #1e90ff;
    margin-bottom: 20px;
  }
  
  .contact-section p.description {
    font-size: 1.5rem;
    color: #ff69b4; 
    margin-bottom: 30px;
  }
  
  .contact-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #333;
  }
  
  .contact-item i {
    margin-right: 10px;
  }
  </style>
  