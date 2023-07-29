<template>
    <div class="why_freelancer" >
        <div class="wrap" data-aos="fade-up" data-aos-delay="300">
            <div class="subject">
                Why You should use freelancer.com
            </div>
            <div class="reasons_cont">
                <div class="reasons">
                    <div class="col_card" v-for="reason in reasons" :key="reason.id">
                        <why-freelancer-card :reason="reason" />
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
            reasons: [
                {id:1, topic: 'Integrity', body: 'This is the back statement that will show when the card flips around'},
                {id:2, topic: 'Fast', body: 'This is the back statement that will show when the card flips around'},
                {id:3, topic: 'Peace of Mind', body: 'This is the back statement that will show when the card flips around'},
                // {id:4, topic: 'Right fit', body: 'This is the back statement that will show when the card flips around'},
            ],
        }
      }
    }
</script>

<style lang="scss" scoped>
    .why_freelancer{
        width: 100vw;
        height: 100vh;
        .wrap{
            width: 100%;
            height: 100%;
            margin: 0 auto;
            .subject{
                text-align: center;
                color: #03110c;
                font-size: 44px;
                font-weight: 300;
                margin: 36px 0 18px;
                line-height: 56px;
                padding: 2.5rem 1.5rem;
            }
            .reasons_cont{
                margin: 0 auto;
                padding: 1rem 2.5rem;
                .reasons{
                    width: 90%;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    gap: 3rem;
                    text-align: center;
                    margin: 0 auto;
                    .col_card{
                        width: 100%;
                        height: 23rem;
                        perspective: 1000px;
                    }
                }
            }
        }
    }
</style>
