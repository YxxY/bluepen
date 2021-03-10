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
    "revision": "1a96fa1a70a64e407bae3824ff5b8d72"
  },
  {
    "url": "about/index.html",
    "revision": "6f939526bd0118b04d22b1c17eafea42"
  },
  {
    "url": "archives/index.html",
    "revision": "f2425f13eda4c134d66555433d9123a5"
  },
  {
    "url": "assets/css/0.styles.4a96016b.css",
    "revision": "641ae8159060ec0f8be4d471fdde9978"
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
    "url": "assets/js/1.57c2586e.js",
    "revision": "05d37e39602eae61a5e2f3ebb9adad54"
  },
  {
    "url": "assets/js/10.c8f969ea.js",
    "revision": "d75aaea8090ebf1fd587f7e51c6d31bd"
  },
  {
    "url": "assets/js/11.7d305e97.js",
    "revision": "2aa4473c6de13e6b9365388b701d294e"
  },
  {
    "url": "assets/js/12.e5f0f1ab.js",
    "revision": "29f12a00b2a103e22d0f48c9968bfe36"
  },
  {
    "url": "assets/js/13.492c1497.js",
    "revision": "3662237585fb7f6ea094b7a2465931aa"
  },
  {
    "url": "assets/js/14.be90ca1d.js",
    "revision": "4f9fd59f4e2c4fc41976fff56fa2e628"
  },
  {
    "url": "assets/js/15.06001ed9.js",
    "revision": "a3680a815ee43f9a2e3369269bdabc0f"
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
    "url": "assets/js/19.996de64e.js",
    "revision": "734da3c4b4daac2a1ae24f9b800bb42a"
  },
  {
    "url": "assets/js/2.327a7e3f.js",
    "revision": "dc8658b2cfef48d95386168fa4b83bf7"
  },
  {
    "url": "assets/js/20.a500ae62.js",
    "revision": "7253f84e7e7fdec26788905d8e6bdb7e"
  },
  {
    "url": "assets/js/21.5795c19d.js",
    "revision": "e4adef3a6584b9e81b67dab309272062"
  },
  {
    "url": "assets/js/22.69bfdf88.js",
    "revision": "b485a99c6b8b397971d4d3cf22332faa"
  },
  {
    "url": "assets/js/23.d3e5e345.js",
    "revision": "1a53c49c65d25453a641875cd470f085"
  },
  {
    "url": "assets/js/24.acb03f23.js",
    "revision": "5dcfc63abee31b05b8bcb933345cd469"
  },
  {
    "url": "assets/js/25.4adc0278.js",
    "revision": "2a752cdc7ba74b9463ba07d9d4cb775c"
  },
  {
    "url": "assets/js/26.d44840c8.js",
    "revision": "a471ea5dff2c52aadfd65afa1ae80e35"
  },
  {
    "url": "assets/js/27.320512b3.js",
    "revision": "8fe8f3259f563e529a6b9a9352601711"
  },
  {
    "url": "assets/js/28.43aa1aca.js",
    "revision": "50154c988160009359e650c38c00bdf3"
  },
  {
    "url": "assets/js/29.7fde9bc1.js",
    "revision": "e7ce872a446a05d6d1f744587a69ddd3"
  },
  {
    "url": "assets/js/30.08204698.js",
    "revision": "170c1c8e202876d7f8019d64400cdf67"
  },
  {
    "url": "assets/js/31.66108858.js",
    "revision": "383c8b162247e0611646496b1678ec62"
  },
  {
    "url": "assets/js/32.595ad437.js",
    "revision": "de51e4c7873cb8787ba4841051286ab3"
  },
  {
    "url": "assets/js/33.5284ee51.js",
    "revision": "a13a36f074d00de2852aeeec67956a54"
  },
  {
    "url": "assets/js/34.4ef87baf.js",
    "revision": "e57df9ba0659bd70163dce98bb506a34"
  },
  {
    "url": "assets/js/35.9e74b51d.js",
    "revision": "d8856d36fb9b654a7ac67cf5a38aab45"
  },
  {
    "url": "assets/js/36.4ff87a3c.js",
    "revision": "6f5ced9c48d59e4ddc45296cede337d7"
  },
  {
    "url": "assets/js/37.e6655957.js",
    "revision": "f9e0d81023d95cec24c47c59b0d189b8"
  },
  {
    "url": "assets/js/38.fb710a9a.js",
    "revision": "f23fcdbf8329e524a0712ae0a7236c05"
  },
  {
    "url": "assets/js/39.29146f94.js",
    "revision": "a7abe95001fe138f0ac9575468f61afe"
  },
  {
    "url": "assets/js/4.0dfb31a4.js",
    "revision": "f41eeb631d9b2193450b18782a4e8082"
  },
  {
    "url": "assets/js/40.d65114a9.js",
    "revision": "a7ca68dc5f1f12157d2340ee8b5874fd"
  },
  {
    "url": "assets/js/41.de374f57.js",
    "revision": "51c6e513dab5bd8fe7dfb02c85813dac"
  },
  {
    "url": "assets/js/42.00cd6986.js",
    "revision": "b0a6e27cd1ad48299608a5a0f5bebec9"
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
    "url": "assets/js/46.cf2ac71d.js",
    "revision": "f25bdbb60524733c9a8d1e6e5c178a25"
  },
  {
    "url": "assets/js/47.c517554a.js",
    "revision": "9e2cd2da8ce72a841720d033c06b3071"
  },
  {
    "url": "assets/js/48.7a93e104.js",
    "revision": "b5ee6efe1315c2cdcc67b9c4130b6f22"
  },
  {
    "url": "assets/js/49.4e30df1d.js",
    "revision": "9b324562ac6df74ea46b2a6b6f83685f"
  },
  {
    "url": "assets/js/5.4c6bf6cf.js",
    "revision": "75293c67dd97bde0cf6d6dccc9878de3"
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
    "url": "assets/js/52.1d47211e.js",
    "revision": "2829eefa42b0b08094e3b3db314567cb"
  },
  {
    "url": "assets/js/53.7945dcc2.js",
    "revision": "752cbf4f9b9116e5788bb0b24c2fe5fe"
  },
  {
    "url": "assets/js/54.b64b5959.js",
    "revision": "73975690e7ae20a8b93f827ef1083340"
  },
  {
    "url": "assets/js/55.5d22bb72.js",
    "revision": "b2c9863eefb8f1be3d2548ef9131e12f"
  },
  {
    "url": "assets/js/56.b31df450.js",
    "revision": "5dce94e930c19593040939f8f423a94b"
  },
  {
    "url": "assets/js/57.55427cc4.js",
    "revision": "020ff41208b14420e63cce41d397e2ed"
  },
  {
    "url": "assets/js/58.217e55c4.js",
    "revision": "89ce4aece248f54176d3388c775b554b"
  },
  {
    "url": "assets/js/59.33724f41.js",
    "revision": "4cd93a997c08b568c7c43d82754a4e1a"
  },
  {
    "url": "assets/js/6.d314a970.js",
    "revision": "7eab1de55366bd4ed8bc9afb81ea6578"
  },
  {
    "url": "assets/js/60.889fae7d.js",
    "revision": "7777dfb23cd41c12763527a5b68a5a7f"
  },
  {
    "url": "assets/js/61.7ba84de4.js",
    "revision": "2661607afea82ba4de7f5187f4b1fc3e"
  },
  {
    "url": "assets/js/62.3df0045b.js",
    "revision": "e421031f0f0f85878a94a063f0afa033"
  },
  {
    "url": "assets/js/63.ea2d85d4.js",
    "revision": "e77d57318898705dff4f22990889a238"
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
    "url": "assets/js/67.0f489124.js",
    "revision": "b8032f65d3dcba35ed66ab349510999f"
  },
  {
    "url": "assets/js/68.990f711d.js",
    "revision": "8c4ded1fdace0e5fdd0af37c9a8e564e"
  },
  {
    "url": "assets/js/69.d33ebfca.js",
    "revision": "6611badd671aca132debbcf469a608b3"
  },
  {
    "url": "assets/js/7.ca8fdbdd.js",
    "revision": "c6a1486e47d0f1ecc2806e99c7f9b8de"
  },
  {
    "url": "assets/js/70.ce3cdcfd.js",
    "revision": "e367967f59cb340a6b9d3d486ccde5a6"
  },
  {
    "url": "assets/js/71.e4b29077.js",
    "revision": "1223e0eb4a3e042e01a1deb36432e086"
  },
  {
    "url": "assets/js/72.57cd3394.js",
    "revision": "b83cfaf1351b588a4b79db811cf0dbf3"
  },
  {
    "url": "assets/js/73.7a21338e.js",
    "revision": "ef028c00a4f9714e7944a941de779104"
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
    "url": "assets/js/76.bf3c573b.js",
    "revision": "067ee693569dcd79b6f861821a9dadc3"
  },
  {
    "url": "assets/js/77.1b1e1718.js",
    "revision": "3e0c344bc0728f021280070047e8bfce"
  },
  {
    "url": "assets/js/78.b67646d4.js",
    "revision": "669f87e6271c5fba0328247fa300472c"
  },
  {
    "url": "assets/js/79.483e0cac.js",
    "revision": "345af00958a34313782918a02fb7fe9d"
  },
  {
    "url": "assets/js/8.70b7aa22.js",
    "revision": "6611edf4506fadc520d75520f403fc9b"
  },
  {
    "url": "assets/js/80.3637f5c9.js",
    "revision": "fc4dd1d66c5c44e893a2e754be260936"
  },
  {
    "url": "assets/js/81.e08153e5.js",
    "revision": "d1c2e9aaf5b742861553e85f4d3e7038"
  },
  {
    "url": "assets/js/82.ca396391.js",
    "revision": "650801100b628686b34be13fa39b815d"
  },
  {
    "url": "assets/js/83.639e31d8.js",
    "revision": "6a3bc3e499daea1041ca8eea41ec231f"
  },
  {
    "url": "assets/js/84.44aebd2f.js",
    "revision": "cf0db5f75241a1c76d7669b72431fe52"
  },
  {
    "url": "assets/js/9.070a0f08.js",
    "revision": "6e5718de5dde585ccd7ae5e1cef8f989"
  },
  {
    "url": "assets/js/app.44c916f6.js",
    "revision": "0e4d01aebed56e98c5d949f0f1d2638f"
  },
  {
    "url": "categories/index.html",
    "revision": "016a3c828b23d1fbb9236efe76e17dc3"
  },
  {
    "url": "comment/index.html",
    "revision": "185d6f799bdc6d740f1355ddb8e27aca"
  },
  {
    "url": "git/faq/index.html",
    "revision": "47dffadf21da4964e731c56c5133f7d7"
  },
  {
    "url": "git/submodule/index.html",
    "revision": "6f4756dd7a195b9665c2f62ce89b38f0"
  },
  {
    "url": "index.html",
    "revision": "acacc8dd6dd7b35f8eff5ed9731f9065"
  },
  {
    "url": "jenkins/auth/index.html",
    "revision": "007235cc269c5321b2b5370436316667"
  },
  {
    "url": "jenkins/commit-message/index.html",
    "revision": "441787015e36df76bb3a505ce418c451"
  },
  {
    "url": "jenkins/env/index.html",
    "revision": "ab765a0ff383eaa94db274c417154958"
  },
  {
    "url": "jenkins/faq/index.html",
    "revision": "04772ac7c16604ff99ac533a76d75aec"
  },
  {
    "url": "jenkins/ftp/index.html",
    "revision": "324c28d994b552ea15a0d1e41f3547f5"
  },
  {
    "url": "jenkins/install/index.html",
    "revision": "6c0e5a5c319a8cb2f2830722f66dab60"
  },
  {
    "url": "jenkins/mail/index.html",
    "revision": "4c91c69d2dd73cf2fa99976103ba75e0"
  },
  {
    "url": "jenkins/param-build/index.html",
    "revision": "fbd48ef5eca6460e2793612b58a52bbe"
  },
  {
    "url": "jenkins/pipeline-syntax/index.html",
    "revision": "4b797db486f6507213254b76a4cf1f8c"
  },
  {
    "url": "jenkins/pipeline/index.html",
    "revision": "baf03cbf237a50e34ba7b4a325eccd20"
  },
  {
    "url": "jenkins/script/index.html",
    "revision": "39eeb45d5de08a1e83ed04a462c3276d"
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
    "revision": "773924d47cb75ed6dfd68079cf9d9d0f"
  },
  {
    "url": "mac/startup/index.html",
    "revision": "dc3cfa202f27f7ad43addee30687acf5"
  },
  {
    "url": "mysql/init/index.html",
    "revision": "41ea6b30b16dab2db184c6100d5f57a9"
  },
  {
    "url": "nodejs/mockjs/index.html",
    "revision": "8b9fc90d129a3e0ab0c48f1e15d8e174"
  },
  {
    "url": "pages/037ec9/index.html",
    "revision": "cb1486a11450d94a5d81894d47e3a947"
  },
  {
    "url": "pages/03fef7/index.html",
    "revision": "e0ea37339ee9820bd99d245fe0623117"
  },
  {
    "url": "pages/054588/index.html",
    "revision": "614f9e61b1f87fdb7ac752a33e289d45"
  },
  {
    "url": "pages/06bbd3/index.html",
    "revision": "746eb54ad5af666b27de5f75ec6fbee1"
  },
  {
    "url": "pages/0831c5/index.html",
    "revision": "ceec56f81841f573892befb985830b4d"
  },
  {
    "url": "pages/0e4b37/index.html",
    "revision": "9185cfa10183bf7487d01925d1d52fb3"
  },
  {
    "url": "pages/10b5c5/index.html",
    "revision": "80346dc7eb711398ab2e1b57024878c4"
  },
  {
    "url": "pages/147402/index.html",
    "revision": "1b3b48ba84d45f7ab356ea35fa5e86fb"
  },
  {
    "url": "pages/1d693c/index.html",
    "revision": "cc741c52d36b9e4968a6576f6ef74b5a"
  },
  {
    "url": "pages/245501/index.html",
    "revision": "18bbe73e1409453dc8a980361f521682"
  },
  {
    "url": "pages/26e173/index.html",
    "revision": "60c817ed4025eac089ae7306cb3e4a00"
  },
  {
    "url": "pages/33abf7/zhe/index.html",
    "revision": "65dd34a0e73d0541da4c92750d4a11ed"
  },
  {
    "url": "pages/3872dc/index.html",
    "revision": "5986f61ca1d82a7146f6156f40e8afec"
  },
  {
    "url": "pages/45aff2/index.html",
    "revision": "731e0a243c9a4b7e6a5db7d1bd94d82e"
  },
  {
    "url": "pages/4d6082/index.html",
    "revision": "1633cded9ff862c5c399250c929fcbb3"
  },
  {
    "url": "pages/512cd2/index.html",
    "revision": "55b1ab566fbb1c7563e0558e08d76cf9"
  },
  {
    "url": "pages/52dcf4/index.html",
    "revision": "f25dc86069cb29c3615da7c14284c593"
  },
  {
    "url": "pages/53f644/index.html",
    "revision": "4a338e7fa86685a41ec29cbd50eb18a2"
  },
  {
    "url": "pages/57f766/index.html",
    "revision": "6ae14cc9fe4c602abfa132832f4f6402"
  },
  {
    "url": "pages/608b76/index.html",
    "revision": "7dc74e43fba9ffa29ee6f546c01fb38f"
  },
  {
    "url": "pages/656f3b/index.html",
    "revision": "6368523462dde7161223f4f5fdff841b"
  },
  {
    "url": "pages/68d98b/index.html",
    "revision": "3c3561d284f75ebd0813953a83c0cd34"
  },
  {
    "url": "pages/6b9377/index.html",
    "revision": "957c859d86ad31c539e7bad2dbfae5f8"
  },
  {
    "url": "pages/712da6/index.html",
    "revision": "dea67a47ed8b495614c0efa2893fcc51"
  },
  {
    "url": "pages/735396/index.html",
    "revision": "414f0cde3b3d8153c45f19b0957abe1a"
  },
  {
    "url": "pages/8f1d05/index.html",
    "revision": "c19f673d0fd5e89c6e1da5f15fd7c0d7"
  },
  {
    "url": "pages/90c496/index.html",
    "revision": "bf4c02f41517be5cc85d201846bced60"
  },
  {
    "url": "pages/969324/index.html",
    "revision": "7e6288f6602c9cf8de2292fda6588c52"
  },
  {
    "url": "pages/986408/index.html",
    "revision": "35ed0d00be1a003cbb6bef59c04e48f7"
  },
  {
    "url": "pages/9c1b50/index.html",
    "revision": "04c0dc24046f595f16ff202d10025d6a"
  },
  {
    "url": "pages/9f7734/index.html",
    "revision": "ffb2716f508c7b905788f17c7cad1050"
  },
  {
    "url": "pages/9f9868/index.html",
    "revision": "1c4076dc77283894915fade3e69234fc"
  },
  {
    "url": "pages/ac16f8/index.html",
    "revision": "a861678699ee0451836d2f60b832ed08"
  },
  {
    "url": "pages/b41d0e/index.html",
    "revision": "74ce6a125137f2124bf58e756fed8370"
  },
  {
    "url": "pages/b83363/index.html",
    "revision": "3f2ef6b8b7053b10dd657bab544c53ac"
  },
  {
    "url": "pages/bf041e/index.html",
    "revision": "7b23bca9c8b53b35f0affab216280f1d"
  },
  {
    "url": "pages/c1a8b7/index.html",
    "revision": "2644bf334859b048da7b22ae68815240"
  },
  {
    "url": "pages/c6d4f2/index.html",
    "revision": "1541756157225d95dbf5ffa8337bb4e0"
  },
  {
    "url": "pages/ce3dad/index.html",
    "revision": "63ba64609127c3f5ddfd01642aeb9574"
  },
  {
    "url": "pages/ce9b4f/index.html",
    "revision": "57157b0f9ad2fbfcc0c219933091219b"
  },
  {
    "url": "pages/d3a093/index.html",
    "revision": "75b922b22fa47faadd86dd0471614ea3"
  },
  {
    "url": "pages/dc18b8/index.html",
    "revision": "03f9dcd697e674d80efa7f7bf4b6af42"
  },
  {
    "url": "pages/dd4679/index.html",
    "revision": "af81bd7ed59bdb3ecf97f63528203f6f"
  },
  {
    "url": "pages/ec1f47/index.html",
    "revision": "62ed19f009c6552053e15fc6da150f68"
  },
  {
    "url": "pages/f36e43/index.html",
    "revision": "8a4c0c510ae582790c882609fe5bf4ca"
  },
  {
    "url": "pages/fb9ad3/index.html",
    "revision": "564cd7653ac9f7f20f9433a93774b922"
  },
  {
    "url": "tags/index.html",
    "revision": "3fe46f26fa1f21d9dda8dcc340d51b31"
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
