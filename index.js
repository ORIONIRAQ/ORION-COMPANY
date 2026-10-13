/* =========================================================
   ORION - INDEX.JS (النسخة المحدّثة)
   كل البيانات (الاسم، الصور، المشاريع، الروابط) موجودة هنا فقط.
   ========================================================= */


/* =========================================================
   0. عند تحديث الصفحة: الرجوع دائماً إلى البداية
   (يمنع المتصفح من استرجاع مكان التمرير القديم)
   ========================================================= */

(function () {

    if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
    }

    let isReload = false;

    try {
        const nav = performance.getEntriesByType("navigation")[0];
        isReload = Boolean(nav) && nav.type === "reload";
    } catch (error) {
        isReload = false;
    }

    /* عند التحديث نحذف #contact أو أي قسم من الرابط حتى لا يقفز إليه */
    if (isReload && location.hash) {
        history.replaceState(null, "", location.pathname + location.search);
    }

    function goTop() {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    /* إذا فتح الزائر رابط قسم مقصود (مثل #contact) من الخارج لا نتدخل */
    if (isReload || !location.hash) {
        goTop();
        document.addEventListener("DOMContentLoaded", goTop);
        window.addEventListener("load", goTop);
    }

})();


/* =========================================================
   1. معلومات الموقع
   ========================================================= */

const SITE_DATA = {
    name: "ORION",
    profileImage: "images/water1.jpg",
    introduction:
        "ORION شركة متخصصة في تطوير المواقع الإلكترونية وتصميم الأنظمة الرقمية وتنفيذ مشاريع وحلول إنترنت الأشياء IoT. نقدم حلولاً تقنية حديثة تجمع بين التصميم الاحترافي والأداء والكفاءة.",
    email: "mm9531837@gmail.com",
    siteName: "ORION",
    pageTitle: "ORION | تطوير المواقع وإنترنت الأشياء",

    /* رقم التواصل (يُستخدم لرابط الواتساب فقط ولا يظهر على الزر) */
    phone: "07811164668",
    whatsappMessage: "مرحباً ORION، أرغب في الاستفسار عن خدماتكم.",

    /* صفحة الانستكرام (تم حذف معاملات التتبع من الرابط) */
    instagram: "https://www.instagram.com/orion__tech",

    /* الإدارة (تظهر أسفل الصفحة) */
    managerLabel: "بإدارة و اشراف",
    managerName: "المهندس محمد الفيخراني"
};


/* =========================================================
   2. معلومات الأقسام
   ========================================================= */

const WEB_SECTION = {
    label: "WEB DEVELOPMENT",
    title: "تصميم وتطوير المواقع الإلكترونية",
    description:
        "نصمم ونطور مواقع إلكترونية احترافية وعصرية للشركات والمطاعم والمتاجر والأعمال المختلفة، مع التركيز على الأداء وسهولة الاستخدام والتوافق مع جميع الأجهزة."
};

const IOT_SECTION = {
    label: "INTERNET OF THINGS",
    title: "حلول ومشاريع إنترنت الأشياء IoT",
    description:
        "نطور أنظمة ومشاريع ذكية تعتمد على الحساسات والمتحكمات والاتصال بالشبكات، مع حلول للتحكم والمراقبة والأتمتة وربط الأجهزة بالأنظمة الرقمية."
};

/* قسم "من نحن" الجديد - عدّل النصوص كما تريد */
const ABOUT_SECTION = {
    title: "لماذا ORION؟",
    description:
        "نبني مواقع وأنظمة ذكية بسيطة في الاستخدام، ونبقى على تواصل مباشر معك من أول فكرة حتى التسليم.",
    items: [
        {
            title: "مواقع متجاوبة",
            text: "تعمل بشكل واضح على الموبايل والكمبيوتر والتابلت."
        },
        {
            title: "منيو إلكتروني احترافي",
            text: "منيو عصري لمطعمك أو كافيهك، سريع وسهل التصفح على الموبايل، مع صور وأسعار واضحة."
        },
        {
            title: "حلول IoT",
            text: "حساسات وتحكم وأتمتة وربط الأجهزة بالأنظمة الرقمية."
        },
        {
            title: "تواصل مباشر",
            text: "عبر الواتساب أو الاتصال، بدون خطوات معقدة."
        }
    ]
};


/* =========================================================
   3. المشروع الأول - موقع وكالة HK للعطور
   ========================================================= */

function مشروع_موقع_شركة() {
    return {
        id: "web-company",
        category: "Web Development",
        name: "موقع وكالة HK للعطور",
        image: "images/water3.jpg",
        shortDescription:
            "موقع إلكتروني احترافي لوكالة HK للعطور، تم تصميمه لتقديم المنتجات والخدمات بطريقة واضحة وعصرية وسهلة الاستخدام.",
        description:
            "يقدم موقع وكالة HK للعطور تجربة رقمية احترافية تساعد الزوار على استعراض المنتجات والتعرف على تفاصيلها ومعلومات الفرع وطرق التواصل، مع واجهة متجاوبة تناسب مختلف الأجهزة.",

        howItWorks: [
            {
                title: "تصفح الأقسام والمنتجات",
                text: `عند فتح الموقع، يستطيع الزائر التنقل بسهولة بين أقسام العطور والبخور واستعراض المنتجات، مع إمكانية الضغط على صور المنتجات لرؤية التفاصيل بشكل أوضح.`
            },
            {
                title: "معرفة التفاصيل والفرع",
                text: `يوفر الموقع معلومات التواصل وموقع الفرع في النجف الأشرف (شارع الروان)، بالإضافة إلى أوقات العمل الرسمية لمساعدة الزائر على الوصول إلى المعلومات التي يحتاجها بسرعة.`
            },
            {
                title: "التواصل وإتمام الطلب",
                text: `بعد اختيار المنتج أو الرغبة في الاستفسار، يمكن للزائر استخدام زر "اطلب عبر الواتساب" للانتقال مباشرة إلى خدمة العملاء والتواصل مع الوكالة دون الحاجة إلى إنشاء حساب أو اتباع خطوات معقدة.`
            }
        ],

        gallery: ["images/water2.jpg"],
        link: "https://orioniraq.github.io/HK/"
    };
}


/* =========================================================
   4. المشروع الثاني - شركة ديكور
   ========================================================= */

