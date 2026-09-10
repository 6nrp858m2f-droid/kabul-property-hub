/* KBL PROPERTY HUB
   Lightweight multilingual property frontend.
   Replace REPORT_EMAIL with the email address you want to receive reports.
*/
const MY_WHATSAPP_NUMBER = "93707740762";
const REPORT_EMAIL = "YOUR_EMAIL@example.com";

const properties = [
  {
    id:"KBL-101", type:"sale", status:"available", verified:true,
    neighborhood:{en:"Khair Khana",fa:"خیرخانه",ps:"خیرخانه"},
    district:{en:"Kabul District 11",fa:"ناحیه ۱۱ کابل",ps:"د کابل ۱۱مه ناحیه"},
    price:105000,currency:"USD",negotiable:true,rooms:4,bathrooms:3,size:330,floor:1,furnished:false,
    description:{
      en:"Spacious four-room apartment with rooftop access, parking and modern facilities.",
      fa:"آپارتمان جادار چهار اتاقه با دسترسی به بام، پارکینگ و امکانات مناسب.",
      ps:"پراخه څلور کوټې اپارتمان چې بام ته لاسرسی، پارکینګ او مناسبې اسانتیاوې لري."
    },
    features:{
      kitchen:{en:"Available",fa:"موجود",ps:"شته"},
      documents:{en:"Sharia & Legal",fa:"شرعی و قانونی",ps:"شرعي او قانوني"},
      heating:{en:"Central Heating",fa:"مرکز گرمی",ps:"مرکزي تودوخه"},
      electricity:{en:"Sub-meter",fa:"میتر فرعی",ps:"فرعي میتر"},
      water:{en:"Fresh Water",fa:"آب شیرین",ps:"پاکې اوبه"},
      fireProtection:{en:"Available",fa:"موجود",ps:"شته"},
      security:{en:"CCTV",fa:"کمره امنیتی",ps:"امنیتي کمرې"},
      parking:{en:"Available",fa:"موجود",ps:"شته"}
    },
    images:[
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=78",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=78",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=78",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=78"
    ]
  },
  {
    id:"KBL-102", type:"rent", status:"available", verified:true,
    neighborhood:{en:"Macroyan",fa:"مکروریان",ps:"مکروریان"},
    district:{en:"Kabul District 9",fa:"ناحیه ۹ کابل",ps:"د کابل ۹مه ناحیه"},
    price:65000,currency:"AFN",negotiable:false,rooms:3,bathrooms:2,size:180,floor:3,furnished:true,
    description:{
      en:"Furnished three-room apartment in a convenient residential area with parking and reliable utilities.",
      fa:"آپارتمان مبله سه اتاقه در منطقه مسکونی مناسب با پارکینگ و امکانات ضروری.",
      ps:"په مناسب استوګنیزه سیمه کې درې کوټې مبله اپارتمان، پارکینګ او اړینې اسانتیاوې لري."
    },
    features:{
      kitchen:{en:"Available",fa:"موجود",ps:"شته"},
      documents:{en:"Sharia & Legal",fa:"شرعی و قانونی",ps:"شرعي او قانوني"},
      heating:{en:"Central Heating",fa:"مرکز گرمی",ps:"مرکزي تودوخه"},
      electricity:{en:"Available",fa:"موجود",ps:"شته"},
      water:{en:"Available",fa:"موجود",ps:"شته"},
      fireProtection:{en:"Available",fa:"موجود",ps:"شته"},
      security:{en:"CCTV",fa:"کمره امنیتی",ps:"امنیتي کمرې"},
      parking:{en:"Available",fa:"موجود",ps:"شته"}
    },
    images:[
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=78",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=78",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=78",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=78"
    ]
  },
  {
    id:"KBL-103", type:"sale", status:"available", verified:false,
    neighborhood:{en:"Shar-e Naw",fa:"شهر نو",ps:"شېر نو"},
    district:{en:"Kabul District 10",fa:"ناحیه ۱۰ کابل",ps:"د کابل ۱۰مه ناحیه"},
    price:8500000,currency:"AFN",negotiable:true,rooms:5,bathrooms:3,size:420,floor:2,furnished:false,
    description:{
      en:"Large five-room property suitable for a family looking for space in central Kabul.",
      fa:"خانه بزرگ پنج اتاقه مناسب خانواده‌هایی که به فضای بیشتر در مرکز کابل نیاز دارند.",
      ps:"لویه پنځه کوټې کور د هغو کورنیو لپاره مناسب دی چې په مرکزي کابل کې پراخ ځای غواړي."
    },
    features:{
      kitchen:{en:"Available",fa:"موجود",ps:"شته"},
      documents:{en:"Sharia & Legal",fa:"شرعی و قانونی",ps:"شرعي او قانوني"},
      heating:{en:"Central Heating",fa:"مرکز گرمی",ps:"مرکزي تودوخه"},
      electricity:{en:"Available",fa:"موجود",ps:"شته"},
      water:{en:"Fresh Water",fa:"آب شیرین",ps:"پاکې اوبه"},
      fireProtection:{en:"Available",fa:"موجود",ps:"شته"},
      security:{en:"CCTV",fa:"کمره امنیتی",ps:"امنیتي کمرې"},
      parking:{en:"Available",fa:"موجود",ps:"شته"}
    },
    images:[
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=78",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=78",
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1200&q=78",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=78"
    ]
  }
];

