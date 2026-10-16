/**
 * INSTAVIBE — Aplicación Web Frontend en Vanilla JS
 */

// ==========================================================================
// 1. ESTADO Y DATOS FICTICIOS DE LA APLICACIÓN
// ==========================================================================

// Perfiles simulados y respuestas que usan las conversaciones automáticas.
const bots = {
    sofia_dev: {
        id: 'bot-sofia', name: 'Sofía', username: 'sofia_dev',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
        personality: 'Amable, creativa y cercana.', followers: 1280, following: 310,
        responses: {
            greetings: ['¡Hola, Emi! 👋', '¡Holaa! Qué gusto leerte 😊', 'Hey Emi, ¿cómo va todo? ✨'],
            wellbeing: ['Todo bien 😎 ¿y tú?', 'Muy bien, creando cosas bonitas. ¿Tú qué tal?', 'Todo tranquilo por aquí 😊'],
            questions: ['Aquí viendo algunas publicaciones.', 'Estoy trabajando en una idea nueva ✨', 'Dando una vuelta por InstaVibe.'],
            technology: ['Estoy probando unas microinteracciones nuevas 🚀', 'El código va tomando forma, jaja.', 'Siempre lista para hablar de diseño y código.'],
            unknown: ['Cuéntame un poco más 😊', 'Suena interesante, Emi.', 'Jaja, totalmente. ¿Qué opinas tú?']
        }

    },
    carlos_photo: {
        id: 'bot-carlos', name: 'Carlos', username: 'carlos_photo',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
        personality: 'Relajado, curioso y apasionado por la fotografía.', followers: 2450, following: 180,
        responses: {
            greetings: ['¡Qué onda, Emi! 📸', 'Holaa, ¿todo bien?', 'Hey bro, qué gusto verte por aquí.'],
            wellbeing: ['Todo bien, buscando buena luz jaja.', 'De lujo 😎 ¿y tú?', 'Tranqui, preparando la cámara.'],
            questions: ['Aquí viendo algunas publicaciones.', 'Editando unas fotos del amanecer.', 'Planeando la próxima salida fotográfica.'],
            technology: ['Probando una lente nueva, está nice.', 'La tecnología ayuda, pero la luz manda 📸', 'Estoy ordenando mi setup de edición.'],
            unknown: ['Nice, eso suena bien.', 'Jaja, me dio curiosidad. ¿Dónde fue?', 'Qué buena vibra tiene eso 📸']
        }
    },
    ana_art: {
        id: 'bot-ana', name: 'Ana', username: 'ana_art',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
        personality: 'Tranquila, sensible y muy observadora.', followers: 3820, following: 260,
        responses: {
            greetings: ['Hola, Emi. Qué bonito leerte 🌿', 'Hola 😊 Espero que estés teniendo un buen día.', 'Qué tal, Emi ✨'],
            wellbeing: ['Estoy muy bien, gracias. Tomándome un momento para crear.', 'Todo en calma por aquí 🌿 ¿y tú?', 'Bien, agradeciendo las pequeñas cosas.'],
            questions: ['Estoy pintando y escuchando música.', 'Observando colores para una nueva pieza.', 'Tomando una pausa creativa.'],
            technology: ['Me gusta cuando la tecnología deja espacio para crear.', 'Estoy organizando referencias para mi próximo proyecto 🎨', 'Una buena herramienta puede cambiar toda la idea.'],
            unknown: ['Me gusta cómo lo planteas.', 'Qué interesante. Me gustaría saber más.', 'Tiene una sensibilidad muy bonita lo que dices.']
        }
    },
    travel_mate: {
        id: 'bot-travel', name: 'Mateo', username: 'travel_mate',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
        personality: 'Entusiasta, aventurero y conversador.', followers: 1940, following: 420,
        responses: {
            greetings: ['¡Hey! 🗺️ ¿Listo para una aventura?', '¡Hola! Qué gusto coincidir.', 'Holaa, Emi 👋'],
            wellbeing: ['Todo genial, pensando en el próximo viaje.', 'Muy bien, con ganas de salir a explorar 😄', 'De maravilla. ¿Tú qué tal?'],
            questions: ['Buscando destinos para el fin de semana.', 'Organizando una ruta nueva.', 'Viendo fotos de lugares increíbles.'],
            technology: ['Estoy armando un mapa digital para la ruta.', 'La tecnología hace mucho más fácil viajar.', 'Editando el itinerario desde el móvil.'],
            unknown: ['Eso me recordó a un lugar increíble.', 'Suena a plan. ¿En qué sitio fue?', 'Me apunto a esa conversación 😄']
        }
    },
    tech_insider: {
        id: 'bot-sam', name: 'Sam', username: 'tech_insider',
        avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150',
        personality: 'Técnico, directo y curioso por la programación.', followers: 5120, following: 150,
        responses: {
            greetings: ['Hola, Emi 👋 ¿Qué estás construyendo?', 'Hey. Sistema operativo y café listos.', 'Buenas, colega 💻'],
            wellbeing: ['Todo estable por aquí. ¿Y tu build?', 'Funcionando al 100% 😎', 'Bien, sin errores críticos por ahora.'],
            questions: ['Revisando un componente y sus estados.', 'Midiendo tiempos de carga.', 'Refactorizando un módulo pequeño.'],
            technology: ['Eso suena a un buen caso para JavaScript.', 'Podríamos resolverlo con un estado persistente y eventos.', 'Nice. La arquitectura importa tanto como la interfaz.'],
            unknown: ['Interesante entrada. ¿Cuál sería el siguiente paso?', 'Lo convertiría en una función reutilizable.', 'Tiene potencial. ¿Qué comportamiento esperas?']
        }
    },
    maria_vibe: {
        id: 'bot-maria', name: 'María', username: 'maria_vibe',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
        personality: 'Amable, serena y con gusto por los detalles.', followers: 980, following: 205,
        responses: {
            greetings: ['Hola, Emi 😊', 'Qué gusto leerte.', 'Hola hola, espero que estés bien.'],
            wellbeing: ['Estoy muy bien, gracias por preguntar.', 'Todo tranquilo y bonito por aquí.', 'Bien, disfrutando el día. ¿Y tú?'],
            questions: ['Estoy viendo ideas para decorar mi espacio.', 'Tomando un café y revisando publicaciones.', 'Organizando unas fotos.'],
            technology: ['Me encanta cuando una app se siente fácil de usar.', 'Los pequeños detalles hacen mucha diferencia.', 'Suena como un proyecto muy interesante.'],
            unknown: ['Gracias por compartirlo conmigo.', 'Qué bonito punto de vista.', 'Me gustaría conocer más detalles.']
        }
    },
    david_lens: {
        id: 'bot-david', name: 'David', username: 'david_lens',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150',
        personality: 'Observador, práctico y fan de las buenas composiciones.', followers: 760, following: 190,
        responses: {
            greetings: ['Hey, Emi 👋', 'Buenas, ¿cómo va?', 'Hola, qué tal.'],
            wellbeing: ['Todo bien, buscando una buena composición.', 'Muy bien, gracias.', 'Tranquilo por aquí.'],
            questions: ['Comparando unas lentes.', 'Editando una serie de retratos.', 'Buscando una locación nueva.'],
            technology: ['Estoy calibrando el monitor para editar mejor.', 'Un buen flujo de trabajo ahorra mucho tiempo.', 'La herramienta correcta cambia el resultado.'],
            unknown: ['Buena observación.', 'Eso merece una foto.', 'Interesante. ¿Qué encuadre usarías?']
        }
    },
    lucia_design: {
        id: 'bot-lucia', name: 'Lucía', username: 'lucia_design',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150',
        personality: 'Creativa, clara y entusiasta del diseño.', followers: 1430, following: 340,
        responses: {
            greetings: ['¡Hola, Emi! ✨', 'Holaa, qué gusto.', 'Hey, ¿qué tal?'],
            wellbeing: ['Todo bien, diseñando una idea nueva.', 'Muy bien y llena de ideas.', 'Todo en orden por aquí 😊'],
            questions: ['Revisando una paleta de colores.', 'Armando un prototipo.', 'Buscando referencias visuales.'],
            technology: ['La interfaz debería contar la historia sin estorbar.', 'Me encanta hablar de componentes y sistemas de diseño.', 'Eso suena perfecto para una prueba rápida.'],
            unknown: ['Me gusta esa dirección.', 'Tiene mucho potencial visual.', 'Buen punto. Yo exploraría una variante más.']
        }
    }
};

