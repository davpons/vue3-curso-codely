import { ref } from 'vue';

export function useSearch() {
    const searchQuery = ref('');

    function setSearchQuery(search) {
        searchQuery.value = search;
    }

    function searchByTitle(courses) {
        if (searchQuery.value) {
            return courses.filter(item => {
                return item.title
                           .toLowerCase()
                           .includes(searchQuery.value.toLowerCase());
            });
        }
        return courses;
    }

    return { setSearchQuery, searchByTitle };
}