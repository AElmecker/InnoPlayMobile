var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'InnoPlay Mobile',
    // App id
    id: 'at.innotune.innoplaymobile',
    // Enable swipe panel
    /*panel: {
        swipe: 'left'
    },*/
    // Add default routes
    routes: [
        {
            name: 'index',
            path: '/',
            url: 'index.html'
        },
        {
            name: 'general',
            path: "/general/",
            content: '<div data-name="general" class="page">' +
            '   <div class="navbar">' +
            '       <div class="navbar-inner">' +
            '           <div class="left">' +
            '               <a class="link back" href="/">' +
            '                   <i class="icon icon-back"></i>' +
            '                   <span class="ios-only">Zurück</span>' +
            '               </a>' +
            '           </div>' +
            '           <div class="title">Allgemein</div>' +
            '       </div>' +
            '   </div>' +
            '   <div class="page-content">' +
            '       <div class="list" style="margin: 0">' +
            '           <ul>' +
            '               <li class="item-divider ">InnoTune-Version</li>' +
            '               <li class="item-content">' +
            '                   <div class="item-inner">' +
            '                       <div id="actual" class="item-title text-color-white op">Aktuell: </div>' +
            '                   </div>' +
            '               </li>' +
            '               <li class="item-content">' +
            '                   <div class="item-inner">' +
            '                       <div id="available" class="item-title text-color-white op">Neueste: </div>' +
            '                       <div class="item-after">' +
            '                           <a id="updatelink" class="button text-color-white op"' +
            '                           onclick="{$(\'#updatelink\').load(\'https://\' + document.location.hostname + \'/api/helper.php?update\',' +
            '                           function(response, status, xhr) { console.log(\'updating\') });}">' +
            '                           Updaten</a>' +
            '                       </div>' +
            '                   </div>' +
            '               </li>' +
            '               <li class="item-divider">Server</li>' +
            '               <li class="item-content">' +
            '                   <div id="address" class="item-inner text-color-white op"></div>' +
            '               </li>' +
            '               <li class="item-content">' +
            '                   <div id="port" class="item-inner text-color-white op"></div>' +
            '               </li>' +
            '               <li class="item-divider">Weitere Informationen</li>' +
            '               <li>' +
            '                   <a class="item-link item-content text-color-white op" target="_blank"' +
            '                       data-href="http://www.innotune.at/" href="http://www.innotune.at/">InnoTune-Website</a>' +
            '               </li>' +
            '           </ul>' +
            '       </div>' +
            '   </div>' +
            '</div>',
            on : {
                pageBeforeIn: function (event, page) {
                    $('#address').html('Hostname: ' + document.location.hostname);
                    $('#port').html('Port: ' + document.location.port);

                    $('#available').load('https://raw.githubusercontent.com/JHoerbst/InnoTune/master/version.txt',
                        function (response, status, xhr) {
                            if(status == "success") {
                                $('#available').html('Neueste: ' + response);
                            } else {
                                $('#available').html('Neueste: Nicht abrufbar!');
                            }
                        });

                    $('#actual').load('https://' + document.location.hostname + '/api/helper.php?getversion',
                        function (response, status, xhr) {
                            if(status == "success") {
                                $('#actual').html('Aktuell: ' + response);
                            } else {
                                $('#actual').html('Aktuell: Nicht abrufbar!');
                            }
                    });
                }
            }
        },
        {
            name: 'master-volume',
            path: '/master-volume/',
            content : '<div data-name="master-volume" class="page">\n' +
            '    <div class="navbar">\n' +
            '        <div class="navbar-inner">\n' +
            '            <div class="left">\n' +
            '                <a class="link back" href="/">\n' +
            '                    <i class="icon icon-back"></i>\n' +
            '                    <span class="ios-only">Back</span>\n' +
            '                </a>\n' +
            '            </div>\n' +
            '            <div class="title">Master-Lautstärke</div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '    <div class="page-content modal-body" id="content">\n' +
            '    </div>\n' +
            '</div>',
            on: {
                pageBeforeIn: function (event, page) {

                }
            }
        }
    ]
});

var mainView = app.views.create('.view-main');

var $$ = Dom7;

$$('.popup-volumes').on('popup:open', function (e, popup) {
    $('.popup-volumes').css('display', 'block');
    $('.popup-volumes').addClass('show');
});

$$('.popup-volumes').on('popup:closed', function (e, popup) {
    $('.popup-volumes').css('display', 'none');
    $('.popup-volumes').removeClass('show');
    $('.modal-open').removeClass('modal-open');
});