function مشروع_متجر_الكتروني() {
    return {
        id: "web-store",
        category: "Web Development",
        name: "موقع شركة سما اللؤلؤة الذهبية للديكور",
        image: "images/water4.jpg",
        shortDescription:
            "موقع إلكتروني احترافي لشركة متخصصة في الديكور والتصميم الداخلي، بواجهة عصرية وسهلة الاستخدام.",
        description:
            'سما اللؤلؤة الذهبية للديكور والتصميم الداخلي هو موقع إلكتروني احترافي تم تطويره للتعريف بالشركة وخدماتها ومنتجاتها في مجال الديكور والتصميم الداخلي ومواد التشطيب. يوفر الموقع واجهة عصرية ومنظمة تساعد الزائر على استعراض الخدمات والأقسام والمنتجات والتعرف على معلومات الشركة والتواصل معها بشكل مباشر.',

        howItWorksIntro:
            'يعتمد الموقع على واجهة ويب تفاعلية ومنظمة، وتتم تجربة المستخدم وفق الخطوات التالية:',

        howItWorks: [
            {
                title: "البدء من الصفحة الرئيسية",
                text: 'يبدأ المستخدم من الصفحة الرئيسية للتعرف على الشركة وأبرز خدماتها ومجالات عملها.'
            },
            {
                title: "التنقل بين الأقسام",
                text: 'يمكن للزائر الانتقال بين الأقسام المختلفة لاستعراض المنتجات والخدمات والمحتوى المتوفر داخل الموقع.'
            },
            {
                title: "عرض متجاوب مع جميع الأجهزة",
                text: 'تم تصميم الموقع بطريقة متجاوبة تضمن عرض المحتوى بصورة واضحة ومنظمة على أجهزة الكمبيوتر والهواتف والأجهزة اللوحية.'
            },
            {
                title: "التواصل المباشر مع الشركة",
                text: 'يوفر الموقع وسائل اتصال مباشرة مثل واتساب والاتصال الهاتفي لتسهيل التواصل مع الشركة والاستفسار عن الخدمات والمنتجات.'
            }
        ],

        gallery: ["images/water5.jpg"],
        link: "https://orioniraq.github.io/sama-decor/"
    };
}


/* =========================================================
   5. المشروع الثالث - منيو مطعم الكرار
   ========================================================= */

function مشروع_منيو_مطعم() {
    return {
        id: "web-restaurant-menu",
        category: "Web Development",
        name: "منيو مطعم الكرار",
        image: "images/water19.jpg",

        shortDescription:
            "منيو إلكتروني عصري لمطعم مشاويات بثلاث لغات (العربية والإنجليزية والكوردية) مع بحث سريع وتصميم متجاوب مع الجوال.",

        description:
            "منيو مطعم الكرار هو موقع إلكتروني تم تطويره لتقديم قائمة الطعام بطريقة عصرية وسريعة وسهلة الاستخدام. يعرض الموقع أقسام المطعم والأطباق والأسعار بتصميم داكن ومتجاوب مع الهواتف، ويدعم ثلاث لغات مع تغيير اتجاه الصفحة وتنسيق الأرقام والعملة تلقائياً حسب اللغة. كما يسمح بإدارة بيانات الأطباق والأسعار من مكان واحد دون الحاجة إلى تعديل تصميم الصفحة.",

        howItWorksIntro:
            "يعتمد الموقع على واجهة بسيطة ومنظمة تقود الزبون من لحظة فتح الرابط حتى الوصول إلى المعلومات أو الاتصال بالمطعم:",

        howItWorks: [
            {
                title: "شاشة الترحيب",
                text: "تظهر عند فتح الموقع شاشة ترحيب تعرض اسم المطعم وأوقات العمل، ويمكن للزبون اختيار اللغة المناسبة قبل الدخول إلى المنيو."
            },
            {
                title: "التنقل بين الأقسام",
                text: "يحتوي الموقع على شريط أقسام مثل المشاوي والمقبلات والمشروبات، مما يسمح للزبون بالانتقال بسرعة إلى القسم الذي يرغب في تصفحه."
            },
            {
                title: "البحث السريع",
                text: "يمكن للزبون البحث عن أي طبق بالاسم، مع دعم البحث في اللغات الثلاث وتجاهل التشكيل واختلاف الهمزات لتسهيل الوصول إلى النتائج."
            },
            {
                title: "عرض الأطباق والصور",
                text: "تظهر كل وجبة مع صورتها وسعرها، ويمكن الضغط على الصورة لفتحها بحجم أكبر ورؤية تفاصيل الطبق بشكل أوضح."
            },
            {
                title: "الاتصال المباشر",
                text: "يوفر الموقع زر اتصال سريع يفتح تطبيق الهاتف مباشرة لحجز طاولة أو الاستفسار عن الخدمات والطلبات."
            }
        ],

        gallery: ["images/water20.jpg", "images/water19.jpg"],
        link: "https://orioniraq.github.io/Al-KarrarMenu/"
    };
}


/* =========================================================
   6. مشروع IoT - المدينة الذكية
   ========================================================= */

