const TestimoniData = [
  {
    image:
      "https://staticg.sportskeeda.com/editor/2022/10/5e493-16654163307209-1920.jpg",
    content: "Benar-benar orang berhati teguh, dia lebih suka mati daripada kalah !",
    author: "Taka no mi Mihawk",
    rating: 5,
  },
  {
    image:
      "https://vignette.wikia.nocookie.net/onepiece/images/0/03/Hiluluk.jpg/revision/latest?cb=20110130222316&path-prefix=de",
    content: "Kapan seorang manusia mati? Saat jantung mereka terkena peluru, senjata? Bukan.. Saat mereka menderita penyakit yang tidak bisa disembuhkan? Bukan.. Saat mereka makan jamur beracun?Juga bukan!!Tapi, saat mereka telah dilupakan !",
    author: "Dr Hiluluk",
    rating: 4,
  },
  {
    image:
      "https://i.pinimg.com/originals/1d/b8/af/1db8af6233b0b6ab0c0802625b4b67d1.jpg",
    content: "kenapa kau begitu memalukan?Dengan kelemahan seperti itu kau masih menyebut dirimu laki-laki !?",
    author: "Kuina",
    rating: 1,
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.6Pj8vn6m3Sqob3orfhPpkAHaEK?rs=1&pid=ImgDetMain",
    content: "Dari pada kau menangis,lebih baik kau tebus kesalahanmu !",
    author: "Marco nanas the phoenix",
    rating: 2,
  },
  {
    image:
      "https://wallpapercave.com/wp/wp3766501.jpg",
    content: "Impian Manusia tidak akan pernah berakhir !",
    author: "Marshal D. Teach",
    rating: 5,
  },
];

function html(item) {
  return `
    <div class="testimonial">
        <img src="${item.image}" alt="testimonial" class="profile-testimonial">
            <p class="quote">${item.content}</p>
            <p class="author">- ${item.author}</p>
            <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
    </div>`;
}

function allTestimonial() {
  let testimonialHtml = ``;
  TestimoniData.forEach((item) => {
    testimonialHtml += html(item);
  });

  document.getElementById("testimonials").innerHTML = testimonialHtml;
}

allTestimonial();

function filterTestimonials(rating) {
  let testimonialHtml = ``;
  const testimonialFilter = TestimoniData.filter((item) => {
    return item.rating === rating;
  });

  if (testimonialFilter.length === 0) {
    testimonialHtml = `<h1> Data not found!</h1>`;
  } else {
    testimonialFilter.forEach((item) => {
      testimonialHtml += html(item);
    });
  }

  document.getElementById("testimonials").innerHTML = testimonialHtml;
}
