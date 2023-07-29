<template>
    <v-container>
        <v-row wrap justify="center" class="landing_section">
            <v-col cols="12">
                <div class="subject">
                    The right fit, Guaranteed
                </div>
            </v-col>
        </v-row>
        <v-row wrap justify="center" class="services" data-aos="fade-up" data-aos-delay="500">
            <v-col cols="12" md="4">
                <div class="services_card">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" id="complete-project"><path d="m46.892 38.414-2.828-2.828-5.586 5.586-2.542-2.542-2.828 2.828 5.37 5.37z"></path><path d="M45.25 5h-10.5A3.754 3.754 0 0 0 31 8.75V11h-5c-1.654 0-3 1.346-3 3v2H13v59h54V16H57v-2c0-1.654-1.346-3-3-3h-5V8.75A3.754 3.754 0 0 0 45.25 5zM57 22v-2h6v51H17V20h6v2c0 1.654 1.346 3 3 3h28c1.654 0 3-1.346 3-3zm-4-7v6H27v-6h8V9h10v6h8z"></path><path d="M40 54c7.444 0 13.5-6.056 13.5-13.5S47.444 27 40 27s-13.5 6.056-13.5 13.5S32.556 54 40 54zm0-23c5.238 0 9.5 4.262 9.5 9.5S45.238 50 40 50s-9.5-4.262-9.5-9.5S34.762 31 40 31zM22 56h36v4H22zM22 64h36v4H22z"></path></svg>
                    </div>
                    <div class="service_title">
                        <div class="count">
                            <number-counter :number="2000" />
                        </div>
                        <div class="def">Completed projects</div>
                    </div>
                    <div class="service_text">More than 2000 projects have been completed on our platform, from recruitment, sharing of project assets, invoicing to payment </div>
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div class="services_card">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 64 64" id="hr-manager"><path d="M55.73 57.21H49.86L49.07 42a9.21 9.21 0 00-6.13-8.22l-6.23-2.22c-2.11-.92-3-1.89-3.26-3.77A6.89 6.89 0 0036 23.39a.58.58 0 01.3-.38 4.49 4.49 0 001.86-5.88A9.64 9.64 0 0037 9.33a2.43 2.43 0 00.06-1.51 2.4 2.4 0 00-1.49-1.61c-8.07-2.93-11.92-.38-13.21.85a.6.6 0 01-.29.12c-4.56.69-4 8.26-3.84 9.89A4.85 4.85 0 0020.4 23a.61.61 0 01.3.38 6.86 6.86 0 002.16 4.14c-.31 2.3-1.37 3.2-3.24 4l-6.3 2.25A9.23 9.23 0 007.19 42L6.4 57.21H1a1 1 0 100 1.94H55.73a1 1 0 000-1.94zM22.36 9.09a2.44 2.44 0 001.35-.64A7.14 7.14 0 0128.79 6.8 18 18 0 0134.9 8a.44.44 0 01.29.32.49.49 0 01-.08.44 1 1 0 000 1.19 8.06 8.06 0 011.47 4.83c-1.11-1.31-2.79-2.79-4.68-2.72a2.85 2.85 0 00-.4 0l-.83.14a6.23 6.23 0 01-3.32 0 4.9 4.9 0 00-5.47 2 4.54 4.54 0 01-1.78 1.57C20 13.41 20.24 9.42 22.36 9.09zm.25 14a2.47 2.47 0 00-1.28-1.8A2.84 2.84 0 0120 17.94a6.47 6.47 0 003.47-2.58 3 3 0 013.32-1.24 8 8 0 004.2.06L31.8 14H32c1.7-.07 3.66 2.62 4.25 3.62.12.25 1.14 2.54-.91 3.66A2.47 2.47 0 0034 23.11c-.23 1.55-1.28 4.19-5.71 4.44a6.89 6.89 0 01-3.85-1.22.88.88 0 00-.15-.12A4.87 4.87 0 0122.61 23.11zm5.66 6.38h.1a10.33 10.33 0 003.31-.68A6 6 0 0033 31.37a6.08 6.08 0 01-4.87 2.36 6.49 6.49 0 01-4.94-2.25 6 6 0 001.45-2.81A9.79 9.79 0 0028.27 29.49zM9.13 42.13A7.26 7.26 0 0114 35.63l6.36-2.28a11.48 11.48 0 001.31-.67 8.48 8.48 0 006.46 3h.06a7.79 7.79 0 006.32-3.07 12.59 12.59 0 001.51.78l6.3 2.25a7.29 7.29 0 014.85 6.49l.78 15.09H44.44l.94-17.43a2.18 2.18 0 00-.59-1.61 2.23 2.23 0 00-1.6-.68H13.07a2.19 2.19 0 00-2.19 2.29l.94 17.43H8.34zm4.63 15.08l-.94-17.54a.22.22 0 01.06-.16.26.26 0 01.19-.08H43.19a.26.26 0 01.19.08.18.18 0 01.06.16L42.5 57.21zM43.73 13.58a1 1 0 00-.94 1 1 1 0 001 .95c10-.29 17.33 7 18.28 18a1 1 0 001 .88h.08a1 1 0 00.89-1C63 21.43 54.59 13.3 43.73 13.58z"></path><path d="M43.4 19.89a1 1 0 00-.94 1 1 1 0 001 .94C50 21.63 55 26.61 55.31 33.75a1 1 0 001 .93h0a1 1 0 00.93-1C56.9 25.41 51.06 19.59 43.4 19.89zM48.34 33.49a1 1 0 001 .93h0a1 1 0 00.93-1c-.17-4.1-2.91-6.78-6.76-6.7a1 1 0 00-1 1 1 1 0 001 .95C46.34 28.57 48.22 30.49 48.34 33.49zM28.13 44.33a4 4 0 104 4A4 4 0 0028.13 44.33zm0 6a2 2 0 112.05-2A2.05 2.05 0 0128.13 50.37z"></path></svg>
                    </div>
                    <div class="service_title">
                        <div class="count">
                            <number-counter :number="1500" />
                        </div>
                        <div class="def">Verified Freelancers</div>
                    </div>
                    <div class="service_text">Our highly rigorous verification process ensures that only the best talents are available for match-up in each category </div>
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div class="services_card">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="partnership"><circle cx="7.691" cy="15.5" r=".5" transform="rotate(-45.001 7.691 15.5)"></circle><circle cx="24.32" cy="15.135" r=".5" transform="rotate(-45.001 24.32 15.136)"></circle><path d="M.267 10.904a.5.5 0 0 0 0 .707l1.06 1.06 6.01 6.01a.498.498 0 0 0 .708 0l.354-.354.768.768a1.503 1.503 0 0 0 .293 1.708l-.354.354a1.501 1.501 0 0 0 0 2.121c.266.266.617.415.991.433.019.357.151.709.423.981.274.274.63.407.989.425.017.359.151.715.425.989.267.267.617.416.991.433.019.357.151.709.423.981.292.293.677.438 1.061.438.384 0 .768-.146 1.061-.438l.354-.354c.283.283.66.439 1.061.439a1.49 1.49 0 0 0 1.061-.439c.274-.274.408-.63.425-.989.36-.017.716-.151.99-.425.271-.272.403-.625.422-.981.374-.017.725-.166.991-.433.274-.274.408-.63.425-.989a1.48 1.48 0 0 0 .989-.425 1.501 1.501 0 0 0 0-2.121l.354-.354c.461-.461.559-1.15.293-1.708l.768-.768.354.354a.498.498 0 0 0 .708 0l6.01-6.01.002-.003 1.059-1.059a.5.5 0 0 0-.707-.707l-3.889 3.89-5.66-5.656 2.828-2.828 1.06-1.06a.5.5 0 0 0-.707-.707l-4.243 4.242-.001.001-2.828 2.828a.5.5 0 0 0 0 .708l.707.707-.529.529-1.603-.234a.52.52 0 0 0-.426.142l-.624.624-1.061-1.06.354-.354a.5.5 0 0 0 0-.708l-2.828-2.828-.001-.001-4.24-4.243a.5.5 0 0 0-.707.707l1.06 1.06 2.828 2.828-5.656 5.657-3.889-3.889a.501.501 0 0 0-.707.001zM10.52 22.571a.51.51 0 0 1-.707 0 .5.5 0 0 1 0-.708l.354-.354.707.707-.354.355zm1.414 1.414a.512.512 0 0 1-.707 0 .5.5 0 0 1 0-.708l.354-.354.707.707-.354.355zm1.414 1.414a.512.512 0 0 1-.707 0 .5.5 0 0 1 0-.707l.354-.354.707.707-.354.354zm1.415 1.414a.5.5 0 0 1-.707-.707l.354-.354.707.707-.354.354zm6.01-17.323 5.657 5.657-2.121 2.121-.353-.353-4.95-4.949-.001-.001-.353-.353 2.121-2.122zm-4.503 4.503 1.602.234a.502.502 0 0 0 .426-.142l.707-.707 3.889 3.889-1.061 1.06a.5.5 0 0 0 0 .708.502.502 0 0 1 0 .708l-.353.353-4.248-4.249a.495.495 0 0 0-.729-.674l-1.931 1.931a1.259 1.259 0 0 1-1.563.147l3.261-3.258zm-1.861.446-2.475 2.475a.5.5 0 0 0 0 .708l.19.19c.421.421.981.653 1.577.653a2.22 2.22 0 0 0 1.578-.653l1.251-1.251 4.596 4.597.353.353a.5.5 0 0 1-.707.707l-1.414-1.414a.5.5 0 0 0-.707.707l1.414 1.414a.5.5 0 0 1 0 .707.51.51 0 0 1-.707 0l-1.415-1.414a.5.5 0 0 0-.707.707l1.414 1.414a.5.5 0 0 1-.708.707l-1.414-1.414a.5.5 0 0 0-.707.707l1.414 1.414a.5.5 0 0 1 0 .707.512.512 0 0 1-.707 0l-.353-.353-1.414-1.414-4.596-4.595a.502.502 0 0 1 0-.708.5.5 0 0 0 0-.708l-1.061-1.06 4.243-4.242 1.062 1.059zm-1.06-2.474-.353.353-.001.001-4.95 4.949-.353.353L5.57 15.5l5.657-5.657 2.122 2.122z"></path></svg>
                    </div>
                    <div class="service_title">
                        <div class="count">
                            <number-counter :number="275" />
                        </div>
                        <div class="def">Credible clients</div>
                    </div>
                    <div class="service_text">Get the chance to work with bluechip company executives, HR and agencies, contractors, start-ups, government departments etc </div>
                </div>
            </v-col>

        </v-row>
    </v-container>
