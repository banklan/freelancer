<template>
    <div class="top_freelancers landing_section">
        <div class="wrap" data-aos="fade-up" data-aos-delay="500">
            <div class="subject">
                Top Freelancers
            </div>
            <div class="body">
                <div class="wrapper">
                    <div class="top_card" v-for="free in freelancers" :key="free.id">
                        <freelancer-card :user="free" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            freelancers: [
                {id:1, name: 'John Doe', prof: 'SOftware Developer', intro: 'I will build a website for you for 20k!', ratings: '4', category: 'Software development', picture: '1.jpg', skills:'Java'},
                {id:2, name: 'Mike Puzzo', prof: 'UI/UI Designer', intro: 'I will create a logo for you for 1k', ratings: '5', category: 'Graphic Design', picture: '2.jpg', skills:'Photoshop'},
                {id:3, name: 'Dan Smith', prof: 'Data Analyst', intro: 'I will do your data analysis job for you for 15K', ratings: '4', category: 'Data Analysis', picture: '3.jpg', skills:'Python'},
                {id:4, name: 'Ann Lauren', prof: 'Software Architect', intro: 'I will do your adata architecture for 10K', ratings: '5', category: 'Data Architecture', picture: '4.jpg', skills:'C++'},
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
    .top_freelancers{
        min-height: 40rem;
        width: 100vw;
        // background: red;
        .wrap{
            width: 100%;
            height: 100%;
            margin: 0 auto;
            text-align: center;
            .subject{
                padding: .8rem 1.2rem 1.5rem;
            }
            .body{
                width: 100%;
                height: 100%;
                margin: 0 auto;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 3rem;
                text-align: center;
                .wrapper{
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                    transition: all .4s ease;
                    margin: 0 auto;
                    .top_card{
                        transition: all .4s ease;
                        &:hover{
                            box-shadow: 0 5px 5px rgba(0,0,0,0.4);
                            transform: scale(1.005);
                        }
                    }
                    &:hover .top_card:not(:hover){
                        transform: scale(.95);
                        opacity: 0.7;
                    }
                }
            }
        }
    }
</style>
