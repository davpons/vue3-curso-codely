import { ref } from 'vue';

export function useFilter() {
    const filters = ref([]);

    function setFilters(newFilters) {
        filters.value = newFilters
    }

    function filterByCategory(courses) {
        if (filters.value.length) {
            return courses.filter(course => {
                return course.category.find(category =>
                    filters.value.includes(category)
                );
            });
        }
        return courses;
    }

    return { setFilters, filterByCategory }
}