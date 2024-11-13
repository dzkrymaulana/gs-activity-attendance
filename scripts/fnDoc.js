// ALL FUNCTION DOCUMENTATION //
// this documentation using id language

// data.js
/**
 * Obj localData
 * -> semua data sisi client disimpan pada objek ini
 *
 * checkClockInStatus(id, name)
 * -> untuk mengecek apakah nama yang dipilih sudah clock in atau  belum
 *
 * clockIn()
 * -> untuk memulai proses clock in dan memeriksa formulir
 *
 * clockInProcess()
 * -> untuk melakukan proses menyimpan data clock in
 *
 * clockOut()
 * -> untuk memulai proses clock out dan memeriksa formulir
 *
 * clockOutProcess()
 * -> untuk melakukan proses menyimpan data clock out
 *
 */

// database.js
/**
 * pada file ini terdapat objek database
 */

// form.js
/**
 * setFormRequiredLabel()
 * -> untuk menambahkan label * sebagai tanda wajib di isi untuk setiap input yang memiliki attribut [required]
 *
 * setSelectDatabase()
 * -> untuk menambahkan <option> pada setiap input yang ber tipe <select> berdasarkan kebutuhan
 * -> jenis data sesuai dari attribut data-source-database="namaDatabase"
 * -> data diambil dari objek localData.database.[namaDatabase]
 *
 * resetForm()
 * -> untuk mereset form ke tampilan awal setelah berhasil clock in dan clock out
 */

// datetime.js
/**
 * daysName = []
 * -> array nama-nama hari sesuai urutan
 *
 * monthsName = []
 * -> array nama-nama bulan sesuai urutan
 *
 * getTimestamp(format = "dd-mmmm-yyyy h:m:s", dateTime = "") -> untuk mendapatkan timestamp
 * -> param "format" berupa string format timestamp yang di inginkan dengan separator sesuai kebutuhan
 * -> format tersedia ada pada objek didalam fungsi itu
 *
 * setLocalTimestamp()
 * -> untuk menambahkan timestamp pada objek localData.timestamp
 * -> juga menambahkan waktu dan tanggal pada user interface
 */

// camera.js
/**
 * getCamera()
 * -> untuk membuka kamera
 */

// location.js
/**
 * locationInit()
 * -> untuk menginisialisasi lokasi perangkat support atau tidak
 *
 * getLocation()
 * -> untuk mendapatkan lokasi perangkat
 *
 * getLocationData()
 * -> untuk mendapatkan data lokasi (koordinat dan nama lokasi)
 * -> juga menambahkan data lokasi pada localData.location
 * -> data lokasi menggunakan plugin dari https://geoapify.com
 *
 * setLocationView()
 * -> untuk menampilkan lokasi pada user interface
 *
 * getMapView(coord = [lat, lon])
 * -> belum sempurna
 *
 * showMap()
 * -> menampilkan modal berisi map
 *
 * FUNGSI-FUNGSI LOKASI CUKUP DIPANGGIL DENGAN getLocation()
 */

// loader.js
/**
 * pageLoader(event = "show")
 * -> untuk memanggil loader halaman
 * -> event berupa "show" untuk menampilkan dan "hide" untuk menghilankan
 * -> harus ada elemen dengan id #page-loader pada html
 *
 * getLoader(selector = "", text = "Loading...")
 * -> untuk memanggil loader pada elemen tertentu
 * -> selector merupakan string selektor elemen. contoh : "main" | "#main" | ".main" ...
 * -> text merupakan teks yang akan ditampilkan disamping spinner loader
 *
 * hideLoader(selector = "")
 * -> untuk menghapus loader yang sudah dipanggil oleh getLoader()
 */

// alert.js
/**
 * getToast(text = "Toast Called!", type = "info")
 * -> untuk memanggil toast -- menggunakan toastify dari https://apvarun.github.io/toastify-js/
 * -> text akan ditampilkan pada toast
 * -> type untuk menentukan bg-color dan icon
 * -> jenis type : "success", "error", "info", "warning"
 *
 * getAlert(text = "This Alert", type = "success")
 * -> untuk memanggil alert -- menggunakan SweetAlert2 dari https://sweetalert2.github.io/
 * -> parameter text adalah teks yang akan ditampilkan
 * -> parameter type akan berpengarus pada icon dan title
 * -> jenis type : "success", "error", "warning", "info", "question"
 */