</template>

<style lang="scss" scoped>
.container{
    min-height: 38rem !important;
    // overflow: hidden !important;
    // width: 100vw !important;
    // position: fixed;
    .services{
        // gap: 1rem;
        .services_card{
            border: 1px solid #d4d4d4;
            box-shadow: rgba(0,0,0,0.30);
            box-sizing: border-box;
            border-radius: 6px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            overflow: hidden;
            padding: 10px;
            height: 24rem;
            margin: 0 auto;
            padding: 1.5rem 1.2rem;
            cursor: pointer;
            transition: all .5s ease;

            &:hover{
                box-shadow: 0 5px 6px 0 rgba(0,0,0,.75);
                border: 1px solid #19855d;
                background-image: linear-gradient(320deg ,rgb(21, 112, 79, .95),rgba(23, 117, 83, 0.91),rgba(14, 77, 54, 0.91),rgba(11, 63, 44, 0.91),rgba(10, 58, 40, 0.91),rgba(7, 43, 30, 0.91));
                background-size: cover;
                background-position: center center;
                background-repeat: no-repeat;
                color: #fff !important;

                .icon{
                    margin-top: 1.5rem;
                    svg{
                        fill: #fff !important;
                        height: 4rem;
                        animation: iconAnim 1100ms ease-in-out 0s 1 normal forwards;
                    }
                }

                .service_title{
                    display: none;
                }
                .service_text{
                    display: block;
                    text-align: center;
                    animation: serviceCardAnim 700ms ease 0s 1 normal forwards;
                    color: #fff !important;
                }
                @keyframes serviceCardAnim {
                    0% {
                        opacity: 0;
                        transform: rotateX(-70deg);
                        transform-origin: bottom;
                    }

                    100% {
                        opacity: 1;
                        transform: rotateX(0);
                        transform-origin: bottom;
                    }
                }

                @keyframes iconAnim{
                0% {
                    animation-timing-function: ease-in;
                    opacity: 0;
                    transform: translateY(-250px);
                }

                38% {
                    animation-timing-function: ease-out;
                    opacity: 1;
                    transform: translateY(0);
                }

                55% {
                    animation-timing-function: ease-in;
                    transform: translateY(-65px);
                }

                72% {
                    animation-timing-function: ease-out;
                    transform: translateY(0);
                }

                81% {
                    animation-timing-function: ease-in;
                    transform: translateY(-28px);
                }

                90% {
                    animation-timing-function: ease-out;
                    transform: translateY(0);
                }

                95% {
                    animation-timing-function: ease-in;
                    transform: translateY(-8px);
                }

                100% {
                    animation-timing-function: ease-out;
                    transform: translateY(0);
                }
            }
            }
            .icon{
                text-align: center;
                svg{
                    fill: rgb(25, 133, 93) !important;
                    height: 8.5rem;
                    transition: all .4s ease;
                }
            }

            .service_title{
                margin-top: 1.2rem;
                text-align: center;
                .count{
                    font-size: 2.5rem;
                    font-weight: 400 !important;
                    color: #3a3a3a;
                    margin-bottom: 16px;
                }
                .def{
                    font-size: 1.5rem;
                    color: #3a3a3a;
                    font-size: 300 !important;
                }
            }
            .service_text{
                margin-top: 1.5rem;
                font-size: 1.6rem;
                font-weight: 300;
                line-height: 1.5;
                transition: all .4s ease;
                padding: 10px 8px 16px;
                display: none;
                color: #fff !important
            }


        }
    }
}
</style>
