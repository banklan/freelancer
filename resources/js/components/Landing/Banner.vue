<template>
    <div class="welcome_banner">
        <div class="banner_wrap">
            <div class="caption">
                <div class="txt">
                    <div class="text-h2 lead_txt">Connect your skills to your dream jobs...</div>
                    <div class="dark_text--text find">Find the perfect talents for your projects!</div>
                </div>
                <div class="cta">
                    <v-btn x-large elevation="8" color="primary" class="freelancer">I'm a freelancer</v-btn>
                    <div class="search">
                        <input type="text" placeholder="Search for freelancers" append="mdi-search"/>
                        <button color="secondary">Go</button>

                    </div>
                </div>
            </div>
            <div class="img">
                <img src="/assets/svg/banner.svg" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .welcome_banner{
        margin-top: -10rem;
        height: 100vh;
        width: 100vw;
        padding: 1.5rem 2rem;
        .banner_wrap{
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 100%;
            width: 100%;

            .caption{
                width: 50%;
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 0 auto;
                padding-left: 15px;
                .txt{
                    margin-bottom: 2rem;
                    padding-left: 15px;
                    margin: 0 auto;
                    .lead_txt{
                        line-height: 1.3 !important;
                    }
                    .find{
                        margin: 2rem 0 1.5rem 0;
                        font-size: 1.85rem;
                        line-height: 1.5;
                    }
                }
                .cta{
                    margin-top: 2.5rem;
                    width: 90%;
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    align-items: center;

                    & > button{
                        transition: all .5s ease;
                        border: 1px solid transparent !important;
                        &.freelancer:hover{
                            background-color: white !important;
                            color: #19855d !important;
                            border: 1px solid #19855d !important;
                        }
                        &.client:hover{
                            background-color: #fff !important;
                            color: #851941 !important;
                            border: 1px solid #851941 !important;
                        }
                    }
                    .search{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100%;

                        input{
                            width: 80%;
                            border: 2px solid #851941;
                            padding: 1rem 6px;
                            border-radius: 3px;
                            background: transparent;
                            font-size: 1rem;
                            font-family: 'Montserrat', sans-serif;
                            outline: none;
                            border-top-right-radius: 0;
                            border-bottom-right-radius: 0;
                            margin-right: -2px;

                            &::placeholder{
                                color: #851941;
                                font-size: 1rem;
                                padding: 0 6px;
                                font-family: 'Montserrat', sans-serif;
                            }

                            &:focus{
                                outline: 1px solid transparent !important;
                                background: transparent;
                                color: #851941;
                            }
                        }
                        button{
                            width: 20%;
                            padding: 1rem;
                            background: #851941;
                            color: #fff;
                            font-size: 1.2rem;
                            border: 1px solid transparent;
                            border-left: 0;
                            border-top-right-radius: 3px;
                            border-bottom-right-radius: 3px;
                        }
                    }
                }
            }
            .img{
                width: 50%;
                text-align: center;
                img{
                    height: 23rem;
                    margin: 0 auto;
                }
            }
        }
    }

</style>

<script>
export default {
    data() {
        return {

        }
    },
}
</script>

