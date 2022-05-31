(() => {
    // Slider
    let icubeSlider = new Swiper(".icube-slider", {
        slidesPerView: 1,
        speed: 600,
    });

    const icubeSwitchs = document.querySelectorAll(".icube-switch > div");
    const icubeSwitchTexts = document.querySelectorAll(
        ".icube-switch-text span"
    );

    icubeSwitchs.forEach((icubeSwitch, index) => {
        icubeSwitch.addEventListener("click", () => {
            document
                .querySelector(".icube-switch .active")
                .classList.remove("active");
            document
                .querySelector(".icube-switch-text .active")
                .classList.remove("active");
            icubeSwitch.classList.add("active");
            icubeSwitchTexts[index].classList.add("active");
            icubeSlider.slideTo(index);
        });
    });
    // Slider End

    // NavHandler
    const hamburger = document.querySelector(".hamburger");
    const header = document.querySelector("header");

    const toggleMobileNav = () => {
        header.classList.toggle("open");
    };

    hamburger.addEventListener("click", toggleMobileNav);
    // NavHandler End

    // Manifest Text Animation
    const manifestContent = document.querySelector(".manifest-content");
    const manifestTexts = document.querySelectorAll(".manifest-content span");
    const manifestTexts2 = document.querySelector(".manifest-content div");

    const removeActiveManifestText = () => {
        manifestTexts.forEach((text) => {
            text.classList.remove("active");
        });
        manifestTexts2.classList.remove("active");
    };

    const manifestTextsAnimation = () => {
        const scrollPosFromTop = manifestContent.getBoundingClientRect().top;

        console.log(scrollPosFromTop);

        if (scrollPosFromTop < 900 && scrollPosFromTop > 700) {
            removeActiveManifestText();
            manifestTexts[0].classList.add("active");
        } else if (scrollPosFromTop < 700 && scrollPosFromTop > 500) {
            removeActiveManifestText();
            manifestTexts[1].classList.add("active");
        } else if (scrollPosFromTop < 500 && scrollPosFromTop > 300) {
            removeActiveManifestText();
            manifestTexts[2].classList.add("active");
        } else if (scrollPosFromTop < 300 && scrollPosFromTop > 100) {
            removeActiveManifestText();
            manifestTexts[3].classList.add("active");
        } else if (scrollPosFromTop < 100 && scrollPosFromTop > -100) {
            removeActiveManifestText();
            manifestTexts[4].classList.add("active");
            manifestTexts2.classList.add("active");
        } else if (scrollPosFromTop > 1000) {
            removeActiveManifestText();
        }
    };

    window.addEventListener("scroll", () => {
        manifestTextsAnimation();
    });

    // Manifest Text Animation End

    // Feature Text Animation
    const featureTexts = document.querySelectorAll(".feature-text");

    let featureObserverOptions = {
        rootMargin: "0px",
        threshold: 0.5,
    };

    const animateFeatureTexts = (entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add("active");
            }
        });
    };

    let featureObserver = new IntersectionObserver(
        animateFeatureTexts,
        featureObserverOptions
    );

    featureTexts.forEach((text) => {
        featureObserver.observe(text);
    });

    // Feature Text Animation End
})();
