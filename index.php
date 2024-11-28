<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Activity Attendance App">
    <meta name="author" content="Dzikry Maulana">
    <title>Activity Attendance</title>
    <link rel="icon" href="img/app-icon.png" type="image/png">
    <!-- [ Font Google ] -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet" />

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />

    <!-- [ Tostify ] -->
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css" />

    <!-- [ SweetAlert2 ] -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <!-- [ Fontawesome Icon CSS ] -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />

    <!-- [ Select2 CSS ] -->
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/select2-bootstrap-5-theme@1.3.0/dist/select2-bootstrap-5-theme.min.css" />

    <!-- [ Leaflet Js ] -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.6.0/leaflet.js"></script>
    <script type="text/javascript" src="https://api.tiles.mapbox.com/mapbox-gl-js/v1.4.0/mapbox-gl.js"></script>
    <link rel="stylesheet" type="text/css" href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.4.0/mapbox-gl.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.6.0/leaflet.css">
    <script type="text/javascript" src="https://rawgit.com/mapbox/mapbox-gl-leaflet/master/leaflet-mapbox-gl.js">
    </script>

    <!-- [ Local CSS ] -->
    <link rel="stylesheet" href="style.css" />
</head>

<body>
    <header id="page-header" class="fixed-top w-100 bg-primary d-flex justify-content-between align-items-center"
        style="height: 50px;">
        <div class="container d-flex justify-content-between align-items-center gap-2 py-2">
            <a href="javascript:" id="back-btn" class="text-white me-2 mb-0 lh-0 p-2" onclick="backPage()">
                <i class="fa fa-arrow-left"></i>
            </a>
            <h3 id="title-text" class="lh-1 mb-0 text-white"></h3>
            <a href="javascript:" id="back-btn" class="text-white me-2 mb-0 lh-0 p-2" onclick="refreshPage()">
                <i class="fa fa-rotate"></i>
            </a>
        </div>
    </header>
    <main id="main">
        <iframe id="iframe-wrapper"
            src="https://script.google.com/macros/s/AKfycbw0bc8L1fAVvuMhdCD6uE5ocmU3jcb-woC-EZ88YORvte0ZWneRqc_-WUl0CJxTS3BY/exec"
            frameborder="0" allow="geolocation;camera"></iframe>
    </main>



    <!-- [ JQUERY ] -->
    <script src="https://code.jquery.com/jquery-3.6.1.slim.js"></script>

    <!-- [ TOASTIFY ] -->
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>

    <!-- [ POPPER JS ] -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>

    <!-- [ BOOSTSTRAP ] -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

    <!-- [ FONTAWESOME JS ] -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/js/all.min.js"></script>

    <!-- [ SELECT2 JS ] -->
    <script src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.full.min.js"></script>

    <script>
        var wHeight = window.innerHeight;

        function setWrapperSize() {
            $("#iframe-wrapper").css("height", wHeight - 50);
            $("#iframe-wrapper").css("width", "100%");
        }
        $(window).ready(function() {
            setWrapperSize();
        })
        $(window).on("resize", function() {
            wHeight = window.innerHeight;
            setWrapperSize();
        })

        function backPage() {
            history.go(-1);
        }

        function refreshPage() {
            location.reload();
        }
    </script>
</body>

</html>