const translations = {
  en:{
    saved:"Saved",listProperty:"List a Property",eyebrow:"KABUL PROPERTY DISCOVERY",startSearch:"Start searching",heroNote:"Verified listings. Clear information. One place.",finderEyebrow:"NEED HELP FINDING A HOME?",finderTitle:"Tired of finding a house? Don’t worry. KBL finds it for you.",finderText:"Tell us what you need, search the market, and build a shortlist without losing your place.",findForMe:"Find properties for me",verifiedOnlyShort:"Verified",commandTitle:"KBL Search",commandPlaceholder:"Search neighborhood, street, landmark or property ID...",commandSearch:"Search properties",
    heroTitle:"Find the place you want to live.",
    heroDescription:"Explore homes across Kabul, compare details, save favorites, and request a viewing through KBL.",
    rent:"Rent",buy:"Buy",all:"All",contextSearch:"Search by context",contextSearchPlaceholder:"Search by neighborhood, street, landmark or property ID...",
    district:"District",allDistricts:"All districts",neighborhood:"Neighborhood",allNeighborhoods:"All neighborhoods",
    maxPrice:"Maximum price",pricePlaceholder:"AFN",furnishing:"Furnishing",any:"Any",
    furnished:"Furnished",unfurnished:"Unfurnished",verifiedOnly:"KBL verified only",clearFilters:"Clear filters",
    featuredEyebrow:"KBL COLLECTION",featuredTitle:"Explore properties.",available:"Available",sold:"Sold",rented:"Rented",
    negotiable:"Negotiable",fixed:"Fixed",sqm:"m²",viewProperty:"View Property",bookViewing:"Book Viewing via WhatsApp",
    report:"Report",similar:"Similar Properties",features:"Property Features",kitchen:"Kitchen",documents:"Documents",
    heating:"Heating",electricity:"Electricity",water:"Water",fireProtection:"Fire Protection",security:"Security",
    parking:"Parking",noResults:"No properties match your search.",savedEmpty:"Your saved properties will appear here.",
    halalBadge:"SHARIA MARKETPLACE",halalTitle:"Clear, direct property transactions.",
    halalDescription:"KBL focuses on direct property purchases and rental agreements.",
    serviceOneTitle:"See everything.",serviceOneText:"Size, floor, facilities, documents and pricing in one place.",
    serviceTwoTitle:"Request a viewing.",serviceTwoText:"Send the property ID to KBL and arrange the next step.",
    serviceThreeTitle:"Save your shortlist.",serviceThreeText:"Save homes in your browser and return to them later.",
    footerDescription:"Kabul property discovery, organized for people.",close:"Close",
    reportTitle:"Report this property",reportText:"Tell KBL what looks wrong with this listing.",
    reportReason:"Reason",reportDetails:"Details",reportDetailsPlaceholder:"Describe the issue...",
    reportWrongInfo:"Wrong information",reportUnavailable:"Property unavailable",reportMisleading:"Misleading listing",
    reportOther:"Other",sendReport:"Prepare Email Report",cancel:"Cancel",
    reportSubject:"KBL Property Report: {id}",
    reportBody:"Property ID: {id}\nNeighborhood: {neighborhood}\nReason: {reason}\nDetails: {details}",
    emailNotSet:"Set your REPORT_EMAIL in app.js before using reports.",
    whatsappMessage:"Assalamu Alaikum. I am interested in viewing Property ID: {id} in {neighborhood}."
  },
  fa:{
    saved:"ذخیره‌شده",listProperty:"ثبت ملک",eyebrow:"جستجوی املاک کابل",startSearch:"شروع جستجو",heroNote:"املاک بررسی‌شده. معلومات روشن. همه در یک جا.",finderEyebrow:"برای پیدا کردن خانه کمک می‌خواهید؟",finderTitle:"از پیدا کردن خانه خسته شده‌اید؟ نگران نباشید. KBL برای شما پیدا می‌کند.",finderText:"نیاز خود را مشخص کنید، بازار را جستجو کنید و فهرست مورد علاقه خود را بسازید.",findForMe:"املاک را برای من پیدا کن",verifiedOnlyShort:"بررسی‌شده",commandTitle:"جستجوی KBL",commandPlaceholder:"منطقه، سرک، نشانی یا کد ملک را جستجو کنید...",commandSearch:"جستجوی املاک",
    heroTitle:"خانه‌ای را که می‌خواهید در کابل پیدا کنید.",
    heroDescription:"خانه‌های کابل را ببینید، جزئیات را مقایسه کنید، موارد مورد علاقه را ذخیره کنید و از KBL درخواست بازدید بدهید.",
    rent:"کرایه",buy:"خرید",all:"همه",contextSearch:"جستجو بر اساس متن",contextSearchPlaceholder:"بر اساس منطقه، سرک، نشانی یا کد ملک جستجو کنید...",
    district:"ناحیه",allDistricts:"تمام نواحی",neighborhood:"منطقه",allNeighborhoods:"تمام مناطق",
    maxPrice:"حداکثر قیمت",pricePlaceholder:"افغانی",furnishing:"مبله بودن",any:"همه",
    furnished:"مبله",unfurnished:"غیرمبله",verifiedOnly:"فقط املاک بررسی‌شده توسط KBL",clearFilters:"پاک کردن فیلترها",
    featuredEyebrow:"مجموعه KBL",featuredTitle:"املاک را جستجو کنید.",available:"موجود",sold:"فروخته شد",rented:"کرایه داده شد",
    negotiable:"قابل جورآمد",fixed:"قیمت ثابت",sqm:"متر مربع",viewProperty:"مشاهده ملک",bookViewing:"درخواست بازدید از واتساپ",
    report:"گزارش",similar:"املاک مشابه",features:"امکانات ملک",kitchen:"آشپزخانه",documents:"اسناد",
    heating:"گرمایش",electricity:"برق",water:"آب",fireProtection:"اطفائیه",security:"امنیت",parking:"پارکینگ",
    noResults:"هیچ ملکی مطابق جستجوی شما پیدا نشد.",savedEmpty:"املاک ذخیره‌شده شما در اینجا نمایش داده می‌شوند.",
    halalBadge:"بازار املاک شرعی",halalTitle:"معاملات روشن و مستقیم املاک.",
    halalDescription:"KBL روی خرید مستقیم ملک و قراردادهای کرایه تمرکز دارد. خدمات قرضه و مورگیج ندارد.",
    serviceOneTitle:"همه جزئیات را ببینید.",serviceOneText:"مساحت (متر مربع)، طبقه، امکانات، اسناد و قیمت در یک جا.",
    serviceTwoTitle:"درخواست بازدید.",serviceTwoText:"کد ملک را برای KBL بفرستید و مرحله بعد را هماهنگ کنید.",
    serviceThreeTitle:"فهرست خود را ذخیره کنید.",serviceThreeText:"خانه‌ها را در مرورگر ذخیره کنید و بعداً دوباره ببینید.",
    footerDescription:"جستجوی منظم املاک کابل برای مردم.",close:"بستن",
    reportTitle:"گزارش این ملک",reportText:"مشکل موجود در این آگهی را به KBL اطلاع دهید.",
    reportReason:"دلیل",reportDetails:"جزئیات",reportDetailsPlaceholder:"مشکل را توضیح دهید...",
    reportWrongInfo:"اطلاعات نادرست",reportUnavailable:"ملک دیگر موجود نیست",reportMisleading:"آگهی گمراه‌کننده",
    reportOther:"سایر",sendReport:"آماده‌سازی گزارش ایمیل",cancel:"لغو",
    reportSubject:"گزارش ملک KBL: {id}",
    reportBody:"کد ملک: {id}\nمنطقه: {neighborhood}\nدلیل: {reason}\nجزئیات: {details}",
    emailNotSet:"قبل از گزارش، REPORT_EMAIL را در app.js وارد کنید.",
    whatsappMessage:"السلام علیکم. من علاقه‌مند به بازدید از ملک با کد {id} در منطقه {neighborhood} هستم."
  },
  ps:{
    saved:"خوندي شوي",listProperty:"خپل ملک ثبت کړئ",eyebrow:"د کابل د ملکونو لټون",startSearch:"لټون پیل کړئ",heroNote:"تایید شوي ملکونه. روښانه معلومات. هر څه په یوه ځای کې.",finderEyebrow:"د کور په موندلو کې مرسته غواړئ؟",finderTitle:"د کور په موندلو ستړي شوي یاست؟ اندېښنه مه کوئ. KBL یې ستاسو لپاره پیدا کوي.",finderText:"خپلې اړتیاوې وټاکئ، بازار ولټوئ او خپلې خوښې ملکونه خوندي کړئ.",findForMe:"زما لپاره ملکونه پیدا کړه",verifiedOnlyShort:"تایید شوي",commandTitle:"د KBL لټون",commandPlaceholder:"سیمه، سړک، پته یا د ملک کوډ ولټوئ...",commandSearch:"ملکونه ولټوئ",
    heroTitle:"په کابل کې هغه کور پیدا کړئ چې غواړئ پکې ژوند وکړئ.",
    heroDescription:"په کابل کې کورونه وګورئ، معلومات پرتله کړئ، خپلې خوښې خوندي کړئ او د KBL له لارې د لیدنې غوښتنه وکړئ.",
    rent:"کرایه",buy:"پېرود",all:"ټول",contextSearch:"د متن له مخې لټون",contextSearchPlaceholder:"د سیمې، سړک، پته یا ملک کوډ له مخې لټون وکړئ...",
    district:"ناحیه",allDistricts:"ټولې ناحیې",neighborhood:"سیمه",allNeighborhoods:"ټولې سیمې",
    maxPrice:"اعظمي بیه",pricePlaceholder:"افغانۍ",furnishing:"مبله حالت",any:"هر ډول",
    furnished:"مبله",unfurnished:"غیر مبله",verifiedOnly:"یوازې د KBL تایید شوي ملکونه",clearFilters:"فلټرونه پاک کړئ",
    featuredEyebrow:"د KBL ټولګه",featuredTitle:"ملکونه وپلټئ.",available:"موجود",sold:"پلورل شوی",rented:"کرایه شوی",
    negotiable:"د جوړجاړي وړ",fixed:"ثابته بیه",sqm:"مربع متر",viewProperty:"ملک وګورئ",bookViewing:"د WhatsApp له لارې د لیدنې غوښتنه",
    report:"راپور",similar:"ورته ملکونه",features:"د ملک اسانتیاوې",kitchen:"پخلنځی",documents:"اسناد",
    heating:"تودوخه",electricity:"برېښنا",water:"اوبه",fireProtection:"د اور وژنه",security:"امنیت",parking:"پارکینګ",
    noResults:"ستاسو د لټون سره سم ملک پیدا نشو.",savedEmpty:"ستاسو خوندي شوي ملکونه به دلته ښکاره شي.",
    halalBadge:"د شریعت بازار",halalTitle:"روښانه او مستقیم د ملکونو معاملات.",
    halalDescription:"KBL پر مستقیم پېرود او کرایي تړونونو تمرکز کوي. د سودي قرضې او مورگیج خدمتونه نشته.",
    serviceOneTitle:"ټول معلومات وګورئ.",serviceOneText:"مساحت، پوړ، اسانتیاوې، اسناد او بیه په یوه ځای کې.",
    serviceTwoTitle:"د لیدنې غوښتنه وکړئ.",serviceTwoText:"د ملک کوډ KBL ته ولېږئ او بل ګام تنظیم کړئ.",
    serviceThreeTitle:"خپله لنډه فهرست خوندي کړئ.",serviceThreeText:"کورونه په خپل براوزر کې خوندي کړئ او وروسته یې بیا وګورئ.",
    footerDescription:"د کابل د ملکونو منظم لټون د خلکو لپاره.",close:"بندول",
    reportTitle:"د دې ملک راپور",reportText:"KBL ته ووایاست چې په دې اعلان کې څه ستونزه ده.",
    reportReason:"دلیل",reportDetails:"تفصیل",reportDetailsPlaceholder:"ستونزه تشریح کړئ...",
    reportWrongInfo:"ناسم معلومات",reportUnavailable:"ملک نور موجود نه دی",reportMisleading:"ګمراه کوونکی اعلان",
    reportOther:"نور",sendReport:"د ایمیل راپور چمتو کړئ",cancel:"لغوه",
    reportSubject:"د KBL ملک راپور: {id}",
    reportBody:"د ملک کوډ: {id}\nسیمه: {neighborhood}\nدلیل: {reason}\nتفصیل: {details}",
    emailNotSet:"د راپور لپاره لومړی په app.js کې REPORT_EMAIL داخل کړئ.",
    whatsappMessage:"السلام علیکم. زه غواړم د {id} ملک په {neighborhood} کې د لیدنې لپاره معلومات واخلم."
  }
};

