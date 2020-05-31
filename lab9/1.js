new Vue({
    el: '#app',
    components: {
     VueGallerySlideshow
    },   
    data: {
      images: [
		'https://lh3.googleusercontent.com/proxy/pS7p1l-xkeGOQju-dGYbfBIViUJVcMsKR9UG8D7NVX0X0JA0xwrocQpjXwvbRRKbALDMPCWrbvslsMhOz36b7XaEDtp7cImlBOOqzJ3usexpDc18_zRF6ivTLNqG',
        'https://cs11.pikabu.ru/post_img/big/2018/12/12/8/1544620722131174221.jpg',
        'https://i.pinimg.com/originals/dc/ea/b4/dceab4fbebaff0b697e17955200d0381.jpg',
        'https://img2.akspic.ru/preview/145328-strategii_video_igry-vedmak-videoigra-dejstvie_priklyuchencheskaya_igra-igri-360x640.jpg',
		'https://lh3.googleusercontent.com/proxy/U0X_vU_q7iceYPKeSPH4d3S_4mWlBGSrCobC5QZKesCLiWJYRFcnXajfTDYB7d-JSqKOiCv2NuvkamOFND0C119Vqjx3sJBdOtMfb_UiIxr7xjyEQVrULzax9ahTQPMcF_01ixQ-DA',
        'https://i.pinimg.com/originals/4b/1d/11/4b1d11587776cdda3423684ff74f2660.jpg',
        'https://sun9-21.userapi.com/c850136/v850136968/d1b2b/TiPdxf2idwM.jpg?ava=1',
        'https://sun9-6.userapi.com/T9TeKmDKgs1bfWC4kMOWHbOrdURLOlbCukueSQ/IP-EnBvwq3M.jpg?ava=1',
        'https://2krota.ru/wp-content/uploads/2019/02/0_i-1.jpg',
        'https://www.ejin.ru/wp-content/uploads/2017/09/16-339.jpg',
        'https://i.pinimg.com/236x/b7/b8/96/b7b8961adbeb1dcdbe1570bdc8b508b7.jpg',
		'https://res06.bignox.com/noxinfluencer/youtube/avatar/c244908272721c2e9f2349ee2822f14e.png',

        
      ],
      index: null
    },
    methods: {
      add: function (event,t) {     
           
        this.images.splice(0,0,t.value)                               
      },
 
      remove: function (event,t) {      
        this.images.splice(0,1)
      },
    }    
  })
