document.addEventListener('DOMContentLoaded', function() {

    const themeToggle = document.querySelector('.theme-toggle');
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        
     
        const lightVideo = document.querySelector('.light-video');
        const darkVideo = document.querySelector('.dark-video');
        
        if(document.body.classList.contains('dark-mode')) {
            lightVideo.currentTime = 0;
            darkVideo.currentTime = 0;
            lightVideo.play();
            darkVideo.play();
        } else {
            lightVideo.currentTime = 0;
            darkVideo.currentTime = 0;
            lightVideo.play();
            darkVideo.play();
        }
    });
    
   
    const supportButton = document.querySelector('.support-button');
    const supportWindow = document.querySelector('.support-window');
    
    supportButton.addEventListener('click', function() {
        supportWindow.classList.toggle('active');
    });
    
 
    const animateElements = document.querySelectorAll('.section-title, .content-card, .gallery-item, .font-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
   
    const supportSend = document.querySelector('.support-send');
    const supportInput = document.querySelector('.support-input');
    
    supportSend.addEventListener('click', function() {
        if (supportInput.value.trim() !== '') {
            const botMessage = document.createElement('div');
            botMessage.className = 'bot-message';
            botMessage.textContent = 'Извините, я всего лишь демонстрационный бот. Чтобы получить реальную помощь, свяжитесь с нами по телефону.';
            
            const supportBody = document.querySelector('.support-body');
            supportBody.appendChild(botMessage);
            supportBody.scrollTop = supportBody.scrollHeight;
            
            supportInput.value = '';
        }
    });
    
    
    supportInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            supportSend.click();
        }
    });

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('.dark-video').currentTime = 0;
        document.querySelector('.dark-video').play();
    } else {
        document.querySelector('.light-video').currentTime = 0;
        document.querySelector('.light-video').play();
    }
});