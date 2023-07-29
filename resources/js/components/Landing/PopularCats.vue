<template>
    <div class="popular_cats" data-aos="fade-up" data-aos-delay="300">
        <v-container>
            <v-row wrap justify="center" class="landing_section">
                <v-col cols="12">
                    <div class="subject">
                        Popular Categories
                    </div>
                </v-col>
            </v-row>
            <v-row wrap justify="center" class="services">
                <v-col cols="6" md="3" v-for="cat in cats" :key="cat.id">
                    <div >
                        <div class="wrap">
                            <div class="name">{{ cat.name }}</div>
                            <span class="arrow"><v-icon color="primary" size="30">mdi-chevron-double-right</v-icon></span>
                        </div>
                    </div>
                </v-col>
            </v-row>
            <v-row wrap justify="center" align="center" class="mt-5">
                <v-col cols="12">
                    <div class="cta text-center py-5">
                        <v-btn elevation="12" rounded x-large color="secondary">All Categories</v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>


<script>
export default{
    data() {
        return {
            cats: [
                {id:1, name: 'Programming & Development'},
                {id:2, name: 'Digital arts'},
                {id:3, name: 'Fashion'},
                {id:4, name: 'Sculpting'},
                {id:5, name: 'Branding'},
                {id:6, name: 'Advertising'},
                {id:7, name: 'Photography & Videography'},
                {id:8, name: 'Catering'},
                {id:9, name: 'Copy Writing'},
                {id:10, name: 'Visual Effects'},
                {id:11, name: 'Social Media Marketing'},
                {id:12, name: 'Architechture'},
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
    .popular_cats{
        min-height: 32rem;
        .wrap{
            border: 1px solid #f7f7f7;
            border-radius: 6px;
            box-shadow: 0 3px 3px rgba(0,0,0,.40);
            color: #2b2b2b;
            font-size: 1.55rem;
            font-weight: 300;
            overflow: hidden;
            box-sizing: border-box;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 6px 5px;
            height: 8rem;
            cursor: pointer;
            padding: 0 15px;
            transition: all .4s ease;
            position: relative;

            &:hover{
                box-shadow: 0 6px 6px rgba(0,0,0,.60);
                transform:translateX(8px);
                & .arrow{
                    opacity: 1;
                }
            }
            .name{
                text-align: center;
            }
            .arrow{
                opacity: 0;
                transition: all .4s ease;
                position: absolute;
                right: 5px;

                .v-icon{
                    transition: all .4s ease;
                }
            }
        }
    }
</style>