function مشروع_ري_ذكي() {
    return {
        id: "iot-irrigation",
        category: "IoT Project",
        name: "المدينة الذكية - 4 أنظمة مترابطة",
        image: "images/water6.jpg",

        shortDescription:
            'مشروع ذكي متكامل يعتمد على تقنيات إنترنت الأشياء (IoT) والأتمتة لربط وإدارة أربعة أنظمة رئيسية: المنزل الذكي، إنارة الشوارع الذكية، الكراج الذكي، والحديقة الذكية، بهدف تحسين الأمان والراحة وترشيد استهلاك الطاقة والمياه.',

        description:
            'المدينة الذكية هي مشروع متكامل يعتمد على إنترنت الأشياء (IoT) والأتمتة الذكية لربط وإدارة مجموعة من الأنظمة داخل بيئة واحدة. يتكون المشروع من أربعة أنظمة مترابطة تشمل المنزل الذكي، إنارة الشوارع الذكية، الكراج الذكي، والحديقة الذكية. يهدف النظام إلى تقليل التدخل البشري، رفع مستوى الأمان والراحة، وتحسين إدارة الطاقة والمياه من خلال التحكم والمراقبة الذكية.',

        howItWorks: [
            {
                title: "نظام المنزل الذكي",
                text: 'يتيح النظام التحكم بالباب الرئيسي وباب الكراج والإنارة عن طريق Wi-Fi باستخدام الهاتف. كما يمكن فتح الأبواب باستخدام بطاقة NFC. ويحتوي النظام على حساس للغاز، وفي حال اكتشاف تسرب للغاز يقوم النظام بفتح الباب وتشغيل الإنارة وتشغيل إنذار صوتي وإرسال إشعار إلى الهاتف لتنبيه المستخدم.'
            },
            {
                title: "نظام إنارة الشارع الذكي",
                text: 'يتم تشغيل إنارة الشوارع خلال الليل وإطفاؤها خلال النهار بشكل أوتوماتيكي اعتماداً على المستشعرات، مما يساعد على تقليل استهلاك الطاقة وتحسين كفاءة نظام الإنارة.'
            },
            {
                title: "نظام الكراج الذكي",
                text: `يحتوي النظام على شاشة تعرض أماكن ركن السيارات المتاحة. عند وجود مكان متاح، يقوم المستخدم بتمرير بطاقة تسمح له بالدخول ثم تنفتح البوابة الرئيسية تلقائياً. أما في حال امتلاء الكراج، فتظهر على الشاشة رسالة "الكراج ممتلئ"، وعند محاولة شخص الدخول لا تفتح البوابة وتظهر رسالة اعتذار.`
            },
            {
                title: "نظام الحديقة الذكية",
                text: 'يعتمد النظام على مستشعرات موجودة في التربة لقياس مستوى الرطوبة. عند استشعار جفاف التربة، يقوم النظام بتشغيل ماطور الماء تلقائياً لري الحديقة، وعند وصول الرطوبة إلى المستوى المطلوب يقوم بإيقاف ماطور الماء تلقائياً.'
            }
        ],

        howItWorksGoal:
            'إنشاء بيئة ذكية ومترابطة تعتمد على الأتمتة وإنترنت الأشياء لتحسين الأمان والراحة وكفاءة الطاقة وترشيد استهلاك المياه.',

        components: [
            "Arduino X1", "ESP8266 X1", "Soil Moisture Sensor X3", "Water Pump X1",
            "RFID X2", "RC522 X2", "superLEDs X32", "Buzzer X1", "Gas Sensor X1",
            "servo Motor X3", "LDR Sensor X1", "IR Sensor X3", "lCD Display X1",
            "Voltage Booster DC-DC X1", "Boost Converter X1", "Battery X2", "Relay Module X3"
        ],

        software: [
            "Arduino IDE", "C / C++", "Wi-Fi", "Sensor Reading", "Output Control"
        ],

        gallery: [
            "images/water7.jpg", "images/water8.jpg", "images/water9.jpg",
            "images/water10.jpg", "images/water11.jpg", "images/water12.jpg",
            "images/water13.jpg", "images/water14.jpg", "images/water15.jpg",
            "images/water16.jpg", "images/water17.jpg", "images/water18.jpg"
        ]
    };
}


/* =========================================================
   7. قائمة المشاريع
   ========================================================= */

const PROJECTS = {

    web: [
        مشروع_موقع_شركة(),
        مشروع_متجر_الكتروني(),
        مشروع_منيو_مطعم()
    ],

    iot: [
        مشروع_ري_ذكي()
    ]

};


/* =========================================================
   8. التشغيل بعد تحميل الصفحة
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    injectStepsStyles();
    injectContactStyles();
    injectExtraStyles();
    setupHeadMeta();
    applySiteData();
    applySectionData();
    setupContactButtons();
    setupFooterCredit();
    setupHeaderLogo();
    setupHeroLogo();

    renderProjects(PROJECTS.web, "web-projects");
    renderProjects(PROJECTS.iot, "iot-projects");

    setupAboutSection();

    updateCurrentYear();
    initializeSiteFeatures();

});


/* =========================================================
   9. تنسيق الخطوات المرقمة
   ========================================================= */

function injectStepsStyles() {

    if (document.getElementById("steps-styles")) {
        return;
    }

    const style = document.createElement("style");
    style.id = "steps-styles";

    style.textContent = `

        .project-steps {
            list-style: none;
            margin: 16px 0 8px;
            padding: 0;
            counter-reset: step;
            --steps-accent: var(--primary, var(--primary-color, #2563eb));
        }

        .project-steps .step-item {
            position: relative;
            display: flex;
            align-items: flex-start;
            gap: 14px;
            padding: 14px 16px;
            margin-bottom: 12px;
            border: 1px solid rgba(128, 128, 128, 0.25);
            border-radius: 12px;
            background: rgba(128, 128, 128, 0.06);
            counter-increment: step;
        }

        .project-steps .step-item::before {
            content: counter(step);
            flex: 0 0 auto;
            width: 34px;
            height: 34px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: var(--steps-accent);
            color: #fff;
            font-weight: 700;
            font-size: 16px;
            line-height: 1;
        }

        .project-steps .step-item:not(:last-child)::after {
            content: "";
            position: absolute;
            inset-inline-start: 32px;
            top: 100%;
            width: 2px;
            height: 12px;
            background: var(--steps-accent);
            opacity: 0.35;
        }

        .project-steps .step-body { flex: 1 1 auto; min-width: 0; }

        .project-steps .step-title {
            margin: 0 0 6px;
            font-size: 1.05rem;
            font-weight: 700;
        }

        .project-steps .step-text {
            margin: 0;
            line-height: 1.9;
            opacity: 0.9;
        }

        .project-goal {
            margin-top: 16px;
            padding: 14px 16px;
            border-radius: 12px;
            border: 1px dashed var(--primary, var(--primary-color, #2563eb));
            background: rgba(37, 99, 235, 0.08);
        }

        .project-goal strong { display: block; margin-bottom: 6px; }
        .project-goal p { margin: 0; line-height: 1.9; }

    `;

    document.head.appendChild(style);
}


/* =========================================================
   9-ب. تنسيق أزرار التواصل + سطر الإدارة
   ========================================================= */

