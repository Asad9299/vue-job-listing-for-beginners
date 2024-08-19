<script setup> 
    import { onMounted, reactive }  from 'vue';
    import axios from 'axios';
    import JobListing from "@/components/JobListing.vue"
    import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

    const state = reactive({
      jobs: [],
      isLoading: true,
    });

    defineProps({
        limit: Number,
        showButton: Boolean,
    });

    onMounted(async () => {
      try {
        const response = await axios.get('/api/jobs');
        state.jobs = response.data;
      } catch (error) {
        console.error('Error listing Jobs', error);
      } finally {
        state.isLoading = false;
      }
    });

</script>

<template>
    <section class="bg-green-50 px-4 py-10">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
          Browse Jobs
        </h2>

        <!-- Show Spinner  -->
        <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
          <PulseLoader />
        </div>
        
        <!-- Show Job Listing When done Loading -->
        <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6" >
            <div v-for="job in state.jobs.slice(0, limit || state.jobs.length)" :key="job.id">
                <JobListing :job="job"/>
            </div>
        </div>
      </div>
    </section>

    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink>
    </section>
</template>