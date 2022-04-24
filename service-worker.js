/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "95938b46828cc377aee08ab6b932af4e"
  },
  {
    "url": "about/index.html",
    "revision": "cec31738236223aa66a1570559a7fa5d"
  },
  {
    "url": "archives/index.html",
    "revision": "01b77cfc43d08ab72f8fcbfa0e37e562"
  },
  {
    "url": "assets/css/0.styles.2187b85c.css",
    "revision": "fa83164d8dba31771f1e586074f7eea4"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/ftp_publish.7cb53ba3.png",
    "revision": "7cb53ba34a10077ad354cc1a64e1bf4c"
  },
  {
    "url": "assets/img/laozi.b7f5c5cf.jpg",
    "revision": "b7f5c5cf175da5b8f6975ddaf252fd40"
  },
  {
    "url": "assets/img/log_filter.4b4ebc81.png",
    "revision": "4b4ebc8173c49732a3dcd93191149ed4"
  },
  {
    "url": "assets/img/mailext_var.7d0c11e6.png",
    "revision": "7d0c11e615c8eac5b4cde1946aa932cb"
  },
  {
    "url": "assets/img/pipeline_job.78de7025.png",
    "revision": "78de7025ed04cb42c5c2869e63490ae2"
  },
  {
    "url": "assets/img/pipeline_syntax_example.6e3ec9c9.png",
    "revision": "6e3ec9c901522dd08751e538b3d85301"
  },
  {
    "url": "assets/img/samba_mount_on_windows_1.e09f9b43.png",
    "revision": "e09f9b43115aba84e1b6dcdfee68f343"
  },
  {
    "url": "assets/img/samba_mount_on_windows_2.4fa11028.png",
    "revision": "4fa110289afccd8e58894529408fd6c5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/when_example.33a5016c.png",
    "revision": "33a5016c91129bb2a6bd61d3259d6549"
  },
  {
    "url": "assets/js/1.fe13e067.js",
    "revision": "ffb1a73340d50989f50a3e1ab707527b"
  },
  {
    "url": "assets/js/10.c8f969ea.js",
    "revision": "d75aaea8090ebf1fd587f7e51c6d31bd"
  },
  {
    "url": "assets/js/11.1babe7f9.js",
    "revision": "6e0a44a889becb73c5323d1c491cf2d4"
  },
  {
    "url": "assets/js/12.e5f0f1ab.js",
    "revision": "29f12a00b2a103e22d0f48c9968bfe36"
  },
  {
    "url": "assets/js/13.76307b1e.js",
    "revision": "481201d136bcd45d7d6b31334bdf7eec"
  },
  {
    "url": "assets/js/14.be90ca1d.js",
    "revision": "4f9fd59f4e2c4fc41976fff56fa2e628"
  },
  {
    "url": "assets/js/15.9231813e.js",
    "revision": "0898f80b4ecfdd73bc763d94bc91f59b"
  },
  {
    "url": "assets/js/16.110c790b.js",
    "revision": "540fe90ecb477e45425e4fa9a930a2f7"
  },
  {
    "url": "assets/js/17.b223b801.js",
    "revision": "0919fc0e968461d4f23fd7e5b413329e"
  },
  {
    "url": "assets/js/18.4e11911a.js",
    "revision": "f423109de9592428ab861272628513de"
  },
  {
    "url": "assets/js/19.bfe7f5cb.js",
    "revision": "5d25fada2ec518634c3220fc33a5aaba"
  },
  {
    "url": "assets/js/2.095a4b9d.js",
    "revision": "df6e3bcefca32e7ae399b1e9e5dc844a"
  },
  {
    "url": "assets/js/20.8c60c0d0.js",
    "revision": "f3bc264ee3021cfd19bfe4c1317a19ae"
  },
  {
    "url": "assets/js/21.8574ccf8.js",
    "revision": "e037614974b9bfb159f1fd3a6789e8ed"
  },
  {
    "url": "assets/js/22.69bfdf88.js",
    "revision": "b485a99c6b8b397971d4d3cf22332faa"
  },
  {
    "url": "assets/js/23.df785507.js",
    "revision": "ca3a0aa67f010d596be95da203c6d466"
  },
  {
    "url": "assets/js/24.a6397e53.js",
    "revision": "1a68f687c2cd9597dc1d480474f705ab"
  },
  {
    "url": "assets/js/25.0f2d8d5d.js",
    "revision": "4947fd175b77e3ce2635b43ef1097874"
  },
  {
    "url": "assets/js/26.d44840c8.js",
    "revision": "a471ea5dff2c52aadfd65afa1ae80e35"
  },
  {
    "url": "assets/js/27.fffda7aa.js",
    "revision": "7d432d21dcd94842e46fd955bd11864f"
  },
  {
    "url": "assets/js/28.bcc8ce85.js",
    "revision": "ab9e0833dbe93b2c27eee9ca4d6dba25"
  },
  {
    "url": "assets/js/29.3195ba4b.js",
    "revision": "ae8be91f2ce993ac8dc8b948d9121319"
  },
  {
    "url": "assets/js/30.9d437b89.js",
    "revision": "d5741f3d67719d3897f0acb36b780451"
  },
  {
    "url": "assets/js/31.ec2bd686.js",
    "revision": "849893df7b8d756de2a7063fb3295589"
  },
  {
    "url": "assets/js/32.15787885.js",
    "revision": "7c190b28b284d1d458abb90150e55779"
  },
  {
    "url": "assets/js/33.5284ee51.js",
    "revision": "a13a36f074d00de2852aeeec67956a54"
  },
  {
    "url": "assets/js/34.c3931a47.js",
    "revision": "22674f0862b3adc5dbcc834b13bf0c75"
  },
  {
    "url": "assets/js/35.52780b14.js",
    "revision": "774b7cd6c2264599fe38fc2365e7e736"
  },
  {
    "url": "assets/js/36.1ad88f8c.js",
    "revision": "1f28af41a32e22dd3ea008f7dc3445c6"
  },
  {
    "url": "assets/js/37.d09a5833.js",
    "revision": "dbaf22d7300e385d0b4ff501a6743247"
  },
  {
    "url": "assets/js/38.b3ad7109.js",
    "revision": "061fb3a9cd328d9fce35e38bf5c07a0a"
  },
  {
    "url": "assets/js/39.29146f94.js",
    "revision": "a7abe95001fe138f0ac9575468f61afe"
  },
  {
    "url": "assets/js/4.8b1ab6fc.js",
    "revision": "f41eeb631d9b2193450b18782a4e8082"
  },
  {
    "url": "assets/js/40.1385f94d.js",
    "revision": "ba7b2985b56ddaa5b29d434d814c89ca"
  },
  {
    "url": "assets/js/41.d2490dac.js",
    "revision": "5241b49690ad5b1db59b74ec653902b4"
  },
  {
    "url": "assets/js/42.605742d5.js",
    "revision": "0dfaec2a0782c7c7c236497139f94dbb"
  },
  {
    "url": "assets/js/43.4191160a.js",
    "revision": "56155967252269177cc7b1efc1c04bce"
  },
  {
    "url": "assets/js/44.e29e82a1.js",
    "revision": "7d28d2dbbcea461d6e30a5a56e5de9c7"
  },
  {
    "url": "assets/js/45.e82c7243.js",
    "revision": "05f131d5606f4514e615639057ba3f92"
  },
  {
    "url": "assets/js/46.37228a84.js",
    "revision": "c38bb7fc89e6401b10f06aab495818fb"
  },
  {
    "url": "assets/js/47.cd722cf4.js",
    "revision": "055ee905f180903fec43caa2b526f1d9"
  },
  {
    "url": "assets/js/48.1f4ff679.js",
    "revision": "014948312a37cad7d8ecf520ea1ab6f6"
  },
  {
    "url": "assets/js/49.4e30df1d.js",
    "revision": "9b324562ac6df74ea46b2a6b6f83685f"
  },
  {
    "url": "assets/js/5.4c6bf6cf.js",
    "revision": "74a859e8a2b8cced4c82ff1aef219fca"
  },
  {
    "url": "assets/js/50.9bbe77b8.js",
    "revision": "2a644b37eee8dce60516a14856fca919"
  },
  {
    "url": "assets/js/51.f3683786.js",
    "revision": "04c0931c0f11a05e0bd3284492ac8a6e"
  },
  {
    "url": "assets/js/52.1a25fbc1.js",
    "revision": "d49467e2392a8bfa0ad6b41271931b1c"
  },
  {
    "url": "assets/js/53.973e9951.js",
    "revision": "eb9135591077f345d871044fecbeb7f2"
  },
  {
    "url": "assets/js/54.310b33e7.js",
    "revision": "0141fa885cb9dd8e538cddc3b3868828"
  },
  {
    "url": "assets/js/55.793a376e.js",
    "revision": "69ae8beb328b37248729f8cc20d336c6"
  },
  {
    "url": "assets/js/56.b31df450.js",
    "revision": "5dce94e930c19593040939f8f423a94b"
  },
  {
    "url": "assets/js/57.f11e2aaa.js",
    "revision": "08be325bb7900ba72e46df8a7bd4175d"
  },
  {
    "url": "assets/js/58.6664d9a8.js",
    "revision": "7981232a8baee8d8e81d2287beccca6b"
  },
  {
    "url": "assets/js/59.12df1eeb.js",
    "revision": "de36b1465d83fb5879730051bba123bd"
  },
  {
    "url": "assets/js/6.1551b23f.js",
    "revision": "f66351ddd19a00117060b1687475af72"
  },
  {
    "url": "assets/js/60.f8500832.js",
    "revision": "3f67986dcf2bad286e3e3fb4b8332bd7"
  },
  {
    "url": "assets/js/61.e56dddef.js",
    "revision": "49d07250c49ab144978ff8eb297b9a82"
  },
  {
    "url": "assets/js/62.fcb55d84.js",
    "revision": "1173fbaf1f3b78bba0d4dd2a2a4247f5"
  },
  {
    "url": "assets/js/63.d6d5ca5d.js",
    "revision": "6a56f8dd0b29cab22987c12e577816b9"
  },
  {
    "url": "assets/js/64.b5d7db8a.js",
    "revision": "bbbc4078c2775d5492593ece110d5127"
  },
  {
    "url": "assets/js/65.9991fc58.js",
    "revision": "8485f8ff9c83915c107facbb88f172ff"
  },
  {
    "url": "assets/js/66.af9e769a.js",
    "revision": "215ebb07a27d9a8fdfe1326307a4bcc6"
  },
  {
    "url": "assets/js/67.ff64a864.js",
    "revision": "c7b29540a92732d9907566ef933ff15b"
  },
  {
    "url": "assets/js/68.a48802cf.js",
    "revision": "9fb58eff50e8b608332c61f166ecbc21"
  },
  {
    "url": "assets/js/69.6d2b3667.js",
    "revision": "c6121afc2ad477c295f7e64c891f6e48"
  },
  {
    "url": "assets/js/7.4ebbd085.js",
    "revision": "6ca681d9780a0a50618401230b811874"
  },
  {
    "url": "assets/js/70.9b5a7f1b.js",
    "revision": "a474a9c29fe3843e1a560ec99e4618f9"
  },
  {
    "url": "assets/js/71.80d79f85.js",
    "revision": "02c70a3f9ab81349d61018c7e8f17e83"
  },
  {
    "url": "assets/js/72.57cd3394.js",
    "revision": "b83cfaf1351b588a4b79db811cf0dbf3"
  },
  {
    "url": "assets/js/73.15ec0779.js",
    "revision": "e29a2baf90d8e9eef1d118db2eae59cd"
  },
  {
    "url": "assets/js/74.3c4e32a0.js",
    "revision": "77c4184805c4f4c3d3a19d0ec05a0a8c"
  },
  {
    "url": "assets/js/75.4812d165.js",
    "revision": "1a6ef3d90fc2a6cf0219a7a044e1b2cc"
  },
  {
    "url": "assets/js/76.89a1e47f.js",
    "revision": "46df69eaa4852adc40f61ba218383397"
  },
  {
    "url": "assets/js/77.b32d6bca.js",
    "revision": "aa45642b417cb7fa0bdaeda6f5118ca3"
  },
  {
    "url": "assets/js/78.b67646d4.js",
    "revision": "669f87e6271c5fba0328247fa300472c"
  },
  {
    "url": "assets/js/79.f94b62de.js",
    "revision": "4c539b8afc0b01395f5030d55c184d31"
  },
  {
    "url": "assets/js/8.76f313b1.js",
    "revision": "e50c80c4109e5f016a8e157bf2f8f130"
  },
  {
    "url": "assets/js/80.5e243e87.js",
    "revision": "0a647c6614789a5fe34fc48b678ba9cb"
  },
  {
    "url": "assets/js/81.1a715f0d.js",
    "revision": "2eddb868be773c44f7acc6cb7c1d81db"
  },
  {
    "url": "assets/js/82.64b61fe9.js",
    "revision": "3b2041f97b6e43d6ae7e537878671828"
  },
  {
    "url": "assets/js/83.05050672.js",
    "revision": "22448f6f4216c45576c8c160d2de3077"
  },
  {
    "url": "assets/js/84.f7afeb6b.js",
    "revision": "2c3814b9c4853238a3abea6b592ac812"
  },
  {
    "url": "assets/js/85.d8406ea2.js",
    "revision": "58a50ed4fded58ed5969e9096435164d"
  },
  {
    "url": "assets/js/86.094fb62e.js",
    "revision": "fe68e9cf5ea08dc8312c10f0ab616e8b"
  },
  {
    "url": "assets/js/87.e2350a62.js",
    "revision": "61e76e40017c1b4600e178c80e71862d"
  },
  {
    "url": "assets/js/9.2b23d3c0.js",
    "revision": "997035098c1816dc61e26c3a4a01d87e"
  },
  {
    "url": "assets/js/app.8014c293.js",
    "revision": "4b3fabf91b59fadcb3e55c8542355913"
  },
  {
    "url": "categories/index.html",
    "revision": "5bc2a2d608feb4cdf52a4ddef21ef3be"
  },
  {
    "url": "comment/index.html",
    "revision": "0d63268a96e1510d37c761318db98aba"
  },
  {
    "url": "git/faq/index.html",
    "revision": "10b72321c0ccaa99c4c1fda0bd0b416b"
  },
  {
    "url": "git/submodule/index.html",
    "revision": "2b0cfafc938ce3a368e3e0e139e3638e"
  },
  {
    "url": "index.html",
    "revision": "fdc06aa756a327bdcd5c9c29f26e6271"
  },
  {
    "url": "jenkins/auth/index.html",
    "revision": "d40ce3935b0ee3da5fe6351e8db6cff6"
  },
  {
    "url": "jenkins/commit-message/index.html",
    "revision": "ff0ffcbfef76c3778b267fb12197f0ce"
  },
  {
    "url": "jenkins/env/index.html",
    "revision": "88c7648f04db137b182c62b26b3663f9"
  },
  {
    "url": "jenkins/faq/index.html",
    "revision": "3f3abe849f404b9c8b210f2333fb38c1"
  },
  {
    "url": "jenkins/ftp/index.html",
    "revision": "72baa0a49c5340bb3eaa41cf4b2f64fb"
  },
  {
    "url": "jenkins/install/index.html",
    "revision": "5fa09a2a95a3e587adaaf7c1b5bad7f8"
  },
  {
    "url": "jenkins/mail/index.html",
    "revision": "2c62007d3c37f5b07074f6e4956ab188"
  },
  {
    "url": "jenkins/param-build/index.html",
    "revision": "05505e0232622e8877019c69ed9bbfd1"
  },
  {
    "url": "jenkins/pipeline-syntax/index.html",
    "revision": "99d5f35957627c6eed90de31230a20bb"
  },
  {
    "url": "jenkins/pipeline/index.html",
    "revision": "5955850df81f8f0c3467f3d82267c0f2"
  },
  {
    "url": "jenkins/script/index.html",
    "revision": "aa78f283a2ee89630ead46dc864d04a3"
  },
  {
    "url": "live2d/tororo/assets/moc/tororo.2048/texture_00.png",
    "revision": "9bd791736cfc91b62670dee5f7fbd45c"
  },
  {
    "url": "logo.png",
    "revision": "038f4332edabbe2f3b8b5475dd3220a0"
  },
  {
    "url": "mac/install-java/index.html",
    "revision": "01ee7a624aeddbec82134e93bb8d006d"
  },
  {
    "url": "mac/startup/index.html",
    "revision": "6254a14f23dddb8adc26cc545f72830c"
  },
  {
    "url": "mysql/init/index.html",
    "revision": "a1ca47c9bd451c19890a97b36da6585d"
  },
  {
    "url": "nodejs/mockjs/index.html",
    "revision": "d3285fe63b657ed7c64596d2e8339bce"
  },
  {
    "url": "pages/037ec9/index.html",
    "revision": "6d5c15c8ded05efff31aa0978d171f5f"
  },
  {
    "url": "pages/03fef7/index.html",
    "revision": "0d5cd5be1cef597e5a8ba9073643e4b2"
  },
  {
    "url": "pages/054588/index.html",
    "revision": "7466811dac09463a63538bb7aef25a84"
  },
  {
    "url": "pages/06bbd3/index.html",
    "revision": "1a1b0858e3dedd72ae8113656bfa49dd"
  },
  {
    "url": "pages/0831c5/index.html",
    "revision": "e644d0a6a1e1b59df615c6af848c2441"
  },
  {
    "url": "pages/0e4b37/index.html",
    "revision": "0e5d009c8925b9798a05f87a1e7cf46a"
  },
  {
    "url": "pages/10b5c5/index.html",
    "revision": "e8c936535afafaf6dfb79b03275003d6"
  },
  {
    "url": "pages/147402/index.html",
    "revision": "12bd3d7480bef80b4ea4d6ceb9a5a05c"
  },
  {
    "url": "pages/1d693c/index.html",
    "revision": "d583a9ecef757bca567e049a0ea94364"
  },
  {
    "url": "pages/245501/index.html",
    "revision": "f49e9d38d535f35bf9f75cc82a984460"
  },
  {
    "url": "pages/26e173/index.html",
    "revision": "f6295d2924bc28e2e977f080f808fc03"
  },
  {
    "url": "pages/33abf7/zhe/index.html",
    "revision": "123e99f28dfe1fef7a3535d0d67d1746"
  },
  {
    "url": "pages/3872dc/index.html",
    "revision": "1cea53888cbe00bf7960d472196678fe"
  },
  {
    "url": "pages/45aff2/index.html",
    "revision": "80a89da9be38f98a1474d4fd12a673c1"
  },
  {
    "url": "pages/4d6082/index.html",
    "revision": "1f37111429c9d0671865484a016eade7"
  },
  {
    "url": "pages/512cd2/index.html",
    "revision": "2b944dd00f12f35722d16376f7a42cbd"
  },
  {
    "url": "pages/52dcf4/index.html",
    "revision": "b53f253fb480163ad0ec8621c494b035"
  },
  {
    "url": "pages/53f644/index.html",
    "revision": "0d978693ef8c3e35f570508e637a8bfc"
  },
  {
    "url": "pages/57f766/index.html",
    "revision": "326d83768d4d4b9cb9020630dbb53a2b"
  },
  {
    "url": "pages/608b76/index.html",
    "revision": "7195abc477383876a89df94b97df8c90"
  },
  {
    "url": "pages/656f3b/index.html",
    "revision": "314a83bcf0b3049af8ddeb459978d9b4"
  },
  {
    "url": "pages/68d98b/index.html",
    "revision": "85e01fdcb4b1342949e15c1811792f5c"
  },
  {
    "url": "pages/6b9377/index.html",
    "revision": "baaca4c4f68d8a82f2e43f3ff38a25cd"
  },
  {
    "url": "pages/712da6/index.html",
    "revision": "f76c179f261f3a1d25a0d5a70bf07501"
  },
  {
    "url": "pages/735396/index.html",
    "revision": "898bfd741eb84cac3a1d5a498f4dcd40"
  },
  {
    "url": "pages/86adb6/index.html",
    "revision": "d6ba0c2165719704de3ca0a7121cd284"
  },
  {
    "url": "pages/8f1d05/index.html",
    "revision": "126330c1701273c2fc2b173e2a1f7ff7"
  },
  {
    "url": "pages/90c496/index.html",
    "revision": "070e1ee09eb22ecf135f841435bb2634"
  },
  {
    "url": "pages/969324/index.html",
    "revision": "9cc2f32fd7c50253fbc99ae6c25456c8"
  },
  {
    "url": "pages/986408/index.html",
    "revision": "5b5428b35d0f26ccac38a12d09d6db80"
  },
  {
    "url": "pages/9be477/index.html",
    "revision": "0436d510a46c5098b0d9cdad57fe2622"
  },
  {
    "url": "pages/9c1b50/index.html",
    "revision": "3a1b61eefc0d11a1c3ed03245b5ed8ef"
  },
  {
    "url": "pages/9f7734/index.html",
    "revision": "3a81f344f120795eb44e7df3138be575"
  },
  {
    "url": "pages/9f9868/index.html",
    "revision": "87b1cba482a373f707e55ae63c4b69d4"
  },
  {
    "url": "pages/ac16f8/index.html",
    "revision": "31de4d09bb6642f28632668433275560"
  },
  {
    "url": "pages/b41d0e/index.html",
    "revision": "97738d8e9819bb2ae5acddce24b866e9"
  },
  {
    "url": "pages/b83363/index.html",
    "revision": "2f77c731ef09670e7ef525090750d7c5"
  },
  {
    "url": "pages/bf041e/index.html",
    "revision": "5e085fc61f74f9d63a6705951ce430a6"
  },
  {
    "url": "pages/c1a8b7/index.html",
    "revision": "9ae47c2ecf0c6f453ad5309d6f7f8719"
  },
  {
    "url": "pages/c6d4f2/index.html",
    "revision": "572fb8a890525a604257b14680638557"
  },
  {
    "url": "pages/ce3dad/index.html",
    "revision": "678d2957bd7c1cec058ed07d32232e6c"
  },
  {
    "url": "pages/ce9b4f/index.html",
    "revision": "b9ff4fee30ca6e9871e422fa681c4238"
  },
  {
    "url": "pages/d3a093/index.html",
    "revision": "bcca4f3355f318f5a192791a86907d21"
  },
  {
    "url": "pages/dc18b8/index.html",
    "revision": "96685660bca5bda50163e3bbdfdaec7b"
  },
  {
    "url": "pages/dd4679/index.html",
    "revision": "847f2fc0914bcc35c9bd7313baf54f04"
  },
  {
    "url": "pages/dfadd9/index.html",
    "revision": "094b18862e1043d74b5607c7974e7f6a"
  },
  {
    "url": "pages/ec1f47/index.html",
    "revision": "ea9c060beff6e9e024c6b7d73e270fa3"
  },
  {
    "url": "pages/f36e43/index.html",
    "revision": "4925e821c8743a28d3da29700e248b91"
  },
  {
    "url": "pages/fb9ad3/index.html",
    "revision": "2abd0534387ba5abafa2a4e8be2bf148"
  },
  {
    "url": "tags/index.html",
    "revision": "1037e429a3f162b1ca196d064404e456"
  },
  {
    "url": "thumb.jpg",
    "revision": "0bd96078e1e9885f42db1a0a95ccb00d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