function injectContactStyles() {

    if (document.getElementById("contact-styles")) {
        return;
    }

    const style = document.createElement("style");
    style.id = "contact-styles";

    style.textContent = `

        .contact-actions {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 14px;
            width: 100%;
        }

        .contact-actions .btn {
            gap: 10px;
            direction: rtl;
            width: auto;
            max-width: none;
            min-width: 190px;
        }

        .contact-actions .btn svg {
            width: 22px;
            height: 22px;
            flex: 0 0 auto;
            fill: currentColor;
        }

        .contact-actions .btn-whatsapp {
            background: linear-gradient(135deg, #25D366, #128C7E);
            border-color: rgba(37, 211, 102, 0.55);
            color: #ffffff;
            box-shadow: 0 10px 30px rgba(37, 211, 102, 0.22);
        }

        .contact-actions .btn-whatsapp:hover {
            box-shadow: 0 15px 40px rgba(37, 211, 102, 0.38);
        }

        .contact-actions .btn-instagram {
            background: linear-gradient(135deg, #F58529, #DD2A7B 50%, #8134AF);
            border-color: rgba(221, 42, 123, 0.55);
            color: #ffffff;
            box-shadow: 0 10px 30px rgba(221, 42, 123, 0.22);
        }

        .contact-actions .btn-instagram:hover {
            box-shadow: 0 15px 40px rgba(221, 42, 123, 0.38);
        }

        .footer-credit {
            margin-top: 10px;
            padding-top: 10px;
            border-top: 1px solid rgba(255, 255, 255, 0.06);
            font-size: 0.74rem;
            letter-spacing: 0.3px;
            color: var(--text-muted, #7F93AA);
            text-align: center;
        }

        .footer-credit .credit-label { opacity: 0.8; }

        .footer-credit .credit-name {
            color: var(--primary-light, #7DD3FC);
            font-weight: 700;
        }

        @media (max-width: 480px) {
            .contact-actions { flex-direction: column; }

            .contact-actions .btn {
                width: 100%;
                max-width: 280px;
                min-width: 0;
            }

            .footer-credit {
                font-size: 0.7rem;
                line-height: 1.8;
            }
        }

    `;

    document.head.appendChild(style);
}


/* =========================================================
   9-ج. تنسيقات إضافية: قسم "لماذا ORION" + عرض الصور المكبّرة
   + إزاحة التمرير تحت الهيدر الثابت
   ========================================================= */

function injectExtraStyles() {

    if (document.getElementById("extra-styles")) {
        return;
    }

    const style = document.createElement("style");
    style.id = "extra-styles";

    style.textContent = `

        /* حتى لا يختفي عنوان القسم تحت الهيدر عند الضغط على القائمة */
        section[id] { scroll-margin-top: 80px; }

        /* البطاقات تظهر مباشرة بدون انتظار التمرير */
        .project-card {
            opacity: 1;
            transform: translateY(0);
            transition:
                border-color 0.3s ease,
                box-shadow 0.3s ease,
                transform 0.3s ease;
        }

        /* الاسم الكبير في الوسط = نفس اللوكو */
        .hero h2.hero-title {
            line-height: 0;
            letter-spacing: 0;
            text-shadow: none;
        }

        .hero-logo {
            display: block;
            height: clamp(48px, 11vw, 96px);
            width: auto;
            color: #FFFFFF;
            filter: drop-shadow(0 0 28px rgba(56, 189, 248, 0.28));
        }

        /* قسم لماذا ORION */
        .about {
            padding: 110px 0;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .about-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 16px;
        }

        .about-item {
            padding: 24px;
            border: 1px solid var(--border-light, rgba(255, 255, 255, 0.10));
            border-radius: var(--radius-medium, 16px);
            background: var(--bg-card, rgba(11, 18, 32, 0.92));
        }

        .about-item h3 {
            margin-bottom: 8px;
            font-size: 1.1rem;
            color: var(--text-main, #fff);
        }

        .about-item p {
            margin: 0;
            font-size: 0.92rem;
            line-height: 1.9;
            color: var(--text-secondary, #B8C7D9);
        }

        @media (max-width: 768px) {
            .about { padding: 85px 0; }
        }

        /* عرض الصور المكبّرة */
        .lightbox {
            position: fixed;
            inset: 0;
            z-index: 3000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            background: rgba(0, 0, 0, 0.9);
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.25s ease, visibility 0.25s ease;
        }

        .lightbox.active {
            visibility: visible;
            opacity: 1;
        }

        .lightbox img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            border-radius: 12px;
        }

        .lightbox-close {
            position: absolute;
            top: 16px;
            left: 16px;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            border: 1px solid rgba(255, 255, 255, 0.25);
            background: rgba(5, 10, 20, 0.8);
            color: #fff;
            font-size: 1.7rem;
            line-height: 1;
            cursor: pointer;
        }

        .modal-main-image { cursor: zoom-in; }

        /* زر إغلاق نافذة التفاصيل يبقى ظاهراً دائماً أثناء التمرير */
        .modal-close-bar {
            position: sticky;
            top: 0;
            height: 0;
            z-index: 10;
        }

        .modal-close-bar .modal-close {
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
        }

        /* تخفيف الحمل: أثناء فتح النافذة نوقف حركة الخلفية ونلغي التمويه الثقيل */
        body.modal-open .background-grid,
        body.modal-open .background-glow,
        body.modal-open .background-particle {
            animation-play-state: paused !important;
        }

        body.modal-open .modal-overlay {
            background: rgba(0, 0, 0, 0.88);
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
        }

        body.modal-open header {
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
        }

        .modal-content {
            overscroll-behavior: contain;
        }

    `;

    document.head.appendChild(style);
}


/* =========================================================
   9-د. وسوم الـ head: الوصف + لون المتصفح + الأيقونة
   ========================================================= */

function setupHeadMeta() {

    if (!document.querySelector('meta[name="description"]')) {
        const description = document.createElement("meta");
        description.name = "description";
        description.content = SITE_DATA.introduction;
        document.head.appendChild(description);
    }

    if (!document.querySelector('meta[name="theme-color"]')) {
        const theme = document.createElement("meta");
        theme.name = "theme-color";
        theme.content = "#050A14";
        document.head.appendChild(theme);
    }

    if (!document.querySelector('link[rel~="icon"]')) {

        const svg =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">' +
            '<rect width="64" height="64" rx="14" fill="#050A14"/>' +
            '<circle cx="32" cy="32" r="16" fill="none" stroke="#38BDF8" stroke-width="7"/>' +
            '</svg>';

        const icon = document.createElement("link");
        icon.rel = "icon";
        icon.type = "image/svg+xml";
        icon.href = "data:image/svg+xml," + encodeURIComponent(svg);
        document.head.appendChild(icon);
    }
}


