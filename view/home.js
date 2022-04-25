const layout = require('./layout');


module.exports = function (user) {

    const content = `
        <div class = "background">
        <p>
            Gameday
            <div id="paragraph">Even in hard times there's a possibility to have fun</div>
        </p>
        <div class="gallery">

            <div>KTC</a></div>
            <div>KDOJ</a></div>
            <div>KTHO</a></div>

        </div>

        <div class="gallery2">

            <div>KTDI</a></div>
            <div>KTR</a></div>
            <div>KRP</a></div>

        </div>

        </div>
    `;

    return layout({title:'Home',content,user});
}


