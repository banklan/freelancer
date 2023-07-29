<template>
    <div class="featured_jobs" data-aos="fade-up" data-aos-delay="300">
    <v-container>
        <v-row wrap justify="center" align="center" class="landing_section">
            <v-col cols="12">
                <div class="subject">
                    Inspiring jobs made on freelancer
                </div>
            </v-col>
        </v-row>
        <v-row wrap justify="center" align="center">
            <v-col cols="12" md="4" v-for="job in jobs" :key="job.id">
                <landing-job-card :job="job" />
            </v-col>
        </v-row>
    </v-container>
    </div>
</template>

<script>
export default {
        data() {
            return {
                jobs: [
                    { id: 1, title: 'Our first real Job', user: { id: 1, name: 'Joe Lee', rating: 5, job: 'Ui/UX Designer' }, image: '1.jpg'},
                    { id: 2, title: 'Global tech on the throes of AI', user: { id: 2, name: 'Kieran Alex', rating: 4, job: 'Content writer' }, image: '2.jpg'},
                    { id: 3, title: 'File sharing web app', user: { id: 3, name: 'Callam Graham', rating: 5, job: 'web developer' }, image: '3.jpg'},
                    { id: 4, title: 'Shiloh Hour Banner', user: { id: 4, name: 'Ben Markam', rating: 3, job: 'Graphic Designer' }, image: '4.jpg'},
                    { id: 5, title: 'Shiffon Made Wedding Dress', user: { id: 5, name: 'Chloe Adams', rating: 4, job: 'Fashion designer' }, image: '5.jpg'},
                    { id: 6, title: 'Web Pay Mobile App', user: { id: 6, name: 'Liam Aaron', rating: 5, job: 'Mobile App Developer' }, image: '6.jpg'},
                ]
            }
        },
    }

</script>
