<template>
    <div class="freelancer">
        <div class="img">
            <img :src="`/assets/images/freelancers/${user.picture}`" alt="">
        </div>
        <div class="content">
            <div class="identity">
                <div class="name">{{ user.name }} <span>({{  user.prof }})</span> <span class="mr-1"><v-icon color="primary" size="20">mdi-check-decagram</v-icon></span></div>
                <div class="intro">"{{ user.intro }}"</div>
            </div>
            <div class="skills">
                <v-chip small outlined>Java</v-chip>
                <v-chip small outlined>HTML5</v-chip>
                <v-chip small outlined>CSS3</v-chip>
                <v-chip small outlined>Javascript</v-chip>
            </div>
            <div class="ranking">
                <div class="rating">
                    <v-rating dense readonly v-model="user.ratings" size="18" background-color="primary" half-increments></v-rating><span>(2500)</span>
                </div>
                <div class="project_count">
                    <v-icon color="primary" size="16">mdi-tools</v-icon>
                    <span>(158)</span>
                </div>
            </div>
            <div class="category">
                <div>{{ user.category }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['user'],
}
</script>

<style lang="scss" scoped>
    .freelancer{
        border: 1px solid #bebebe;
        border-radius: 6px;
        background: #fff;
        cursor: pointer;
        overflow: hidden;
        height: 32rem;
        box-sizing: border-box;
        .img{
            width: 100%;
            height: 67%;

            img{
                width: 100%;
                height: 100%;
            }
        }
        .content{
            width: 100%;
            height: 33%;
            // padding: 1rem .8rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            .identity{
                padding: .4rem .8rem;
                text-align: center;
                line-height: 1.6;
                name{
                    font-size: 1rem;
                    color: #6d6d6d;
                }
                .intro{
                    font-size: .9rem;
                    font-style: italic;
                    color: #6e6e6e;
                }
            }
            .skills{
                padding: 0 .8rem;
                display: flex;
                justify-content: space-around;
                align-items: center;
                gap: .5rem;
            }
            .ranking{
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 .8rem;
                .rating{
                    display: flex;
                }
                span{
                    color: #6d6d6d;
                    font-size: .9rem;
                }
            }
            .category{
                background: #851941;
                color: #fff;
                text-align: center;
                font-size: .9rem;
                width: 100%;
                position: relative;
                div{
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: .35rem 0;
                }
            }
        }
    }
</style>
