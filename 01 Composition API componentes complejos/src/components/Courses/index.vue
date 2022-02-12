<template>
  <section class="courses">
    <h2 class="courses-title">👌 Cursos disponibles</h2>
    <Filters
      v-on:filter="setFilters"
      v-on:search="setSearchQuery"
    />
    <div class="courses-collection">
      <CourseCard
        v-for="course in courses"
        :key="course.title"
        :course="course"
      />
    </div>
  </section>
</template>

<script>
import { computed } from 'vue';
import { useCourses } from './useCourses.js';
import { useSearch } from './useSearch.js';
import { useFilter } from './useFilter.js';

import CourseCard from './../CourseCard.vue';
import Filters from './../Filters.vue';

export default {
    name: 'Courses',
    components: {
        CourseCard,
        Filters
    },
    setup() {
        const { courses } = useCourses();
        const { setSearchQuery, searchByTitle } = useSearch();
        const { setFilters, filterByCategory } = useFilter();


        const filteredCourses = computed(() => {
          return filterByCategory(searchByTitle(courses.value));
        });

        return {
            courses: filteredCourses,
            setFilters,
            setSearchQuery
        }
    }
}
</script>

<style scoped>
.courses {
  max-width: 90rem;
  margin: 0 auto;
  padding: 4rem 1rem;
}
.courses-title {
  font-size: 2rem;
}
.courses-collection {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  gap: 1.5rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>