let currentLanguage=localStorage.getItem("kbl_language")||"en";
let purpose="all";
let savedProperties=JSON.parse(localStorage.getItem("kbl_saved_properties")||"[]");
const carouselTimers=new Map();
const carouselStates=new Map();
const imageCache=new Map();
let toastTimer=null;

const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);
const t=key=>(translations[currentLanguage]?.[key]??translations.en[key]??key);

function localized(obj){return obj?.[currentLanguage]??obj?.en??""}
function esc(value){
  return String(value??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
}
function formatPrice(p){
  const locale=currentLanguage==="en"?"en-US":currentLanguage==="fa"?"fa-AF":"ps-AF";
  const n=new Intl.NumberFormat(locale).format(p.price);
  return p.currency==="USD"?`$${n}`:`${n} AFN`;
}
function statusText(p){return p.status==="sold"?t("sold"):p.status==="rented"?t("rented"):t("available")}
function buildWhatsAppLink(p){
  const message=t("whatsappMessage")
    .replace("{id}",p.id)
    .replace("{neighborhood}",localized(p.neighborhood));
  return `https://wa.me/${MY_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
function showToast(message){
  const el=$("#toast");
  if(!el)return;
  el.textContent=message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>el.classList.remove("show"),2600);
}

function applyLanguage(){
  document.documentElement.lang=currentLanguage;
  document.documentElement.dir=currentLanguage==="en"?"ltr":"rtl";
  $$("[data-i18n]").forEach(el=>{el.textContent=t(el.dataset.i18n)});
  $$("[data-i18n-placeholder]").forEach(el=>{el.placeholder=t(el.dataset.i18nPlaceholder)});
  $$(".language-button").forEach(b=>b.classList.toggle("active",b.dataset.language===currentLanguage));
  localStorage.setItem("kbl_language",currentLanguage);
  populateFilters();
  renderAll();
}

function setLanguage(lang){
  if(!translations[lang])return;
  currentLanguage=lang;
  applyLanguage();
}

function populateFilters(){
  const district=$("#districtFilter");
  const neighborhood=$("#neighborhoodFilter");
  if(!district||!neighborhood)return;
  const oldDistrict=district.value,oldNeighborhood=neighborhood.value;
  const districts=[...new Set(properties.map(p=>p.district.en))];
  const neighborhoods=[...new Set(properties.map(p=>p.neighborhood.en))];
  district.innerHTML=`<option value="">${esc(t("allDistricts"))}</option>`+
    districts.map(d=>{
      const p=properties.find(x=>x.district.en===d);
      return `<option value="${esc(d)}">${esc(localized(p.district))}</option>`;
    }).join("");
  neighborhood.innerHTML=`<option value="">${esc(t("allNeighborhoods"))}</option>`+
    neighborhoods.map(n=>{
      const p=properties.find(x=>x.neighborhood.en===n);
      return `<option value="${esc(n)}">${esc(localized(p.neighborhood))}</option>`;
    }).join("");
  if(district.querySelector(`option[value="${CSS.escape(oldDistrict)}"]`))district.value=oldDistrict;
  if(neighborhood.querySelector(`option[value="${CSS.escape(oldNeighborhood)}"]`))neighborhood.value=oldNeighborhood;
}

function getFiltered(){
  const search=($("#searchInput")?.value||"").trim().toLowerCase();
  const district=$("#districtFilter")?.value||"";
  const neighborhood=$("#neighborhoodFilter")?.value||"";
  const maxPrice=Number($("#priceFilter")?.value||0);
  const furnishing=$("#furnishingFilter")?.value||"";
  const verified=$("#verifiedFilter")?.checked||false;

  return properties.filter(p=>{
    if(p.status!=="available")return false;
    if(purpose!=="all" && p.type!==purpose)return false;
    if(district && p.district.en!==district)return false;
    if(neighborhood && p.neighborhood.en!==neighborhood)return false;
    if(maxPrice && p.price>maxPrice)return false;
    if(furnishing==="furnished"&&!p.furnished)return false;
    if(furnishing==="unfurnished"&&p.furnished)return false;
    if(verified&&!p.verified)return false;
    if(search){
      const text=[
        p.id,p.neighborhood.en,p.neighborhood.fa,p.neighborhood.ps,
        p.district.en,p.district.fa,p.district.ps,
        p.description.en,p.description.fa,p.description.ps
      ].join(" ").toLowerCase();
      if(!text.includes(search))return false;
    }
    return true;
  });
}

function preloadImages(p){
  if(imageCache.has(p.id))return imageCache.get(p.id);
  const list=p.images.map(src=>{
    const img=new Image();
    img.decoding="async";
    img.src=src;
    return img;
  });
  imageCache.set(p.id,list);
  return list;
}

function stopCarousel(id){
  const timer=carouselTimers.get(id);
  if(timer)clearInterval(timer);
  carouselTimers.delete(id);
}
function stopAllCarousels(){
  carouselTimers.forEach(timer=>clearInterval(timer));
  carouselTimers.clear();
}
function startCarousel(p){
  stopCarousel(p.id);
  if(p.images.length<2)return;
  preloadImages(p);
  let index=0;
  carouselStates.set(p.id,0);
  const img=document.querySelector(`[data-image-id="${p.id}"]`);
  if(!img)return;
  const tick=()=>{
    const next=(index+1)%p.images.length;
    const preloaded=preloadImages(p)[next];
    const swap=()=>{
      img.classList.add("is-changing");
      requestAnimationFrame(()=>{
        img.src=p.images[next];
        img.onload=()=>{
          requestAnimationFrame(()=>img.classList.remove("is-changing"));
        };
      });
      $(`[data-dots="${p.id}"]`)?.querySelectorAll(".image-dot").forEach((dot,i)=>{
        dot.classList.toggle("active",i===next);
      });
      index=next;
      carouselStates.set(p.id,index);
    };
    if(preloaded?.complete)swap();
    else if(preloaded)preloaded.onload=swap;
    else swap();
  };
  const timer=setInterval(tick,5000);
  carouselTimers.set(p.id,timer);
}

function cardHTML(p){
  const n=localized(p.neighborhood),d=localized(p.district),desc=localized(p.description);
  const saved=savedProperties.includes(p.id);
  return `
  <article class="property-card" data-property-id="${esc(p.id)}">
    <div class="property-media">
      <img data-image-id="${esc(p.id)}" src="${esc(p.images[0])}" alt="${esc(n)}" decoding="async" loading="lazy">
      <div class="card-top">
        <div>
          <span class="property-type">${p.type==="rent"?t("rent"):t("buy")}</span>
          ${p.verified?`<span class="status-pill">${esc(t("available"))}</span>`:""}
        </div>
        <button class="favorite-button ${saved?"saved":""}" data-save-id="${esc(p.id)}" type="button" aria-label="${esc(t("saved"))}">
          ${saved?"♥":"♡"}
        </button>
      </div>
      <div class="image-dots" data-dots="${esc(p.id)}">
        ${p.images.map((_,i)=>`<span class="image-dot ${i===0?"active":""}"></span>`).join("")}
      </div>
    </div>
    <div class="property-content">
      <div class="property-title-row">
        <div>
          <h3 class="property-title">${esc(n)}</h3>
          <p class="property-location">${esc(d)}</p>
        </div>
        <div class="property-price">${esc(formatPrice(p))}</div>
      </div>
      <div class="property-specs">
        <div class="spec"><strong>${p.size}</strong>${esc(t("sqm"))}</div>
      </div>
      <p class="property-description">${esc(desc)}</p>
      <div class="property-status-row">
        <span class="status-available">${esc(statusText(p))}</span>
        <span>${esc(p.negotiable?t("negotiable"):t("fixed"))}</span>
        <span>${esc(p.furnished?t("furnished"):t("unfurnished"))}</span>
      </div>
      <div class="action-grid">
        <button class="primary-button view-property" data-view-id="${esc(p.id)}" type="button">${esc(t("viewProperty"))}</button>
        <a class="secondary-button whatsapp-button" href="${esc(buildWhatsAppLink(p))}" target="_blank" rel="noopener noreferrer">${esc(t("bookViewing"))}</a>
        <button class="report-button" data-report-id="${esc(p.id)}" type="button">${esc(t("report"))}</button>
      </div>
    </div>
  </article>`;
}

function renderProperties(){
  const grid=$("#propertyGrid");
  if(!grid)return;
  stopAllCarousels();
  const list=getFiltered();
  $("#resultCount").textContent=`${list.length}`;
  if(!list.length){
    grid.innerHTML=`<div class="empty-state">${esc(t("noResults"))}</div>`;
    return;
  }
  grid.innerHTML=list.map(cardHTML).join("");
  list.forEach(p=>startCarousel(p));
}

function renderSaved(){
  const saved=savedProperties.map(id=>properties.find(p=>p.id===id)).filter(Boolean);
  updateSavedCount();
  return saved;
}
function updateSavedCount(){$("#savedCount").textContent=savedProperties.length}
function toggleSaved(id){
  const i=savedProperties.indexOf(id);
  if(i<0)savedProperties.push(id);else savedProperties.splice(i,1);
  localStorage.setItem("kbl_saved_properties",JSON.stringify(savedProperties));
  renderProperties();
  showToast(i<0?t("saved"):t("saved"));
}
function showSaved(){
  const list=renderSaved();
  const modal=$("#modalBackdrop"),content=$("#modalContent");
  content.innerHTML=`
    <div class="modal-body">
      <p class="eyebrow">${esc(t("saved"))}</p>
      <h2>${esc(t("saved"))}</h2>
      ${list.length?`<div class="property-grid">${list.map(cardHTML).join("")}</div>`:`<div class="empty-state">${esc(t("savedEmpty"))}</div>`}
    </div>`;
  modal.hidden=false;
  if(list.length)list.forEach(startCarousel);
  document.body.classList.add("modal-open");
}

function featureRows(p){
  const f=p.features;
  return [
    ["kitchen",f.kitchen],["documents",f.documents],["heating",f.heating],
    ["electricity",f.electricity],["water",f.water],["fireProtection",f.fireProtection],
    ["security",f.security],["parking",f.parking]
  ].map(([key,val])=>`<div><strong>${esc(t(key))}</strong><br>${esc(typeof val==="object"?localized(val):val)}</div>`).join("");
}

function showProperty(id){
  const p=properties.find(x=>x.id===id);if(!p)return;
  const modal=$("#modalBackdrop"),content=$("#modalContent");
  content.innerHTML=`
    <div class="modal-media"><img src="${esc(p.images[0])}" alt="${esc(localized(p.neighborhood))}"></div>
    <div class="modal-body">
      <p class="eyebrow">${esc(p.id)}</p>
      <h2 id="modalTitle">${esc(localized(p.neighborhood))}</h2>
      <p>${esc(localized(p.district))}</p>
      <div class="modal-price">${esc(formatPrice(p))}</div>
      <div class="detail-grid">
        <div><strong>${p.size} ${esc(t("sqm"))}</strong><span>${esc(t("size")||"Size")}</span></div>
        <div><strong>${p.floor}</strong><span>${esc(t("floor")||"Floor")}</span></div>
        <div><strong>${esc(p.furnished?t("furnished"):t("unfurnished"))}</strong><span>${esc(t("furnishing"))}</span></div>
        <div><strong>${esc(p.negotiable?t("negotiable"):t("fixed"))}</strong><span>${esc(t("price"))}</span></div>
      </div>
      <p>${esc(localized(p.description))}</p>
      <h3>${esc(t("features"))}</h3>
      <div class="features-grid">${featureRows(p)}</div>
      <div class="modal-actions">
        <a class="primary-button whatsapp-button" href="${esc(buildWhatsAppLink(p))}" target="_blank" rel="noopener noreferrer">${esc(t("bookViewing"))}</a>
        <button class="secondary-button" data-report-id="${esc(p.id)}" type="button">${esc(t("report"))}</button>
      </div>
    </div>`;
  modal.hidden=false;
  document.body.classList.add("modal-open");
}

function showReport(id){
  const p=properties.find(x=>x.id===id);if(!p)return;
  const modal=$("#modalBackdrop"),content=$("#modalContent");
  content.innerHTML=`
    <form class="report-form" id="reportForm">
      <p class="eyebrow">${esc(p.id)}</p>
      <h2>${esc(t("reportTitle"))}</h2>
      <p>${esc(t("reportText"))}</p>
      <div class="form-field">
        <label>${esc(t("reportReason"))}</label>
        <select id="reportReason">
          <option value="${esc(t("reportWrongInfo"))}">${esc(t("reportWrongInfo"))}</option>
          <option value="${esc(t("reportUnavailable"))}">${esc(t("reportUnavailable"))}</option>
          <option value="${esc(t("reportMisleading"))}">${esc(t("reportMisleading"))}</option>
          <option value="${esc(t("reportOther"))}">${esc(t("reportOther"))}</option>
        </select>
      </div>
      <div class="form-field">
        <label>${esc(t("reportDetails"))}</label>
        <textarea id="reportDetails" placeholder="${esc(t("reportDetailsPlaceholder"))}"></textarea>
      </div>
      <div class="form-actions">
        <button class="secondary-button" data-close-modal type="button">${esc(t("cancel"))}</button>
        <button class="primary-button" type="submit">${esc(t("sendReport"))}</button>
      </div>
    </form>`;
  modal.hidden=false;
  document.body.classList.add("modal-open");
  $("#reportForm").addEventListener("submit",e=>{
    e.preventDefault();
    if(!REPORT_EMAIL || REPORT_EMAIL.includes("YOUR_EMAIL")){
      showToast(t("emailNotSet"));return;
    }
    const reason=$("#reportReason").value;
    const details=$("#reportDetails").value.trim();
    const subject=t("reportSubject").replace("{id}",p.id);
    const body=t("reportBody")
      .replace("{id}",p.id)
      .replace("{neighborhood}",localized(p.neighborhood))
      .replace("{reason}",reason)
      .replace("{details}",details||"-");
    window.location.href=`mailto:${REPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

function closeModal(){
  stopAllCarousels();
  const modal=$("#modalBackdrop");
  modal.hidden=true;
  document.body.classList.remove("modal-open");
  renderProperties();
}

function clearFilters(){
  $("#searchInput").value="";
  $("#districtFilter").value="";
  $("#neighborhoodFilter").value="";
  $("#priceFilter").value="";
  $("#furnishingFilter").value="";
  $("#verifiedFilter").checked=false;
  purpose="all";
  $$(".purpose-tab").forEach(b=>b.classList.toggle("active",b.dataset.purpose==="all"));
  renderProperties();
}

function renderAll(){
  renderProperties();
  updateSavedCount();
}

document.addEventListener("click",e=>{
  if(e.target.closest("#commandButton")){openCommandPalette();return}
  if(e.target.closest("[data-command-close]")){closeCommandPalette();return}
  const cmd=e.target.closest("[data-command-action]");
  if(cmd){const action=cmd.dataset.commandAction;closeCommandPalette();if(action==="search"){$("#searchInput")?.focus();$("#searchSection")?.scrollIntoView({behavior:"smooth",block:"center"});}else if(action==="saved")showSaved();else if(action==="list")$("#listPropertyButton")?.click();return}
  const chip=e.target.closest(".filter-chip");
  if(chip&&chip.dataset.purpose){purpose=chip.dataset.purpose;$$('.purpose-tab').forEach(b=>b.classList.toggle('active',b.dataset.purpose===purpose));$$('.filter-chip').forEach(b=>b.classList.toggle('active',b===chip));renderProperties();return}
  if(e.target.closest("#verifiedChip")){const box=$("#verifiedFilter");if(box){box.checked=!box.checked;renderProperties();}return}
  if(e.target.closest("#heroSearchButton")||e.target.closest("#finderSearchButton")){$("#searchSection")?.scrollIntoView({behavior:"smooth",block:"center"});setTimeout(()=>$("#searchInput")?.focus(),450);return}
  const lang=e.target.closest(".language-button");
  if(lang){setLanguage(lang.dataset.language);return}
  const save=e.target.closest("[data-save-id]");
  if(save){toggleSaved(save.dataset.saveId);return}
  const view=e.target.closest("[data-view-id]");
  if(view){showProperty(view.dataset.viewId);return}
  const report=e.target.closest("[data-report-id]");
  if(report){showReport(report.dataset.reportId);return}
  const close=e.target.closest("[data-close-modal]")||e.target.id==="modalClose";
  if(close){closeModal();return}
  const purposeButton=e.target.closest(".purpose-tab");
  if(purposeButton){
    purpose=purposeButton.dataset.purpose;
    $$(".purpose-tab").forEach(b=>b.classList.toggle("active",b===purposeButton));
    renderProperties();return;
  }
  if(e.target.id==="clearFilters"){clearFilters();return}
  if(e.target.id==="savedButton"){showSaved();return}
  if(e.target.id==="listPropertyButton"){
    const url=buildWhatsAppLink({id:"PROPERTY LISTING",neighborhood:{en:"Kabul",fa:"کابل",ps:"کابل"}});
    window.open(url,"_blank","noopener");return;
  }
});

document.addEventListener("input",e=>{
  if(["searchInput","priceFilter"].includes(e.target.id))renderProperties();
});
document.addEventListener("change",e=>{
  if(["districtFilter","neighborhoodFilter","furnishingFilter","verifiedFilter"].includes(e.target.id))renderProperties();
});
document.addEventListener("keydown",e=>{
  if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();openCommandPalette();return}
  if(e.key==="Escape"){
    if(!$("#commandPalette")?.hidden){closeCommandPalette();return}
    if(!$("#modalBackdrop")?.hidden)closeModal();
  }
});

document.addEventListener("visibilitychange",()=>{
  if(document.hidden)stopAllCarousels();else renderProperties();
});


function openCommandPalette(){
  const el=$("#commandPalette"); if(!el)return;
  el.hidden=false; document.body.classList.add("command-open");
  setTimeout(()=>$("#commandInput")?.focus(),20);
}
function closeCommandPalette(){
  const el=$("#commandPalette"); if(!el)return;
  el.hidden=true; document.body.classList.remove("command-open");
}
function initHeaderCanvas(){
  const canvas=$("#headerCanvas"); if(!canvas)return;
  const ctx=canvas.getContext("2d"); if(!ctx)return;
  let raf=0,t=0;
  const resize=()=>{const d=Math.min(window.devicePixelRatio||1,2);canvas.width=Math.max(1,window.innerWidth*d);canvas.height=90*d;canvas.style.height="90px";ctx.setTransform(d,0,0,d,0,0)};
  const draw=()=>{t+=0.004;const w=window.innerWidth,h=90;ctx.clearRect(0,0,w,h);
    const blobs=[[w*.18+Math.sin(t)*40,35,170],[w*.62+Math.cos(t*.8)*55,45,220],[w*.92+Math.sin(t*1.2)*30,18,150]];
    blobs.forEach((b,i)=>{const g=ctx.createRadialGradient(b[0],b[1],0,b[0],b[1],b[2]);g.addColorStop(0,i===0?"rgba(77,145,255,.16)":i===1?"rgba(170,105,255,.13)":"rgba(45,200,180,.10)");g.addColorStop(1,"rgba(255,255,255,0)");ctx.fillStyle=g;ctx.beginPath();ctx.arc(b[0],b[1],b[2],0,Math.PI*2);ctx.fill()});
    raf=requestAnimationFrame(draw);
  };
  resize(); window.addEventListener("resize",resize,{passive:true}); draw();
}

function init(){
  initHeaderCanvas();
  populateFilters();
  applyLanguage();
  const page=location.pathname.split("/").pop().toLowerCase();
  if(page==="buy.html") purpose="sale";
  if(page==="rent.html") purpose="rent";
  properties.forEach(preloadImages);
  renderProperties();
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
