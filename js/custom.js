$(document).ready(function () {
  //banner slider js
  $(".banner-slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
  });

  //banner slider js
  $(".team-slider").slick({
    arrows: false,
    slidesToShow: 4,
  });

  //counter js

  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  //brand slider js
  $(".brand-slider").slick({
    slidesToShow: 5,
    prevArrow:
      '<i class="fa fa-chevron-left previous-arrow" aria-hidden="true"></i>',
    nextArrow:
      '<i class="fa fa-chevron-right next-arrow" aria-hidden="true"></i>',
  });
});

// venubox js
$(document).ready(function () {
  $(".venobox").venobox({
    bgcolor: "#e23e38",
  });

  //wow js
  new WOW().init();
});

// $(document).ready(function () {
//   //testimonial

//   $(".testimonial-slider").slick({
//     arrows: false,
//     dots: true,
//     autoplay: true,
//   });

// });
$(document).ready(function () {
  $("#testimonials").owlCarousel({
    autoplay: true,
    responsiveBaseElement: 'body',
    dots: false,
    loop: true,
    speed: 400,
    margin: 30,
    nav: true,
    slideBy: 1,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },

      768: {
        items: 2,
      },

      1024: {
        items: 3,
      },

      1366: {
        items: 3,
      },
    },
  });
});

function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_skaa1kj";
  const templateID = "template_75s826s";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}
function sendMailreq() {
  var params = {
    title: document.getElementById("job-title").value,
    vacancies: document.getElementById("vacancies").value,
    location: document.getElementById("location").value,
    description: document.getElementById("description").value,
    descriptionFile: document.getElementById("file").value,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("number").value,
    designation: document.getElementById("designation").value,
    date: document.getElementById("date").value,
  };

  const serviceID = "service_skaa1kj";
  const templateID = "template_75s826s";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("job-title").value = "";
      document.getElementById("vacancies").value = "";
      document.getElementById("location").value = "";
      document.getElementById("description").value = "";
      document.getElementById("file").value = "";
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("number").value = "";
      document.getElementById("designation").value = "";
      document.getElementById("date").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}
