
const testimonial = document.querySelector('.testimonial');
const container = document.querySelector('.testimonial-container');
const userDisplay = document.querySelector('.user');

const testimonialDB = [
  {
    testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, harum doloremque nobis ratione accusamus, sit molestiae eligendi earum reiciendis neque aperiam quo officia. Atque est impedit mollitia officia possimus, quisquam neque nostrum. ",
    user : {
      img: 'https://randomuser.me/api/portraits/women/43.jpg',
      name: 'Mia Myles',
      department: 'Marketing',
    }
  },
  {
    testimonial: "eligendi earum reiciendis neque aperiam quo officia. Atque Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, harum doloremque nobis ratione accusamus, sit molestiae eligendi earum reiciendis neque aperiam quo officia. Atque est impedit mollitia officia",
    user : {
      img: 'https://randomuser.me/api/portraits/women/45.jpg',
      name: 'Greta Groetten',
      department: 'Marketing',
    }
  },
  {
    testimonial: "earum reiciendis neque aperiam quo officia. Atque est impedit mollitia officia possimus, quisquam neque nostrum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, harum doloremque nobis ratione accusamus, sit molestiae eligendi Atque est impedit mollitia officia possimus,  ",
    user : {
      img: 'https://randomuser.me/api/portraits/women/49.jpg',
      name: 'Lisa Laureen',
      department: 'Marketing',
    }
  },
]

function switchTestimonial (idx = 0) {
  const testimonialData = testimonialDB[idx]
  testimonial.innerHTML = testimonialData.testimonial;
  userDisplay.innerHTML = `
    <img src="${testimonialData.user.img}" alt="" />
    <div class="user-info">
      <p>${testimonialData.user.name}</p>
      <p>${testimonialData.user.department}</p>
    </div>
  `
  document.querySelector('.progress-bar').remove()
  const newProgress = document.createElement('div');
  newProgress.classList.add('progress-bar');
  container.prepend(newProgress);

  setTimeout( _ => switchTestimonial((idx + 1) % testimonialDB.length), 5000)
}



switchTestimonial()