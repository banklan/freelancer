<template>
    <div class="wrapper">
        <v-img :src="`/assets/images/projects/${job.image}`" alt="Featured Images" aspect-ratio="1" height="250" transition="scale-transition"></v-img>
        <div class="project_title">
            {{ job.title }}
        </div>
        <div class="project_cats">
            <v-chip class="ma-2">Mobile Dev</v-chip>
            <v-chip class="ma-2">Software Dev</v-chip>
            <v-chip class="ma-2">Programming</v-chip>
        </div>
        <div class="project_creator">
            <div class="wrap">
                <div class="creator_detail">
                    <v-avatar size="64">
                        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                    </v-avatar>
                    <div class="identity">
                        <div class="name">{{ job.user && job.user.name  }}</div>
                        <div class="job">{{ job.user && job.user.job  }}</div>
                        <div class="ratings">
                            <v-rating v-model="job.user.rating" background-color="white" color="secondary" dense half-increments hover size="18"></v-rating>
                            <span>(850)</span>
                        </div>
                    </div>
                </div>
                <div class="view">
                    <v-icon>mdi-eye</v-icon>
                    <span>2.5k</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['job'],

 }
</script>

<style lang="scss" scoped>
    .wrapper{
        border: 1px solid #e6e6e6;
        border-radius: 8px;
        height: 30rem;
        background: #fff;
        overflow: hidden;
        box-sizing: border-box;
        cursor: pointer;
        transition: all .5s ease;

        .v-image{
            height: 60%;
            width: 100%;
        }
        &:hover{
            box-shadow: 0 4px 4px rgba(0,0,0,.35);
        }
        .project_title{
            text-align: center;
            color: #2c2c2c;
            font-size: 1.1rem;
            line-height: 1.5;
            margin: 6px auto;
            padding: 8px 4px;
        }
        .project_cats{
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 6px auto;
        }
        .project_creator{
            padding: 10px 6px 0;
            margin-top: 1.9rem;
            .wrap{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 5px;
                .creator_detail{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: .6rem;
                    .v-avatar{

                    }
                    .identity{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        .name{
                            font-size: 17px;
                        }
                        .job{
                            color: #9d9d9d;
                            font-size: 13px;
                        }
                        .ratings{
                            display: flex;
                            // gap: 6px;
                        }
                    }
                }
            }
        }
    }
</style>
