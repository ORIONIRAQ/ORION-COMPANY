/* =========================================================
   ORION - INDEX.JS
   شركة متخصصة في تطوير المواقع وحلول إنترنت الأشياء IoT.
   كل البيانات (الاسم، الصور، المشاريع، الروابط) موجودة هنا فقط.
   لا تحتاج لتعديل HTML عند تغيير البيانات.
   ========================================================= */


/* =========================================================
   1. معلومات الموقع الشخصية
   ========================================================= */

const SITE_DATA = {
    name: "ORION",
    profileImage: "images/water1.jpg",
    introduction:
        "ORION شركة متخصصة في تطوير المواقع الإلكترونية وتصميم الأنظمة الرقمية وتنفيذ مشاريع وحلول إنترنت الأشياء IoT. نقدم حلولاً تقنية حديثة تجمع بين التصميم الاحترافي والأداء والكفاءة.",
    email: "mm9531837@gmail.com",
    siteName: "ORION",
    pageTitle: "ORION | تطوير المواقع وإنترنت الأشياء"
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

        technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
        gallery: ["images/water2.jpg"],
        link: "https://mohammedayad750.github.io/HK/"
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

        technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
        gallery: ["images/water5.jpg"],
        link: "https://mohammedayad750.github.io/sama-decor/"
    };
}


/* =========================================================
   5. المشروع الثالث - منيو مطعم الكرار (آخر مشروع في قسم WEB)
   ========================================================= */

function مشروع_منيو_مطعم() {
    return {
        id: "web-restaurant-menu",
        category: "Web Development",
        name: "منيو مطعم الكرار",

        /* ⬅️ يفضّل وضع لقطات شاشة للمنيو بأسماء خاصة بها مثل
           images/karrar-menu-1.jpg (water16 و water17 مستخدمة أيضاً في مشروع IoT) */
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

        technologies: ["HTML", "CSS", "JavaScript"],
        gallery: ["images/water20.jpg", "images/water19.jpg"],
        link: "https://mohammedayad750.github.io/Al-KarrarMenu/"
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
   ⭐ لإضافة مشروع جديد: أنشئ دالة له ثم أضفها هنا.
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
    applySiteData();
    applySectionData();

    renderProjects(PROJECTS.web, "web-projects");
    renderProjects(PROJECTS.iot, "iot-projects");

    updateCurrentYear();
    initializeSiteFeatures();

});


/* =========================================================
   9. تنسيق الخطوات المرقمة (يُضاف تلقائياً بدون تعديل CSS)
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
        img.alt = "الصورة الشخصية لـ " + SITE_DATA.name;
    });

    document.querySelectorAll("[data-introduction]").forEach(function (el) {
        el.textContent = SITE_DATA.introduction;
    });

    document.querySelectorAll("[data-email]").forEach(function (el) {
        el.textContent = SITE_DATA.email;
        el.href = "mailto:" + SITE_DATA.email;
    });
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

    /* حذف المشاريع القديمة الموجودة في HTML حتى لا تتكرر */
    grid.innerHTML = "";

    projects.forEach(function (project) {
        grid.appendChild(createProjectCard(project));
        document.body.appendChild(createProjectModal(project));
    });
}


/* =========================================================
   14. بطاقة المشروع
   ========================================================= */

function createProjectCard(project) {

    const article = makeEl("article", "project-card");
    article.dataset.category = project.category;
    article.dataset.projectId = project.id;

    const image = document.createElement("img");
    image.src = project.image;
    image.alt = project.name;

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

    const closeButton = makeEl("button", "modal-close");
    closeButton.type = "button";
    closeButton.setAttribute("aria-label", "إغلاق");
    closeButton.innerHTML = "&times;";

    const mainImage = makeEl("img", "modal-main-image");
    mainImage.src = project.image;
    mainImage.alt = project.name;

    const body = makeEl("div", "modal-body");

    body.appendChild(makeEl("span", "project-category", project.category));
    body.appendChild(makeEl("h2", "", project.name));

    /* عن المشروع */
    addModalHeading(body, "عن المشروع");
    addModalParagraph(body, project.description);

    /* آلية العمل */
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

    /* المكونات */
    if (project.components && project.components.length > 0) {
        addModalHeading(body, "المكونات المستخدمة");
        addList(body, project.components);
    }

    /* التقنيات */
    if (project.technologies && project.technologies.length > 0) {
        addModalHeading(body, "التقنيات المستخدمة");
        addList(body, project.technologies);
    }

    if (project.software && project.software.length > 0) {
        addModalHeading(body, "البرمجيات والتقنيات");
        addList(body, project.software);
    }

    /* معرض الصور */
    addModalHeading(body, "صور المشروع");

    const gallery = makeEl("div", "project-gallery");

    if (project.gallery && project.gallery.length > 0) {
        project.gallery.forEach(function (imagePath, index) {
            const image = document.createElement("img");
            image.src = imagePath;
            image.alt = project.name + " - صورة " + (index + 1);
            gallery.appendChild(image);
        });
    }

    body.appendChild(gallery);

    /* رابط المشروع: يظهر فقط لمشاريع Web Development */
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

    modalContent.appendChild(closeButton);
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

function initializeModalSystem() {

    /* فتح المشروع */
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

            openModal(modal);
        });

    });

    /* الإغلاق: زر X + الخلفية */
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

        /* منع الإغلاق عند الضغط على المحتوى */
        if (content) {
            content.addEventListener("click", function (event) {
                event.stopPropagation();
            });
        }

    });

    /* ESC لإغلاق النافذة */
    document.addEventListener("keydown", function (event) {

        if (event.key !== "Escape") {
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

    /* إغلاق أي نافذة أخرى */
    document.querySelectorAll(".project-modal").forEach(function (item) {
        item.classList.remove("active");
        item.setAttribute("aria-hidden", "true");
    });

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");

    /* منع تمرير الصفحة */
    document.body.classList.add("modal-open");

    /* إعادة المحتوى إلى الأعلى */
    const modalContent = modal.querySelector(".modal-content");

    if (modalContent) {
        modalContent.scrollTop = 0;
    }

    /* التركيز على زر الإغلاق */
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
    }
}


/* =========================================================
   20. حركة ظهور المشاريع
   ========================================================= */

function initializeCardAnimation() {

    const projectCards = document.querySelectorAll(".project-card");

    if ("IntersectionObserver" in window) {

        const cardObserver = new IntersectionObserver(function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("card-visible");
                    observer.unobserve(entry.target);
                }

            });

        }, { threshold: 0.15 });

        projectCards.forEach(function (card) {
            cardObserver.observe(card);
        });

    } else {

        projectCards.forEach(function (card) {
            card.classList.add("card-visible");
        });

    }
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