// Estado central: datos visibles, usuario activo y controles temporales.
const state = {
    bots,
    currentUser: {
        username: 'emi_sanchez',
        name: 'Emi Sánchez',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
        bio: 'Desarrollador & Creador Visual 🚀\nTransformando ideas en experiencias digitales ✨\n📍 León, Gto.',
        postsCount: 12,
        followersCount: '1.4k',
        followingCount: 482
    },
    activeView: 'feed',
    activeProfileUsername: 'emi_sanchez',
    stories: [
        { id: 1, username: 'sofia_dev', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150', image: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?w=800', seen: false, likes: 18, isLiked: false },
        { id: 2, username: 'carlos_photo', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800', seen: false, likes: 24, isLiked: false },
        { id: 3, username: 'ana_art', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800', seen: false, likes: 31, isLiked: false },
        { id: 4, username: 'travel_mate', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800', seen: false, likes: 42, isLiked: false },
        { id: 5, username: 'tech_insider', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800', seen: true, likes: 15, isLiked: false }
    ],
    posts: [
        {
            id: 'post-1',
            username: 'carlos_photo',
            userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
            image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800',
            likes: 342,
            isLiked: false,
            isSaved: false,
            caption: 'Naturaleza e imponentes montañas en el amanecer. Una caminata que valió la pena ⛰️🌲',
            timestamp: 'Hace 2 horas',
            comments: [
                { id: 1, username: 'sofia_dev', text: '¡Increíble toma! 🔥' },
                { id: 2, username: 'travel_mate', text: '¿Qué cámara usaste?' }
            ]
        },
        {
            id: 'post-2',
            username: 'ana_art',
            userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
            image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=800',
            likes: 1205,
            isLiked: true,
            isSaved: true,
            caption: 'Experimentando con óleos y texturas contemporáneas. ¿Qué les parece la paleta de colores? 🎨✨',
            timestamp: 'Hace 5 horas',
            comments: [
                { id: 1, username: 'emi_sanchez', text: 'Los tonos cálidos se ven fantásticos.' }
            ]
        },
        {
            id: 'post-3',
            username: 'tech_insider',
            userAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
            likes: 890,
            isLiked: false,
            isSaved: false,
            caption: 'Setup de desarrollo listo para un maratón de código este fin de semana 💻☕ #code #setup',
            timestamp: 'Hace 1 día',
            comments: []
        }
    ],
    explorePosts: [
        { id: 'explore-1', username: 'travel_mate', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800', likes: 820, isLiked: false, comments: [{ id: 'explore-comment-1', username: 'sofia_dev', text: 'Qué paisaje tan bonito ✨' }] },
        { id: 'explore-2', username: 'david_lens', userAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800', likes: 640, isLiked: false, comments: [] },
        { id: 'explore-3', username: 'carlos_photo', userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150', image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800', likes: 910, isLiked: false, comments: [{ id: 'explore-comment-2', username: 'ana_art', text: 'La luz está increíble.' }] },
        { id: 'explore-4', username: 'ana_art', userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150', image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800', likes: 1205, isLiked: false, comments: [] },
        { id: 'explore-5', username: 'tech_insider', userAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800', likes: 530, isLiked: false, comments: [] },
        { id: 'explore-6', username: 'travel_mate', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150', image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800', likes: 740, isLiked: false, comments: [] },
        { id: 'explore-7', username: 'lucia_design', userAvatar: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800', likes: 680, isLiked: false, comments: [] },
        { id: 'explore-8', username: 'carlos_photo', userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150', image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800', likes: 450, isLiked: false, comments: [] }
    ],
    reels: [
        { id: 'reel-1', username: 'sofia_dev', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=900&fm=jpg&fit=crop&crop=faces', caption: 'Atardecer perfecto en las montañas 🌲✨ #nature', likes: 24500, comments: [{ username: 'ana_art', text: 'Qué bonito efecto de luz.' }], isLiked: false, isSaved: false },
        { id: 'reel-2', username: 'carlos_photo', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=900&sat=-80', caption: 'Probando nuevas composiciones y colores 📸', likes: 8700, comments: [{ username: 'travel_mate', text: 'La composición quedó genial.' }], isLiked: false, isSaved: false },
        { id: 'reel-3', username: 'lucia_design', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=900&con=20', caption: 'Una animación rápida para alegrar el día ✨', likes: 12800, comments: [], isLiked: false, isSaved: false }
    ],
    suggestions: [
        { username: 'maria_vibe', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150', isFollowing: false },
        { username: 'david_lens', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150', isFollowing: false },
        { username: 'lucia_design', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150', isFollowing: false }
    ],
    notifications: [
        { id: 1, username: 'sofia_dev', action: 'comenzó a seguirte.', time: '10m', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
        { id: 2, username: 'ana_art', action: 'indicó que le gusta tu publicación.', time: '1h', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100', thumb: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=100' },
        { id: 3, username: 'carlos_photo', action: 'comentó: "Excelente trabajo 👍"', time: '3h', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' }
    ],
    chats: [
        {
            id: 'chat-1',
            username: 'sofia_dev',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
            messages: [
                { sender: 'them', text: '¡Hola Emi! ¿Cómo va el proyecto de la app?' },
                { sender: 'me', text: '¡Hola Sofía! Todo excelente, agregando microinteracciones 🚀' }
            ]
        },
        {
            id: 'chat-2',
            username: 'carlos_photo',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
            messages: [
                { sender: 'them', text: '¿Saldremos a tomar fotos este fin de semana?' }
            ]
        }
    ],
    activeChatId: null,
    typingChatId: null,
    pendingReplyChatId: null,
    storyTimer: null,
    activeStoryIndex: 0
};

// Claves y recursos auxiliares usados por la persistencia y las imágenes.
const BOT_STORAGE_KEY = 'instavibe-bot-state';
const IMAGE_FALLBACK = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
        <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#7c3aed"/><stop offset="1" stop-color="#ec4899"/></linearGradient></defs>
        <rect width="800" height="800" fill="url(#g)"/>
        <circle cx="400" cy="330" r="120" fill="rgba(255,255,255,.25)"/>
        <path d="M160 680l180-190 110 105 80-85 110 170H160z" fill="rgba(255,255,255,.35)"/>
        <text x="400" y="745" text-anchor="middle" fill="white" font-family="Arial" font-size="34">InstaVibe</text>
    </svg>
`)}`;

function installImageFallbacks() {
    document.querySelectorAll('img').forEach(image => {
        if (image.id === 'image-preview' || image.dataset.fallbackReady) return;
        image.dataset.fallbackReady = 'true';
        image.addEventListener('error', () => {
            if (image.dataset.fallbackApplied) return;
            image.dataset.fallbackApplied = 'true';
            image.src = IMAGE_FALLBACK;
        });
        if (!image.getAttribute('src')) image.src = IMAGE_FALLBACK;
    });
}

// ==========================================================================
// 2. REFERENCIAS AL DOM
// ==========================================================================

const DOM = {
    initialLoader: document.getElementById('initial-loader'),
    navItems: document.querySelectorAll('.nav-item'),
    viewTriggers: document.querySelectorAll('[data-view], [data-action]'),
    viewContainers: document.querySelectorAll('.view-container'),
    themeToggleBtn: document.getElementById('theme-toggle'),
    storiesContainer: document.getElementById('stories-container'),
    feedPosts: document.getElementById('feed-posts'),
    currentUserCard: document.getElementById('current-user-card'),
    suggestionsList: document.getElementById('suggestions-list'),
    exploreGrid: document.getElementById('explore-grid'),
    reelsWrapper: document.getElementById('reels-wrapper'),
    
    // Search Drawer
    searchDrawer: document.getElementById('search-drawer'),
    searchInput: document.getElementById('search-input'),
    searchResults: document.getElementById('search-results'),
    closeSearchBtn: document.getElementById('close-search-btn'),
    
    // Notifications Drawer
    notifDrawer: document.getElementById('notifications-drawer'),
    notificationsList: document.getElementById('notifications-list'),
    closeNotifBtn: document.getElementById('close-notif-btn'),
    
    // Create Post Modal
    createModal: document.getElementById('create-modal'),
    uploadArea: document.getElementById('upload-area'),
    previewArea: document.getElementById('preview-area'),
    fileInput: document.getElementById('file-input'),
    imagePreview: document.getElementById('image-preview'),
    captionInput: document.getElementById('caption-input'),
    publishBtn: document.getElementById('publish-btn'),
    cancelCreateBtn: document.getElementById('cancel-create-btn'),
    closeCreateBtn: document.getElementById('close-create-btn'),
    
    // Comments Modal
    commentsModal: document.getElementById('comments-modal'),
    modalCommentsList: document.getElementById('modal-comments-list'),
    modalCommentForm: document.getElementById('modal-comment-form'),
    modalCommentInput: document.getElementById('modal-comment-input'),
    closeCommentsBtn: document.getElementById('close-comments-btn'),
    
    // Story Modal
    storyModal: document.getElementById('story-modal'),
    storyImage: document.getElementById('story-image'),
    storyUserAvatar: document.getElementById('story-user-avatar'),
    storyUsername: document.getElementById('story-username'),
    storyProgressFill: document.getElementById('story-progress-fill'),
    closeStoryBtn: document.getElementById('close-story-btn'),
    storyPrevBtn: document.getElementById('story-prev-btn'),
    storyNextBtn: document.getElementById('story-next-btn'),
    storyLikeBtn: document.getElementById('story-like-btn'),
    storyLikeCount: document.getElementById('story-like-count'),

    // Messages
    chatItemsContainer: document.getElementById('chat-items-container'),
    chatEmptyState: document.getElementById('chat-empty-state'),
    chatActiveBox: document.getElementById('chat-active-box'),
    chatHeader: document.getElementById('chat-header'),
    chatMessagesBody: document.getElementById('chat-messages-body'),
    chatForm: document.getElementById('chat-form'),
    chatInput: document.getElementById('chat-input'),

    // Profile
    profileHeader: document.getElementById('profile-header'),
    profilePostsGrid: document.getElementById('profile-posts-grid'),
    profileTabs: document.querySelectorAll('.profile-tab'),
    modalCommentPreview: document.getElementById('modal-comment-preview'),
    profileEditModal: document.getElementById('profile-edit-modal'),
    profileEditForm: document.getElementById('profile-edit-form'),
    profileEditPreview: document.getElementById('profile-edit-preview'),
    profilePhotoInput: document.getElementById('profile-photo-input'),
    profileNameInput: document.getElementById('profile-name-input'),
    closeProfileEditBtn: document.getElementById('close-profile-edit-btn'),
    cancelProfileEditBtn: document.getElementById('cancel-profile-edit-btn'),

    // Share Modal
    shareModal: document.getElementById('share-modal'),
    closeShareBtn: document.getElementById('close-share-btn'),
    shareCopyLink: document.getElementById('share-copy-link'),
    
    // Toast Container
    toastContainer: document.getElementById('toast-container')
};

function getBot(username) {
    return state.bots[username?.replace('@', '')];
}

function isBotUsername(username) {
    return Boolean(getBot(username));
}

function pickRandom(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function saveBotState() {
    const snapshot = {
        currentUser: state.currentUser,
        posts: state.posts,
        explorePosts: state.explorePosts,
        reels: state.reels,
        stories: state.stories,
        notifications: state.notifications,
        chats: state.chats,
        bots: Object.fromEntries(Object.entries(state.bots).map(([username, bot]) => [username, {
            likedPosts: bot.likedPosts || [],
            commentedPosts: bot.commentedPosts || [],
            lastInteraction: bot.lastInteraction || null,
            isFollowing: bot.isFollowing || false
        }]))
    };
    sessionStorage.setItem(BOT_STORAGE_KEY, JSON.stringify(snapshot));
}

function loadBotState() {
    try {
        // Las conversaciones solo viven mientras esta pestaña permanezca abierta.
        localStorage.removeItem(BOT_STORAGE_KEY);
        const saved = JSON.parse(sessionStorage.getItem(BOT_STORAGE_KEY));
        if (!saved) return;
        if (saved.currentUser) Object.assign(state.currentUser, saved.currentUser);
        if (Array.isArray(saved.posts)) state.posts = saved.posts;
        if (Array.isArray(saved.explorePosts)) state.explorePosts = saved.explorePosts;
        if (Array.isArray(saved.reels)) state.reels = saved.reels;
        if (Array.isArray(saved.stories)) {
            saved.stories.forEach(savedStory => {
                const story = state.stories.find(item => item.id === savedStory.id);
                if (story) Object.assign(story, savedStory);
            });
        }
        if (Array.isArray(saved.notifications)) state.notifications = saved.notifications;
        if (Array.isArray(saved.chats)) state.chats = saved.chats;
        Object.entries(saved.bots || {}).forEach(([username, savedBot]) => {
            if (state.bots[username]) Object.assign(state.bots[username], savedBot);
        });
    } catch (error) {
        sessionStorage.removeItem(BOT_STORAGE_KEY);
    }
}

function ensureBotChats() {
    Object.values(state.bots).forEach(bot => {
        if (!state.chats.some(chat => chat.username === bot.username)) {
            state.chats.push({
                id: `chat-${bot.id}`,
                username: bot.username,
                avatar: bot.avatar,
                messages: []
            });
        }
    });
}

function createBotNotification(bot, action, thumb) {
    state.notifications.unshift({
        id: `notification-${Date.now()}-${Math.random()}`,
        username: bot.username,
        action,
        time: 'ahora',
        avatar: bot.avatar.replace('w=150', 'w=100'),
        ...(thumb ? { thumb } : {})
    });
    state.notifications = state.notifications.slice(0, 30);
    renderNotifications();
    saveBotState();
}

function normalizeText(text) {
    return text.toLowerCase().normalize('NFD').replace(/[\\u0300-\\u036f]/g, '');
}

// ==========================================================================
// 3. INICIALIZACIÓN
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Cada carga comienza con una sesión limpia; no se conserva actividad anterior.
    sessionStorage.removeItem(BOT_STORAGE_KEY);
    loadBotState();
    ensureBotChats();

    // Simular tiempo de carga inicial tipo Skeleton
    setTimeout(() => {
        DOM.initialLoader.classList.add('fade-out');
    }, 600);

    // Cargar Tema Guardado
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // Renderizado Inicial
    renderStories();
    renderFeed();
    renderRightPanel();
    renderExploreGrid();
    renderReels();
    renderNotifications();
    renderChatList();
    renderProfile(state.currentUser.username);
    installImageFallbacks();

    // Configurar Event Listeners
    setupEventListeners();
    setupIntersectionObserver();
    scheduleAmbientActivity();
    scheduleBotPostActivity();
});

// ==========================================================================
// 4. RENDERIZADO DE COMPONENTES
// ==========================================================================

// --- RENDER STORIES ---
function renderStories() {
    DOM.storiesContainer.innerHTML = state.stories.map(story => `
        <div class="story-item" onclick="openStoryModal(${story.id})">
            <div class="story-ring ${story.seen ? 'seen' : ''}">
                <img src="${story.avatar}" class="story-avatar" alt="${story.username}">
            </div>
            <span class="story-username">${story.username}</span>
        </div>
    `).join('');
    installImageFallbacks();
}

// --- RENDER FEED DE PUBLICACIONES ---
function renderFeed() {
    DOM.feedPosts.innerHTML = state.posts.map(post => `
        <article class="post-card" id="${post.id}">
            <header class="post-header">
                <div class="post-user" onclick="openProfile('${post.username}')">
                    <img src="${post.userAvatar}" class="avatar-sm" alt="${post.username}">
                    <span class="post-username">${post.username}</span>
                </div>
                <button class="action-btn" onclick="showToast('Opciones de publicación')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                </button>
            </header>

            <div class="post-image-container" ondblclick="handleDoubleTapLike('${post.id}')">
                <img src="${post.image}" class="post-image" alt="Publicación" loading="lazy">
                <svg class="like-overlay-heart" id="overlay-heart-${post.id}" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </div>

            <div class="post-actions">
                <div class="action-buttons-left">
                    <button class="action-btn ${post.isLiked ? 'liked' : ''}" onclick="toggleLike('${post.id}')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </button>
                    <button class="action-btn" onclick="openCommentsModal('${post.id}')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    </button>
                    <button class="action-btn" onclick="openShareModal()">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </button>
                </div>
                <button class="action-btn ${post.isSaved ? 'saved' : ''}" onclick="toggleSave('${post.id}')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                </button>
            </div>

            <div class="post-likes">${post.likes.toLocaleString()} Me gusta</div>

            <div class="post-caption">
                <span class="caption-username">${post.username}</span>${post.caption}
            </div>

            <div class="view-comments-btn" onclick="openCommentsModal('${post.id}')">
                ${post.comments.length > 0 ? `Ver los ${post.comments.length} comentarios` : 'Agregar un comentario...'}
            </div>

            <div class="post-time" style="padding: 0 16px 16px;">${post.timestamp}</div>
        </article>
    `).join('');

    // Reactivar IntersectionObserver para los elementos cargados
    setupIntersectionObserver();
    installImageFallbacks();
}

// --- RENDER PANEL DERECHO (DESKTOP) ---
function renderRightPanel() {
    DOM.currentUserCard.innerHTML = `
        <div class="user-info-group">
            <img src="${state.currentUser.avatar}" class="avatar-md" alt="Usuario">
            <div class="user-names">
                <span class="username-title">${state.currentUser.username}</span>
                <span class="full-name">${state.currentUser.name}</span>
            </div>
        </div>
        <button class="btn-link font-small" onclick="showToast('Cambiar de cuenta')">Cambiar</button>
    `;

    DOM.suggestionsList.innerHTML = state.suggestions.map((sug, idx) => {
        const bot = getBot(sug.username);
        const isFollowing = bot?.isFollowing || sug.isFollowing;
        return `
        <div class="suggestion-item">
            <div class="user-info-group">
                <img src="${sug.avatar}" class="avatar-sm" alt="${sug.username}">
                <div class="user-names">
                    <span class="username-title">${sug.username}</span>
                    <span class="full-name font-small">Sugerido para ti</span>
                </div>
            </div>
            <button class="btn-follow ${isFollowing ? 'following' : ''}" onclick="toggleFollowSuggestion(${idx})">
                ${isFollowing ? 'Siguiendo' : 'Seguir'}
            </button>
        </div>
    `;
    }).join('');
}

// --- RENDER EXPLORAR (GRID ASIMÉTRICO) ---
function renderExploreGrid() {
    DOM.exploreGrid.innerHTML = state.explorePosts.map((post, i) => `
        <div class="explore-item ${i % 4 === 0 ? 'large' : ''}" onclick="openExploreComments('${post.id}')">
            <img src="${post.image}" alt="Publicación de ${post.username}" loading="lazy">
            <div class="explore-overlay">
                <div class="explore-stat">
                    <button class="explore-like-btn ${post.isLiked ? 'liked' : ''}" onclick="event.stopPropagation(); toggleExploreLike('${post.id}')" aria-label="Dar me gusta">
                        <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                        <span>${post.likes}</span>
                    </button>
                </div>
                <div class="explore-stat">
                    <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                    <span>${post.comments.length}</span>
                </div>
            </div>
        </div>
    `).join('');
    installImageFallbacks();
}

function renderReels() {
    DOM.reelsWrapper.innerHTML = state.reels.map(reel => `
        <article class="reel-card" data-reel-id="${reel.id}">
            <img class="reel-media" src="${reel.image}" alt="Reel de ${reel.username}" loading="lazy">
            <div class="reel-animation" aria-label="Animación de prueba"></div>
            <div class="reel-overlay">
                <div class="reel-user-info">
                    <img src="${reel.avatar}" alt="${reel.username}">
                    <span>${reel.username}</span>
                    <button class="btn-outline-sm" onclick="showToast('Siguiendo a ${reel.username}')">Seguir</button>
                </div>
                <p class="reel-caption">${reel.caption}</p>
            </div>
            <div class="reel-actions">
                <button class="reel-btn ${reel.isLiked ? 'liked' : ''}" onclick="toggleReelLike('${reel.id}')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    <span>${reel.likes.toLocaleString()}</span>
                </button>
                <button class="reel-btn" onclick="openCommentsModal('${reel.id}')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1 4.7-7.6 8.38 8.38 0 0 1 8 8v.5z"></path></svg>
                    <span>${reel.comments.length}</span>
                </button>
                <button class="reel-btn ${reel.isSaved ? 'saved' : ''}" onclick="toggleReelSave('${reel.id}')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                    <span>Guardar</span>
                </button>
            </div>
        </article>
    `).join('');
    installImageFallbacks();
}

// --- RENDER NOTIFICACIONES ---
function renderNotifications() {
    DOM.notificationsList.innerHTML = state.notifications.map(n => `
        <div class="notif-item">
            <img src="${n.avatar}" alt="${n.username}">
            <div>
                <strong>${n.username}</strong> ${n.action}
                <div style="font-size:0.75rem; color:var(--text-secondary);">${n.time}</div>
            </div>
            ${n.thumb ? `<img src="${n.thumb}" class="notif-thumb" alt="Thumbnail">` : ''}
        </div>
    `).join('');
}

// --- RENDER PERFIL ---
function renderProfile(username, tab = 'posts') {
    const user = getBot(username) || state.currentUser;
    const userPosts = state.posts.filter(post => post.username === user.username);
    const isCurrentUser = user.username === state.currentUser.username;
    const visiblePosts = tab === 'saved' && isCurrentUser
        ? state.posts.filter(post => post.isSaved)
        : userPosts;
    DOM.profileHeader.innerHTML = `
        <img src="${user.avatar}" class="profile-avatar-xl" alt="${user.name}">
        <div class="profile-details">
            <div class="profile-top-row">
                <h2 class="profile-username">${user.username}</h2>
                <button class="btn-secondary" onclick="${isCurrentUser ? 'openProfileEditModal()' : `toggleBotFollow('${user.username}')`}">${isCurrentUser ? 'Editar Perfil' : (user.isFollowing ? 'Siguiendo' : 'Seguir')}</button>
            </div>
            <div class="profile-stats">
                <div><span>${isCurrentUser ? user.postsCount : userPosts.length}</span> publicaciones</div>
                <div><span>${isCurrentUser ? user.followersCount : user.followers.toLocaleString()}</span> seguidores</div>
                <div><span>${isCurrentUser ? user.followingCount : user.following}</span> seguidos</div>
            </div>
            <div class="profile-bio">
                <strong>${user.name}</strong>
                <p>${isCurrentUser ? user.bio.replace(/\n/g, '<br>') : user.personality}</p>
            </div>
        </div>
    `;

    DOM.profileTabs.forEach(profileTab => {
        profileTab.classList.toggle('active', profileTab.dataset.profileTab === tab);
    });
    DOM.profilePostsGrid.innerHTML = visiblePosts.length ? visiblePosts.map(post => `
        <div class="profile-post-item" onclick="openCommentsModal('${post.id}')">
            <img src="${post.image}" alt="Post de perfil">
        </div>
    `).join('') : '<p class="empty-state">Aún no tienes publicaciones guardadas.</p>';
    installImageFallbacks();
}

function openProfile(username) {
    state.activeProfileUsername = username;
    renderProfile(username);
    switchView('profile');
}

function toggleBotFollow(username) {
    const bot = getBot(username);
    if (!bot) return;
    bot.isFollowing = !bot.isFollowing;
    if (bot.isFollowing) createBotNotification(bot, 'comenzó a seguirte.');
    renderProfile(username);
    saveBotState();
}

// ==========================================================================
// 5. INTERACCIONES Y LÓGICA DE EVENTOS
// ==========================================================================

function setupEventListeners() {
    // Cambio de Vistas
    DOM.viewTriggers.forEach(item => {
        item.addEventListener('click', (e) => {
            const view = item.getAttribute('data-view');
            const action = item.getAttribute('data-action');

            if (view) {
                e.preventDefault();
                switchView(view);
            } else if (action) {
                e.preventDefault();
                handleNavAction(action);
            }
        });
    });

    // Theme Toggle
    DOM.themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        showToast(isDark ? 'Modo Oscuro activado' : 'Modo Claro activado');
    });

    // Buscador en Tiempo Real
    DOM.searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
            DOM.searchResults.innerHTML = '<p style="color:var(--text-secondary); text-align:center;">Busca usuarios o publicaciones</p>';
            return;
        }

        const filtered = state.posts.filter(p => p.username.toLowerCase().includes(query) || p.caption.toLowerCase().includes(query));
        if (filtered.length === 0) {
            DOM.searchResults.innerHTML = '<p style="color:var(--text-secondary); text-align:center;">No se encontraron resultados.</p>';
        } else {
            DOM.searchResults.innerHTML = filtered.map(p => `
                <div class="notif-item" style="cursor:pointer;" onclick="closeSearch(); switchView('feed');">
                    <img src="${p.userAvatar}" alt="${p.username}">
                    <div>
                        <strong>${p.username}</strong>
                        <p style="font-size:0.75rem; color:var(--text-secondary);">${p.caption.substring(0, 30)}...</p>
                    </div>
                </div>
            `).join('');
        }
    });

    DOM.closeSearchBtn.addEventListener('click', closeSearch);
    DOM.closeNotifBtn.addEventListener('click', closeNotifications);
    DOM.profileTabs.forEach(profileTab => {
        profileTab.addEventListener('click', () => {
            renderProfile(state.activeProfileUsername, profileTab.dataset.profileTab);
        });
    });

    // Modal Crear Post con FileReader
    DOM.fileInput.addEventListener('change', handleFileSelect);
    DOM.cancelCreateBtn.addEventListener('click', closeCreateModal);
    DOM.closeCreateBtn.addEventListener('click', closeCreateModal);
    DOM.publishBtn.addEventListener('click', handlePublishPost);
    DOM.closeProfileEditBtn.addEventListener('click', closeProfileEditModal);
    DOM.cancelProfileEditBtn.addEventListener('click', closeProfileEditModal);
    DOM.profileEditForm.addEventListener('submit', handleProfileEditSubmit);
    DOM.profilePhotoInput.addEventListener('change', handleProfilePhotoSelect);

    // Modales de Comentarios, Historias y Compartir
    DOM.closeCommentsBtn.addEventListener('click', () => DOM.commentsModal.classList.add('hidden'));
    DOM.closeStoryBtn.addEventListener('click', closeStoryModal);
    DOM.storyPrevBtn.addEventListener('click', () => navigateStory(-1));
    DOM.storyNextBtn.addEventListener('click', () => navigateStory(1));
    DOM.storyLikeBtn.addEventListener('click', toggleStoryLike);
    DOM.closeShareBtn.addEventListener('click', () => DOM.shareModal.classList.add('hidden'));

    DOM.shareCopyLink.addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href);
        DOM.shareModal.classList.add('hidden');
        showToast('¡Enlace copiado al portapapeles!');
    });

    // Tecla ESC para cerrar modales
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCreateModal();
            closeProfileEditModal();
            closeStoryModal();
            DOM.commentsModal.classList.add('hidden');
            DOM.shareModal.classList.add('hidden');
            closeSearch();
            closeNotifications();
        }
        if (!DOM.storyModal.classList.contains('hidden')) {
            if (e.key === 'ArrowLeft') navigateStory(-1);
            if (e.key === 'ArrowRight') navigateStory(1);
        }
    });

    // Enviar comentario desde modal
    DOM.modalCommentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = DOM.modalCommentInput.value.trim();
        const postId = DOM.modalCommentForm.getAttribute('data-post-id');
        if (text && postId) {
            const post = [...state.posts, ...state.explorePosts, ...state.reels].find(p => p.id === postId);
            if (post) {
                addCommentToPost(post, {
                    id: Date.now(),
                    username: state.currentUser.username,
                    avatar: state.currentUser.avatar,
                    text,
                    timestamp: 'ahora'
                });
                DOM.modalCommentInput.value = '';
                renderCommentsModalList(post);
                if (postId.startsWith('reel-')) {
                    renderReels();
                } else {
                    renderFeed();
                }
                showToast('Comentario publicado');
                saveBotState();
                const replyTo = DOM.modalCommentForm.getAttribute('data-reply-to');
                if (replyTo && isBotUsername(replyTo)) {
                    scheduleBotCommentReply(post, replyTo, text);
                }
                DOM.modalCommentForm.removeAttribute('data-reply-to');
            }
        }
    });

    // Enviar Mensaje Chat
    DOM.chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = DOM.chatInput.value.trim();
        if (!text) return;
        if (!state.activeChatId) {
            showToast('Selecciona una conversación primero');
            return;
        }
        sendMessageToBot(text);
    });
}

