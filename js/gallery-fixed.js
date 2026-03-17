
let photos = [];
let filteredPhotos = [];
let currentPage = 1;
const photosPerPage = 20;
let currentFilter = 'all';
let searchQuery = '';

function loadLocalPhotos() {
    const localImages = [      
        { file: 'aurora.png', title: 'Pemandangan Aurora di Langit Utara', tags: ['nature','roblox'], caption: '', date: '17 Januari 2026' },
        { file: 'flowers.JPG', title: 'Bunga-Bunga', tags: ['nature','roblox'], caption: '', date: '2025' },
        { file: 'htberempat.jpg', title: 'Foto Di Tebing Onsen', tags: ['heartopia', 'friends'], caption: 'Ini udah sebulan main ht tpi baru sadar ga pernah foto berempat', date: '12 Maret' },
        { file: 'frogs.png', title: 'King Frogs', tags: ['roblox', 'fishit'], caption: 'King frogs #fishit', date: '2025' },
        { file: 'harvestexp.png', title: 'Harvest Expedition', tags: ['roblox', 'expedition', 'friends'], caption: '', date: '21 Oktober 2025' },
        { file: 'jawaselatanexp.png', title: 'Jawa Selatan Expedition', tags: ['roblox', 'expedition'], caption: '', date: '29 Januari 2026' },
        { file: 'mtakhirat.JPG', title: 'Pendakian Mount Akhirat', tags: ['mount', 'roblox', 'friends'], caption: '', date: '2025' },
        { file: 'mtghaib.JPG', title: 'Pendakian Mount Ghaib', tags: ['mount', 'roblox', 'horror', 'friends'], caption: '', date: '2025' },
        { file: 'mtimut.png', title: 'Pendakian Mount Imut', tags: ['mount', 'cute', 'roblox'], caption: '', date: '2025' },
        { file: 'obby.jpg', title: 'Obby', tags: ['cute', 'roblox'], caption: '', date: '2025' },
        { file: 'luciddreamexp.png', title: 'Lucid Dream Expedition', tags: ['expedition', 'roblox'], caption: '', date: '18 Oktober 2025' },
        { file: 'htanta2.jpg', title: 'Heartopia', tags: ['heartopia'], caption: '', date: '10 Maret 2026' },
        { file: 'mtbatu.png', title: 'Pendakian Mount Batu', tags: ['mount', 'roblox', 'friends'], caption: '', date: '1 September 2025' },
        { file: 'mtkkpink.png', title: 'Pendakian Mount Kk Pink', tags: ['roblox', 'mount', 'cute'], caption: '', date: '24 Januari 2026' },
        { file: 'mtsemut.png', title: 'Pendakian Mount Semut', tags: ['nature', 'mount', 'roblox'], caption: '', date: '15 Desember 2025' },
        { file: 'mtskylands.png', title: 'Pendakian Mount Skylands', tags: ['nature', 'mount', 'roblox'], caption: '', date: '19 Desember 2025' },
        { file: 'fishit3.png', title: 'Mancing Event Valentine', tags: ['fishit', 'roblox', 'friends'], caption: '', date: '15 Februari 2026' },
        { file: 'me2.png', title: 'Captured Moments', tags: ['roblox', 'mount'], caption: '', date: '2025' },
        { file: 'triokwekkwek.png', title: 'Pendakian Mount Konoha', tags: ['roblox', 'mount'], caption: 'Emote Zombie', date: '2025' },
        { file: 'mtunyu.png', title: 'Pendakian Mount Unyu', tags: ['cute', 'mount', 'roblox'], caption: '', date: '26 Januari 2026' },
        { file: 'nakniknukexp.png', title: 'Nakniknuk Expedition', tags: ['mount', 'roblox'], caption: '', date: '17 Oktober 2025' },
        { file: 'mttogether.png', title: 'Pendakian Mount Together', tags: ['mount', 'roblox'], caption: '', date: '17 Desember 2025' },
        { file: 'mtwayang.png', title: 'Pendakian Mount Wayang', tags: ['indo', 'mount', 'roblox'], caption: '', date: '8 November 2025' },
        { file: 'raamy.JPG', title: 'Pendakian dengan Emy dan Raa', tags: ['friends', 'mount', 'roblox'], caption: '', date: '2025' },
        { file: 'sepedaaurora.png', title: 'Riding Under the Aurora', tags: ['nature', 'roblox'], caption: 'Riding through the night while the sky paints its own story.', date: '3 Februari 2026' },
        { file: 'snowynight.JPG', title: 'Snowy Night', tags: ['nature', 'roblox'], caption: '', date: '2025' },
        { file: 'mteden.jpg', title: 'Pendakian Mount Eden', tags: ['roblox', 'mount'], caption: 'Pertemuan pertama dengan antariksaa', date: '2025' },
        { file: 'mtlompobattang.png', title: 'Pendakian Mount Lompobattang', tags: ['mount', 'friends', 'roblox'], caption: '', date: '21 Agustus 2025' },
        { file: 'anastariapengantaranmalam.png', title: 'Anastaria Pengantaran Malam', tags: ['horror', 'roblox'], caption: '', date: '15 Januari 2026' },
        { file: 'mtjamur.png', title: 'Pendakian Mount Jamur', tags: ['roblox', 'mount'], caption: '', date: '6 Februari 2026' },
        { file: 'sapi.JPG', title: 'Pendakian dengan Nanaa', tags: ['roblox', 'mount'], caption: '', date: '2025' },
        { file: 'htatapbunga.jpg', title: 'Pemandangan Atap Rumah Heartopia', tags: ['heartopia'], caption: 'Ini foto di atap rumah ada bunganya', date: '15 Maret 2026' },
        { file: 'mtdaun.png', title: 'Pendakian Mount Daun', tags: ['mount', 'roblox', 'friends'], caption: '', date: '22 Agustus 2025' },
        { file: 'mtwiyatalaswargaloka.png', title: 'Pendakian Mount Wiyatala Swargaloka', tags: ['mount', 'roblox'], caption: '', date: '28 Januari 2026' },
        { file: 'mttalobanua.png', title: 'Pendakian Talobanua', tags: ['mount', 'roblox'], caption: '', date: '16 Agustus 2025' },
        { file: 'bukitraya.JPG', title: 'Pendakian Bukit Raya', tags: ['roblox'], caption: '', date: '2025' },
        { file: 'htbajupinguin.jpg', title: 'Heartopia', tags: ['heartopia'], caption: '', date: '9 Maret 2026' },
        { file: 'mtlotis.png', title: 'Pendakian Mount Lotis', tags: ['mount', 'roblox'], caption: '', date: '12 Februari 2026' },
        { file: 'mtpilar.png', title: 'Pendakian Mount Pilar', tags: ['mount', 'roblox'], caption: '', date: '2025' },
        { file: 'mtbayi.jpg', title: 'Pendakian Mount Bayi', tags: ['mount', 'cute', 'roblox'], caption: '', date: '2025' },
        { file: 'mtsumbing.jpeg', title: 'Pendakian Mount Sumbing', tags: ['mount', 'roblox'], caption: '', date: '2025' },
        { file: 'mttaby.png', title: 'Pendakian Mount Taby', tags: ['roblox', 'mount'], caption: '', date: '16 Oktober 2025' },
        { file: 'triokwekkwek4.png', title: 'Pendakian Mount', tags: ['roblox', 'mount'], caption: '', date: '2025' },
        { file: 'mtbersabar.JPG', title: 'Pendakian Mount Bersabar', tags: ['roblox', 'mount'], caption: '', date: '2025' },
        { file: 'mtantartika.png', title: 'Pendakian Mount Antartika', tags: ['mount', 'roblox', 'friends'], caption: '', date: '19 Agustus 2025' },
        { file: 'mtclingy.png', title: 'Pendakian Mount Clingy', tags: ['mount', 'roblox'], caption: 'Jadi anomali terus ahahaha.', date: '16 Maret 2026' },
        { file: 'nexarionobstacle.png', title: 'Nexarion Obstacle', tags: ['roblox'], caption: '', date: '12 Maret 2026' },
        { file: 'mtayam.png', title: 'Pendakian Mount Ayam', tags: ['roblox', 'friends', 'mount'], caption: 'Dah lama ga daki bareng nii biasanya ht', date: '16 Maret 2026' },
        { file: 'mtsapu.png', title: 'Pendakian Mount Sapu', tags: ['roblox', 'mount'], caption: '', date: '8 Maret 2026' },
        { file: 'mtloudy.png', title: 'Pendakian Mount Loudy', tags: ['roblox', 'mount'], caption: 'Mount loudy', date: '7 Maret 2026' },
        { file: 'htwintershow.jpg', title: 'Last Day', tags: ['heartopia'], caption: '', date: '9 Maret 2026' },
        { file: 'me.png', title: 'A Small Peace of Today', tags: ['roblox', 'mount'], caption: '', date: '2025' },
        { file: 'mtbike.png', title: 'Pendakian Mount Bike', tags: ['roblox', 'mount'], caption: '', date: '3 Februari 2026' },
        { file: 'mtrakyat.png', title: 'Pendakian Mount Rakyat', tags: ['roblox', 'mount'], caption: '', date: '19 Februari 2026' },
        { file: 'mtawan.png', title: 'Pendakian Mount Awan', tags: ['roblox', 'mount', 'friends'], caption: '', date: '2025' },
        { file: 'mtpening.png', title: 'Pendakian Mount Pening', tags: ['roblox', 'mount'], caption: '', date: '16 Februari 2026' },
        { file: 'konon.png', title: 'Konon', tags: ['horror', 'mount'], caption: 'Horror Game', date: '19 Oktober 2025' },
        { file: 'mttea.png', title: 'Pendakian Mount Tea', tags: ['mount', 'roblox'], caption: '', date: '12 November 2025' },
        { file: 'mtgoyaa.png', title: 'Pendakian Mount Goyaa', tags: ['roblox', 'mount'], caption: '', date: '13 Februari 2026' },
        { file: 'mtimut2.png', title: 'Pendakian Mount Imut', tags: ['mount', 'cute', 'roblox'], caption: '', date: '21 Oktober 2025' },
        { file: 'mtacumalaka.png', title: 'Pendakian Mount Acumalaka', tags: ['mount', 'roblox'], caption: '', date: '22 Agustus 2025' },
        { file: 'mttakesi.JPG', title: 'Pendakian Mount Takesi', tags: ['mount', 'roblox'], caption: '', date: '2025' },
        { file: 'mtjeku.jpg', title: 'Mount Jeku', tags: ['mount', 'roblox'], caption: '', date: '2025' },
        { file: 'htbajubasket.jpg', title: 'Heartopia', tags: ['heartopia'], caption: '', date: '16 Februari 2026' },
        { file: 'htpic.jpg', title: 'Aurora', tags: ['heartopia'], caption: '', date: '10 Februari 2026' },
        { file: 'mtfantasia.jpg', title: 'Pendakian Mount Fantasia', tags: ['mount', 'roblox'], caption: '', date: '2025' },
        { file: 'mtimut3.png', title: 'Pendakian Mount Imut', tags: ['cute', 'mount', 'roblox'], caption: 'Mendaki dengan kelaa', date: '13 Oktober 2025' },
        { file: 'infinitycastle.png', title: 'Infinity Castle', tags: ['mount', 'roblox'], caption: 'Mendaki dengan zunbas', date: '13 Oktober 2025' },
        { file: 'httree.jpg', title: 'Heartopia', tags: ['heartopia'], caption: '', date: '18 Februari 2026' },
        { file: 'mtgembul.jpeg', title: 'Pendakian Mount Gembul', tags: ['mount', 'roblox'], caption: '', date: '2025' },
        { file: 'httree2.jpg', title: 'Heartopia', tags: ['heartopia'], caption: '', date: '28 Februari 2026' },
        { file: 'mtbatu2.png', title: 'Pendakian Mount Batu', tags: ['mount', 'roblox'], caption: '', date: '1 September 2025' },
        { file: 'mtbikinibottom.png', title: 'Pendakian Mount Bikini Bottom', tags: ['mount', 'roblox'], caption: '', date: '3 Februari 2026' },
        { file: 'mtsafari.png', title: 'Pendakian Mount Safari', tags: ['mount', 'roblox'], caption: '', date: '2025' },
        { file: 'mtantartika2.png', title: 'Pendakian Mount Antartika', tags: ['mount', 'roblox'], caption: '', date: '30 Juli 2025' },
        { file: 'htfirsttime.jpg', title: 'Foto Pertama', tags: ['heartopia'], caption: '', date: '8 Maret 2026' },
        { file: 'mttok.png', title: 'Pendakian Mount Tok', tags: ['mount', 'roblox'], caption: '', date: '2025' },
        { file: 'htsnowynight.jpg', title: 'Meteor Heartopia', tags: ['heartopia'], caption: '', date: '16 Februari 2026' },
        { file: 'crestorapeakexp.png', title: 'Crestora Peak Expedition', tags: ['expedition', 'roblox'], caption: '', date: '22 Agustus 2025' },
        { file: 'htrainbow.jpg', title: 'Rainbow Heartopia', tags: ['heartopia'], caption: '', date: '21 Februari 2026' },
        { file: 'pic.png', title: 'Jailangkung', tags: ['horror', 'roblox'], caption: 'Lucuu pake baju sd', date: '6 Februari 2026' },
        { file: 'mtsibuatan.png', title: 'Pendakian Mount Sibuatan', tags: ['mount', 'roblox'], caption: '', date: '2025' },
        { file: 'mtanta.jpg', title: 'Pendakian Mount', tags: ['roblox', 'mount'], caption: '', date: '2025' },
        { file: 'mttelomoyo.png', title: 'Pendakian Mount Telomoyo', tags: ['mount', 'roblox'], caption: 'Seruu naik motor dakinya meski agak sulit', date: '2025' },
        { file: 'mttambora.png', title: 'Pendakian Mount Tambora', tags: ['mount', 'roblox'], caption: 'Bagus backgroundnya ada pelangi!', date: '11 Agustus 2025' },
        { file: 'htwinter.jpg', title: 'Winter Heartopia', tags: ['heartopia'], caption: 'Ternyata klo grafik medium secantik ini T^T', date: '4 Maret 2026' },
        { file: 'htanta.jpg', title: 'Winter Heartopia', tags: ['heartopia'], caption: '', date: '10 Maret 2026' },
        { file: 'mtharaya.jpg', title: 'Pendakian Mount Haraya', tags: ['mount', 'roblox'], caption: '', date: '2025' },
        { file: 'cedih.png', title: 'Pada galau', tags: ['mount', 'roblox'], caption: '', date: '2025' },
        { file: 'mtanu.png', title: 'Pendakian Mount Anu', tags: ['roblox', 'mount'], caption: '', date: '2025' },
        { file: 'mtdewa.png', title: 'Pendakian Mount Dewa', tags: ['roblox', 'mount'], caption: '', date: '2025' },
        { file: 'mtnight.png', title: 'Pendakian Mount Night', tags: ['mount', 'roblox'], caption: '', date: '2025' },
        { file: 'mtatin.jpg', title: 'Pendakian Mount Atin', tags: ['roblox', 'mount'], caption: '', date: '2025' },
        { file: 'sunset.png', title: 'Sunset', tags: ['nature', 'roblox'], caption: 'Wii sunsetnya bagus', date: '5 Maret 2026' },
        { file: 'htrainbow2.jpg', title: 'Rainbow Heartopia', tags: ['heartopia'], caption: '', date: '4 Maret 2026' },
        { file: 'htberempat2.jpg', title: 'Heartopia', tags: ['heartopia'], caption: '', date: '15 Februari 2026' },
        { file: 'wargaindoexp.png', title: 'Warga Indo Expedition', tags: ['expedition', 'roblox'], caption: '', date: '22 Agustus 2025' },
        { file: 'htayunan.jpg', title: 'Naik Ayunan', tags: ['heartopia'], caption: '', date: '4 Maret 2026' },
        { file: 'mtendless.jpg', title: 'Pendakian Mount Endless', tags: ['mount', 'roblox'], caption: '', date: '2025' },
        { file: 'mtmasurai.png', title: 'Pendakian Mount Masurai', tags: ['mount', 'roblox'], caption: '', date: '2025' },
        { file: 'mtelora.png', title: 'Pendakian Mount Elora', tags: ['mount', 'roblox'], caption: '', date: '9 November 2025' },
        { file: 'htmeteor.jpg', title: 'Meteor Heartopia', tags: ['heartopia'], caption: '', date: '14 Februari 2026' },
        { file: 'mtyahayuk.png', title: 'Pendakian Mount Yahayuk', tags: ['mount', 'roblox'], caption: '', date: '2025' },
        { file: 'htaction.jpg', title: 'Winter Heartopia', tags: ['heartopia'], caption: '', date: '12 Februari 2026' },
        { file: 'mtdaun2.png', title: 'Pendakian Mount Daun', tags: ['mount', 'roblox'], caption: 'Mendaki dengan nana dan jelita', date: '2025' },
        { file: 'htfireworks.jpg', title: 'Fireworks Heartopia', tags: ['heartopia'], caption: '', date: '14 Februari 2026' },
        { file: 'bukitcinta.png', title: 'Pendakian Bukit Cinta', tags: ['roblox'], caption: '', date: '20 Oktober 2025' },
        { file: 'naiksepeda.png', title: 'Naik Sepeda', tags: ['roblox'], caption: '', date: '12 November 2025' },
        { file: 'htchoco.jpg', title: 'Heartopia', tags: ['heartopia'], caption: '', date: '1 Maret 2026' },
        { file: 'malaikat.JPG', title: 'Pendakian Mount', tags: ['mount', 'roblox'], caption: '', date: '2025' },
        { file: 'mtfeeling.png', title: 'Pendakian Mount Feeling', tags: ['mount', 'roblox'], caption: '', date: '12 Desember 2025' },
        { file: 'kapalauraboy.jpg', title: 'Kapal Aura Kid', tags: ['fishit', 'roblox'], caption: '', date: '2025' },
        { file: 'mttired.jpg', title: 'Pendakian Mount Tired', tags: ['mount', 'roblox'], caption: '', date: '2025' },
        { file: 'mttelomoyo2.png', title: 'Pendakian Mount Telomoyo', tags: ['mount', 'roblox'], caption: '', date: '2025' },
        { file: 'htbunga.jpg', title: 'Padang Bunga', tags: ['heartopia'], caption: '', date: '6 Maret 2026' },
        { file: 'mthilih.png', title: 'Pendakian Mount Hilih', tags: ['mount', 'roblox'], caption: 'Lucuu patung panda', date: '2025' },
        { file: 'mtjawa.png', title: 'Pendakian Mount Jawa', tags: ['roblox', 'mount'], caption: '', date: '16 Februari 2026' },
        { file: 'mtkalimantan.png', title: 'Pendakian Mount Kalimantan', tags: ['mount', 'roblox'], caption: '', date: '17 Oktober 2025' },
        { file: 'mtmaniez.png', title: 'Pendakian Mount Maniez', tags: ['mount', 'roblox'], caption: '', date: '10 Desember 2025' },
        { file: 'mtgelud.png', title: 'Pendakian Mount Gelud', tags: ['mount', 'roblox'], caption: '', date: '18 Oktober 2025' },
        { file: 'mtisland.png', title: 'Pendakian Mount Island', tags: ['roblox', 'mount'], caption: '', date: '31 Januari 2026' },
        { file: 'mtjujur.png', title: 'Pendakian Mount Jujur', tags: ['roblox', 'mount'], caption: '', date: '13 Desember 2025' },
        { file: 'mtpuncara.png', title: 'Pendakian Mount Puncara', tags: ['roblox', 'mount'], caption: '', date: '5 Februari 2026' },
        { file: 'mtdaun3.JPG', title: 'Pendakian Mount Daun', tags: ['roblox'], caption: '', date: '2025' },
        { file: 'mtkonoha.png', title: 'Pendakian Mount Konoha', tags: ['roblox', 'mount'], caption: '', date: '2025' },
        { file: 'mtanta2.jpeg', title: 'Pendakian Mount', tags: ['mount', 'roblox'], caption: '', date: '2025' },
        { file: 'triokwekkwek2.jpg', title: 'Pendakian Mount', tags: ['mount', 'roblox'], caption: '', date: '2025' },
        { file: 'mtbiantara.JPG', title: 'Pendakian Mount Biantara', tags: ['mount', 'roblox'], caption: '', date: '2025' },
        { file: 'mtgampil.jpg', title: 'Pendakian Mount Gampil', tags: ['roblox', 'mount'], caption: '', date: '2025' },
        { file: 'mtsimartau.png', title: 'Pendakian Mount Simartau', tags: ['roblox', 'mount'], caption: '', date: '2025' },
        { file: 'mtseminung.jpg', title: 'Pendakian Mount Seminung', tags: ['roblox', 'mount'], caption: '', date: '19 Agustus 2025' },
        { file: 'mtsukma.jpg', title: 'Pendakian Mount Sukma', tags: ['mount', 'roblox'], caption: '', date: '2025' },
        { file: 'mtlove.png', title: 'Pendakian Mount Love', tags: ['roblox', 'mount'], caption: '', date: '2025' },
        { file: 'mtpinatubo.jpg', title: 'Pendakian Mount Pinatubo', tags: ['roblox', 'mount'], caption: '', date: '13 Desember 2025' },
        { file: 'tebingseratus.png', title: 'Tebing Seratus', tags: ['roblox'], caption: '', date: '12 Desember 2025' },
        { file: 'triokwekkwek3.JPG', title: 'Pendakian Mount', tags: ['roblox', 'mount'], caption: '', date: '2025' },
        { file: 'mtbasahan.png', title: 'Pendakian Mount Basahan', tags: ['roblox', 'mount'], caption: 'Ya ampunn jadi pocong', date: '15 Oktober 2025' },
        { file: 'mtparalel.png', title: 'Pendakian Mount Paralel', tags: ['mount', 'roblox'], caption: '', date: '19 Oktober 2025' },
        { file: 'mthappy.png', title: 'Pendakian Mount Happy', tags: ['mount', 'roblox'], caption: '', date: '17 Oktober 2025' },
        { file: 'bukitfauna.png', title: 'Pendakian Bukit Fauna', tags: ['roblox'], caption: '', date: '12 Desember 2025' },
        { file: 'mtbegatal.png', title: 'Pendakian Mount Begatal', tags: ['roblox', 'mount'], caption: '', date: '13 Desember 2025' },
        { file: 'mtgemi.png', title: 'Pendakian Mount Gemi', tags: ['roblox', 'mount'], caption: 'Anak kembar', date: '14 Januari 2026' }
    ];

    photos = localImages.map((img, index) => ({
        id: index + 1,
        title: img.title,
        tags: Array.isArray(img.tags) ? img.tags : [img.tags || 'nature'],
        image: `images/${img.file}`,
        comments: [],
        date: img.date,
        caption: img.caption
    }));

    // Load uploaded photos from localStorage
    const savedPhotos = localStorage.getItem('memoryframePhotos') || '[]';
    const extraPhotos = JSON.parse(savedPhotos);
    photos.push(...extraPhotos);
    photos.forEach((photo, index) => photo.id = index + 1);

    filteredPhotos = [...photos];
}

