/////////////////////////// SCROLL ///////////////////////////////

$(document).ready(function () {
  let mobile,
    tablet,
    screen = {
      mobile: 767,
      tablet: 991,
      desktop: 1199,
    };

  // DETECT DEVICE
  // function mobileDetect() {
  //   let md = new MobileDetect(window.navigator.userAgent);
  //   if (md.mobile() != null || md.tablet() != null) {
  //     mobile = true;
  //     tablet = true;
  //   } else {
  //     mobile = false;
  //     tablet = false;
  //   }
  // }
  // mobileDetect();

  function splitTitle() {
    const titles = "Van Tuan N.";
    const wrapTittle = document.querySelector(".banner__intro-title");
    const transferTitles = titles.split("");

    transferTitles.forEach((ar) => {
      const span = document.createElement("span");
      span.innerHTML = ar;
      wrapTittle.appendChild(span);
    });
  }
  splitTitle();

  function menu() {
    const openHamburger = $("header .wrap__header-hamburger");
    const closeHamburger = $("header .header__show .hamburger");
    const headerNav = $("header .header__show");

    openHamburger.on("click", function () {
      headerNav.addClass("show");
    });
    closeHamburger.on("click", function () {
      headerNav.removeClass("show");
    });
  }
  menu();

  function customCursor() {
    const cursor = $(".cursor");
    const hoverCursor = $(".hover-cursor");

    $(document).on("mousemove", function (e) {
      cursor.css("top", e.pageY + "px");
      cursor.css("left", e.pageX + "px");
    });
    hoverCursor.on("mousemove", function () {
      cursor.addClass("active");
    });
    hoverCursor.on("mouseleave", function () {
      cursor.removeClass("active");
    });
  }
  customCursor();

  function hoverBranch() {
    let hoverFixed = $(".hover-fixed");
    hoverFixed.mouseleave(function (e) {
      TweenMax.to($(this), 0.3, { x: 0, y: 0 });
    });
    hoverFixed.mousemove(function (e) {
      followParallaxMouse(e, $(this));
    });

    function followParallaxMouse(e, target) {
      parallaxMouse(e, target, 80);
    }

    function parallaxMouse(e, target, movement) {
      let $this = target;
      let relX = e.pageX - $this.offset().left;
      let relY = e.pageY - $this.offset().top;
      TweenMax.to(target, 0.3, {
        x: ((relX - $this.width() / 2) / $this.width()) * movement,
        y: ((relY - $this.height() / 2) / $this.height()) * movement,
      });
    }
  }
  hoverBranch();

  function workerSlide() {
    let progressBar = $(".worker .splide .my-slider-progress-bar").get(0);

    console.log(progressBar);
    const slide = new Splide(".worker .splide", {
      type: "fade",
      rewind: true,
      pagination: false,
      arrows: false,
    });
    slide.on("mounted move", function () {
      const end = slide.Components.Controller.getEnd() + 1;
      const rate = Math.min((slide.index + 1) / end, 1);
      progressBar.style.width = String(100 * rate) + "%";
    });

    slide.mount();
  }
  workerSlide();

  function smoothScroll() {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      initPosition: { x: 0, y: 0 },
      mobile: {
        smooth: true,
        inertia: 0.8,
        getDirection: true,
      },
      tablet: {
        smooth: true,
        inertia: 0.8,
        getDirection: true,
      },
    });
  }
  smoothScroll();

  // ANIMATION LI PARENT MENU
  // let tlMenu = gsap.timeline();
  // tlMenu
  //   .fromTo(
  //     ".nav .nav__menu > li",
  //     { duration: 0.5, x: 60, opacity: 0 },
  //     { duration: 0.5, x: 0, opacity: 1, stagger: 0.03, delay: 0.3 }
  //   )
  //   .from(".nav__lang", { opacity: 0, x: 60, duration: 0.5 }, "=-0.4")
  //   .from(".nav__social", { opacity: 0, x: 60, duration: 0.5 }, "=-0.4");
  // INIT
  function init() {
    // $("body")
    //   .imagesLoaded()
    //   .progress({ background: true }, function (instance, image) {})
    //   .always(function (instance) {
    //     //  load func
    //     setTimeout(() => {
    //       $(".loading").addClass("--hide");
    //     }, 150);
    //   })
    //   .fail(function () {})
    //   .done(function (instance) {});
  }
  init();
});