// ==========================================================================
// 6. FUNCIONALIDADES ESPECÍFICAS
// ==========================================================================

function switchView(viewName) {
    state.activeView = viewName;
    DOM.viewContainers.forEach(container => {
        container.classList.remove('active');
        if (container.id === `view-${viewName}`) {
            container.classList.add('active');
        }
    });

    DOM.navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-view') === viewName) {
            item.classList.add('active');
        }
    });

    if (viewName === 'messages' && !state.activeChatId && state.chats.length) {
        selectChat(state.chats[0].id);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleNavAction(action) {
    if (action === 'toggle-search') {
        DOM.searchDrawer.classList.toggle('open');
        DOM.notifDrawer.classList.remove('open');
        if (DOM.searchDrawer.classList.contains('open')) DOM.searchInput.focus();
    } else if (action === 'toggle-notifications') {
        DOM.notifDrawer.classList.toggle('open');
        DOM.searchDrawer.classList.remove('open');
    } else if (action === 'open-create-modal') {
        DOM.createModal.classList.remove('hidden');
    }
}

function closeSearch() { DOM.searchDrawer.classList.remove('open'); }
function closeNotifications() { DOM.notifDrawer.classList.remove('open'); }

// LIKE & DOUBLE TAP
function toggleLike(postId) {
    const post = state.posts.find(p => p.id === postId);
    if (post) {
        post.isLiked = !post.isLiked;
        post.likes += post.isLiked ? 1 : -1;
        renderFeed();
        saveBotState();
    }
}

function handleDoubleTapLike(postId) {
    const post = state.posts.find(p => p.id === postId);
    if (post) {
        if (!post.isLiked) {
            post.isLiked = true;
            post.likes += 1;
            renderFeed();
        }
        const heartOverlay = document.getElementById(`overlay-heart-${postId}`);
        if (heartOverlay) {
            heartOverlay.classList.remove('animate');
            void heartOverlay.offsetWidth; // trigger reflow
            heartOverlay.classList.add('animate');
        }
    }
}

function toggleSave(postId) {
    const post = state.posts.find(p => p.id === postId);
    if (post) {
        post.isSaved = !post.isSaved;
        renderFeed();
        saveBotState();
        showToast(post.isSaved ? 'Publicación guardada' : 'Publicación eliminada de guardados');
    }
}

function toggleReelLike(reelId) {
    const reel = state.reels.find(item => item.id === reelId);
    if (!reel) return;
    reel.isLiked = !reel.isLiked;
    reel.likes += reel.isLiked ? 1 : -1;
    renderReels();
    saveBotState();
}

function toggleExploreLike(postId) {
    const post = state.explorePosts.find(item => item.id === postId);
    if (!post) return;
    post.isLiked = !post.isLiked;
    post.likes += post.isLiked ? 1 : -1;
    renderExploreGrid();
    saveBotState();
}

function toggleReelSave(reelId) {
    const reel = state.reels.find(item => item.id === reelId);
    if (!reel) return;
    reel.isSaved = !reel.isSaved;
    renderReels();
    saveBotState();
    showToast(reel.isSaved ? 'Reel guardado' : 'Reel eliminado de guardados');
}

function toggleFollowSuggestion(idx) {
    state.suggestions[idx].isFollowing = !state.suggestions[idx].isFollowing;
    renderRightPanel();
    const bot = getBot(state.suggestions[idx].username);
    if (bot) {
        bot.isFollowing = state.suggestions[idx].isFollowing;
        saveBotState();
    }
}

// CREAR PUBLICACIÓN CON FileReader
function handleFileSelect(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            DOM.imagePreview.src = event.target.result;
            DOM.uploadArea.classList.add('hidden');
            DOM.previewArea.classList.remove('hidden');
            DOM.publishBtn.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
    }
}