document.addEventListener('DOMContentLoaded', function() {
    initSounds(); // Init sounds like home
    loadLocalPhotos();
    loadPhotos();
    updateStats();
    initEventListeners();
});


function refreshGallery() {
    currentPage = 1;
    const grid = document.getElementById('masonryGrid');
    grid.innerHTML = '';
    loadLocalPhotos(); // Reload fresh data
    loadPhotos();
    updateStats();
    console.log('Gallery refreshed with cache-bust timestamps');
}

function loadPhotos() {
    const grid = document.getElementById('masonryGrid');
    const start = (currentPage - 1) * photosPerPage;
    const end = start + photosPerPage;
    const photosToShow = filteredPhotos.slice(start, end);
    
    photosToShow.forEach(photo => {
        const item = createPhotoCard(photo);
        grid.appendChild(item);
    });
    
    if (end >= filteredPhotos.length) {
        document.getElementById('loadMoreBtn').style.display = 'none';
    } else {
        document.getElementById('loadMoreBtn').style.display = 'block';
    }
}

function createPhotoCard(photo) {
    const item = document.createElement('div');
    item.className = 'masonry-item';
    item.style.cursor = 'pointer';
    
    item.innerHTML = `
<img src="${photo.image}?v=${Date.now()}" alt="${photo.title}" loading="lazy">
        <div class="masonry-overlay">
            <div class="overlay-title">${photo.title}</div>

        </div>
    `;
    
    // Make whole card clickable with sound
    item.addEventListener('mouseenter', function() {
        playSound('hover');
    });
    
    item.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        playSound('click');
        openPhotoModal(photo);
    });
    
    // Also make img clickable
    item.querySelector('img').addEventListener('click', function(e) {
        e.stopPropagation();
        openPhotoModal(photo);
    });
    
    return item;
}

