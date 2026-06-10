/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Testimonial, FAQItem } from './types';

export const STORE_NAME = "Risky Store";
export const WA_RAW_NUMBER = "088262685934";
export const WA_API_NUMBER = "6288262685934";

export const CATEGORIES = [
  { id: "semua", name: "Semua", icon: "🌟" },
  { id: "vps", name: "VPS", icon: "🖥️" },
  { id: "rdp", name: "RDP", icon: "🌐" },
  { id: "akun", name: "Akun Premium", icon: "🔑" },
  { id: "motor", name: "Motor", icon: "🏍️" },
  { id: "smartphone", name: "Smartphone", icon: "📱" },
  { id: "kue", name: "Kue Lebaran", icon: "🍪" },
  { id: "cloud", name: "Cloud Server", icon: "☁️" },
  { id: "gcp", name: "GCP", icon: "🟢" },
  { id: "aws", name: "AWS", icon: "🟠" },
  { id: "azure", name: "Azure", icon: "🔵" },
  { id: "kuota", name: "Kuota Internet", icon: "📶" }
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Honda Vario 125 CBS-ISS Matte Blue",
    price: 24325000,
    priceStr: "Rp 24.325.000",
    originalPriceStr: "Rp 25.500.000",
    discount: 5,
    category: "motor",
    badge: "Terlaris",
    description: "Honda Vario 125 CBS-ISS warna Matte Blue eksklusif. Mesin eSP 125cc yang bertenaga namun ramah lingkungan. Dilengkapi Honda Idling Stop System (ISS) untuk efisiensi bensin maksimal saat berhenti, Smart Key System anti-maling, panel instrumen full digital, ACG Starter yang sangat halus, dan bagasi lega berkapasitas 18 liter.\n\n🎁 GRATIS Ongkir JABODETABEK\n🎁 Free Helm SNI + Jaket Eksklusif Risky Store dan Toolkit Lengkap.",
    images: [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=600&auto=format&fit=crop"
    ],
    fallbacks: [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: 2,
    name: "Yamaha Aerox 155 Connected Cyber City",
    price: 27775000,
    priceStr: "Rp 27.775.000",
    originalPriceStr: "Rp 28.500.000",
    discount: 3,
    category: "motor",
    badge: "Baru",
    description: "Yamaha Aerox 155 VVA Connected edisi Cyber City terbaru dengan warna grafis futuristik. Mesin Blue Core VVA 155cc bertenaga maksimal, rem ABS responsif, dan panel speedometer pintar yang terkoneksi langsung dengan handphone Anda melalui aplikasi Y-Connect.\n\n🎁 Layanan pengiriman instan dealer bergaransi resmi\n🎁 BONUS Helm Premium + Gratis oli mesin pertama.",
    images: [
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=600&auto=format&fit=crop"
    ],
    fallbacks: [
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: 3,
    name: "iPhone 15 Pro Max 256GB - Titanium Gray",
    price: 21999000,
    priceStr: "Rp 21.999.000",
    originalPriceStr: "Rp 24.999.000",
    discount: 12,
    category: "smartphone",
    badge: "Promo",
    description: "Apple iPhone 15 Pro Max kapasitas 256GB dengan bodi Titanium kelas dirgantara yang sangat ringan sekaligus kokoh. Chip super cepat A17 Pro, lensa kamera Pro 48MP zoom optik 5x, dan port pengisian cepat USB Type-C modern.\n\n🔒 Garansi Resmi iBox Indonesia 1 Tahun\n🔒 IMEI Terdaftar Kemenperin resmi seumur hidup\n🎁 FREE Premium Case & Charger Adaptor original.",
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=600&auto=format&fit=crop"
    ],
    fallbacks: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: 4,
    name: "Kue Nastar Premium Selai Nanas Wisman",
    price: 135000,
    priceStr: "Rp 135.000",
    originalPriceStr: "Rp 160.000",
    discount: 15,
    category: "kue",
    badge: "Terlaris",
    description: "Kue Nastar Premium buatan rumah (homemade) dengan adonan Butter Wisman asli 100%. Super lumer di mulut dengan isian selai nanas madu alami buatan sendiri yang segar, legit, wangi, dan manisnya pas. Tanpa pemanis buatan, pewarna, ataupun bahan pengawet kimia.\n\n🍪 Berat bersih: 500 Gram per toples kedap udara\n🍪 DIKIRIM dengan bubble wrap tebal multi-layer anti pecah / remuk.",
    images: [
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop"
    ],
    fallbacks: [
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: 5,
    name: "Kue Putri Salju Almond Keju Premium",
    price: 125000,
    priceStr: "Rp 125.000",
    originalPriceStr: "Rp 145.000",
    discount: 14,
    category: "kue",
    badge: "Baru",
    description: "Kue lebaran Putri Salju istimewa dengan tekstur empuk, wangi butter Wisman murni, cincangan kacang almond premium yang gurih, serta taburan keju cheddar parut melimpah di bawah selimut gula salju murni premium.\n\n🍪 Berat bersih: 500 Gram dalam wadah toples cantik kedap udara\n🍪 Sangat pas disajikan saat kumpul istimewa keluarga.",
    images: [
      "https://images.unsplash.com/photo-1544982503-9f984c14501a?q=80&w=600&auto=format&fit=crop"
    ],
    fallbacks: [
      "https://images.unsplash.com/photo-1544982503-9f984c14501a?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: 6,
    name: "Netflix Premium 30 Hari - Akun Sharing Private",
    price: 29000,
    priceStr: "Rp 29.000",
    originalPriceStr: "Rp 40.000",
    discount: 27,
    category: "akun",
    badge: "Terlaris",
    description: "Langganan Netflix Premium Ultra HD 4K selama 30 hari penuh. Akun legal disuplai resmi dari platform. Sistem share private (1 profile khusus untuk Anda dengan proteksi PIN, layar tidak akan bentrok dengan user lain).\n\n✅ Kualitas Streaming Ultra HD 4K\n✅ Support semua device (Android, iOS, Smart TV, Laptop, PC, iPad)\n✅ Full Garansi ganti akun baru jika terjadi kendala.",
    images: [
      "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574375927938-d5a98e8edd86?q=80&w=600&auto=format&fit=crop"
    ],
    fallbacks: [
      "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574375927938-d5a98e8edd86?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: 7,
    name: "Spotify Premium Family 3 Bulan - Akun Individu",
    price: 45000,
    priceStr: "Rp 45.000",
    originalPriceStr: "Rp 75.000",
    discount: 40,
    category: "akun",
    badge: "Promo",
    description: "Spotify Premium individu selama 3 bulan penuh. Masuk ke grup Family Plan resmi. Nikmati jutaan lagu tanpa jeda iklan, bisa download lagu resolusi tinggi untuk didengarkan secara offline.\n\n✅ Menggunakan email Anda sendiri (bisa upgrade akun lama)\n✅ Legal 100% dan Bergaransi 3 Bulan Penuh.",
    images: [
      "https://images.unsplash.com/photo-1614680376593-902f74fa0d41?q=80&w=600&auto=format&fit=crop"
    ],
    fallbacks: [
      "https://images.unsplash.com/photo-1614680376593-902f74fa0d41?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: 8,
    name: "RDP Windows Admin Server 4 vCPU 8GB RAM",
    price: 65000,
    priceStr: "Rp 65.000",
    originalPriceStr: "Rp 95.000",
    discount: 31,
    category: "rdp",
    badge: "Terlaris",
    description: "Remote Desktop Protocol (RDP) Windows Server dengan spesifikasi gahar. Sangat stabil untuk botting, bot Telegram, re-upload video, forex trading, SEO tools, atau server database private.\n\n🖥️ Spesifikasi:\n- OS: Windows Server 2019 / 2022\n- CPU: 4 vCPU Intel Xeon\n- RAM: 8GB Dedicated RAM DDR4\n- Bandwidth: Unlimited 1Gbps Connection\n- Masa Aktif: 30 Hari penuh (Bisa perpanjang IP sama)\n\n❌ Dilarang keras untuk crypto mining, carding, hacking, spam, ddos, dan running torrent.",
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop"
    ],
    fallbacks: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: 9,
    name: "VPS Linux Ubuntu Cloud High Speed 2 vCPU 4GB",
    price: 49000,
    priceStr: "Rp 49.000",
    originalPriceStr: "Rp 75.000",
    discount: 34,
    category: "vps",
    badge: "Baru",
    description: "Virtual Private Server (VPS) Linux Linux KVM berkecepatan tinggi. Sangat cocok dideploy menjadi server web apps, hosting API, VPN / Trojan Server, atau panel control server Anda.\n\n🖥️ Spesifikasi:\n- OS: Ubuntu / Debian / CentOS (Reinstall bebas via Control Panel)\n- CPU: 2 vCPU High Performance Cloud Processor\n- RAM: 4GB Dedicated RAM\n- Storage: 50GB NVMe SSD Fast Speed\n- IP Address: Dedicated IP Publik v4\n- Port speed: up to 1 Gbps Shared.",
    images: [
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=600&auto=format&fit=crop"
    ],
    fallbacks: [
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: 10,
    name: "Google Cloud Platform GCP $300 Credit Trial",
    price: 180000,
    priceStr: "Rp 180.000",
    originalPriceStr: "Rp 250.000",
    discount: 28,
    category: "gcp",
    badge: "Promo",
    description: "Akun Google Cloud Platform (GCP) baru beserta saldo credit $300 aktif yang valid digunakan selama 90 hari. Sangat cocok untuk developer yang butuh membuat VPS spek dewa, SQL database cloud, atau Firebase premium development.\n\n🟢 Saldo $300 utuh langsung siap pakai\n🟢 Garansi login pertama aman dan clean.",
    images: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop"
    ],
    fallbacks: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: 11,
    name: "AWS Educate Starter Account Active $100 Credit",
    price: 120000,
    priceStr: "Rp 120.000",
    originalPriceStr: "Rp 180.000",
    discount: 33,
    category: "aws",
    badge: "Baru",
    description: "AWS cloud developer portal Educate Account dengan promo credit $100. Bisa dgunakan secara luas untuk membuat AWS EC2 instances, Lightsail Server, atau hosting microservices tanpa perlu memasukkan kartu kredit pribadi Anda.\n\n🟠 Saldo: $100 USD Cloud Credit\n🟠 Garansi aktif resmi dari portal AWS.",
    images: [
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&auto=format&fit=crop"
    ],
    fallbacks: [
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: 12,
    name: "Microsoft Azure Student Account - Free B1S VPS",
    price: 110000,
    priceStr: "Rp 110.000",
    originalPriceStr: "Rp 150.000",
    discount: 26,
    category: "azure",
    badge: "Promo",
    description: "Akun Azure Students terbaru aktif. Dapatkan akses credit senilai $100 gratis tanpa memverifikasi KTM (Kartu Tanda Mahasiswa). Bisa langsung digunakan untuk mendeploy Virtual Machine server Azure, database cloud, dll.\n\n🔵 Kredit $100 USD Aktif Siap Pakai\n🔵 Masa aktif akun tahan lama dengan pemakaian normal.",
    images: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop"
    ],
    fallbacks: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: 13,
    name: "Kuota Telkomsel Flash 50GB 30 Hari Nasional",
    price: 85000,
    priceStr: "Rp 85.000",
    originalPriceStr: "Rp 110.000",
    discount: 22,
    category: "kuota",
    badge: "Terlaris",
    description: "Paket isi ulang Kuota Internet Telkomsel Flash Bulk 50 GB full 24 jam tanpa pembagian aplikasi (Bebas kuota lokal/global). Berlaku nasional di seluruh Indonesia selama 30 hari penuh.\n\n📶 Proses pengisian langsung dikirim via inject nomor (bukan voucher repot)\n📶 Waktu pengerjaan super cepat 1-3 menit setelah payment konfirmasi.",
    images: [
      "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=600&auto=format&fit=crop"
    ],
    fallbacks: [
      "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: 14,
    name: "Kuota Indosat Freedom Internet 100GB 30 Hari",
    price: 122000,
    priceStr: "Rp 122.000",
    originalPriceStr: "Rp 150.000",
    discount: 18,
    category: "kuota",
    badge: "Promo",
    description: "Paket kuota internet Indosat Ooredoo Freedom Internet sebesar 100 Gigabyte penuh 24 jam tanpa ada kuota malam atau kuota lokal. Masa aktif paket 30 hari penuh.\n\n📶 Inject pulsa/kuota otomatis tinggal terima beres di nomor IM3 Anda\n📶 Uptime pengerjaan lancar bergaransi.",
    images: [
      "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=600&auto=format&fit=crop"
    ],
    fallbacks: [
      "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=600&auto=format&fit=crop"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ahmad Pratama",
    role: "Karyawan Swasta",
    stars: 5,
    quote: "VPS Linux dari Risky Store ngeri performanya. Murah tapi dapet spek kenceng buat website portfolio saya. Adminnya juga fast response ramah banget!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    productBadge: "VPS Linux 2 vCPU"
  },
  {
    id: 2,
    name: "Siti Aminah",
    role: "Ibu Rumah Tangga",
    stars: 5,
    quote: "Kue Nastar wisman-nya bener-bener nagih! Margarin & menteganya waku wangi, isian selai nanas melimpah pas buat lebaran. Langsung order 3 toples lagi kelar nyicip.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    productBadge: "Nastar Premium Wisman"
  },
  {
    id: 3,
    name: "Rian Hidayat",
    role: "Freelance Designer",
    stars: 5,
    quote: "Beli Vario CBS ISS di sini amanah banget. Proses cepat diantar langsung ke rumah tanpa ribet. Dapat bonus helm & jaket tebal. Recommended!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    productBadge: "Honda Vario 125 CBS"
  },
  {
    id: 4,
    name: "Yuki Chaniago",
    role: "Mahasiswi UI",
    stars: 5,
    quote: "Akun Netflix & Spotify diselesaikan dalam waktu kurang dari 10 menit! Legal dan hemat dompet banget buat mahasiswa. Makasih Risky Store!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    productBadge: "Netflix Premium"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: "Bagaimana cara melakukan pembelian?",
    answer: "Pilih produk yang Anda inginkan di katalog, kemudian klik tombol 'Minta Detail / Beli' atau buka detail produk lalu klik 'Order Sekarang via WhatsApp'. Anda akan langsung diarahkan ke aplikasi WhatsApp dengan template chat otomatis yang berisi detail lengkap produk tersebut."
  },
  {
    id: 2,
    question: "Apakah akun digital yang dijual di sini legal?",
    answer: "Sangat legal dan aman! Semua akun digital premium (Netflix, Spotify, Cloud Server dsb.) serta server cloud (VPS/RDP) yang kami jual bersumber dari metode legal resmi dan aman sehingga memiliki jaminan garansi penuh sesuai masa aktif."
  },
  {
    id: 3,
    question: "Bagaimana metode pembayaran di Risky Store?",
    answer: "Kami menerima berbagai macam metode pembayaran praktis mulai dari Transfer Bank lokal (BCA, Mandiri, BRI, BNI), Dompet Digital (Dana, OVO, GoPay, LinkAja) serta scan kode QRIS otomatis bebas repot."
  },
  {
    id: 4,
    question: "Berapa lama waktu proses pengiriman produk?",
    answer: "Untuk produk digital (akun & server), pengiriman instan sekitar 5 - 15 menit setelah konfirmasi transfer pembayaran. Untuk pengiriman kue lebaran mengikuti estimasi kurir ekspedisi, dan armada khusus motor kami siap mengirimkan unit 1-2 hari kerja."
  }
];