function handlePublishPost() {
    const imageSrc = DOM.imagePreview.src;
    const caption = DOM.captionInput.value.trim();

    if (!imageSrc) return;

    const newPost = {
        id: `post-${Date.now()}`,
        username: state.currentUser.username,
        userAvatar: state.currentUser.avatar,
        image: imageSrc,
        likes: 0,
        isLiked: false,
        isSaved: false,
        caption: caption || '✨',
        timestamp: 'Justo ahora',
        comments: []
    };

    state.posts.unshift(newPost);
    state.currentUser.postsCount += 1;

    renderFeed();
    renderProfile(state.currentUser.username);
    closeCreateModal();
    saveBotState();
    schedulePostInteractions(newPost);
    showToast('¡Publicación compartida con éxito!');
}

function closeCreateModal() {
    DOM.createModal.classList.add('hidden');
    DOM.uploadArea.classList.remove('hidden');
    DOM.previewArea.classList.add('hidden');
    DOM.publishBtn.classList.add('hidden');
    DOM.fileInput.value = '';
    DOM.captionInput.value = '';
}

function openProfileEditModal() {
    DOM.profileNameInput.value = state.currentUser.name;
    DOM.profileEditPreview.src = state.currentUser.avatar;
    DOM.profilePhotoInput.value = '';
    DOM.profileEditModal.classList.remove('hidden');
}

