const fs = require('fs');
const path = require('path');

const translations = {
    en: {
        dir: 'ltr',
        font: "'Plus Jakarta Sans', sans-serif",
        headingFont: "'Plus Jakarta Sans', sans-serif",
        nav: {
            brand: "Unique Flowers",
            natural: "Fresh Flowers",
            artificial: "Artificial Flowers",
            gifts: "Gifts",
            vases: "Vases",
            balloons: "Balloons"
        },
        hero: {
            title: "Fresh Flowers for Every Occasion",
            subtitle: "Beautiful bouquets crafted with love",
            cta_shop: "Shop Flowers",
            cta_whatsapp: "Order on WhatsApp"
        },
        featured: {
            label: "Seasonal Picks",
            title: "Our Featured Collections",
            products: {
                p1_title: "Perfect Blush",
                p1_desc: "A dreamy arrangement of peonies and ranunculus for tender moments.",
                p2_title: "Garden Symphony",
                p2_desc: "Hand-picked wildflowers to bring nature's melody to your home.",
                p3_title: "Midnight Orchid",
                p3_desc: "Deep purple, sophisticated orchids with sculpted emerald leaves.",
                p4_title: "Sunset Glow",
                p4_desc: "Warm tones of amber and burnt orange capturing the magic of dusk.",
                p5_title: "Pure Serenity",
                p5_desc: "A monochrome masterpiece of white lilies, roses, and baby's breath.",
                p6_title: "Velvet Protea",
                p6_desc: "Proteas and exotic succulents for a bold, architectural statement."
            },
            cta_order: "Order via WhatsApp"
        },
        howItWorks: {
            title: "A Curated Journey",
            subtitle: "Simplifying luxury floral gifting from our ateliers to their doorstep.",
            step1_title: "Pick Bouquet",
            step1_desc: "Browse our seasonally curated collection of the finest botanical arrangements.",
            step2_title: "WhatsApp Us",
            step2_desc: "Direct personal assistance to customize your selection and finalize details.",
            step3_title: "Swift Delivery",
            step3_desc: "Rapid, boutique-standard delivery ensuring your flowers arrive in pristine state."
        },
        testimonials: {
            title: "Shared Moments of Joy",
            subtitle: "Our arrangements have been part of countless celebrations, proposals, and heartfelt gestures.",
            t1_text: "\"The most exquisite arrangement I've ever received. The attention to detail is truly unparalleled.\"",
            t2_text: "\"Ordering through WhatsApp was so effortless. They helped me pick the perfect bouquet for my anniversary.\"",
            t3_text: "\"The Garden Symphony was exactly as pictured. Fresh, aromatic, and simply divine.\""
        },
        footer: {
            brand_desc: "Curating nature's finest moments for your everyday space.",
            discover: "Discover",
            contact: "Contact",
            policy: "Policy",
            journal: "The Journal",
            journal_desc: "Join our list for seasonal floral guides and exclusive arrivals.",
            email_placeholder: "Your Email",
            subscribe: "Subscribe",
            contact_us: "Contact Us",
            shipping: "Shipping Policy",
            sustainability: "Sustainability",
            links: {
                contact_us: "Contact Us",
                shipping: "Shipping Policy",
                sustainability: "Sustainability",
                instagram: "Instagram",
                pinterest: "Pinterest"
            },
            copyright: "© 2024 Unique Flowers. The Digital Florist’s Atelier."
        },
        catalog: {
            title: "The Curated Catalog",
            subtitle: "Discover our seasonal arrangements, artisanal vases, and curated gifts designed for the refined home.",
            search_placeholder: "Search our botanical library...",
            collections: "Collections",
            all_pieces: "All Pieces",
            natural: "Natural Flowers",
            artificial: "Artificial Flowers",
            gifts: "Bespoke Gifts",
            vases: "Handmade Vases",
            balloons: "Luxury Balloons",
            sort_by: "Sort By",
            refine: "Refine",
            ready_delivery: "Ready for Delivery",
            gift_wrap: "Gift Wrap Available",
            new: "New",
            limited: "Limited"
        },
        product: {
            exclusive: "Exclusive Seasonal Collection",
            ethereal_title: "Ethereal Blush Bouquet",
            ethereal_tagline: "A curated symphony of soft textures and delicate hues, designed for moments of pure serenity.",
            ethereal_desc: "Our master florists have selected the finest O’Hara Garden Roses, clouds of Snowy Hydrangeas, and statuesque White Oriental Lilies to create this ethereal masterpiece.",
            select_size: "Select Size",
            petite: "Petite",
            signature: "Signature",
            grand: "Grand",
            include_card: "Include Hand-written Card (+$5)",
            eco_wrap: "Eco-friendly Premium Wrapping",
            pay_online: "Complete Payment Online",
            same_day: "Same Day Delivery",
            sustainable: "Sustainably Sourced",
            art_title: "The Art of the Ethereal Blush",
            art_desc: "Every arrangement is a unique piece of living art. We don't just place flowers; we compose stories. The Ethereal Blush is inspired by the first light of dawn hitting a dew-covered garden in early June.",
            step1: "Carefully de-thorned and prepped garden roses for maximum vase life.",
            step2: "Scented Oriental lilies that bloom progressively over 7-10 days.",
            step3: "Wrapped in our signature pH-neutral silk paper and linen ribbon.",
            related_label: "You may also admire",
            related_title: "Complementary Arrangements",
            view_collection: "View Collection",
            r1_title: "Verdant Whimsy",
            r1_tag: "Greens & Whites",
            r2_title: "Velvet Midnight",
            r2_tag: "Deep Crimson",
            r3_title: "Golden Hour",
            r3_tag: "Yellows & Golds",
            r4_title: "Pure Serenity",
            r4_tag: "Minimalist White",
            experience: "Experience",
            services: "Services",
            journal_sub: "Journal Subscription",
            journal_ritual: "Receive seasonal floral trends and care rituals in your inbox.",
            email_addr: "Email address",
            join: "Join"
        },
        catalog_page: {
            brand_tagline: "The Digital Florist",
            home: "Home",
            order_whatsapp: "Order Via WhatsApp",
            categories: "Categories",
            favorites: "My Favorites",
            support: "Support",
            start_bouquet: "Start a Bouquet",
            spring_title: "Spring Curations",
            spring_desc: "Our floral designers have hand-selected these arrangements to evoke the delicate awakening of the season. Each bloom is sourced ethically from private gardens.",
            men: "Men",
            women: "Women",
            newborns: "Newborns",
            p1_title: "The Heirloom Peony",
            p1_type: "Fresh Arrangement",
            p2_title: "Alabaster Sculpt",
            p2_type: "Handcrafted Vase",
            p3_title: "Midnight Orchid",
            p3_type: "Premium Floral",
            p4_title: "Tuscan Sun Dried",
            p4_type: "Eternal Collection",
            p5_title: "Emerald Ribbed Glass",
            p5_type: "Bespoke Vases",
            p6_title: "Cotton Candy Gala",
            p6_type: "Celebration Kit",
            footer_atelier: "The Digital Florist’s Atelier.",
            contact_support: "Contact & Support",
            whatsapp_support: "WhatsApp Support",
            location: "Our Location",
            legal_social: "Legal & Social",
            terms: "Terms & Conditions",
            mobile: {
                home: "Home",
                catalog: "Catalog",
                whatsapp: "WhatsApp",
                profile: "Profile"
            }
        },
        gift_page: {
            hero_title: "Curated Collections for Every Moment",
            hero_desc: "Hand-picked botanical treasures and artisanal gifts, thoughtfully assembled to celebrate life's most beautiful transitions.",
            newborn_label: "New Beginnings",
            newborn_title: "Newborn Gifts",
            newborn_desc: "Welcoming the newest members of the garden with soft petals and gentle hues.",
            g1_title: "Blush Blossom Cradle",
            g1_desc: "Peonies & Organic Cotton Essentials",
            g2_title: "Azure Sky Welcome",
            g2_desc: "Hydrangeas & Wooden Keepsakes",
            g3_title: "Ethereal Neutral Box",
            g3_desc: "White Lilies & Linen Dreams",
            sig_series: "Signature Series",
            him_title: "The Gentleman’s Collection",
            him_desc: "Refined, bold, and meticulously crafted. Our collections for men pair architectural botanicals with premium lifestyle accessories for a statement of quiet luxury.",
            him_p1_title: "The Noir Executive",
            him_p1_desc: "Succulents & Leather Goods",
            him_p2_title: "Forest Reserve",
            him_p2_desc: "Evergreen Arrangement & Aged Spirits",
            him_quote: "Strength in Elegance",
            him_btn: "Explore For Him",
            grace_label: "Timeless Grace",
            her_title: "The Modern Muse",
            her_desc: "Delicate textures and intoxicating scents. These collections celebrate the feminine spirit with ethereal blooms and artisanal self-care rituals.",
            her_p1_title: "Velvet Rose Atelier",
            her_p1_desc: "Grand Roses & Silk Scarf",
            her_p2_title: "Orchid Serenity",
            her_p2_desc: "Phalaenopsis & Luxury Candles",
            her_quote: "A Symphony of Softness",
            her_btn: "Shop All For Her",
            finish_label: "The Finishing Touch",
            finish_title: "Balloons & Curated Vases",
            v1_title: "The Smoked Pillar",
            v1_desc: "Hand-blown artisanal glass",
            v2_title: "Terra Organic",
            b1_title: "Champagne Float",
            enquire: "Enquire",
            footer_desc: "Crafting botanical narratives for life’s most meaningful moments. The Digital Florist’s Atelier.",
            atelier: "The Atelier"
        },
        checkout: {
            title: "Checkout",
            sms_notice: "We'll send your code via SMS now.",
            del_details: "Delivery Details",
            full_name: "Full Name",
            name_placeholder: "Florence Nightingale",
            phone: "Phone Number",
            phone_placeholder: "+44 7700 900000",
            sms_code: "SMS Verification Code",
            code_placeholder: "Enter 6-digit code",
            address: "Street Address",
            addr_placeholder: "The Rose Cottage, Floral Lane",
            city: "City",
            city_placeholder: "London",
            postcode: "Postcode",
            post_placeholder: "W1 1AB",
            confirm_btn: "Confirm Order & Pay via WhatsApp",
            secure: "Safe & Secure Floral Transactions",
            summary: "Order Summary",
            subtotal: "Subtotal",
            del_type: "Bespoke Delivery",
            total: "Total",
            guarantee: "Every bouquet is hand-curated by our master florists and delivered in temperature-controlled sustainable packaging.",
            back_shop: "Back to Shop"
        }
    },
    ar: {
        dir: 'rtl',
        font: "'Cairo', sans-serif",
        headingFont: "'Cairo', sans-serif",
        nav: {
            brand: "يونيك فلاورز",
            natural: "زهور طبيعية",
            artificial: "زهور صناعية",
            gifts: "هدايا",
            vases: "فازات",
            balloons: "بالونات"
        },
        hero: {
            title: "زهور نضرة لكل مناسبة",
            subtitle: "باقات جميلة صنعت بكل حب",
            cta_shop: "تسوق الزهور",
            cta_whatsapp: "طلب عبر واتساب"
        },
        featured: {
            label: "اختيارات الموسم",
            title: "مجموعاتنا المميزة",
            products: {
                p1_title: "بيرفكت بلاش",
                p1_desc: "تنسيق حالم من زهور الفاوانيا والرنunculus للحظات الرقيقة.",
                p2_title: "سيمفونية الحديقة",
                p2_desc: "زهور برية تم اختيارها يدوياً لتجلب ألحان الطبيعة إلى منزلك.",
                p3_title: "أوركيد منتصف الليل",
                p3_desc: "أوركيد أرجواني عميق وراقٍ مع أوراق زمردية منحوتة.",
                p4_title: "غروب الشمس",
                p4_desc: "ألوان العنبر الدافئة والبرتقالي المحروق التي تجسد سحر الغسق.",
                p5_title: "صفاء تام",
                p5_desc: "تحفة فنية أحادية اللون من الزنابك البيضاء والورود ونفس الطفل.",
                p6_title: "بروتيا مخملية",
                p6_desc: "زهور البروتيا والنباتات الغريبة لبيان معماري جريء."
            },
            cta_order: "طلب عبر واتساب"
        },
        howItWorks: {
            title: "رحلة منسقة",
            subtitle: "تبسيط إهداء الزهور الفاخرة من مشاغلنا إلى عتبة داركم.",
            step1_title: "اختر الباقة",
            step1_desc: "تصفح مجموعتنا المختارة موسمياً من أرقى التنسيقات النباتية.",
            step2_title: "تواصل واتساب",
            step2_desc: "مساعدة شخصية مباشرة لتخصيص اختيارك ووضع اللمسات الأخيرة.",
            step3_title: "توصيل سريع",
            step3_desc: "خدمة توصيل سريعة تضمن وصول زهورك في حالة ممتازة."
        },
        testimonials: {
            title: "لحظات مشتركة من الفرح",
            subtitle: "كانت تنسيقاتنا جزءاً من احتفالات لا تحصى ومقترحات زواج ولفتات نابعة من القلب.",
            t1_text: "\"أجمل تنسيق تلقيته على الإطلاق. الاهتمام بالتفاصيل لا يضاهى حقاً.\"",
            t2_text: "\"الطلب عبر الواتساب كان سهلاً للغاية. ساعدوني في اختيار الباقة المثالية لذكرى زواجي.\"",
            t3_text: "\"تنسيق 'سيمفونية الحديقة' كان تماماً مثل الصورة. طازج، عطري، ورائع بكل بساطة.\""
        },
        footer: {
            brand_desc: "ننسق أفضل لحظات الطبيعة لمساحتك اليومية.",
            discover: "اكتشف",
            contact: "اتصل بنا",
            policy: "السياسة",
            journal: "المجلة",
            journal_desc: "انضم إلى قائمتنا للحصول على أدلة الزهور الموسمية والوصول الحصري.",
            email_placeholder: "بريدك الإلكتروني",
            subscribe: "اشترك",
            contact_us: "اتصل بنا",
            shipping: "سياسة الشحن",
            sustainability: "الاستدامة",
            links: {
                contact_us: "اتصل بنا",
                shipping: "سياسة الشحن",
                sustainability: "الاستدامة",
                instagram: "إنستغرام",
                pinterest: "بينتيريست"
            },
            copyright: "© 2024 يونيك فلاورز. صُنع لحياة منسقة."
        },
        catalog: {
            title: "الكتالوج المنسق",
            subtitle: "اكتشف تنسيقاتنا الموسمية، الفازات الفنية، والهدايا المختارة المصممة للمنازل الراقية.",
            search_placeholder: "ابحث في مكتبتنا النباتية...",
            collections: "المجموعات",
            all_pieces: "كل القطع",
            natural: "زهور طبيعية",
            artificial: "زهور صناعية",
            gifts: "هدايا مفصلة",
            vases: "فازات مصنوعة يدوياً",
            balloons: "بالونات فاخرة",
            sort_by: "ترتيب حسب",
            refine: "تصفية",
            ready_delivery: "جاهز للتوصيل",
            gift_wrap: "تغليف الهدايا متاح",
            new: "جديد",
            limited: "محدود"
        },
        product: {
            exclusive: "مجموعة موسمية حصرية",
            ethereal_title: "باقة النضارة الأثيرية",
            ethereal_tagline: "سيمفونية من القوام الناعم والألوان الرقيقة، مصممة للحظات الصفاء التام.",
            ethereal_desc: "اختار منسقو الزهور لدينا أفضل ورود (أوهارا)، وسحباً من الهيدرانجيا الثلجية، وزنابق (وايت أورينتال) المهيبة لابتكار هذه التحفة الفنية.",
            select_size: "اختر الحجم",
            petite: "صغير",
            signature: "المميز",
            grand: "كبير",
            include_card: "إضافة بطاقة مكتوبة بخط اليد (+5$)",
            eco_wrap: "تغليف فاخر صديق للبيئة",
            pay_online: "إتمام الدفع عبر الإنترنت",
            same_day: "توصيل في نفس اليوم",
            sustainable: "مصدر مستدام",
            art_title: "فن النضارة الأثيرية",
            art_desc: "كل تنسيق هو قطعة فريدة من الفن الحي. نحن لا ننسق الزهور فحسب، بل نؤلف القصص. هذا التنسيق مستوحى من ضوء الفجر الأول الذي يضرب حديقة مغطاة بالندى في أوائل يونيو.",
            step1: "ورود الحديقة منزوعة الأشواك ومنسقة بعناية لأطول عمر ممكن في الفازة.",
            step2: "زنابق أورينتال عطرية تتفتح تدريجياً على مدار 7-10 أيام.",
            step3: "مغلفة بورق الحرير الطبيعي وشريط الكتان المميز لدينا.",
            related_label: "قد ينال إعجابك أيضاً",
            related_title: "تنسيقات مكملة",
            view_collection: "عرض المجموعة",
            r1_title: "خيال أخضر",
            r1_tag: "خضر وأبيض",
            r2_title: "مخمل منتصف الليل",
            r2_tag: "قرمزي عميق",
            r3_title: "ساعة الشمس الذهبية",
            r3_tag: "أصفر وذهبي",
            r4_title: "صفاء تام",
            r4_tag: "أبيض بسيط",
            experience: "التجربة",
            services: "الخدمات",
            journal_sub: "اشتراك المجلة",
            journal_ritual: "احصل على اتجاهات الزهور الموسمية وطقوس العناية في صندوق بريدك.",
            email_addr: "عنوان البريد الإلكتروني",
            join: "انضم الآن"
        },
        catalog_page: {
            brand_tagline: "بائع الزهور الرقمي",
            home: "الرئيسية",
            order_whatsapp: "طلب عبر الواتساب",
            categories: "الفئات",
            favorites: "مفضلاتي",
            support: "الدعم",
            start_bouquet: "ابدأ باقة",
            spring_title: "اختيارات الربيع",
            spring_desc: "اختار منسقو الزهور لدينا هذه التنسيقات لتعكس يقظة الموسم الرقيقة. كل زهرة مستمدة بشكل أخلاقي من حدائق خاصة.",
            men: "رجال",
            women: "نساء",
            newborns: "مواليد",
            p1_title: "بيوني المتوارث",
            p1_type: "تنسيق طازج",
            p2_title: "نحت المرمر",
            p2_type: "فازة مصنوعة يدوياً",
            p3_title: "أوركيد منتصف الليل",
            p3_type: "زهور فاخرة",
            p4_title: "توسكان المجفف",
            p4_type: "مجموعة خالدة",
            p5_title: "زجاج الزمرد المحزز",
            p5_type: "فازات مخصصة",
            p6_title: "حفل غزل البنات",
            p6_type: "مجموعة الاحتفال",
            footer_atelier: "مشغل بائع الزهور الرقمي.",
            contact_support: "الاتصال والدعم",
            whatsapp_support: "دعم الواتساب",
            location: "موقعنا",
            legal_social: "قانوني واجتماعي",
            terms: "الشروط والأحكام",
            mobile: {
                home: "الرئيسية",
                catalog: "الكتالوج",
                whatsapp: "واتساب",
                profile: "الملف الشخصي"
            }
        },
        gift_page: {
            hero_title: "مجموعات منسقة لكل لحظة",
            hero_desc: "كنوز نباتية مختارة يدوياً وهدايا حرفية، تم تجميعها بعناية للاحتفال بأجمل انتقالات الحياة.",
            newborn_label: "بدايات جديدة",
            newborn_title: "هدايا المواليد",
            newborn_desc: "الترحيب بأحدث أعضاء الحديقة ببتلات ناعمة وألوان لطيفة.",
            g1_title: "مهد براعم الخجل",
            g1_desc: "الفاوانيا وأساسيات القطن العضوي",
            g2_title: "ترحيب السماء الزرقاء",
            g2_desc: "الهيدرانجيا والذكرى الخشبية",
            g3_title: "صندوق الحياد الأثيري",
            g3_desc: "الزنابق البيضاء وأحلام الكتان",
            sig_series: "سلسلة التوقيع",
            him_title: "مجموعة السادة",
            him_desc: "راقية، جريئة، ومصنوعة بدقة. تجمع مجموعاتنا للرجال بين النباتات المعمارية والملحقات الفاخرة لبيان من الفخامة الهادئة.",
            him_p1_title: "التنفيذي نوار",
            him_p1_desc: "العصاريات والمنتجات الجلدية",
            him_p2_title: "محمية الغابة",
            him_p2_desc: "تنسيق دائم الخضرة ونكهات عتيقة",
            him_quote: "القوة في الأناقة",
            him_btn: "استكشف له",
            grace_label: "نعمة خالدة",
            her_title: "ملهمة الحداثة",
            her_desc: "قوام رقيق وروائح مسكرة. تحتفل هذه المجموعات بالروح الأنثوية بزهور أثيرية وطقوس العناية الذاتية الحرفية.",
            her_p1_title: "مشغل الفلفيت روز",
            her_p1_desc: "ورود كبيرة ووشاح حريري",
            her_p2_title: "صفاء الأوركيد",
            her_p2_desc: "الفالينوبسيس والشموع الفاخرة",
            her_quote: "سيمفونية من النعومة",
            her_btn: "تسوقي الكل لها",
            finish_label: "اللمسة النهائية",
            finish_title: "بالونات وفازات منسقة",
            v1_title: "العمود المدخن",
            v1_desc: "زجاج حرفي منفوخ يدوياً",
            v2_title: "تيرا أورجانيك",
            b1_title: "عوامة الشمبانيا",
            enquire: "استفسار",
            footer_desc: "صياغة الروايات النباتية للحظات الحياة الأكثر مغزى. مشغل بائع الزهور الرقمي.",
            atelier: "المشغل"
        },
        checkout: {
            title: "إتمام الشراء",
            sms_notice: "سنرسل لك رمزاً عبر الرسائل القصيرة الآن.",
            del_details: "تفاصيل التوصيل",
            full_name: "الاسم الكامل",
            name_placeholder: "فلورنس نايتنتيجيل",
            phone: "رقم الهاتف",
            phone_placeholder: "+966 50 000 0000",
            sms_code: "رمز التحقق (SMS)",
            code_placeholder: "أدخل الرمز المكون من 6 أرقام",
            address: "عنوان الشارع",
            addr_placeholder: "كوخ الزهور، شارع الورود",
            city: "المدينة",
            city_placeholder: "الرياض",
            postcode: "الرمز البريدي",
            post_placeholder: "12345",
            confirm_btn: "تأكيد الطلب والدفع عبر الواتساب",
            secure: "معاملات زهور آمنة ومضمونة",
            summary: "ملخص الطلب",
            subtotal: "المجموع الفرعي",
            del_type: "توصيل مخصص",
            total: "الإجمالي",
            guarantee: "يتم تنسيق كل باقة يدوياً من قبل خبراء الزهور لدينا وتسليمها في تغليف مستدام يتم التحكم في درجة حرارته.",
            back_shop: "العودة للمتجر"
        }
    }
};

