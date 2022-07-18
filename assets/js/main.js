const facebook  = document.getElementById('facebook'),
      instagram = document.getElementById('instagram'),
      youtube   = document.getElementById('youtube'),
      web       = document.getElementById('web');


facebook.addEventListener('click', () => {
    window.open('https://www.facebook.com/PhungQuocDinh', '_blank');
});

instagram.addEventListener('click', () => {
    window.open('https://instagram.com/quocdinhit', '_blank');
});

youtube.addEventListener('click', () => {
    window.open('https://www.youtube.com/channel/UCwXIeWhUBsUDkSMzUW_sazA', '_blank');
});

web.addEventListener('click', () => {
    window.open('https://quocdinh.com', '_blank');
});


// ScrollReveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200
})

sr.reveal('.profile', {origin: 'top'});

sr.reveal('.social__title', {origin: 'bottom', delay: 600 })

sr.reveal('#facebook', {origin: 'right', delay: 700});
sr.reveal('#youtube', {origin: 'right', delay: 900});
sr.reveal('#instagram', {origin: 'left', delay: 800});
sr.reveal('#web', {origin: 'left', delay: 1000});


/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