function closeProfileEditModal() {
    DOM.profileEditModal.classList.add('hidden');
}

function handleProfilePhotoSelect(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = event => {
        DOM.profileEditPreview.src = event.target.result;
    };
    reader.readAsDataURL(file);
}

function handleProfileEditSubmit(e) {
    e.preventDefault();
    const name = DOM.profileNameInput.value.trim();
    if (!name) {
        showToast('Escribe un nombre válido');
        return;
    }

    state.currentUser.name = name;
    if (DOM.profileEditPreview.src) state.currentUser.avatar = DOM.profileEditPreview.src;
    state.posts
        .filter(post => post.username === state.currentUser.username)
        .forEach(post => {
            post.userAvatar = state.currentUser.avatar;
        });
    document.querySelectorAll('.nav-avatar').forEach(avatar => {
        avatar.src = state.currentUser.avatar;
    });
    renderRightPanel();
    renderProfile(state.currentUser.username);
    closeProfileEditModal();
    saveBotState();
    showToast('Perfil actualizado');
}

// MODAL DE COMENTARIOS
function openCommentsModal(postId) {
    const post = [...state.posts, ...state.explorePosts, ...state.reels].find(p => p.id === postId);
    if (post) {
        DOM.modalCommentForm.setAttribute('data-post-id', postId);
        DOM.modalCommentPreview.innerHTML = post.image
            ? `<img class="comment-preview-image" src="${post.image}" alt="Publicación de ${post.username}">`
            : '<div class="comment-preview-animation">Reel de prueba</div>';
        DOM.modalCommentPreview.innerHTML += `<p class="comment-preview-user"><strong>${post.username}</strong></p>`;
        renderCommentsModalList(post);
        DOM.commentsModal.classList.remove('hidden');
    }
}