const jsContent = `const translations = ${JSON.stringify(translations, null, 4)};

function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;

    let styleEl = document.getElementById('i18n-styles');
    if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = 'i18n-styles';
        document.head.appendChild(styleEl);
    }
    styleEl.textContent = \`
        body, .font-body, .font-label { 
            font-family: \${t.font} !important; 
        }
        h1, h2, h3, h4, .font-headline, .font-serif { 
            font-family: \${t.headingFont} !important; 
        }
    \`;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let translation = t;
        for (const k of keys) {
            translation = translation ? translation[k] : null;
        }

        if (translation) {
            if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
                el.placeholder = translation;
            } else {
                el.innerText = translation;
            }
        }
    });

    document.getElementById('lang-en')?.classList.toggle('bg-white', lang === 'en');
    document.getElementById('lang-en')?.classList.toggle('dark:bg-zinc-700', lang === 'en');
    document.getElementById('lang-ar')?.classList.toggle('bg-white', lang === 'ar');
    document.getElementById('lang-ar')?.classList.toggle('dark:bg-zinc-700', lang === 'ar');
}

function setLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    applyTranslations(lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'ar';
    applyTranslations(savedLang);
});`;

fs.writeFileSync('translations.js', jsContent, 'utf8');
console.log('Translations file written successfully');
