// MemoryFrame - Main Page Functionality

let memories = [
    { id: 1, type: 'photo', title: '', date: '', caption: '', image: 'images/me.png' },
    { id: 2, type: 'photo', title: '', date: '', caption: '', image: 'images/me2.png' },
    { id: 3, type: 'photo', title: '', date: '', caption: '', image: 'images/mtharaya.jpg' },
    { id: 4, type: 'photo', title: '', date: '', caption: '', image: 'images/me3.jpg' },
    { id: 5, type: 'photo', title: '', date: '', caption: '', image: 'images/flowers.JPG' }
];

let global = { soundsEnabled: true };

document.addEventListener('DOMContentLoaded', function() {
    initSounds();
    
    // Bloom Loader - hide after page loads
    window.addEventListener('load', function() {
        setTimeout(function() {
            var loader = document.getElementById('bloom-loader');
            if(loader) {
                loader.style.opacity = '0';
                loader.style.transition = '0.8s ease';
                setTimeout(function() {
                    loader.style.display = 'none';
                    playSound('success'); // Loader complete sound
                }, 800);
            }
        }, 3200); // Total bloom duration
    });
    
    initScrollAnimations();
    initMobileMenu();
    initPolaroidModal();
    // Logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    if(logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            playSound('click');
            localStorage.removeItem('memoryFrameUnlocked');
            window.location.href = 'index.html';
        });
    }

});

function initScrollAnimations() {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if(entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, observerOptions);
    document.querySelectorAll('.fade-in, .gallery-item, .timeline-item, .polaroid-card').forEach(function(el) {
        observer.observe(el);
    });
}

function initMobileMenu() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const nav = document.querySelector('.main-nav');
    if(mobileBtn && nav) {
        mobileBtn.addEventListener('click', function() { 
            nav.classList.toggle('active');
            playSound('click');
        });
    }
}

function initPolaroidModal() {
    const modal = document.getElementById('polaroidModal');
    const closeBtn = document.getElementById('modalClose');
    const polaroidCards = document.querySelectorAll('.polaroid-card');
    if(!modal) return;
    polaroidCards.forEach(function(card) {
        card.addEventListener('click', function() {
            playSound('click');
            const id = parseInt(card.dataset.id);
            const memory = memories.find(m => m.id === id);
            if(memory) openModal(memory);
        });
    });
    if(closeBtn) closeBtn.addEventListener('click', function() { modal.classList.remove('show'); });
    modal.addEventListener('click', function(e) { if(e.target === modal) modal.classList.remove('show'); });


}

function openModal(memory) {
    const modal = document.getElementById('polaroidModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDate = document.getElementById('modalDate');
    const modalCaption = document.getElementById('modalCaption');
    if(modal && modalImage && modalTitle && modalDate && modalCaption) {
        modalImage.src = memory.image;
        modalTitle.textContent = memory.title;
        modalDate.textContent = memory.date;
        modalCaption.textContent = memory.caption;
        modal.classList.add('show');
    }
}

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        playSound('click');
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Sound toggle
const soundToggle = document.getElementById('soundToggle');
if(soundToggle) {
    soundToggle.addEventListener('click', function() {
        playSound('click');
        global.soundsEnabled = !global.soundsEnabled;
        soundToggle.textContent = global.soundsEnabled ? '🔊' : '🔇';
        soundToggle.title = global.soundsEnabled ? 'Turn off sound' : 'Turn on sound';
        localStorage.setItem('soundsEnabled', global.soundsEnabled);
        if(global.bgMusic) {
            if(global.soundsEnabled) {
                global.bgMusic.play().catch(() => {});
            } else {
                global.bgMusic.pause();
            }
        }
    });
}

function initSounds() {
    global.soundsEnabled = localStorage.getItem('soundsEnabled') !== 'false';
    const soundToggle = document.getElementById('soundToggle');
    if(soundToggle) {
        soundToggle.textContent = global.soundsEnabled ? '🔊' : '🔇';
        soundToggle.title = global.soundsEnabled ? 'Turn off sound' : 'Turn on sound';
    }
    
    const bgMusic = document.getElementById('bgMusic');
    global.bgMusic = bgMusic;
    if(bgMusic && global.soundsEnabled) {
        bgMusic.volume = 0.3;
        bgMusic.play().catch(e => {
            // Fallback to user gesture
            const playOnInteract = () => {
                bgMusic.play();
                document.removeEventListener('click', playOnInteract);
            };
            document.addEventListener('click', playOnInteract, { once: true });
        });
    }
}

function playSound(type) {
    if(!global.soundsEnabled) return;
    
    switch(type) {
        case 'click':
            // Simple beep using Web Audio API
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            oscillator.frequency.value = 800;
            oscillator.type = 'sine';
            gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
            oscillator.start(audioCtx.currentTime);
            oscillator.stop(audioCtx.currentTime + 0.1);
            break;
        case 'success':
            // Longer success tone
            const audioCtx2 = new (window.AudioContext || window.webkitAudioContext)();
            const osc2 = audioCtx2.createOscillator();
            const gain2 = audioCtx2.createGain();
            osc2.connect(gain2);
            gain2.connect(audioCtx2.destination);
            osc2.frequency.setValueAtTime(600, audioCtx2.currentTime);
            osc2.frequency.linearRampToValueAtTime(800, audioCtx2.currentTime + 0.2);
            osc2.type = 'sine';
            gain2.gain.setValueAtTime(0.2, audioCtx2.currentTime);
            gain2.gain.exponentialRampToValueAtTime(0.01, audioCtx2.currentTime + 0.4);
            osc2.start(audioCtx2.currentTime);
            osc2.stop(audioCtx2.currentTime + 0.4);
            break;
        case 'hover':
            // Gentle hover tone
            const audioCtxHover = new (window.AudioContext || window.webkitAudioContext)();
            const oscHover = audioCtxHover.createOscillator();
            const gainHover = audioCtxHover.createGain();
            oscHover.connect(gainHover);
            gainHover.connect(audioCtxHover.destination);
            oscHover.frequency.setValueAtTime(400, audioCtxHover.currentTime);
            oscHover.frequency.linearRampToValueAtTime(600, audioCtxHover.currentTime + 0.15);
            oscHover.type = 'sine';
            gainHover.gain.setValueAtTime(0.15, audioCtxHover.currentTime);
            gainHover.gain.exponentialRampToValueAtTime(0.01, audioCtxHover.currentTime + 0.2);
            oscHover.start(audioCtxHover.currentTime);
            oscHover.stop(audioCtxHover.currentTime + 0.2);
            break;
    }
}