function openExploreComments(postId) {
    openCommentsModal(postId);
}

function renderCommentsModalList(post) {
    DOM.modalCommentsList.innerHTML = post.comments.length > 0 ? post.comments.map(c => `
        <div class="notif-item comment-item">
            <img src="${c.avatar || getBot(c.username)?.avatar || state.currentUser.avatar}" alt="${c.username}">
            <div>
                <strong>${c.username}</strong> ${c.text}
                <div class="comment-meta">${c.timestamp || 'ahora'} ${isBotUsername(c.username) ? `<button class="btn-link reply-comment-btn" onclick="prepareCommentReply('${c.username}')">Responder</button>` : ''}</div>
            </div>
        </div>
    `).join('') : '<p style="color:var(--text-secondary); text-align:center;">Aún no hay comentarios.</p>';
}

function addCommentToPost(post, comment) {
    post.comments = post.comments || [];
    post.comments.push(comment);
}

function prepareCommentReply(username) {
    DOM.modalCommentForm.setAttribute('data-reply-to', username);
    DOM.modalCommentInput.value = `@${username} `;
    DOM.modalCommentInput.focus();
}

// MODAL DE STORIES
function openStoryModal(storyId) {
    const storyIndex = state.stories.findIndex(story => story.id === storyId);
    if (storyIndex === -1) return;
    state.activeStoryIndex = storyIndex;
    DOM.storyModal.classList.remove('hidden');
    showActiveStory();
}

