const layout = require('./layout');


module.exports = function (user) {

    const content = `
    <div class="container">
        <h1>Map</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.170853781874!2d103.64769835789517!3d1.558862380934178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da715a117ca01f%3A0xbab3d72a07a1c106!2sKolej+9-10+Futsal+Court!5e0!3m2!1sen!2smy!4v1555040645874!5m2!1sen!2smy" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.3310388262903!2d103.63372875977272!3d1.5644840953490216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbbc764070fde0531!2sKolej+Tun+Dr+Ismail(KTDI)%2C+UTM!5e0!3m2!1sen!2smy!4v1555041139158!5m2!1sen!2smy" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.334116118023!2d103.63207651882648!3d1.5628646421193537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da76b2bf18cd17%3A0x440cf98d77c023f!2sKolej+Tun+Hussein+Onn%2C+Universiti+Teknologi+Malaysia!5e0!3m2!1sen!2smy!4v1555041219814!5m2!1sen!2smy" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.3098627759655!2d103.61748931426486!3d1.5755830612486739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da76c6c6080eb7%3A0xd62d017c377b7f27!2sKolej+Dato+Onn+Jaafar+(KDOJ)!5e0!3m2!1sen!2smy!4v1555041294673!5m2!1sen!2smy" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.3331636597836!2d103.62596311426488!3d1.5633660612889135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6416ab7709001d49!2sKolej+Tun+Razak+(KTR)+K22!5e0!3m2!1sen!2smy!4v1555041408172!5m2!1sen!2smy" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.343477537269!2d103.63061501426489!3d1.5579277613067424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da76ac90393b45%3A0xca01a207fd92c603!2sKolej+Rahman+Putra!5e0!3m2!1sen!2smy!4v1555041439605!5m2!1sen!2smy" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
    `;

    return layout({title:'Map',content,user});
}


