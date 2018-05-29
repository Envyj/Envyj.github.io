const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "Let it go",
        artist: 'Demi Lovato',
        url: 'http://up.mcyt.net/?down/32907.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/37.jpg',
      },
      {
        name: '起风了',
        artist: '买辣椒也用券',
        url: 'http://up.mcyt.net/?down/45967.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/83.jpg',
      },
      {
        name: '风筝误',
        artist: '刘珂矣',
        url: 'http://up.mcyt.net/?down/46644.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      }
    ]
});
