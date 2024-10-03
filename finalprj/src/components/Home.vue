<template>
  <div class="Home">
    <section class="hero-section">
      <img src="@/assets/profile.jpg" alt="Profile Picture" class="profile-image" />
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      title: 'Welcome to My Personal Website',
      subtitle: " I'm Jessica Hanschke, a passionate graphic designer and web developer.",
    };
  },
};
</script>

<style scoped>
.Home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f8ff;
}

.hero-section {
  text-align: center;
}

.profile-image {
  width: 150px; 
  height: 150px; 
  border-radius: 50%; 
  margin-bottom: 20px; 
}

.hero-section h1 {
  font-size: 4rem;
  color: #1e90ff; 
}

.hero-section p {
  font-size: 2rem;
  color: #ff69b4; 
}
</style>
