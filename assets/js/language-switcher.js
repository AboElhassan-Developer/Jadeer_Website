
// Language Switcher Script
document.addEventListener('DOMContentLoaded', function () {

    const translations = {
            "en": {
                // --- English Keys ---
                "htmlLang": "en",
                "bodyDir": "ltr",
                "pageTitle": "Jadeer Logistics | Integrated Logistics",
                "metaDescription": "Jadeer - Logistics Company",
                "metaKeywordsBase": "cargo, clean, contractor, corporate, freight, industry, localization, logistics, page builder, shipment, transport, transportation, truck, trucking",
                "home": "Home",
                "about": "About",
                "services": "Services",
                "whatWeDo": "What We Do",
                "specializedLogistics": "Specialized Logistics",
                "whyUs": "Why Us",
                "hiring": "Hiring",
                "arabic": "العربية", // Text for the language switch button when EN is active
                "getAQuote": "Get A Quote",
                "callUs": "800 304 0025",
                "getInTouch": "Get In Touch", // Footer button

                // Slider
                "jadeerLogistics": "Jadeer Logistics",
                "integratedLogistics": "Integrated Logistics",
                "reliableHauling": "Reliable Hauling, On Time, Every Time",
                "efficiencyBeyondBorders": "Efficiency Beyond Borders",
                "storageSolutions": "Storage Solutions Tailored to Your Needs",

                // About
                "aboutSectionSubtitle": "ABOUT",
                "aboutSectionTitle": "About Jadeer Logistics",
                "aboutEst": "Est.",
                "aboutYearsExperience": "We have more than 40 years of experience",
                "aboutSectionP1": "JADEER LOGISTICS, previously known as Al Muhaidib Land Transport , provides its clientele with a full range of logistical, Marine, Terminal Solutions, Tank Management ( Maintenance and Cleaning), Freight Management at a global level covering 100 plus countries to include Sea freight , Air freight , Pan GCC transport solutions, Project Cargo management, Value added services (VAS) such as Customs brokerage, Warehousing solutions, Kitting, packing, stripping of containers and various associated services.",
                "aboutSectionP2": "JADEER LOGISTICS, with its 400 strong work force, is now a prominent logistics player offering end-to-end logistics solutions within the Kingdom of SAUDI ARABIA and other GCC countries such as BAHRAIN, KUWAIT, and UAE through our partners.",
                "vision": "Vision",
                "visionText": "To be our customer’s preferred choice of partner by offering best in class Logistics services safely, efficiently and offer cost-effective, environmentally friendly, and problem-solving solutions that assist our customers in achieving their objectives.",
                "mission": "Mission",
                "missionText": "To excel and be a MARKET LEADER in our core areas of expertise. We empower businesses in SAUDI ARABIA and the GCC region through customer-centric approach and our People, Quality systems and Operations are at the heart of this mission.",

                // Counters
                "deliveries": "Deliveries",
                "trailersSubs": "Trailers +",
                "subs": "SUBs",
                "satisfiedClients": "Satisfied Clients",
                "branches": "Branches",

                // Services
                "ourServices": "Our Services",
                "landTransportation": "Land Transportation",
                "landTransportationDetails": "Equipped with +500 trucks with access to 400+ different trailers. Covering Saudi Arabia and GCC regions. Transit insurance coverage for all goods. 25,000m² yard and workshop space with 40+ technicians. 75+ gensets for refrigerated transportation.",
                "terminalServices": "Terminal Services",
                "terminalServicesDetails": "300,000m² yard in key seaport zones. Shipping line depot services. Dry and reefer container storage. Cargo stuffing & destuffing services. Container maintenance & repair.",
                "isoRoadTanks": "ISO/Road Tanks Management",
                "isoRoadTanksDetails": "Automated tank cleaning facility. Chemical and food-grade cleaning capabilities. Nitrogen blanketing services. Tank maintenance & inspection. Residual disposal services.",
                "freightForwarding": "Freight Forwarding",
                "freightForwardingDetails": "Air, sea, and inland freight solutions. Customs clearance services. Project cargo management. Global network coverage. Breakbulk and special handling.",
                "warehousingDistribution": "Warehousing & Distribution",
                "warehousingDistributionDetails": "Inventory management systems. Order fulfillment services. Temperature-controlled storage. Cross-docking facilities. Last-mile delivery solutions.",

                // Specialized Logistics / Projects
                "specializedLogisticsSectionTitle": "Specialized Logistics",
                "specializedLogisticsSectionDescription": "Let's Checkout our All Specialized Logistics",
                "eventsExhibition": "Events / Exhibition",
                "eventsExhibitionDetails": "Sport event management. Exhibitions & Events. High value cargo. Customs clearance, handling. Custom bonded area. Deliveries & escorting. Palletizing, de palletizing.",
                "projects": "Projects",
                "projectsDetails": "Break bulk and Air charters. EPC projects. Consultancy. Heavy lifts, specialized transport , Road surveys.",

                // Why Choose Us
                "whyChooseUsSectionSubtitle": "Why Choose Us",
                "whyChooseUsSectionTitle": "We Aim to Contribute Well to Your Company",
                "compliance": "Compliance",
                "complianceDescription": "Prioritizing compliance, our logistics services company excels in seamless operations.",
                "safetyAndQuality": "Safety and Quality",
                "safetyAndQualityDescription": "Committed to safety and quality, our logistics services company ensures top-notch standards in all operations.",
                "integrityAndRespect": "Integrity and Respect",
                "integrityAndRespectDescription": "With unwavering integrity and profound respect, our logistics services company fosters a culture of trust and professionalism.",
                "transparency": "Transparency",
                "transparencyDescription": "Embracing transparency, our logistics services company upholds an open and honest approach in all business practices.",

                // Certificates
                "certificationSectionSubtitle": "Certification",
                "jadeerCertificates": "Jadeer Certificates",
                "certificationSectionDescription": "Backed by relevant certificates and accreditations, our logistics services company ensures reliability and compliance in every aspect of our operations.",

                // Clients
                "ourClientsPartners": "Our Clients & Partners",

                // Contact
                "projectEstimating": "Project Estimating",
                "requestAQuickQuote": "Request A Quick Quote", // Corrected typo
                "requestAQuickQuoteDescription": "Request a quick quote today and experience the efficiency of our logistics services.",
                "contactUsEmail": "You can also get in touch with us through email:",
                "yourNameHere": "Your Name Here",
                "subject": "Subject",
                "yourEmail": "Your Email",
                "phone": "Phone",
                "yourMessage": "Your Message", // Corrected typo
                "submitNow": "Submit Now",

                // Footer
                "ourServiceFooter": "Our Service",
                "mainServicesFooter": "Main Services",
                "whatWeDoFooter": "What We do",
                "specializedLogisticsFooter": "Specialized Logistics",
                "andMoreFooter": "And More",
                "quickLinksFooter": "Quick Links",
                "homeFooter": "Home",
                "aboutUsFooter": "About us",
                "whyUsFooter": "Why Us",
                "certificatesFooter": "Certificates",
                "galleryFooter": "Gallery",
                "copyright": "© 2025 Jadeer Logistics. All Rights Reserved."
            },
            "ar": {
                // --- Arabic Keys ---
                "htmlLang": "ar",
                "bodyDir": "rtl",
                "pageTitle": "جدير للخدمات اللوجستية | خدمات لوجستية متكاملة",
                "metaDescription": "جدير - شركة خدمات لوجستية",
                 "metaKeywordsBase": "شحن, نظيف, مقاول, شركات, شحن بحري, صناعة, توطين, لوجستيات, بناء صفحات, شحنة, نقل, مواصلات, شاحنة, نقل بالشاحنات",
                "home": "الرئيسية",
                "about": "من نحن",
                "services": "خدماتنا",
                "whatWeDo": "ماذا نقدم",
                "specializedLogistics": "خدمات لوجستية متخصصة",
                "whyUs": "لماذا نحن",
                "hiring": "التوظيف",
                "arabic": "English", // Text for the language switch button when AR is active
                "getAQuote": "طلب عرض سعر",
                "callUs": "800 304 0025", // Keep number as is
                "getInTouch": "تواصل معنا", // Footer button

                // Slider
                "jadeerLogistics": "جدير للخدمات اللوجستية",
                "integratedLogistics": "خدمات لوجستية متكاملة",
                "reliableHauling": "نقل موثوق، في الوقت المحدد، دائمًا",
                "efficiencyBeyondBorders": "كفاءة تتجاوز الحدود",
                "storageSolutions": "حلول تخزين مصممة خصيصًا لتلبية احتياجاتك",

                // About
                "aboutSectionSubtitle": "من نحن",
                "aboutSectionTitle": "عن جدير للخدمات اللوجستية",
                "aboutEst": "تأسست",
                "aboutYearsExperience": "لدينا أكثر من 40 عامًا من الخبرة",
                "aboutSectionP1": "جدير لوجستيك، المعروفة سابقًا باسم النقل البري المهيدب، تقدم لعملائها مجموعة كاملة من الخدمات اللوجستية والحلول البحرية والمحطات، وإدارة الخزانات (الصيانة والتنظيف)، وإدارة الشحن على مستوى عالمي يغطي أكثر من 100 دولة بما في ذلك الشحن البحري والجوي وحلول النقل عبر دول مجلس التعاون الخليجي، وإدارة مشاريع الشحن، والخدمات ذات القيمة المضافة مثل الوساطة الجمركية، وحلول التخزين، والتعبئة والتفريغ للحاويات والخدمات المرتبطة المختلفة.",
                "aboutSectionP2": "تمتلك جدير لوجستيك قوة عاملة تبلغ 400 موظف، وهي الآن لاعب لوجستي بارز يقدم حلولاً لوجستية شاملة داخل المملكة العربية السعودية ودول مجلس التعاون الخليجي الأخرى مثل البحرين والكويت والإمارات العربية المتحدة من خلال شركائنا.",
                "vision": "رؤيتنا",
                "visionText": "أن نكون الخيار المفضل لعملائنا كشريك من خلال تقديم أفضل خدمات لوجستية آمنة وفعالة وتقديم حلول فعالة من حيث التكلفة وصديقة للبيئة وحل المشكلات التي تساعد عملائنا على تحقيق أهدافهم.",
                "mission": "مهمتنا",
                "missionText": "أن نتميز ونكون رواد السوق في مجالات خبرتنا الأساسية. نحن نمكن الشركات في المملكة العربية السعودية ومنطقة دول مجلس التعاون الخليجي من خلال نهج يركز على العملاء، كما أن موظفينا وأنظمة الجودة والعمليات هي جوهر هذه المهمة.",

                // Counters
                "deliveries": "عملية تسليم",
                "trailersSubs": "قاطرة +",
                "subs": "مقطورة",
                "satisfiedClients": "عميل راضٍ",
                "branches": "فروع",

                // Services
                "ourServices": "خدماتنا",
                "landTransportation": "النقل البري",
                "landTransportationDetails": "مجهزة بأكثر من 500 شاحنة مع إمكانية الوصول إلى أكثر من 400 مقطورة مختلفة. تغطية شاملة للمملكة العربية السعودية ودول مجلس التعاون الخليجي. تأمين شامل للبضائع أثناء النقل. ساحة وورشة عمل بمساحة 25,000 متر مربع مع أكثر من 40 فنيًا. أكثر من 75 مولدًا كهربائيًا للنقل المبرد.",
                "terminalServices": "خدمات المحطات",
                "terminalServicesDetails": "ساحة بمساحة 300,000 متر مربع في مناطق الموانئ الرئيسية. خدمات مستودعات لخطوط الشحن. تخزين الحاويات الجافة والمبردة. خدمات تعبئة وتفريغ البضائع. صيانة وإصلاح الحاويات.",
                "isoRoadTanks": "إدارة خزانات ISO / الطرق",
                "isoRoadTanksDetails": "منشأة تنظيف خزانات آلية. قدرة على تنظيف منتجات كيميائية وصناعية وغذائية. خدمات تغطية بالنيتروجين. صيانة وفحص الخزانات. خدمات التخلص من المخلفات.",
                "freightForwarding": "وكالة الشحن",
                "freightForwardingDetails": "حلول شحن جوي وبحري وبري. خدمات التخليص الجمركي. إدارة شحن المشاريع. شبكة عالمية واسعة. مناولة البضائع السائبة والخاصة.",
                "warehousingDistribution": "التخزين والتوزيع",
                "warehousingDistributionDetails": "أنظمة إدارة المخزون. خدمات تنفيذ الطلبات. تخزين بدرجات حرارة متحكم بها. مرافق إعادة الشحن (Cross-docking). حلول توصيل للمرحلة الأخيرة.",

                // Specialized Logistics / Projects
                "specializedLogisticsSectionTitle": "خدمات لوجستية متخصصة",
                "specializedLogisticsSectionDescription": "استعرض جميع خدماتنا اللوجستية المتخصصة",
                "eventsExhibition": "الفعاليات / المعارض",
                "eventsExhibitionDetails": "إدارة الفعاليات الرياضية. المعارض والمؤتمرات. مناولة البضائع عالية القيمة. التخليص الجمركي والمناولة. منطقة جمركية خاصة. التوصيل والمرافقة. التعبئة والتفريغ على المنصات.",
                "projects": "المشاريع",
                "projectsDetails": "شحن البضائع السائبة والطائرات المستأجرة. مشاريع الهندسة والتوريد والبناء (EPC). خدمات استشارية. الرفع الثقيل، النقل المتخصص، مسح الطرق.",

                // Why Choose Us
                "whyChooseUsSectionSubtitle": "لماذا تختارنا",
                "whyChooseUsSectionTitle": "نهدف للمساهمة بفعالية في نجاح شركتك",
                "compliance": "الامتثال",
                "complianceDescription": "نعطي الأولوية للامتثال، وتتفوق شركتنا في تقديم عمليات لوجستية سلسة ومتوافقة.",
                "safetyAndQuality": "السلامة والجودة",
                "safetyAndQualityDescription": "ملتزمون بالسلامة والجودة، ونضمن تطبيق أعلى المعايير في جميع عملياتنا اللوجستية.",
                "integrityAndRespect": "النزاهة والاحترام",
                "integrityAndRespectDescription": "بنزاهة راسخة واحترام عميق، تعزز شركتنا ثقافة الثقة والاحترافية في التعامل.",
                "transparency": "الشفافية",
                "transparencyDescription": "نتبنى الشفافية، ونحافظ على نهج مفتوح وصادق في جميع ممارساتنا التجارية والتشغيلية.",

                // Certificates
                "certificationSectionSubtitle": "الشهادات والاعتمادات",
                "jadeerCertificates": "شهادات جدير",
                "certificationSectionDescription": "مدعومة بالشهادات والاعتمادات ذات الصلة، تضمن شركتنا الموثوقية والامتثال في كل جانب من عملياتنا.",

                // Clients
                "ourClientsPartners": "عملاؤنا وشركاؤنا",

                // Contact
                "projectEstimating": "تقدير تكلفة المشاريع",
                "requestAQuickQuote": "اطلب عرض سعر سريع",
                "requestAQuickQuoteDescription": "اطلب عرض سعر سريع اليوم واختبر كفاءة خدماتنا اللوجستية.",
                "contactUsEmail": "يمكنك أيضًا التواصل معنا عبر البريد الإلكتروني:",
                "yourNameHere": "الاسم الكريم",
                "subject": "الموضوع",
                "yourEmail": "البريد الإلكتروني",
                "phone": "رقم الهاتف",
                "yourMessage": "الرسالة",
                "submitNow": "إرسال الآن",

                // Footer
                "ourServiceFooter": "خدماتنا",
                "mainServicesFooter": "الخدمات الرئيسية",
                "whatWeDoFooter": "ماذا نقدم",
                "specializedLogisticsFooter": "الخدمات المتخصصة",
                "andMoreFooter": "والمزيد",
                "quickLinksFooter": "روابط سريعة",
                "homeFooter": "الرئيسية",
                "aboutUsFooter": "من نحن",
                "whyUsFooter": "لماذا نحن",
                "certificatesFooter": "الشهادات",
                "galleryFooter": "معرض الصور",
                "copyright": "© 2025 جدير لوجستيك. جميع الحقوق محفوظة."
            }
        };

    let currentLanguage = 'en'; // Default language
    const languageSwitchButton = document.getElementById('language-switch');
    const bodyElement = document.body;

    // Helper function to generate list items from period-separated string
    function generateListHtml(detailsKey, lang) {
        const detailsString = translations[lang][detailsKey];
        if (!detailsString) return '';
        return detailsString.split('.') // Split by period
               .map(item => item.trim())   // Trim whitespace
               .filter(item => item)      // Remove empty items
               .map(item => `<li>${item}.</li>`) // Add period back and wrap in <li>
               .join('');
    }

    // Function to update text content based on ID and translation key
    function updateText(id, key, lang) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = translations[lang][key];
        } else {
            console.warn(`Element with ID "${id}" not found for translation key "${key}".`);
        }
    }

     // Function to update inner HTML based on ID and translation key
     function updateHTML(id, key, lang) {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = translations[lang][key];
        } else {
            console.warn(`Element with ID "${id}" not found for translation key "${key}".`);
        }
    }

    // Function to update placeholder text
    function updatePlaceholder(id, key, lang) {
        const element = document.getElementById(id);
        if (element) {
            element.placeholder = translations[lang][key];
        } else {
             console.warn(`Element with ID "${id}" not found for placeholder key "${key}".`);
        }
    }

     // Function to update meta tags
     function updateMeta(selector, attribute, key, lang, baseContent = '') {
        const element = document.querySelector(selector);
        if (element) {
            element.setAttribute(attribute, baseContent + translations[lang][key]);
        } else {
            console.warn(`Meta element with selector "${selector}" not found.`);
        }
     }

    // Main translation function
    function translatePage(language) {
        currentLanguage = language;
        const T = translations[language]; // Shortcut for current language translations

        // --- Update HTML attributes ---
        document.documentElement.lang = T.htmlLang;
        bodyElement.classList.toggle('rtl', language === 'ar');
        bodyElement.dir = T.bodyDir; // Explicitly set dir attribute

        // --- Update Meta Info ---
        updateText('page-title', 'pageTitle', language);
        updateMeta('meta[name="description"]', 'content', 'metaDescription', language);
        updateMeta('meta[name="keywords"]', 'content', 'metaKeywordsBase', language, T.metaKeywordsBase + ', ');


        // --- Update Navigation & Header Buttons ---
        updateText('language-switch', 'arabic', language); // Text changes based on CURRENT language
        updateText('menu-home', 'home', language);
        updateText('menu-about', 'about', language);
        updateText('menu-services', 'services', language);
        updateText('menu-what-we-do', 'whatWeDo', language);
        updateText('menu-specialized-logistics', 'specializedLogistics', language);
        updateText('menu-why-us', 'whyUs', language);
        updateText('menu-hiring', 'hiring', language);
        // Buttons with Icons
        updateHTML('menu-get-a-quote', 'getAQuote', language);
        document.getElementById('menu-get-a-quote').innerHTML = `<i class="flaticon-compliant"></i>&nbsp;&nbsp;${T.getAQuote}`;
        document.getElementById('menu-call-us').innerHTML = `<i class="flaticon-call"></i>&nbsp;&nbsp;${T.callUs}`;


        // --- Update Mobile Navigation ---
        updateText('mobile-menu-home', 'home', language);
        updateText('mobile-menu-about', 'about', language);
        updateText('mobile-menu-services', 'services', language);
        updateText('mobile-menu-what-we-do', 'whatWeDo', language);
        updateText('mobile-menu-specialized-logistics', 'specializedLogistics', language);
        updateText('mobile-menu-why-us', 'whyUs', language);
        updateText('mobile-menu-hiring', 'hiring', language);
        document.getElementById('mobile-menu-get-a-quote').innerHTML = `<i class="flaticon-compliant"></i>&nbsp;&nbsp;${T.getAQuote}`;

        // --- Update Slider Text ---
         // Use updateHTML for elements containing <br> or <small>
        updateHTML('slider-layer-1', 'jadeerLogistics', language); // Initial update
        document.getElementById('slider-layer-1').innerHTML = `${T.jadeerLogistics}<br /><small style='font-size: 70%'>${T.integratedLogistics}</small>`; // Add structure
        updateText('slider-layer-2', 'reliableHauling', language);
        // Assuming IDs exist for other slider text layers based on original HTML structure
        const slide72Layer1 = document.getElementById('slider-27-slide-72-layer-1');
        if (slide72Layer1) slide72Layer1.innerHTML = `${T.jadeerLogistics}<br /><small style='font-size: 70%'>${T.integratedLogistics}</small>`;
        const slide72Layer2 = document.getElementById('slider-27-slide-72-layer-2');
        if (slide72Layer2) slide72Layer2.textContent = T.efficiencyBeyondBorders;
        const slide73Layer1 = document.getElementById('slider-27-slide-73-layer-1');
        if (slide73Layer1) slide73Layer1.innerHTML = `${T.jadeerLogistics}<br /><small style='font-size: 70%'>${T.integratedLogistics}</small>`;
        const slide73Layer2 = document.getElementById('slider-27-slide-73-layer-2');
        if (slide73Layer2) slide73Layer2.textContent = T.storageSolutions;


        // --- Update About Section ---
        updateText('about-section-subtitle', 'aboutSectionSubtitle', language);
        updateText('about-section-title', 'aboutSectionTitle', language);
        // 'about-est' contains a counter, only update the text part
        const aboutEstEl = document.getElementById('about-est');
        if(aboutEstEl) aboutEstEl.innerHTML = `<span id="about-est-year" class="counter">1983</span><b> ${T.aboutEst}</b>`; // Add space before Est/تأسست
        updateText('about-years-experience', 'aboutYearsExperience', language);
        updateText('about-section-p1', 'aboutSectionP1', language);
        updateText('about-section-p2', 'aboutSectionP2', language);
        updateText('about-vision-title', 'vision', language);
        updateText('about-vision-text', 'visionText', language);
        updateText('about-mission-title', 'mission', language);
        updateText('about-mission-text', 'missionText', language);

        // --- Update Counters ---
        // Counter numbers remain, only update text labels
        updateText('counter-deliveries-text', 'deliveries', language);
        updateText('counter-trailers-text', 'trailersSubs', language);
        updateText('counter-subs-text', 'subs', language);
        updateText('counter-clients-text', 'satisfiedClients', language);
        updateText('counter-branches-text', 'branches', language);


        // --- Update Services Section ---
        updateText('services-section-title', 'ourServices', language);
        updateText('service-land-transportation-title', 'landTransportation', language);
        document.getElementById('service-land-transportation-details').innerHTML = generateListHtml('landTransportationDetails', language);
        updateText('service-terminal-services-title', 'terminalServices', language);
        document.getElementById('service-terminal-services-details').innerHTML = generateListHtml('terminalServicesDetails', language);
        updateText('service-iso-tanks-title', 'isoRoadTanks', language);
        document.getElementById('service-iso-tanks-details').innerHTML = generateListHtml('isoRoadTanksDetails', language);
        updateText('service-freight-forwarding-title', 'freightForwarding', language);
        document.getElementById('service-freight-forwarding-details').innerHTML = generateListHtml('freightForwardingDetails', language);
        updateText('service-warehousing-title', 'warehousingDistribution', language);
        document.getElementById('service-warehousing-details').innerHTML = generateListHtml('warehousingDistributionDetails', language);

        // --- Update Specialized Logistics / Projects Section ---
        updateText('project-section-subtitle', 'specializedLogisticsSectionTitle', language);
        updateText('project-section-title', 'specializedLogisticsSectionDescription', language);
        updateText('project-events-title', 'eventsExhibition', language);
        document.getElementById('project-events-details').innerHTML = generateListHtml('eventsExhibitionDetails', language);
        updateText('project-projects-title', 'projects', language);
        document.getElementById('project-projects-details').innerHTML = generateListHtml('projectsDetails', language);

        // --- Update Why Choose Us Section ---
        updateText('why-choose-section-subtitle', 'whyChooseUsSectionSubtitle', language);
        updateText('why-choose-section-title', 'whyChooseUsSectionTitle', language);
        updateText('why-choose-compliance-title', 'compliance', language);
        updateText('why-choose-compliance-description', 'complianceDescription', language);
        updateText('why-choose-safety-title', 'safetyAndQuality', language);
        updateText('why-choose-safety-description', 'safetyAndQualityDescription', language);
        updateText('why-choose-integrity-title', 'integrityAndRespect', language);
        updateText('why-choose-integrity-description', 'integrityAndRespectDescription', language);
        updateText('why-choose-transparency-title', 'transparency', language);
        updateText('why-choose-transparency-description', 'transparencyDescription', language);

        // --- Update Certificates Section ---
        updateText('team-section-subtitle', 'certificationSectionSubtitle', language);
        updateText('team-section-title', 'jadeerCertificates', language);
        updateText('team-section-description', 'certificationSectionDescription', language);

        // --- Update Clients Section ---
        updateText('testimonial-section-subtitle', 'ourClientsPartners', language);

        // --- Update Contact Section ---
        updateText('contact-section-subtitle', 'projectEstimating', language);
        updateText('contact-section-title', 'requestAQuickQuote', language);
        updateText('contact-section-description', 'requestAQuickQuoteDescription', language);
         // Update email part carefully
        const emailDescEl = document.getElementById('contact-email-description');
        if (emailDescEl) {
            const emailLink = emailDescEl.querySelector('a');
            emailDescEl.textContent = T.contactUsEmail + ' '; // Add space
            if (emailLink) {
                 emailDescEl.appendChild(emailLink); // Re-append the link
            }
        }
        updatePlaceholder('contact-name-placeholder', 'yourNameHere', language);
        updatePlaceholder('contact-subject-placeholder', 'subject', language);
        updatePlaceholder('contact-email-placeholder', 'yourEmail', language);
        updatePlaceholder('contact-phone-placeholder', 'phone', language);
        updatePlaceholder('contact-message-placeholder', 'yourMessage', language);
        updateText('contact-submit-button', 'submitNow', language);


        // --- Update Footer ---
        updateText('footer-service-title', 'ourServiceFooter', language);
        updateText('footer-main-services', 'mainServicesFooter', language);
        updateText('footer-what-we-do', 'whatWeDoFooter', language);
        updateText('footer-specialized-logistics', 'specializedLogisticsFooter', language);
        updateText('footer-and-more', 'andMoreFooter', language);

        updateText('footer-quick-links-title', 'quickLinksFooter', language);
        updateText('footer-home', 'homeFooter', language);
        updateText('footer-about-us', 'aboutUsFooter', language);
        updateText('footer-why-us', 'whyUsFooter', language);
        updateText('footer-certificates', 'certificatesFooter', language);

        updateText('footer-gallery-title', 'galleryFooter', language);
        updateText('footer-copyright', 'copyright', language);
        document.querySelectorAll('.footer-cta-btn').forEach(btn => {
            btn.textContent = T.getInTouch;
        });

        // --- Re-initialize Slick Slider for Testimonials ---
        // Check if jQuery and Slick are loaded before trying to use them
        if (typeof jQuery !== 'undefined' && typeof jQuery.fn.slick !== 'undefined') {
            const testimonialSlider = $('.ft-testimonial-slider-area');
            if (testimonialSlider.hasClass('slick-initialized')) {
                testimonialSlider.slick('unslick'); // Remove existing Slick instance
            }
             // Re-initialize with potentially new RTL setting
            testimonialSlider.slick({
                 dots: false,
                 infinite: true,
                 speed: 500,
                 slidesToShow: 5, // Adjust as per your design
                 slidesToScroll: 1,
                 autoplay: true,
                 autoplaySpeed: 2000,
                 arrows: false,
                 rtl: (language === 'ar'), // Set RTL based on language
                 responsive: [
                    {
                        breakpoint: 1024,
                        settings: { slidesToShow: 4 }
                    },
                    {
                         breakpoint: 768,
                         settings: { slidesToShow: 3 }
                     },
                     {
                         breakpoint: 480,
                         settings: { slidesToShow: 2 }
                     }
                 ]
            });
             // Force repaint/reposition sometimes needed after reinit
             setTimeout(() => { testimonialSlider.slick('setPosition'); }, 100);
        } else {
            console.warn('jQuery or Slick Slider not loaded, cannot reinitialize testimonial slider.');
        }

         // --- Re-initialize Revolution Slider (if needed) ---
         // Revolution Slider might handle RTL internally or require specific API calls.
         // This example assumes it might need a refresh after layout changes.
         if (typeof revapi1 !== 'undefined' && typeof revapi1.revredraw === 'function') {
             // revapi1.revredraw(); // Call redraw or similar function if available
             console.log("Attempting Revolution Slider redraw (check API)");
         }

         // --- Re-initialize CounterUp ---
        if (typeof jQuery !== 'undefined' && typeof jQuery.fn.counterUp !== 'undefined') {
             $('.counter').counterUp({
                 delay: 10,
                 time: 1000
            });
        }

        // --- Re-initialize WOW.js ---
        if (typeof WOW !== 'undefined') {
            new WOW().init();
        }
    }

    // --- Event Listener for Language Switch ---
    languageSwitchButton.addEventListener('click', function (e) {
        e.preventDefault();
        const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
        translatePage(newLanguage);
    });

    // --- Initial Translation on Load ---
    translatePage(currentLanguage);

}); // End DOMContentLoaded
