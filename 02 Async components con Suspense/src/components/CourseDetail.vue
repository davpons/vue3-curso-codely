<template>
    <header class="header">
        <img :src="course.thumbnail" :alt="course.title" />
        <div class="header-info">
            <h1>{{ course.title }}</h1>
            <small>{{ course.authors.join(", ") }}</small>
            <p class="lead">
                {{ course.summary }}
            </p>
        </div>
    </header>

    <section class="content">
    <Card>
        <div v-html="course.description"></div>
        <a href="#">Ver más cursos de CSS</a>
    </Card>

    <Suspense v-if="isLogged">
        <template #default>
            <Chat />
        </template>
        <template #fallback>
            <Loader />
        </template>
    </Suspense>
    </section>
</template>

<script>
import { defineAsyncComponent, computed } from 'vue'
import { useStore } from "vuex"
import course from './../data/course-detail.json'

import Card from './Card.vue'
import Loader from './Loader.vue'

export default {
    components: {
        Card,
        Loader,
        Chat: defineAsyncComponent(() => import("./Chat.vue"))
    },
    setup() {
        const store = useStore()

        return {
            course,
            isLogged: computed(() => store.getters.isLogged)
        }
    },
}
</script>

<style scoped>
.header {
  min-height: 20rem;
  margin-bottom: 5rem;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  background: #2a3e86;
  color: #fff;
  font-size: 1.3rem;
}
.header h1 {
  line-height: 1;
}
.header-info {
  max-width: 55ch;
}
small {
  opacity: 0.8;
}
.content {
  max-width: 90rem;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}
.content > * {
  flex-grow: 1;
}
</style>