/* =========================================================
   10. تطبيق معلومات الموقع
   ========================================================= */

function applySiteData() {

    document.title = SITE_DATA.pageTitle;

    document.querySelectorAll("[data-site-name]").forEach(function (el) {
        el.textContent = SITE_DATA.siteName;
    });

    document.querySelectorAll("[data-user-name]").forEach(function (el) {
        el.textContent = SITE_DATA.name;
    });

    document.querySelectorAll("[data-profile-image]").forEach(function (img) {
        img.src = SITE_DATA.profileImage;
        img.alt = "شعار " + SITE_DATA.name;
    });

    document.querySelectorAll("[data-introduction]").forEach(function (el) {
        el.textContent = SITE_DATA.introduction;
    });
}


/* =========================================================
   10-ب. الأيقونات (SVG مدمجة)
   ========================================================= */

const ICONS = {

    email:
        '<svg viewBox="0 0 24 24" aria-hidden="true">' +
        '<path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.2-8 5-8-5V6l8 5 8-5v2.2z"/>' +
        '</svg>',

    whatsapp:
        '<svg viewBox="0 0 24 24" aria-hidden="true">' +
        '<path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.29z"/>' +
        '</svg>',

    instagram:
        '<svg viewBox="0 0 24 24" aria-hidden="true">' +
        '<path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>' +
        '</svg>'

};


/* =========================================================
   10-ج. أزرار التواصل
   ========================================================= */

function getWhatsappNumber(phone) {

    let digits = String(phone).replace(/\D/g, "");

    if (digits.startsWith("00")) {
        digits = digits.slice(2);
    }

    if (digits.startsWith("0")) {
        digits = "964" + digits.slice(1);
    }

    return digits;
}

function getWhatsappLink() {

    return (
        "https://wa.me/" +
        getWhatsappNumber(SITE_DATA.phone) +
        "?text=" +
        encodeURIComponent(SITE_DATA.whatsappMessage)
    );
}

function setupContactButtons() {

    const container = document.querySelector("#contact .container");

    if (!container) {
        return;
    }

    let actions = container.querySelector(".contact-actions");

    if (!actions) {

        actions = makeEl("div", "contact-actions");

        const oldEmail = container.querySelector("[data-email]");

        if (oldEmail) {
            oldEmail.parentNode.insertBefore(actions, oldEmail);
            oldEmail.remove();
        } else {
            container.appendChild(actions);
        }
    }

    actions.innerHTML = "";

    /* 1) البريد */
    const emailButton = makeEl("a", "btn");
    emailButton.href = "mailto:" + SITE_DATA.email;
    emailButton.title = SITE_DATA.email;
    emailButton.setAttribute("aria-label", "راسلنا عبر البريد الإلكتروني - " + SITE_DATA.siteName);
    emailButton.innerHTML = ICONS.email;
    emailButton.appendChild(makeEl("span", "", "البريد الإلكتروني"));
    actions.appendChild(emailButton);

    /* 2) الواتساب */
    const whatsappButton = makeEl("a", "btn btn-whatsapp");
    whatsappButton.href = getWhatsappLink();
    whatsappButton.target = "_blank";
    whatsappButton.rel = "noopener noreferrer";
    whatsappButton.setAttribute("aria-label", "تواصل معنا عبر الواتساب");
    whatsappButton.innerHTML = ICONS.whatsapp;
    whatsappButton.appendChild(makeEl("span", "", "واتساب"));
    actions.appendChild(whatsappButton);

    /* 3) الانستكرام */
    const instagramButton = makeEl("a", "btn btn-instagram");
    instagramButton.href = SITE_DATA.instagram;
    instagramButton.target = "_blank";
    instagramButton.rel = "noopener noreferrer";
    instagramButton.setAttribute("aria-label", "تابعنا على الانستكرام");
    instagramButton.innerHTML = ICONS.instagram;
    instagramButton.appendChild(makeEl("span", "", "انستكرام"));
    actions.appendChild(instagramButton);
}


/* =========================================================
   10-د. سطر الإدارة أسفل الصفحة
   ========================================================= */

function setupFooterCredit() {

    const footerContainer = document.querySelector("footer .container");

    if (!footerContainer) {
        return;
    }

    if (footerContainer.querySelector(".footer-credit")) {
        return;
    }

    const credit = makeEl("p", "footer-credit");

    credit.appendChild(makeEl("span", "credit-label", SITE_DATA.managerLabel + ": "));
    credit.appendChild(makeEl("span", "credit-name", SITE_DATA.managerName));

    footerContainer.appendChild(credit);
}


/* =========================================================
   10-هـ. لوكو ORION في الهيدر (أعلى اليسار على الكمبيوتر)
   ========================================================= */

const HEADER_LOGO_SVG =
    '<svg class="brand-logo" viewBox="0 0 430 78" role="img" aria-label="ORION" xmlns="http://www.w3.org/2000/svg">' +
        '<defs><clipPath id="orionLogoClipN"><rect x="340" y="0" width="90" height="70"/></clipPath></defs>' +
        '<g transform="translate(0,4)" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="butt" stroke-linejoin="miter">' +

            '<path d="M7.3 31 A31 31 0 0 1 68.7 31"/>' +
            '<path d="M7.3 39 A31 31 0 0 0 68.7 39"/>' +

            '<path d="M102 4 H160 A13.5 13.5 0 0 1 160 31 H128 L186 66"/>' +

            '<path d="M214 0 V70"/>' +

            '<path d="M259.3 31 A31 31 0 0 1 320.7 31"/>' +
            '<path d="M259.3 39 A31 31 0 0 0 320.7 39"/>' +

            '<g clip-path="url(#orionLogoClipN)">' +
                '<path d="M354 24 V70"/>' +
                '<path d="M351.7 -5 L420.3 75"/>' +
                '<path d="M416 0 V70"/>' +
            '</g>' +

        '</g>' +
    '</svg>';

