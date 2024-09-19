// Menú Responsive
const menuToggle = document.getElementById('mobile-menu');
const nav = document.querySelector('.nav ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
    // Animación del icono del menú (hamburger to close)
    menuToggle.classList.contains('active') ?
        menuToggle.classList.add('open') :
        menuToggle.classList.remove('open');
});

// Smooth Scrolling para Navegación
const navLinks = document.querySelectorAll('.nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 70, // Ajusta según la altura del header
            behavior: 'smooth'
        });
        // Cerrar el menú móvil al hacer clic
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.classList.remove('open');
        }
    });
});

// Animaciones al Desplazarse usando Intersection Observer
const observerOptions = {
    threshold: 0.1
};

const sections = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Cambio de Estilo del Header al Hacer Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Traducción de Idiomas
const languageSelect = document.getElementById('language-select');

const translations = {
    es: {
        title: "Bigfoot TDM - Restaurante en Torre del Mar",
        nav_about: "Sobre Nosotros",
        nav_menu: "Menú",
        nav_hours: "Horarios",
        nav_contact: "Contacto",
        hero_title: "Mischief in the Barrio",
        hero_subtitle: "<em>NUEVO MONSTRUO EN LA CIUDAD</em>",
        hero_button: "Ver Menú",
        about_us_heading: "Sobre Nosotros",
        about_us_paragraph1: "Las leyendas dicen que en lo profundo de los bosques montañosos del noroeste del Pacífico vive un hombre simio de 8 pies de altura que recorre las tierras en secreto, dejando huellas gigantes y preguntas aún más grandes… ¿Es real? ..¿De dónde viene?",
        about_us_paragraph2: "Este folclore ha viajado alrededor del mundo. Para algunos es <em>Sasquatch</em>, para otros <em>El Yeti</em> o <em>Sisimite</em>, pero para nosotros es <strong>Bigfoot</strong>, y puedes encontrarlo ahora mismo en Torre del Mar, España.",
        about_us_paragraph3: "Ven y experimenta el misterio y la travesura de Bigfoot Café. Somos un par de canadienses que queremos ofrecerte clásicos norteamericanos con un giro. Tenemos cervezas frías, buena música y comida abundante ♥️.",
        about_us_paragraph4: "<strong>Desata la bestia que llevas dentro</strong>",
        menu_heading: "Nuestra Carta",
        menu_detroit_pizza: "DETROIT PIZZA",
        menu_pizzas: "PIZZAS",
        menu_fries: "FRIES",
        menu_focaccia_sandwich: "FOCACCIA SANDWICH",
        menu_squash_burgers: "SQUASH BURGERS (90 gramos de ternera)",
        menu_classic_burgers: "CLASSIC BURGERS (130 gramos de ternera)",
        menu_tacos: "TACOS",
        menu_sasquatch: "Sasquatch",
        price_sasquatch: "15€/19€",
        ingredients_sasquatch: "Ingredientes: Pepperoni, queso mozzarella, salsa de tomate.",
        menu_sausage_supreme: "Sausage Supreme",
        price_sausage_supreme: "16€/20€",
        ingredients_sausage_supreme: "Ingredientes: Salchicha, pimientos, cebolla, queso mozzarella.",
        menu_meat_feast: "Meat Feast",
        price_meat_feast: "17.50€/22€",
        ingredients_meat_feast: "Ingredientes: Carne de res, salchicha, bacon, queso mozzarella.",
        menu_veggie: "Veggie",
        price_veggie: "15€/19€",
        ingredients_veggie: "Ingredientes: Champiñones, pimientos, cebolla, aceitunas, queso mozzarella.",
        menu_bigfoot_nonno: "Bigfoot Nonno",
        price_bigfoot_nonno: "12€",
        ingredients_bigfoot_nonno: "Ingredientes: Tomate, mozzarella, albahaca fresca.",
        menu_margherita: "Margherita",
        price_margherita: "10€",
        ingredients_margherita: "Ingredientes: Tomate, mozzarella, orégano.",
        menu_poutine: "Poutine",
        price_poutine: "7€",
        ingredients_poutine: "Papas fritas, queso, salsa gravy.",
        menu_bravas: "Bravas",
        price_bravas: "6€",
        ingredients_bravas: "Papas fritas con salsa picante.",
        menu_house_fries: "House Fries",
        price_house_fries: "5€",
        ingredients_house_fries: "Papas fritas caseras con sal y especias.",
        menu_bigfoot_fries: "Bigfoot Fries",
        price_bigfoot_fries: "7.50€",
        ingredients_bigfoot_fries: "Papas fritas con queso y salsa especial.",
        menu_bigfoot_classica: "Bigfoot Classica",
        price_bigfoot_classica: "Precio no especificado",
        ingredients_bigfoot_classica: "Ingredientes: Jamón, queso, lechuga, tomate.",
        menu_veggie_sandwich: "Veggie",
        price_veggie_sandwich: "Precio no especificado",
        ingredients_veggie_sandwich: "Ingredientes: Vegetales frescos, hummus, espinacas.",
        menu_dulce_temptation: "Dulce Temptation",
        price_dulce_temptation: "Precio no especificado",
        ingredients_dulce_temptation: "Ingredientes: Queso crema, frutas, miel.",
        menu_bigfoot_burger: "Bigfoot",
        price_bigfoot_burger: "10.50€",
        ingredients_bigfoot_burger: "Ingredientes: Hamburguesa de ternera, lechuga, tomate, cebolla.",
        menu_bigfoot_double: "Bigfoot Double",
        price_bigfoot_double: "12.50€",
        ingredients_bigfoot_double: "Ingredientes: Doble hamburguesa de ternera, queso, lechuga, tomate.",
        menu_bigfoot_triple: "Bigfoot Triple",
        price_bigfoot_triple: "14.50€",
        ingredients_bigfoot_triple: "Ingredientes: Triple hamburguesa de ternera, queso, bacon, lechuga, tomate.",
        menu_extra_ternera: "Extra Ternera",
        price_extra_ternera: "2.50€",
        ingredients_extra_ternera: "Hamburguesa de ternera adicional.",
        menu_oklahoma_style: "Oklahoma Style",
        price_oklahoma_style: "0.50€",
        ingredients_oklahoma_style: "Ingredientes adicionales al estilo Oklahoma.",
        menu_canada_burger: "Canada",
        price_canada_burger: "13.50€",
        ingredients_canada_burger: "Ingredientes: Hamburguesa de ternera, queso cheddar, lechuga, tomate.",
        menu_usa_burger: "USA",
        price_usa_burger: "13.50€",
        ingredients_usa_burger: "Ingredientes: Hamburguesa de ternera, queso americano, cebolla caramelizada.",
        menu_mexico_burger: "Mexico",
        price_mexico_burger: "13.50€",
        ingredients_mexico_burger: "Ingredientes: Hamburguesa de ternera, guacamole, jalapeños, queso pepper jack.",
        menu_pastor_tacos: "Pastor",
        price_pastor_tacos: "3.50€",
        ingredients_pastor_tacos: "Ingredientes: Carne al pastor, piña, cebolla, cilantro.",
        menu_carnitas_tacos: "Carnitas",
        price_carnitas_tacos: "3.50€",
        ingredients_carnitas_tacos: "Ingredientes: Carne de cerdo, cebolla, cilantro.",
        menu_birria_tacos: "Birria",
        price_birria_tacos: "4€",
        ingredients_birria_tacos: "Ingredientes: Carne de res marinada, consomé, cebolla, cilantro.",
        menu_tostada_tacos: "Tostada",
        price_tostada_tacos: "4€",
        ingredients_tostada_tacos: "Ingredientes: Tostada crujiente, frijoles, carne, lechuga, queso.",
        opening_hours_heading: "Horarios de Apertura",
        opening_hours_monday_wednesday: "Lunes a Miércoles: 13:00 - 00:00",
        opening_hours_thursday_sunday: "Jueves a Domingo: 13:00 - 01:30",
        opening_hours_sunday: "Domingos: 13:00 - 00:00",
        contact_heading: "Contacto",
        contact_address: "Av. Antonio Toré Toré 24, 29740 Torre del Mar, Málaga",
        contact_email: "Bigfoot.TDM@gmail.com",
        contact_phone: "640 79 83 85"
    },
    en: {
        title: "Bigfoot TDM - Restaurant in Torre del Mar",
        nav_about: "About Us",
        nav_menu: "Menu",
        nav_hours: "Hours",
        nav_contact: "Contact",
        hero_title: "Mischief in the Barrio",
        hero_subtitle: "<em>NEW MONSTER IN TOWN</em>",
        hero_button: "View Menu",
        about_us_heading: "About Us",
        about_us_paragraph1: "Legends say that deep within the mountainous forests of the Pacific Northwest lives an 8-foot-tall ape-man who roams the lands in secret, leaving giant footprints and even bigger questions… Is it real? ..Where does it come from?",
        about_us_paragraph2: "This folklore has traveled around the world. For some, it's <em>Sasquatch</em>, for others <em>The Yeti</em> or <em>Sisyphe</em>, but for us, it's <strong>Bigfoot</strong>, and you can find him right now in Torre del Mar, Spain.",
        about_us_paragraph3: "Come and experience the mystery and mischief of Bigfoot Café. We are a couple of Canadians who want to offer you American classics with a twist. We have cold beers, good music, and hearty food ♥️.",
        about_us_paragraph4: "<strong>Unleash the beast within you</strong>",
        menu_heading: "Our Menu",
        menu_detroit_pizza: "DETROIT PIZZA",
        menu_pizzas: "PIZZAS",
        menu_fries: "FRIES",
        menu_focaccia_sandwich: "FOCACCIA SANDWICH",
        menu_squash_burgers: "SQUASH BURGERS (90 grams of beef)",
        menu_classic_burgers: "CLASSIC BURGERS (130 grams of beef)",
        menu_tacos: "TACOS",
        menu_sasquatch: "Sasquatch",
        price_sasquatch: "15€/19€",
        ingredients_sasquatch: "Ingredients: Pepperoni, mozzarella cheese, tomato sauce.",
        menu_sausage_supreme: "Sausage Supreme",
        price_sausage_supreme: "16€/20€",
        ingredients_sausage_supreme: "Ingredients: Sausage, peppers, onions, mozzarella cheese.",
        menu_meat_feast: "Meat Feast",
        price_meat_feast: "17.50€/22€",
        ingredients_meat_feast: "Ingredients: Beef, sausage, bacon, mozzarella cheese.",
        menu_veggie: "Veggie",
        price_veggie: "15€/19€",
        ingredients_veggie: "Ingredients: Mushrooms, peppers, onions, olives, mozzarella cheese.",
        menu_bigfoot_nonno: "Bigfoot Nonno",
        price_bigfoot_nonno: "12€",
        ingredients_bigfoot_nonno: "Ingredients: Tomato, mozzarella, fresh basil.",
        menu_margherita: "Margherita",
        price_margherita: "10€",
        ingredients_margherita: "Ingredients: Tomato, mozzarella, oregano.",
        menu_poutine: "Poutine",
        price_poutine: "7€",
        ingredients_poutine: "French fries, cheese, gravy sauce.",
        menu_bravas: "Bravas",
        price_bravas: "6€",
        ingredients_bravas: "French fries with spicy sauce.",
        menu_house_fries: "House Fries",
        price_house_fries: "5€",
        ingredients_house_fries: "Homemade fries with salt and spices.",
        menu_bigfoot_fries: "Bigfoot Fries",
        price_bigfoot_fries: "7.50€",
        ingredients_bigfoot_fries: "French fries with cheese and special sauce.",
        menu_bigfoot_classica: "Bigfoot Classica",
        price_bigfoot_classica: "Price not specified",
        ingredients_bigfoot_classica: "Ingredients: Ham, cheese, lettuce, tomato.",
        menu_veggie_sandwich: "Veggie",
        price_veggie_sandwich: "Price not specified",
        ingredients_veggie_sandwich: "Ingredients: Fresh vegetables, hummus, spinach.",
        menu_dulce_temptation: "Dulce Temptation",
        price_dulce_temptation: "Price not specified",
        ingredients_dulce_temptation: "Ingredients: Cream cheese, fruits, honey.",
        menu_bigfoot_burger: "Bigfoot",
        price_bigfoot_burger: "10.50€",
        ingredients_bigfoot_burger: "Ingredients: Beef burger, lettuce, tomato, onion.",
        menu_bigfoot_double: "Bigfoot Double",
        price_bigfoot_double: "12.50€",
        ingredients_bigfoot_double: "Ingredients: Double beef burger, cheese, lettuce, tomato.",
        menu_bigfoot_triple: "Bigfoot Triple",
        price_bigfoot_triple: "14.50€",
        ingredients_bigfoot_triple: "Ingredients: Triple beef burger, cheese, bacon, lettuce, tomato.",
        menu_extra_ternera: "Extra Beef",
        price_extra_ternera: "2.50€",
        ingredients_extra_ternera: "Additional beef burger.",
        menu_oklahoma_style: "Oklahoma Style",
        price_oklahoma_style: "0.50€",
        ingredients_oklahoma_style: "Additional ingredients in Oklahoma style.",
        menu_canada_burger: "Canada",
        price_canada_burger: "13.50€",
        ingredients_canada_burger: "Ingredients: Beef burger, cheddar cheese, lettuce, tomato.",
        menu_usa_burger: "USA",
        price_usa_burger: "13.50€",
        ingredients_usa_burger: "Ingredients: Beef burger, American cheese, caramelized onion.",
        menu_mexico_burger: "Mexico",
        price_mexico_burger: "13.50€",
        ingredients_mexico_burger: "Ingredients: Beef burger, guacamole, jalapeños, pepper jack cheese.",
        menu_pastor_tacos: "Pastor",
        price_pastor_tacos: "3.50€",
        ingredients_pastor_tacos: "Ingredients: Pastor meat, pineapple, onion, cilantro.",
        menu_carnitas_tacos: "Carnitas",
        price_carnitas_tacos: "3.50€",
        ingredients_carnitas_tacos: "Ingredients: Pork meat, onion, cilantro.",
        menu_birria_tacos: "Birria",
        price_birria_tacos: "4€",
        ingredients_birria_tacos: "Ingredients: Marinated beef, consommé, onion, cilantro.",
        menu_tostada_tacos: "Tostada",
        price_tostada_tacos: "4€",
        ingredients_tostada_tacos: "Ingredients: Crispy tostada, beans, meat, lettuce, cheese.",
        opening_hours_heading: "Opening Hours",
        opening_hours_monday_wednesday: "Monday to Wednesday: 13:00 - 00:00",
        opening_hours_thursday_sunday: "Thursday to Sunday: 13:00 - 01:30",
        opening_hours_sunday: "Sundays: 13:00 - 00:00",
        contact_heading: "Contact",
        contact_address: "Av. Antonio Toré Toré 24, 29740 Torre del Mar, Málaga",
        contact_email: "Bigfoot.TDM@gmail.com",
        contact_phone: "640 79 83 85"
    },
    fr: {
        title: "Bigfoot TDM - Restaurant à Torre del Mar",
        nav_about: "À Propos",
        nav_menu: "Menu",
        nav_hours: "Horaires",
        nav_contact: "Contact",
        hero_title: "Mischief in the Barrio",
        hero_subtitle: "<em>NOUVEAU MONSTRE EN VILLE</em>",
        hero_button: "Voir le Menu",
        about_us_heading: "À Propos",
        about_us_paragraph1: "Les légendes racontent que dans les profondeurs des forêts montagneuses du Nord-Ouest Pacifique vit un homme-singe de 8 pieds de haut qui parcourt les terres en secret, laissant de gigantesques empreintes et des questions encore plus grandes… Est-ce réel ? ..D'où vient-il ?",
        about_us_paragraph2: "Ce folklore a voyagé autour du monde. Pour certains, c'est <em>Sasquatch</em>, pour d'autres <em>The Yeti</em> ou <em>Sisyphe</em>, mais pour nous, c'est <strong>Bigfoot</strong>, et vous pouvez le trouver maintenant même à Torre del Mar, Espagne.",
        about_us_paragraph3: "Venez et vivez le mystère et les farces de Bigfoot Café. Nous sommes un couple de Canadiens qui voulons vous offrir des classiques américains avec une touche. Nous avons des bières fraîches, de la bonne musique et une nourriture abondante ♥️.",
        about_us_paragraph4: "<strong>Déchaînez la bête qui est en vous</strong>",
        menu_heading: "Notre Carte",
        menu_detroit_pizza: "DETROIT PIZZA",
        menu_pizzas: "PIZZAS",
        menu_fries: "FRITES",
        menu_focaccia_sandwich: "FOCACCIA SANDWICH",
        menu_squash_burgers: "SQUASH BURGERS (90 grammes de boeuf)",
        menu_classic_burgers: "CLASSIC BURGERS (130 grammes de boeuf)",
        menu_tacos: "TACOS",
        menu_sasquatch: "Sasquatch",
        price_sasquatch: "15€/19€",
        ingredients_sasquatch: "Ingrédients : Pepperoni, fromage mozzarella, sauce tomate.",
        menu_sausage_supreme: "Sausage Supreme",
        price_sausage_supreme: "16€/20€",
        ingredients_sausage_supreme: "Ingrédients : Saucisse, poivrons, oignons, fromage mozzarella.",
        menu_meat_feast: "Meat Feast",
        price_meat_feast: "17.50€/22€",
        ingredients_meat_feast: "Ingrédients : Bœuf, saucisse, bacon, fromage mozzarella.",
        menu_veggie: "Veggie",
        price_veggie: "15€/19€",
        ingredients_veggie: "Ingrédients : Champignons, poivrons, oignons, olives, fromage mozzarella.",
        menu_bigfoot_nonno: "Bigfoot Nonno",
        price_bigfoot_nonno: "12€",
        ingredients_bigfoot_nonno: "Ingrédients : Tomate, mozzarella, basilic frais.",
        menu_margherita: "Margherita",
        price_margherita: "10€",
        ingredients_margherita: "Ingrédients : Tomate, mozzarella, origan.",
        menu_poutine: "Poutine",
        price_poutine: "7€",
        ingredients_poutine: "Frites, fromage, sauce gravy.",
        menu_bravas: "Bravas",
        price_bravas: "6€",
        ingredients_bravas: "Frites avec sauce épicée.",
        menu_house_fries: "House Fries",
        price_house_fries: "5€",
        ingredients_house_fries: "Frites maison avec sel et épices.",
        menu_bigfoot_fries: "Bigfoot Fries",
        price_bigfoot_fries: "7.50€",
        ingredients_bigfoot_fries: "Frites avec fromage et sauce spéciale.",
        menu_bigfoot_classica: "Bigfoot Classica",
        price_bigfoot_classica: "Prix non spécifié",
        ingredients_bigfoot_classica: "Ingrédients : Jambon, fromage, laitue, tomate.",
        menu_veggie_sandwich: "Veggie",
        price_veggie_sandwich: "Prix non spécifié",
        ingredients_veggie_sandwich: "Ingrédients : Légumes frais, houmous, épinards.",
        menu_dulce_temptation: "Dulce Temptation",
        price_dulce_temptation: "Prix non spécifié",
        ingredients_dulce_temptation: "Ingrédients : Fromage à la crème, fruits, miel.",
        menu_bigfoot_burger: "Bigfoot",
        price_bigfoot_burger: "10.50€",
        ingredients_bigfoot_burger: "Ingrédients : Burger de bœuf, laitue, tomate, oignon.",
        menu_bigfoot_double: "Bigfoot Double",
        price_bigfoot_double: "12.50€",
        ingredients_bigfoot_double: "Ingrédients : Double burger de bœuf, fromage, laitue, tomate.",
        menu_bigfoot_triple: "Bigfoot Triple",
        price_bigfoot_triple: "14.50€",
        ingredients_bigfoot_triple: "Ingrédients : Triple burger de bœuf, fromage, bacon, laitue, tomate.",
        menu_extra_ternera: "Extra Bœuf",
        price_extra_ternera: "2.50€",
        ingredients_extra_ternera: "Burger de bœuf supplémentaire.",
        menu_oklahoma_style: "Oklahoma Style",
        price_oklahoma_style: "0.50€",
        ingredients_oklahoma_style: "Ingrédients supplémentaires à la mode Oklahoma.",
        menu_canada_burger: "Canada",
        price_canada_burger: "13.50€",
        ingredients_canada_burger: "Ingrédients : Burger de bœuf, fromage cheddar, laitue, tomate.",
        menu_usa_burger: "USA",
        price_usa_burger: "13.50€",
        ingredients_usa_burger: "Ingrédients : Burger de bœuf, fromage américain, oignon caramélisé.",
        menu_mexico_burger: "Mexico",
        price_mexico_burger: "13.50€",
        ingredients_mexico_burger: "Ingrédients : Burger de bœuf, guacamole, jalapeños, fromage pepper jack.",
        menu_pastor_tacos: "Pastor",
        price_pastor_tacos: "3.50€",
        ingredients_pastor_tacos: "Ingrédients : Viande pastor, ananas, oignon, coriandre.",
        menu_carnitas_tacos: "Carnitas",
        price_carnitas_tacos: "3.50€",
        ingredients_carnitas_tacos: "Ingrédients : Viande de porc, oignon, coriandre.",
        menu_birria_tacos: "Birria",
        price_birria_tacos: "4€",
        ingredients_birria_tacos: "Ingrédients : Viande de bœuf marinée, consommé, oignon, coriandre.",
        menu_tostada_tacos: "Tostada",
        price_tostada_tacos: "4€",
        ingredients_tostada_tacos: "Ingrédients : Tostada croustillante, haricots, viande, laitue, fromage.",
        opening_hours_heading: "Opening Hours",
        opening_hours_monday_wednesday: "Monday to Wednesday: 13:00 - 00:00",
        opening_hours_thursday_sunday: "Thursday to Sunday: 13:00 - 01:30",
        opening_hours_sunday: "Sundays: 13:00 - 00:00",
        contact_heading: "Contact",
        contact_address: "Av. Antonio Toré Toré 24, 29740 Torre del Mar, Málaga",
        contact_email: "Bigfoot.TDM@gmail.com",
        contact_phone: "640 79 83 85"
    },
    de: {
        title: "Bigfoot TDM - Restaurant in Torre del Mar",
        nav_about: "Über Uns",
        nav_menu: "Menü",
        nav_hours: "Öffnungszeiten",
        nav_contact: "Kontakt",
        hero_title: "Mischief in the Barrio",
        hero_subtitle: "<em>NEUER MONSTER IN DER STADT</em>",
        hero_button: "Menü Ansehen",
        about_us_heading: "Über Uns",
        about_us_paragraph1: "Legenden besagen, dass tief in den bergigen Wäldern des pazifischen Nordwestens ein acht Fuß großer Affenmensch lebt, der die Ländereien im Geheimen durchstreift und dabei riesige Fußspuren und noch größere Fragen hinterlässt… Ist es real? ..Woher kommt er?",
        about_us_paragraph2: "Diese Folklore hat die Welt bereist. Für einige ist es <em>Sasquatch</em>, für andere <em>The Yeti</em> oder <em>Sisyphe</em>, aber für uns ist es <strong>Bigfoot</strong>, und du kannst ihn jetzt in Torre del Mar, Spanien finden.",
        about_us_paragraph3: "Komm und erlebe das Geheimnis und den Unfug von Bigfoot Café. Wir sind ein Paar Kanadier, die dir amerikanische Klassiker mit einem Twist anbieten möchten. Wir haben kalte Biere, gute Musik und reichhaltiges Essen ♥️.",
        about_us_paragraph4: "<strong>Entfessle das Biest in dir</strong>",
        menu_heading: "Unsere Karte",
        menu_detroit_pizza: "DETROIT PIZZA",
        menu_pizzas: "PIZZAS",
        menu_fries: "FRIES",
        menu_focaccia_sandwich: "FOCACCIA SANDWICH",
        menu_squash_burgers: "SQUASH BURGERS (90 Gramm Rindfleisch)",
        menu_classic_burgers: "CLASSIC BURGERS (130 Gramm Rindfleisch)",
        menu_tacos: "TACOS",
        menu_sasquatch: "Sasquatch",
        price_sasquatch: "15€/19€",
        ingredients_sasquatch: "Zutaten: Pepperoni, Mozzarella-Käse, Tomatensauce.",
        menu_sausage_supreme: "Sausage Supreme",
        price_sausage_supreme: "16€/20€",
        ingredients_sausage_supreme: "Zutaten: Wurst, Paprika, Zwiebeln, Mozzarella-Käse.",
        menu_meat_feast: "Meat Feast",
        price_meat_feast: "17.50€/22€",
        ingredients_meat_feast: "Zutaten: Rindfleisch, Wurst, Speck, Mozzarella-Käse.",
        menu_veggie: "Veggie",
        price_veggie: "15€/19€",
        ingredients_veggie: "Zutaten: Champignons, Paprika, Zwiebeln, Oliven, Mozzarella-Käse.",
        menu_bigfoot_nonno: "Bigfoot Nonno",
        price_bigfoot_nonno: "12€",
        ingredients_bigfoot_nonno: "Zutaten: Tomate, Mozzarella, frisches Basilikum.",
        menu_margherita: "Margherita",
        price_margherita: "10€",
        ingredients_margherita: "Zutaten: Tomate, Mozzarella, Oregano.",
        menu_poutine: "Poutine",
        price_poutine: "7€",
        ingredients_poutine: "Pommes Frites, Käse, Gravy-Sauce.",
        menu_bravas: "Bravas",
        price_bravas: "6€",
        ingredients_bravas: "Pommes Frites mit scharfer Sauce.",
        menu_house_fries: "House Fries",
        price_house_fries: "5€",
        ingredients_house_fries: "Hausgemachte Pommes Frites mit Salz und Gewürzen.",
        menu_bigfoot_fries: "Bigfoot Fries",
        price_bigfoot_fries: "7.50€",
        ingredients_bigfoot_fries: "Pommes Frites mit Käse und spezieller Sauce.",
        menu_bigfoot_classica: "Bigfoot Classica",
        price_bigfoot_classica: "Preis nicht angegeben",
        ingredients_bigfoot_classica: "Zutaten: Schinken, Käse, Salat, Tomate.",
        menu_veggie_sandwich: "Veggie",
        price_veggie_sandwich: "Preis nicht angegeben",
        ingredients_veggie_sandwich: "Zutaten: Frisches Gemüse, Hummus, Spinat.",
        menu_dulce_temptation: "Dulce Temptation",
        price_dulce_temptation: "Preis nicht angegeben",
        ingredients_dulce_temptation: "Zutaten: Frischkäse, Früchte, Honig.",
        menu_bigfoot_burger: "Bigfoot",
        price_bigfoot_burger: "10.50€",
        ingredients_bigfoot_burger: "Zutaten: Rindfleisch-Burger, Salat, Tomate, Zwiebel.",
        menu_bigfoot_double: "Bigfoot Double",
        price_bigfoot_double: "12.50€",
        ingredients_bigfoot_double: "Zutaten: Doppelter Rindfleisch-Burger, Käse, Salat, Tomate.",
        menu_bigfoot_triple: "Bigfoot Triple",
        price_bigfoot_triple: "14.50€",
        ingredients_bigfoot_triple: "Zutaten: Dreifacher Rindfleisch-Burger, Käse, Speck, Salat, Tomate.",
        menu_extra_ternera: "Extra Rindfleisch",
        price_extra_ternera: "2.50€",
        ingredients_extra_ternera: "Zusätzlicher Rindfleisch-Burger.",
        menu_oklahoma_style: "Oklahoma Style",
        price_oklahoma_style: "0.50€",
        ingredients_oklahoma_style: "Zusätzliche Zutaten im Oklahoma-Stil.",
        menu_canada_burger: "Canada",
        price_canada_burger: "13.50€",
        ingredients_canada_burger: "Zutaten: Rindfleisch-Burger, Cheddar-Käse, Salat, Tomate.",
        menu_usa_burger: "USA",
        price_usa_burger: "13.50€",
        ingredients_usa_burger: "Zutaten: Rindfleisch-Burger, Amerikanischer Käse, karamellisierte Zwiebel.",
        menu_mexico_burger: "Mexico",
        price_mexico_burger: "13.50€",
        ingredients_mexico_burger: "Zutaten: Rindfleisch-Burger, Guacamole, Jalapeños, Pepper Jack Käse.",
        menu_pastor_tacos: "Pastor",
        price_pastor_tacos: "3.50€",
        ingredients_pastor_tacos: "Zutaten: Pastor-Fleisch, Ananas, Zwiebel, Koriander.",
        menu_carnitas_tacos: "Carnitas",
        price_carnitas_tacos: "3.50€",
        ingredients_carnitas_tacos: "Zutaten: Schweinefleisch, Zwiebel, Koriander.",
        menu_birria_tacos: "Birria",
        price_birria_tacos: "4€",
        ingredients_birria_tacos: "Zutaten: Mariniertes Rindfleisch, Konsomé, Zwiebel, Koriander.",
        menu_tostada_tacos: "Tostada",
        price_tostada_tacos: "4€",
        ingredients_tostada_tacos: "Zutaten: Knusprige Tostada, Bohnen, Fleisch, Salat, Käse.",
        opening_hours_heading: "Öffnungszeiten",
        opening_hours_monday_wednesday: "Montag bis Mittwoch: 13:00 - 00:00",
        opening_hours_thursday_sunday: "Donnerstag bis Sonntag: 13:00 - 01:30",
        opening_hours_sunday: "Sonntage: 13:00 - 00:00",
        contact_heading: "Kontakt",
        contact_address: "Av. Antonio Toré Toré 24, 29740 Torre del Mar, Málaga",
        contact_email: "Bigfoot.TDM@gmail.com",
        contact_phone: "640 79 83 85"
    }
};

// Función para actualizar el contenido según el idioma seleccionado
function updateLanguage(language) {
    // Actualizar el atributo lang del elemento html
    document.documentElement.lang = language;

    // Actualizar el título de la página
    document.title = translations[language].title;

    // Seleccionar todos los elementos con el atributo data-lang-key
    const elements = document.querySelectorAll('[data-lang-key]');

    elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[language][key]) {
            // Verificar si el contenido contiene HTML
            if (element.innerHTML.trim().startsWith('<')) {
                element.innerHTML = translations[language][key];
            } else {
                element.textContent = translations[language][key];
            }
        }
    });
}

// Event listener para el selector de idioma
languageSelect.addEventListener('change', (e) => {
    const selectedLanguage = e.target.value;
    updateLanguage(selectedLanguage);
    // Opcional: Guardar la preferencia de idioma en localStorage
    localStorage.setItem('preferredLanguage', selectedLanguage);
});

// Cargar el idioma preferido al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'es';
    languageSelect.value = savedLanguage;
    updateLanguage(savedLanguage);
});
