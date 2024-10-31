document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('zodiac-form');
    const result = document.getElementById('result');
    const resetButton = document.querySelector('button[type="reset"]');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const day = parseInt(document.getElementById('day').value);
        const month = parseInt(document.getElementById('month').value);
        const year = parseInt(document.getElementById('year').value);

        const zodiac = getZodiac(day, month);
        result.innerHTML = `Zodiak kamu adalah: <strong>${zodiac.name}</strong><br>${zodiac.description}`;
    });

    resetButton.addEventListener('click', function () {
        document.getElementById('day').value = '';
        document.getElementById('month').value = '';
        document.getElementById('year').value = '';
        result.innerHTML = '';
    });

    function getZodiac(day, month) {
        const zodiacSigns = [{
                name: "Capricorn",
                startDate: {
                    month: 1,
                    day: 1
                },
                endDate: {
                    month: 1,
                    day: 19
                },
                description: "Salah satu rasi bintang zodiak yang dilambangkan dengan kambing bertanduk. Orang yang lahir di bawah rasi bintang Capricorn biasanya memiliki tanggal lahir antara 22 Desember hingga 19 Januari. Beberapa sifat dan karakteristik orang berzodiak Capricorn: Disiplin, Pekerja Keras, Bertanggung Jawab, Perfeksionis, Tekad Kuat, Ambisius, dan Penuh Komitmen."
            },
            {
                name: "Aquarius",
                startDate: {
                    month: 1,
                    day: 20
                },
                endDate: {
                    month: 2,
                    day: 18
                },
                description: "Orang yang lahir di antara tanggal 20 Januari hingga 18 Februari termasuk dalam zodiak Aquarius. Aquarius memiliki lambang seorang laki-laki yang sedang menumpahkan air dari akuarium yang sedang dibawa. Kata Aquarius berasal dari bahasa Latin yang berarti pembawa air. Aquarius memiliki beberapa ciri-ciri, di antaranya: Mudah Bergaul, Menarik Perhatian, Penuh dengan Keceriaan, Suka dengan Kebebasan, Keras Kepala, Inovatif, dan Pemikir Besar."
            },
            {
                name: "Pisces",
                startDate: {
                    month: 2,
                    day: 19
                },
                endDate: {
                    month: 3,
                    day: 20
                },
                description: "Rasi Bintang Pisces dilambangkan dengan sepasang ikan yang berenang berlawanan arah. Orang yang lahir pada tanggal 19 Februari hingga 20 Maret memiliki zodiak Pisces. Pisces merupakan rasi bintang berelemen air yang identik dengan lambang feminin atau negatif. Ciri zodiak Pisces adalah: Romantis, Pemaaf, Kreatif, Mudah terpengaruh, Emosional, Empati, dan Sensitif."
            },
            {
                name: "Aries",
                startDate: {
                    month: 3,
                    day: 21
                },
                endDate: {
                    month: 4,
                    day: 19
                },
                description: "Aries adalah zodiak yang dilambangkan oleh seekor domba jantan. Orang yang lahir di bawah zodiak Aries diyakini memiliki karakteristik tertentu, seperti: Berani, Penuh Semangat, Aktif dalam Berbagai Hal, Jujur, dan Percaya Diri."
            },
            {
                name: "Taurus",
                startDate: {
                    month: 4,
                    day: 20
                },
                endDate: {
                    month: 5,
                    day: 20
                },
                description: "Taurus adalah rasi bintang zodiak yang dilambangkan dengan banteng. Orang yang lahir antara tanggal 20 April hingga 20 Mei berzodiak Taurus. Orang yang zodiaknya Taurus memiliki karakter: Kuat, Stabil, Setia, Lembut, Bersahabat, dan Mandiri."
            },
            {
                name: "Gemini",
                startDate: {
                    month: 5,
                    day: 21
                },
                endDate: {
                    month: 6,
                    day: 20
                },
                description: "Zodiak yang identik dengan simbol kembar dan elemen udara. Gemini biasanya dikenal sebagai orang yang humoris serta banyak bicara. Akan tetapi ada juga yang menganggap mereka bermuka dua. Kepribadian yang cukup berlainan ini nyatanya tetap membuat Gemini cukup populer di lingkungan pergaulannya."
            },
            {
                name: "Cancer",
                startDate: {
                    month: 6,
                    day: 21
                },
                endDate: {
                    month: 7,
                    day: 22
                },
                description: "Cancer adalah zodiak yang dilambangkan dengan kepiting dan berada di belahan langit utara. Orang yang lahir antara tanggal 21 Juni–22 Juli berzodiak Cancer. Beberapa sifat yang dikaitkan dengan zodiak Cancer, di antaranya: Penyayang, Empati, Protektif, Pendiam, dan Emosional."
            },
            {
                name: "Leo",
                startDate: {
                    month: 7,
                    day: 23
                },
                endDate: {
                    month: 8,
                    day: 22
                },
                description: "Leo adalah zodiak yang dilambangkan dengan singa. Orang-orang yang lahir di bawah zodiak Leo adalah mereka yang lahir antara 23 Juli hingga 22 Agustus. Leo merupakan salah satu dari tiga tanda zodiak berelemen api. Elemen api dikaitkan dengan Energi, Semangat, dan Ambisi."
            },
            {
                name: "Virgo",
                startDate: {
                    month: 8,
                    day: 23
                },
                endDate: {
                    month: 9,
                    day: 22
                },
                description: "Virgo adalah tanda zodiak yang mencakup periode dari sekitar 23 Agustus hingga sekitar 22 September. Ciri khas dari Virgo adalah: Perfeksionis, Pekerja Keras, Analitis, Menghargai Detail, Logis, Cerdas, Suka Mengatur, dan Pembelajar yang Baik."
            },
            {
                name: "Libra",
                startDate: {
                    month: 9,
                    day: 23
                },
                endDate: {
                    month: 10,
                    day: 22
                },
                description: "Libra adalah zodiak yang memiliki tanggal kelahiran antara 23 September hingga 22 Oktober. Simbol zodiak Libra adalah timbangan, yang mencerminkan sifat utama Libra sebagai penyeimbang dalam kehidupan. Beberapa sifat dan karakteristik orang berzodiak Libra: Adil, Diplomatis, Intelektual, Romantis, Suka Seni, dan Mudah Beradaptasi."
            },
            {
                name: "Scorpio",
                startDate: {
                    month: 10,
                    day: 23
                },
                endDate: {
                    month: 11,
                    day: 21
                },
                description: "Secara umum, Scorpio adalah sosok yang terkenal pekerja keras, tekun, dan ambisius. Mereka juga senang membela kaum yang lebih lemah, rendah hati, serta dermawan. Ketika berkaitan dengan keyakinan, Scorpio sangat berpegang teguh pada peraturan dan nilai yang mereka yakini."
            },
            {
                name: "Sagittarius",
                startDate: {
                    month: 11,
                    day: 22
                },
                endDate: {
                    month: 12,
                    day: 21
                },
                description: "Sagitarius adalah tanda zodiak yang dilambangkan oleh anak panah atau centaur yang menembakkan busur dan anak panah. Sagitarius dikenal sebagai zodiak yang optimis dan ceria, sehingga dapat menginspirasi orang lain untuk tetap bersemangat dan berpikiran positif."
            },
        ];

        for (let i = 0; i < zodiacSigns.length; i++) {
            const sign = zodiacSigns[i];
            const startMonth = sign.startDate.month;
            const startDay = sign.startDate.day;
            const endMonth = sign.endDate.month;
            const endDay = sign.endDate.day;

            if (
                (month === startMonth && day >= startDay) ||
                (month === endMonth && day <= endDay) ||
                (month > startMonth && month < endMonth)
            ) {
                return sign;
            }
        }

        return zodiacSigns[0];
    }
});