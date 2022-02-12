import { onMounted, ref } from "vue";
import { api } from "../../services/api";

export function useCourses() {
    const courses = ref([]);

    onMounted(async () => {
        courses.value = await api.getCourses();
    });

    return {
        courses
    }
}