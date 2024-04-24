const button_home = document.getElementById('home');
button_home.addEventListener('click', async () => {
    await homePage();
});

async function homePage() {
    const pages = document.getElementById(`pages`);
    pages.innerHTML = `
    <div class="image-banner">
        <div class="parallax">
            <img src="/assets/img/icons/icon1.png" data-speed="-5"  alt="" class="layer">
            <img src="/assets/img/icons/icon2.png" data-speed="5"  alt="" class="layer">
            <img src="/assets/img/icons/icon3.png" data-speed="2"  alt="" class="layer">
            <img src="/assets/img/icons/icon4.png" data-speed="6"  alt="" class="layer">
            <img src="/assets/img/icons/icon5.png" data-speed="-4"  alt="" class="layer">
            <img src="/assets/img/icons/icon6.png" data-speed="8"  alt="" class="layer">
            <img src="/assets/img/icons/icon7.png" data-speed="3"  alt="" class="layer">
            <img src="/assets/img/icons/icon8.png" data-speed="-2"  alt="" class="layer">
            <img src="/assets/img/icons/icon9.png" data-speed="2"  alt="" class="layer">
            <div>
                <h2>I'am</h2>
                <h2>Software Developer</h2> 
            </div>
        </div>
    </div>
    `;
}

const button_about = document.getElementById('about');
button_about.addEventListener('click', async () => {
    await aboutPage();
});

async function aboutPage() {
    const pages = document.getElementById(`pages`);
    pages.innerHTML = `
    <div class="about">
            <div class="about-box">
                <div class="about-information">
                    <div class="about-intro">
                        <h2>
                            Sobre
                        </h2>
                        <p>
                            deverickdutra@gmail.com
                        </p>
                    </div>
                    <div class="about-text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vero, vel repudiandae amet eaque nisi omnis sed assumenda quidem voluptate, similique cum deleniti numquam, sapiente distinctio. Deleniti velit placeat autem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus inventore eveniet suscipit tempora eligendi ipsum iste delectus quae a pariatur veritatis officiis obcaecati ea, hic, labore quod quidem perferendis autem!
                        </p>
                    </div>
                    <div class="about-contact">
                        <ul >
                            <li><a href="">
                                <img src="/assets/img/icons/linkedin.svg" alt="">
                            </a></li>
                            <li><a href="">
                                <img src="/assets/img/icons/gmail.svg" alt="">
                            </a></li>
                            <li><a href="">
                                <img src="/assets/img/icons/github.svg" alt="">
                            </a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <img src="/assets/img/me/foto.png" alt="">
                </div>
            </div>
        </div>
    `;
}

function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var currentWidth = window.getComputedStyle(sidebar).width;
    if (currentWidth === '250px') {
        sidebar.style.width = '0';
    } else {
        sidebar.style.width = '250px';
    }
}