function updateStats() {
    const totalPhotosEl = document.getElementById('totalPhotos');
    if (totalPhotosEl) {
        totalPhotosEl.textContent = photos.length;
    }
}

function filterPhotos() {
    currentPage = 1;
    document.getElementById('masonryGrid').innerHTML = '';
    
    filteredPhotos = photos.filter(photo => {
        const matchesFilter = currentFilter === 'all' || 
            (photo.tags && photo.tags.some(tag => tag.toLowerCase() === currentFilter.toLowerCase()));
        const matchesSearch = searchQuery === '' || 
            photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (photo.caption && photo.caption.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesFilter && matchesSearch;
    });
    
    loadPhotos();
}

function initEventListeners() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            playSound('click');
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            filterPhotos();
        });
    });
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                searchQuery = this.value;
                filterPhotos();
            }, 300);
        });
    }
    
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            playSound('success');
            currentPage++;
            loadPhotos();
        });
    }
    
    const modalClose = document.getElementById('modalClose');
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            playSound('click');
            document.getElementById('photoModal').classList.remove('show');
        });
    }

    // Refresh button sound
    const refreshBtn = document.getElementById('refreshBtn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', function(e) {
            playSound('success');
            refreshGallery();
        });
        refreshBtn.removeAttribute('onclick'); // Remove inline onclick
    }

}

function openPhotoModal(photo) {
    playSound('click');
    const modal = document.getElementById('photoModal');
    if (!modal) return;
    
    document.getElementById('modalPhoto').src = photo.image;
    document.getElementById('modalTitle').textContent = photo.title;
    document.getElementById('modalDate').textContent = photo.date || 'No date';
    document.getElementById('modalCaption').textContent = photo.caption || 'No caption';
    
    modal.classList.add('show');
}

// Modal backdrop click
document.getElementById('photoModal').addEventListener('click', function(e) {
    if (e.target === this) {
        playSound('click');
        this.classList.remove('show');
    }
});