function setupHeaderLogo() {

    const title = document.querySelector("header h1");

    if (!title || title.querySelector(".brand-logo")) {
        return;
    }

    if (!document.getElementById("logo-styles")) {

        const style = document.createElement("style");
        style.id = "logo-styles";

        style.textContent = `

            header h1 {
                line-height: 0;
                letter-spacing: 0;
            }

            header h1::after {
                display: none !important;
            }

            .brand-logo {
                display: block;
                height: 32px;
                width: auto;
                color: #FFFFFF;
                transition: filter 0.3s ease;
            }

            .brand-logo:hover {
                filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.55));
            }

            /* الصفحة RTL، لذلك row-reverse يضع اللوكو على اليسار والقائمة على اليمين */
            @media (min-width: 769px) {
                .header-container {
                    flex-direction: row-reverse;
                }
            }

            @media (max-width: 768px) {
                .brand-logo { height: 26px; }
            }

        `;

        document.head.appendChild(style);
    }

    title.innerHTML = HEADER_LOGO_SVG;
    title.setAttribute("aria-label", SITE_DATA.siteName);
}


/* =========================================================
   10-و. الاسم الكبير في الوسط بنفس شكل اللوكو
   ========================================================= */

function getLogoSvg(className, clipId) {

    return HEADER_LOGO_SVG
        .replace('class="brand-logo"', 'class="' + className + '"')
        .split("orionLogoClipN").join(clipId);
}

function setupHeroLogo() {

    const title = document.querySelector(".hero h2");

    if (!title || title.querySelector(".hero-logo")) {
        return;
    }

    title.classList.add("hero-title");
    title.innerHTML = getLogoSvg("hero-logo", "orionHeroClipN");
    title.setAttribute("aria-label", SITE_DATA.siteName);
}


/* =========================================================
   11. تطبيق معلومات الأقسام
   ========================================================= */

function applySectionData() {

    fillSection("web-projects", WEB_SECTION);
    fillSection("iot-projects", IOT_SECTION);

}

function fillSection(sectionId, data) {

    const section = document.getElementById(sectionId);

    if (!section) {
        return;
    }

    const label = section.querySelector("[data-section-label]");
    const title = section.querySelector("[data-section-title]");
    const description = section.querySelector("[data-section-description]");

    if (label) { label.textContent = data.label; }
    if (title) { title.textContent = data.title; }
    if (description) { description.textContent = data.description; }
}


/* =========================================================
   11-ب. قسم "لماذا ORION" (يُنشأ بالكامل من ABOUT_SECTION)
   ========================================================= */

function setupAboutSection() {

    const contact = document.getElementById("contact");

    if (!contact || document.getElementById("about")) {
        return;
    }

    const section = makeEl("section", "about");
    section.id = "about";

    const container = makeEl("div", "container");

    const header = makeEl("div", "project-section-header");
    header.appendChild(makeEl("h2", "section-title", ABOUT_SECTION.title));
    header.appendChild(makeEl("p", "section-description", ABOUT_SECTION.description));

    const grid = makeEl("div", "about-grid");

    ABOUT_SECTION.items.forEach(function (item) {
        const card = makeEl("div", "about-item");
        card.appendChild(makeEl("h3", "", item.title));
        card.appendChild(makeEl("p", "", item.text));
        grid.appendChild(card);
    });

    container.appendChild(header);
    container.appendChild(grid);
    section.appendChild(container);

    contact.parentNode.insertBefore(section, contact);

    /* رابط في القائمة قبل "تواصل معنا" */
    const contactLink = document.querySelector('nav a[href="#contact"]');

    if (contactLink && !document.querySelector('nav a[href="#about"]')) {
        const aboutLink = makeEl("a", "", "لماذا ORION");
        aboutLink.href = "#about";
        contactLink.parentNode.insertBefore(aboutLink, contactLink);
    }
}


/* =========================================================
   12. أداة صغيرة لإنشاء العناصر
   ========================================================= */

function makeEl(tag, className, text) {

    const el = document.createElement(tag);

    if (className) { el.className = className; }
    if (text !== undefined) { el.textContent = text; }

    return el;
}


/* =========================================================
   13. إنشاء المشاريع داخل الصفحة
   ========================================================= */

function renderProjects(projects, sectionId) {

    const section = document.getElementById(sectionId);

    if (!section) {
        console.warn("Section not found:", sectionId);
        return;
    }

    const grid = section.querySelector(".projects-grid");

    if (!grid) {
        console.warn("Projects grid not found:", sectionId);
        return;
    }

    grid.innerHTML = "";

    projects.forEach(function (project) {
        grid.appendChild(createProjectCard(project));
        document.body.appendChild(createProjectModal(project));
    });
}


/* تحميل الصور بكسل (lazy) حتى تفتح الصفحة أسرع على الموبايل */
function makeLazyImage(src, alt) {

    const image = document.createElement("img");
    image.src = src;
    image.alt = alt;
    image.loading = "lazy";
    image.decoding = "async";

    return image;
}


/* =========================================================
   14. بطاقة المشروع
   ========================================================= */

function createProjectCard(project) {

    const article = makeEl("article", "project-card");
    article.dataset.category = project.category;
    article.dataset.projectId = project.id;
    article.classList.add("card-visible");

    /* صور البطاقات تتحمل مباشرة (بدون lazy) حتى تظهر الأقسام فوراً */
    const image = makeLazyImage(project.image, project.name);
    image.loading = "eager";

    const content = makeEl("div", "card-content");

    const button = makeEl("button", "btn btn-small project-details-btn", "عرض التفاصيل");
    button.type = "button";
    button.dataset.project = project.id;

    content.appendChild(makeEl("span", "project-category", project.category));
    content.appendChild(makeEl("h3", "", project.name));
    content.appendChild(makeEl("p", "", project.shortDescription));
    content.appendChild(button);

    article.appendChild(image);
    article.appendChild(content);

    return article;
}


/* =========================================================
   15. نافذة تفاصيل المشروع
   ========================================================= */

