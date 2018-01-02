<template lang="html">
  <div class="container">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{project.name}}
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
        </a>
      </header>
      <div class="card-content">
        <div class="content">
          {{ project.description }}
          <br>
          <a href="#">{{ project.url }}</a>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Save for later</a>
        <a href="#" class="card-footer-item">Show Details</a>
        <a href="#" class="card-footer-item">Message Owner</a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'project',
  ],
  name: 'project-card',
}
</script>

<style lang="sass">
</style>