function showActiveStory() {
    const story = state.stories[state.activeStoryIndex];
    if (!story) return;
    story.seen = true;
    renderStories();
    DOM.storyImage.src = story.image;
    DOM.storyUserAvatar.src = story.avatar;
    DOM.storyUsername.textContent = story.username;
    DOM.storyLikeCount.textContent = story.likes.toLocaleString();
    DOM.storyLikeBtn.classList.toggle('liked', story.isLiked);
    DOM.storyProgressFill.style.width = '0%';
    setTimeout(() => {
        DOM.storyProgressFill.style.width = '100%';
    }, 50);

    clearTimeout(state.storyTimer);
    state.storyTimer = setTimeout(() => {
        navigateStory(1);
    }, 5000);
}

function navigateStory(direction) {
    const nextIndex = state.activeStoryIndex + direction;
    if (nextIndex < 0 || nextIndex >= state.stories.length) {
        closeStoryModal();
        return;
    }
    state.activeStoryIndex = nextIndex;
    showActiveStory();
}

function toggleStoryLike() {
    const story = state.stories[state.activeStoryIndex];
    if (!story) return;
    story.isLiked = !story.isLiked;
    story.likes += story.isLiked ? 1 : -1;
    DOM.storyLikeBtn.classList.toggle('liked', story.isLiked);
    DOM.storyLikeCount.textContent = story.likes.toLocaleString();
    saveBotState();
}

function closeStoryModal() {
    DOM.storyModal.classList.add('hidden');
    clearTimeout(state.storyTimer);
}

// COMPARTIR
function openShareModal() {
    DOM.shareModal.classList.remove('hidden');
}

function generateBotResponse(bot, text) {
    const message = normalizeText(text);
    if (/(gracias|muchas gracias|te agradezco)/.test(message)) {
        return pickRandom(['De nada, Emi 😊', 'Siempre, me alegra poder ayudarte.', 'Claro, para eso estamos ✨']);
    }
    if (/(foto|publicacion|post|imagen|toma|reel)/.test(message)) {
        return pickRandom(['La revisé con calma y me gusta mucho la composición.', 'Tiene una vibra muy tuya; la luz quedó genial.', 'Me quedé pensando en cómo la editaría para darle más contraste.']);
    }
    if (bot.username === 'tech_insider' && /(error|bug|codigo|javascript|web)/.test(message)) {
        return pickRandom(['Yo revisaría primero el estado y después el evento que lo actualiza.', 'Suena a un problema de flujo. ¿Qué esperabas que ocurriera?', 'Podría estar relacionado con el renderizado; seguiría el dato desde el inicio.']);
    }
    let category = 'unknown';
    if (/\b(hola|holaa|hey|buenas|que onda|onda)\b/.test(message)) category = 'greetings';
    else if (/(como estas|todo bien|que tal|como va)/.test(message)) category = 'wellbeing';
    else if (/(que haces|en que andas|haciendo|donde estas)/.test(message)) category = 'questions';
    else if (/(codigo|program|app|javascript|tecnolog|web|setup|error|proyecto)/.test(message)) category = 'technology';
    return pickRandom(bot.responses[category]);
}

function simulateTyping(chat, bot, callback) {
    state.typingChatId = chat.id;
    state.pendingReplyChatId = chat.id;
    renderActiveChat(chat);
    const delay = 1800 + Math.floor(Math.random() * 2600);
    setTimeout(() => {
        state.typingChatId = null;
        state.pendingReplyChatId = null;
        callback();
    }, delay);
}