function createProjectModal(project) {

    const modal = makeEl("div", "project-modal");
    modal.id = project.id;
    modal.setAttribute("aria-hidden", "true");

    const overlay = makeEl("div", "modal-overlay");

    const modalContent = makeEl("div", "modal-content");
    modalContent.setAttribute("role", "dialog");
    modalContent.setAttribute("aria-modal", "true");
    modalContent.setAttribute("aria-labelledby", project.id + "-title");

    const closeButton = makeEl("button", "modal-close");
    closeButton.type = "button";
    closeButton.setAttribute("aria-label", "إغلاق");
    closeButton.innerHTML = "&times;";

    const mainImage = makeLazyImage(project.image, project.name);
    mainImage.className = "modal-main-image";

    const body = makeEl("div", "modal-body");

    const heading = makeEl("h2", "", project.name);
    heading.id = project.id + "-title";

    body.appendChild(makeEl("span", "project-category", project.category));
    body.appendChild(heading);

    addModalHeading(body, "عن المشروع");
    addModalParagraph(body, project.description);

    addModalHeading(
        body,
        project.category === "IoT Project" ? "آلية عمل المشروع" : "آلية العمل"
    );

    if (project.howItWorksIntro) {
        addModalParagraph(body, project.howItWorksIntro);
    }

    if (Array.isArray(project.howItWorks)) {
        addSteps(body, project.howItWorks);
    } else {
        addModalParagraph(body, project.howItWorks);
    }

    if (project.howItWorksGoal) {
        addGoalBox(body, "الهدف النهائي للمشروع", project.howItWorksGoal);
    }

    if (project.components && project.components.length > 0) {
        addModalHeading(body, "المكونات المستخدمة");
        addList(body, project.components);
    }

    if (project.technologies && project.technologies.length > 0) {
        addModalHeading(body, "التقنيات المستخدمة");
        addList(body, project.technologies);
    }

    if (project.software && project.software.length > 0) {
        addModalHeading(body, "البرمجيات والتقنيات");
        addList(body, project.software);
    }

    addModalHeading(body, "صور المشروع");

    const gallery = makeEl("div", "project-gallery");

    if (project.gallery && project.gallery.length > 0) {
        project.gallery.forEach(function (imagePath, index) {
            const galleryImage = document.createElement("img");
            galleryImage.dataset.src = imagePath;
            galleryImage.alt = project.name + " - صورة " + (index + 1);
            galleryImage.decoding = "async";
            gallery.appendChild(galleryImage);
        });
    }

    body.appendChild(gallery);

    /* رابط المشروع: لمشاريع Web فقط */
    if (project.category === "Web Development") {

        const projectLink = makeEl("a", "btn", "زيارة الموقع");
        projectLink.target = "_blank";
        projectLink.rel = "noopener noreferrer";

        if (project.link && !project.link.startsWith("ضع رابط")) {

            projectLink.href = project.link;

        } else {

            projectLink.href = "#";
            projectLink.addEventListener("click", function (event) {
                event.preventDefault();
                alert("رابط هذا المشروع لم تتم إضافته بعد.");
            });

        }

        body.appendChild(projectLink);
    }

    /* شريط ثابت بارتفاع صفر: يبقي زر الإغلاق ظاهراً أثناء التمرير بدون أن يزيح المحتوى */
    const closeBar = makeEl("div", "modal-close-bar");
    closeBar.appendChild(closeButton);

    modalContent.appendChild(closeBar);
    modalContent.appendChild(mainImage);
    modalContent.appendChild(body);

    modal.appendChild(overlay);
    modal.appendChild(modalContent);

    return modal;
}


/* =========================================================
   16. عناصر داخل النافذة
   ========================================================= */

function addModalHeading(parent, text) {
    parent.appendChild(makeEl("h3", "", text));
}

function addModalParagraph(parent, text) {
    parent.appendChild(makeEl("p", "", text || ""));
}

function addSteps(parent, steps) {

    const list = makeEl("ol", "project-steps");

    steps.forEach(function (step) {

        const item = makeEl("li", "step-item");
        const stepBody = makeEl("div", "step-body");

        if (typeof step === "string") {

            stepBody.appendChild(makeEl("p", "step-text", step));

        } else {

            if (step.title) {
                stepBody.appendChild(makeEl("h4", "step-title", step.title));
            }

            if (step.text) {
                stepBody.appendChild(makeEl("p", "step-text", step.text));
            }

        }

        item.appendChild(stepBody);
        list.appendChild(item);
    });

    parent.appendChild(list);
}

function addGoalBox(parent, heading, text) {

    const box = makeEl("div", "project-goal");

    box.appendChild(makeEl("strong", "", heading));
    box.appendChild(makeEl("p", "", text));

    parent.appendChild(box);
}

function addList(parent, items) {

    const list = makeEl("ul", "project-details-list");

    items.forEach(function (item) {
        list.appendChild(makeEl("li", "", item));
    });

    parent.appendChild(list);
}


/* =========================================================
   17. السنة الحالية
   ========================================================= */

function updateCurrentYear() {

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}


/* =========================================================
   18. تشغيل وظائف الموقع
   ========================================================= */

function initializeSiteFeatures() {

    initializeModalSystem();
    initializeLightbox();
    initializeCardAnimation();
    initializeSmoothScroll();
    initializeHeaderScroll();
    initializeImageErrorHandling();
    initializeKeyboardAccess();
    initializeProjectHover();
    initializeBeforeUnload();

}


/* =========================================================
   19. نظام النوافذ المنبثقة
   ========================================================= */

let lastOpenerButton = null;

/* تحميل صور المعرض الخاصة بنافذة معينة (مرة واحدة فقط) */
function loadModalImages(modal) {

    if (!modal) {
        return;
    }

    modal.querySelectorAll("img[data-src]").forEach(function (image) {
        image.src = image.dataset.src;
        image.removeAttribute("data-src");
    });
}

