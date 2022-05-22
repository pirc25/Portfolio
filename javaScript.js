const projects = [
  {
    name: 'Multi-Post Stories 1',
    language: [
      'css',
      'html',
      'bootstrap',
      'Ruby',
    ],
    image: './images/MultiSotry.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    live: 'https://reflexionesrichardburneo.blogspot.com/',
    source: 'https://github.com/pirc25',
  },
  {
    name: 'Data Dashboard Healthcare 2',
    language: [
      'html',
      'bootstrap',
      'Ruby',
    ],
    image: './images/MultiSotry.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    live: 'https://reflexionesrichardburneo.blogspot.com/',
    source: 'https://github.com/pirc25',
  },
  {
    name: 'Website Portfolio 3',
    language: [
      'css',
      'html',
      'bootstrap',
      'Ruby',
    ],
    image: './images/MultiSotry.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    live: 'https://reflexionesrichardburneo.blogspot.com/',
    source: 'https://github.com/pirc25',
  },
  {
    name: 'Profesional Art Prining Data More 4',
    language: [
      'html',
      'bootstrap',
      'Ruby',
    ],
    image: './images/MultiSotry.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    live: 'https://reflexionesrichardburneo.blogspot.com/',
    source: 'https://github.com/pirc25',
  },
  {
    name: 'Data Dashboard Healthcare 5',
    language: [
      'html',
      'bootstrap',
      'Ruby',
    ],
    image: './images/MultiSotry.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    live: 'https://reflexionesrichardburneo.blogspot.com/',
    source: 'https://github.com/pirc25',
  },
  {
    name: 'Website Portfolio 6',
    language: [
      'css',
      'html',
      'bootstrap',
      'Ruby',
    ],
    image: './images/MultiSotry.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    live: 'https://reflexionesrichardburneo.blogspot.com/',
    source: 'https://github.com/pirc25',
  },
  {
    name: 'Profesional Art Prining Data More 7',
    language: [
      'html',
      'bootstrap',
      'Ruby',
    ],
    image: './images/MultiSotry.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    live: 'https://reflexionesrichardburneo.blogspot.com/',
    source: 'https://github.com/pirc25',
  },
];

const detail = document.getElementById('detail');
const detailTitle = document.getElementById('detailTitle');
const detailDescription = document.getElementById('detailDescription');
const detailLanguajes = document.getElementById('detailLanguajes');
const btnDetailLive = document.getElementById('btnDetailLive');
const btnDetailSource = document.getElementById('btnDetailSource');
const detailImage = document.getElementById('detailImage');

const openDetail = (projectNumber = null) => {
  if (projectNumber != null) {
    const lan = projects[projectNumber].language;
    let lanShow = '';

    lan.forEach((element) => { lanShow += `<li>${element}</li>`; });
    detail.style.width = '100%';
    detailTitle.innerText = projects[projectNumber].name;
    detailDescription.innerText = projects[projectNumber].description;
    detailImage.src = projects[projectNumber].image;
    btnDetailLive.href = projects[projectNumber].live;
    btnDetailSource.href = projects[projectNumber].source;
    detailLanguajes.innerHTML = lanShow;
  }
};

const closeDetail = () => {
  detail.style.width = '0%';
};

function openMenu() {
  document.getElementById('my-menu').style.height = '100%';
}
function closeMenu() {
  document.getElementById('my-menu').style.height = '0%';
}

/* -- Email Validation -- */
const form = document.getElementById('contactForm');
const email = document.getElementById('email');
const alert = document.getElementById('alertWin');
email.addEventListener = ('keyup', () => { alert.style.display = 'none'; });

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const emailVal = email.value.trim();

  if (!emailRegex.test(emailVal)) {
    email.focus();
    alert.style.display = 'block';
  } else {
    form.submit();
  }
});

openMenu();
closeMenu();
openDetail();
closeDetail();