function sendMessageToBot(text) {
    const chat = state.chats.find(item => item.id === state.activeChatId);
    const bot = chat && getBot(chat.username);
    if (!chat || !bot) return;
    if (state.pendingReplyChatId === chat.id) {
        showToast(`${bot.name} todavía está escribiendo...`);
        return;
    }

    chat.messages.push({ sender: 'me', text, timestamp: 'ahora' });
    DOM.chatInput.value = '';
    saveBotState();
    renderChatList();
    renderActiveChat(chat);
    simulateTyping(chat, bot, () => {
        const reply = generateBotResponse(bot, text);
        chat.messages.push({ sender: 'them', text: reply, timestamp: 'ahora' });
        bot.lastInteraction = Date.now();
        saveBotState();
        renderChatList();
        renderActiveChat(chat);
        showToast(`${bot.name} respondió a tu mensaje`);
    });
}

function botLikePost(bot, post) {
    bot.likedPosts = bot.likedPosts || [];
    if (bot.likedPosts.includes(post.id)) return;
    bot.likedPosts.push(post.id);
    post.likes += 1;
    createBotNotification(bot, 'indicó que le gusta tu publicación.', post.image);
    renderFeed();
    saveBotState();
}

function botCommentPost(bot, post, text) {
    bot.commentedPosts = bot.commentedPosts || [];
    if (bot.commentedPosts.includes(post.id)) return;
    bot.commentedPosts.push(post.id);
    addCommentToPost(post, {
        id: `comment-${Date.now()}-${bot.id}`,
        username: bot.username,
        avatar: bot.avatar,
        text,
        timestamp: 'ahora'
    });
    createBotNotification(bot, 'comentó tu publicación.', post.image);
    renderFeed();
    saveBotState();
}

function scheduleBotCommentReply(post, username, userText) {
    const bot = getBot(username);
    if (!bot) return;
    setTimeout(() => {
        const reply = generateBotResponse(bot, userText);
        bot.commentedPosts = bot.commentedPosts || [];
        addCommentToPost(post, {
            id: `comment-${Date.now()}-${bot.id}`,
            username: bot.username,
            avatar: bot.avatar,
            text: reply,
            timestamp: 'ahora',
            replyTo: state.currentUser.username
        });
        createBotNotification(bot, 'respondió a tu comentario.', post.image);
        renderFeed();
        if (DOM.modalCommentForm.getAttribute('data-post-id') === post.id) renderCommentsModalList(post);
        saveBotState();
    }, 1200 + Math.floor(Math.random() * 1400));
}

function schedulePostInteractions(post) {
    const candidates = Object.values(state.bots).filter(bot => bot.username !== post.username);
    candidates.forEach((bot, index) => {
        const likeDelay = 2200 + index * 1100 + Math.floor(Math.random() * 1400);
        const commentDelay = likeDelay + 2200 + Math.floor(Math.random() * 2200);
        setTimeout(() => botLikePost(bot, post), likeDelay);
        if (index < 3 || Math.random() < 0.45) setTimeout(() => botCommentPost(bot, post, pickRandom([
            'Está muy buena 👀', 'Qué buena toma, Emi.', 'Me encanta la vibra de esta publicación ✨', '¿Dónde tomaste esta foto?'
        ])), commentDelay);
        if (Math.random() < 0.2 && !bot.isFollowing) setTimeout(() => {
            bot.isFollowing = true;
            createBotNotification(bot, 'comenzó a seguirte.');
            renderProfile(state.currentUser.username);
            saveBotState();
        }, commentDelay + 1800);
    });
}

function scheduleAmbientActivity() {
    const lastActivity = Number(sessionStorage.getItem('instavibe-last-ambient-activity') || 0);
    if (Date.now() - lastActivity < 20 * 60 * 1000 || !state.posts.length) return;
    sessionStorage.setItem('instavibe-last-ambient-activity', String(Date.now()));
    setTimeout(() => {
        const bot = pickRandom(Object.values(state.bots));
        const post = pickRandom(state.posts);
        if (Math.random() < 0.65) botLikePost(bot, post);
        else botCommentPost(bot, post, pickRandom(['Qué buena publicación 👀', 'Me gusta mucho esta vibra.', 'Buen trabajo, Emi ✨']));
    }, 8000 + Math.floor(Math.random() * 7000));
}

function createBotPost() {
    const bot = pickRandom(Object.values(state.bots));
    const botImages = [
        'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800',
        'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800',
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800'
    ];
    const captions = [
        'Encontré un rincón que tenía que compartir ✨',
        'Un momento tranquilo para guardar en la memoria.',
        'Probando una idea nueva. ¿Qué les parece? 👀',
        'La luz de hoy estaba demasiado bonita para dejarla pasar.'
    ];
    const post = {
        id: `bot-post-${Date.now()}`,
        username: bot.username,
        userAvatar: bot.avatar,
        image: pickRandom(botImages),
        likes: Math.floor(Math.random() * 180) + 40,
        isLiked: false,
        isSaved: false,
        caption: pickRandom(captions),
        timestamp: 'Hace unos segundos',
        comments: []
    };

    state.posts.unshift(post);
    createBotNotification(bot, 'publicó una nueva foto.', post.image);
    renderFeed();
    saveBotState();
    schedulePostInteractions(post);
}

function scheduleBotPostActivity() {
    const delay = state.posts.some(post => post.id.startsWith('bot-post-'))
        ? 60000 + Math.floor(Math.random() * 60000)
        : 20000 + Math.floor(Math.random() * 15000);

    setTimeout(() => {
        createBotPost();
        scheduleBotPostActivity();
    }, delay);
}

// CHAT Y MENSAJES DIRECTOS
function renderChatList() {
    DOM.chatItemsContainer.innerHTML = state.chats.map(chat => `
        <div class="chat-item ${chat.id === state.activeChatId ? 'active' : ''}" onclick="selectChat('${chat.id}')">
            <img src="${chat.avatar}" class="avatar-sm" alt="${chat.username}">
            <div class="chat-item-info">
                <span class="chat-item-name">${chat.username}</span>
                <span class="chat-item-preview">${chat.messages[chat.messages.length - 1]?.text || 'Conversación iniciada'}</span>
            </div>
        </div>
    `).join('');
}

function selectChat(chatId) {
    state.activeChatId = chatId;
    const chat = state.chats.find(c => c.id === chatId);
    renderChatList();
    if (chat) {
        DOM.chatEmptyState.classList.add('hidden');
        DOM.chatActiveBox.classList.remove('hidden');
        renderActiveChat(chat);
    }
}

function renderActiveChat(chat) {
    const bot = getBot(chat.username);
    DOM.chatHeader.innerHTML = `
        <img src="${chat.avatar}" class="avatar-sm" alt="${chat.username}">
        <span class="chat-item-name">${chat.username}</span>
    `;

    DOM.chatMessagesBody.innerHTML = chat.messages.map(m => `
        <div class="message-bubble ${m.sender === 'me' ? 'outgoing' : 'incoming'}">
            ${m.text}
        </div>
    `).join('') + (state.typingChatId === chat.id && bot ? `<div class="typing-indicator">${bot.name} está pensando<span class="typing-dots">...</span></div>` : '');

    DOM.chatMessagesBody.scrollTop = DOM.chatMessagesBody.scrollHeight;
}

// INTERSECTION OBSERVER PARA FADE-IN DE POSTS AL HACER SCROLL
function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.post-card').forEach(card => observer.observe(card));
}

// TOAST NOTIFICATIONS HELPER
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    DOM.toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}