function initializeModalSystem() {

    /* نبدأ تحميل الصور قبل الضغط (ماوس/لمس/تركيز) حتى تفتح النافذة بسلاسة */
    document.querySelectorAll(".project-details-btn").forEach(function (button) {

        function preload() {
            loadModalImages(document.getElementById(button.getAttribute("data-project")));
        }

        button.addEventListener("pointerenter", preload, { once: true });
        button.addEventListener("touchstart", preload, { once: true, passive: true });
        button.addEventListener("focus", preload, { once: true });
    });


    document.querySelectorAll(".project-details-btn").forEach(function (button) {

        button.addEventListener("click", function () {

            const projectId = button.getAttribute("data-project");

            if (!projectId) {
                return;
            }

            const modal = document.getElementById(projectId);

            if (!modal) {
                console.warn("Project modal not found:", projectId);
                return;
            }

            lastOpenerButton = button;
            openModal(modal);
        });

    });

    document.querySelectorAll(".project-modal").forEach(function (modal) {

        const closeButton = modal.querySelector(".modal-close");
        const overlay = modal.querySelector(".modal-overlay");
        const content = modal.querySelector(".modal-content");

        if (closeButton) {
            closeButton.addEventListener("click", function () {
                closeModal(modal);
            });
        }

        if (overlay) {
            overlay.addEventListener("click", function () {
                closeModal(modal);
            });
        }

        if (content) {
            content.addEventListener("click", function (event) {
                event.stopPropagation();
            });
        }

    });

    /* ESC: يغلق الصورة المكبّرة أولاً، ثم النافذة */
    document.addEventListener("keydown", function (event) {

        if (event.key !== "Escape") {
            return;
        }

        if (isLightboxOpen()) {
            closeLightbox();
            return;
        }

        const activeModal = document.querySelector(".project-modal.active");

        if (activeModal) {
            closeModal(activeModal);
        }
    });
}

function openModal(modal) {

    if (!modal) {
        return;
    }

    loadModalImages(modal);

    document.querySelectorAll(".project-modal").forEach(function (item) {
        item.classList.remove("active");
        item.setAttribute("aria-hidden", "true");
    });

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    const modalContent = modal.querySelector(".modal-content");

    if (modalContent) {
        modalContent.scrollTop = 0;
    }

    const closeButton = modal.querySelector(".modal-close");

    if (closeButton) {
        setTimeout(function () {
            closeButton.focus();
        }, 100);
    }
}

function closeModal(modal) {

    if (!modal) {
        return;
    }

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");

    if (!document.querySelector(".project-modal.active")) {
        document.body.classList.remove("modal-open");

        /* إرجاع التركيز لزر "عرض التفاصيل" الذي فتح النافذة */
        if (lastOpenerButton) {
            lastOpenerButton.focus();
            lastOpenerButton = null;
        }
    }
}


/* =========================================================
   19-ب. عرض الصور بحجم كبير (Lightbox)
   ========================================================= */

let lightboxElement = null;
let lightboxImage = null;

function initializeLightbox() {

    lightboxElement = makeEl("div", "lightbox");
    lightboxElement.setAttribute("aria-hidden", "true");

    const closeButton = makeEl("button", "lightbox-close");
    closeButton.type = "button";
    closeButton.setAttribute("aria-label", "إغلاق الصورة");
    closeButton.innerHTML = "&times;";

    lightboxImage = document.createElement("img");
    lightboxImage.alt = "";

    lightboxElement.appendChild(closeButton);
    lightboxElement.appendChild(lightboxImage);
    document.body.appendChild(lightboxElement);

    closeButton.addEventListener("click", closeLightbox);

    lightboxElement.addEventListener("click", function (event) {
        if (event.target !== lightboxImage) {
            closeLightbox();
        }
    });

    /* الضغط على أي صورة في المعرض أو الصورة الرئيسية للنافذة */
    document.addEventListener("click", function (event) {

        const image = event.target.closest(".project-gallery img, .modal-main-image");

        if (image) {
            openLightbox(image.src, image.alt);
        }
    });
}

function openLightbox(src, alt) {

    if (!lightboxElement) {
        return;
    }

    lightboxImage.src = src;
    lightboxImage.alt = alt || "";

    lightboxElement.classList.add("active");
    lightboxElement.setAttribute("aria-hidden", "false");
}

function closeLightbox() {

    if (!lightboxElement) {
        return;
    }

    lightboxElement.classList.remove("active");
    lightboxElement.setAttribute("aria-hidden", "true");
}

function isLightboxOpen() {
    return Boolean(lightboxElement && lightboxElement.classList.contains("active"));
}


/* =========================================================
   20. حركة ظهور المشاريع
   ========================================================= */

function initializeCardAnimation() {

    /* لا توجد حركة انتظار: كل البطاقات ظاهرة من البداية */
    document.querySelectorAll(".project-card").forEach(function (card) {
        card.classList.add("card-visible");
    });
}


/* =========================================================
   21. Smooth Scroll
   ========================================================= */

function initializeSmoothScroll() {

    const navigationLinks = document.querySelectorAll(
        'nav a[href^="#"], .hero a[href^="#"]'
    );

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });

    });
}


/* =========================================================
   22. تأثير Header عند النزول
   ========================================================= */

function initializeHeaderScroll() {

    const header = document.querySelector("header");

    if (!header) {
        return;
    }

    function updateHeader() {
        if (window.scrollY > 50) {
            header.classList.add("header-scrolled");
        } else {
            header.classList.remove("header-scrolled");
        }
    }

    window.addEventListener("scroll", updateHeader, { passive: true });

    updateHeader();
}


/* =========================================================
   23. معالجة الصور المفقودة
   ========================================================= */

function initializeImageErrorHandling() {

    document.querySelectorAll("img").forEach(function (image) {

        /* إذا فشلت الصورة قبل إضافة المراقب */
        if (image.complete && image.naturalWidth === 0 && image.getAttribute("src")) {
            image.classList.add("image-error");
        }

        image.addEventListener("error", function () {
            image.classList.add("image-error");
        });

    });
}


/* =========================================================
   24. Hover للمشاريع
   ========================================================= */

function initializeProjectHover() {

    document.querySelectorAll(".project-card").forEach(function (card) {

        card.addEventListener("mouseenter", function () {
            card.classList.add("is-hovered");
        });

        card.addEventListener("mouseleave", function () {
            card.classList.remove("is-hovered");
        });

    });
}


/* =========================================================
   25. دعم لوحة المفاتيح
   ========================================================= */

function initializeKeyboardAccess() {

    document.querySelectorAll(".project-details-btn").forEach(function (button) {

        button.addEventListener("keydown", function (event) {

            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                button.click();
            }

        });

    });
}


/* =========================================================
   26. تنظيف الصفحة قبل المغادرة
   ========================================================= */

function initializeBeforeUnload() {

    window.addEventListener("beforeunload", function () {
        document.body.classList.remove("modal-open");
    });
}


/* =========================================================
   انتهى INDEX.JS
   ========================================================= */