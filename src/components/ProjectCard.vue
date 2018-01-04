<template lang="html">
  <transition name='fade' mode="out-in">
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
          <router-link class="card-footer-item" :to="{ name: 'ProjectDetail', params: { id: this.id } }">Show Details</router-link>
          <a href="#" class="card-footer-item">Message Owner</a>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: [
    'project',
    'id',
  ],
  name: 'project-card',
}
</script>

<style lang="sass">
.fade-enter
  opacity: 0

.fade-enter-active
  transition: all .2s ease-in-out

.fade-leave
  opacity: 1
  transform: scale(1)

.fade-leave-active
  opacity: 0
  transform: scale(0)
  transition: all .2s ease-in-out
</style>
