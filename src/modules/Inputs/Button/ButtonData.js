const module_data = {
    1 :
    `
    /* HTML */
    <div id='button'>Button</div>

    /* CSS Styles */
    #button {
        --width: 100px;
        --height: 35px;
        --font-family: 'Helvetica Neue';
    }

    #button {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: var(--width);
        height: var(--height);
        text-align: center;
        font-family: var(--font-family);
        font-size: calc(var(--width) / 7);
        color: #ffffff;
        border-radius: calc(var(--height) / 2);
        background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
        background-size: 400%;
        cursor: pointer;
        z-index: 1;
    }

    #button:hover {
        animation: button001 8s linear infinite;
    }

    #button::before {
        content: ' ';
        position: absolute;
        top: -1px;
        left: -1px;
        right: -1px;
        bottom: -1px;
        z-index: -1;
        background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
        background-size: 400%;
        border-radius: calc(var(--height) / 2);
        opacity: 0;
        transition: 0.5s;
    }

    #button:hover::before {
        filter: blur(8px);
        opacity: 1;
        animation: button001 8s linear infinite;
    }

    @keyframes button001 {
        0% {
            background-position: 0%;
        }
        100% {
            background-position: 400%;
        }
    }
    `,

    2:
    `
    /* HTML */
    <div id='button'>
        <svg><rect></rect></svg>
        BUTTON
    </div>

    /* CSS Styles */
    /* https://www.youtube.com/watch?v=iLTsfFFGzl4&list=WL&index=16&ab_channel=OnlineTutorials */
    #button {
        --width: 100px;
        --height: 35px;
        --font-size: 14px;
        --font-family: 'Helvetica Neue';
        --text-color: #000000;
        --pre-color: cyan;
        --post-color: violet;
        --transition: 1.5s;
    }

    #button {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: var(--width);
        height: var(--height);
        letter-spacing: 0.5px;
        font-family: var(--font-family);
        font-size: var(--font-size);
        color: var(--text-color);
        cursor: pointer;
    }

    #button svg,
    #button svg rect {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        fill: transparent;
    }

    #button svg rect {
        stroke: var(--pre-color);
        stroke-width: calc(var(--width) / 25);
        stroke-dasharray: var(--width) var(--height);
        stroke-dashoffset: calc(calc(var(--height) * 2) + calc(var(--width) * 2));
        transition: var(--transition) ease-in-out;
    }

    #button:hover svg rect {
        stroke: var(--post-color);
        stroke-dasharray: calc(calc(var(--width) * 2) + calc(var(--height) * 2));
        stroke-dashoffset: 0;
    }
    `,

    3:
    `
    /* HTML */
    <div id='button'>BUTTON</div>

    /* CSS Styles */
    /* https://www.youtube.com/watch?v=Ust0aZJSwWk&list=WL&index=25&ab_channel=CodingWang */
    #button {
        --width: 100px;
        --height: 40px;
    }

    #button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--width);
        height: var(--height);
        font-family: 'Helvetica Neue', 'Times New Roman', 'sans-serif';
        font-size: calc(var(--width) / 6);
        font-weight: bold;
        border: calc(var(--height) / 10) solid transparent;
        border-radius: calc(var(--height) / 2);
        color: #ffffff;
        background-color: #262626;
        box-shadow: calc(var(--width) / 300) calc(var(--height) / 100) calc(var(--height) / 2.5) #000000;
        cursor: pointer;
    }

    #button:hover {
        animation: button003 2s linear infinite;
        box-shadow: calc(var(--width) / 300) calc(var(--height) / 100) calc(var(--height) / 1.67) #d60000;
    }

    @keyframes button003 {
        25% {
            border-right-color: #d90000;
            filter: hue-rotate(25deg);
        }
        50% {
            border-bottom-color: #d90000;
            filter: hue-rotate(100deg);
        }
        75% {
            border-left-color: #d90000;
            filter: hue-rotate(200deg);
        }
        100% {
            border-top-color: #d90000;
            filter: hue-rotate(360deg);
        }
    }
    `,

    4:
    `
    /* index.html */
    <script src="https://kit.fontawesome.com/7924e00a0d.js" crossorigin="anonymous"></script>

    /* HTML */
    <div id='button' className='facebook'><i className='fa fa-facebook-f'></i></div>
    <div id='button' className='twitter'><i className='fa fa-twitter'></i></div>
    <div id='button' className='google'><i className='fa fa-google'></i></div>
    <div id='button' className='instagram'><i className='fa fa-instagram'></i></div>
    <div id='button' className='youtube'><i className='fa fa-youtube'></i></div>
    <div id='button' className='telegram'><i className='fa fa-telegram'></i></div>
    <div id='button' className='whatsapp'><i className='fa fa-whatsapp'></i></div>
    <div id='button' className='discord'><i className='fab fa-discord'></i></div>
    <div id='button' className='wechat'><i className='fa fa-wechat'></i></div>

    /* CSS Styles */
    /* https://www.youtube.com/watch?v=fDm0WJ_66d0&list=WL&index=15&ab_channel=DarkCode */
    #button004 #button {
        --width: 40px;
        --height: 40px;
        --icon-size: 24px;
    }

    .facebook {
        --logo-color: #1877f2;
    }

    .twitter {
        --logo-color: #1da1f2;
    }

    .google {
        --logo-color: #4285f4;
    }

    .instagram {
        --logo-color: #dd2a7b;
    }

    .youtube {
        --logo-color: #ff0000;
    }

    .telegram {
        --logo-color: #229ed9;
    }

    .whatsapp {
        --logo-color: #00bb2d;
    }

    .discord {
        --logo-color: #7289d9;
        --icon-size: 22px !important;
    }

    .wechat {
        --logo-color: #2fbb19;
    }

    #button004 #button {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: var(--width);
        height: var(--height);
        border-radius: 30%;
        overflow: hidden;
        color: var(--logo-color);
        background: #f1f1f1;
        box-shadow: 0 calc(var(--height) / 8) calc(var(--height) / 2.67) calc(var(--height) / -8) #00000070;
        cursor: pointer;
    }

    #button004 #button i {
        line-height: var(--height);
        font-size: var(--icon-size);
        transition: 0.2s linear;
    }

    #button004 #button:hover i {
        color: #f1f1f1;
        transform: scale(1.1);
    }

    #button004 #button::before {
        content: '';
        position: absolute;
        width: 120%;
        height: 120%;
        background: var(--logo-color);
        transform: rotate(45deg);
        left: -110%;
        top: 90%;
    }

    #button004 #button:hover::before {
        top: -10%;
        left: -10%;
        animation: button004 0.7s 1;
    }

    @keyframes button004 {
        0% {
            top: 90%;
            left: -110%;
        }
        50% {
            top: -30%;
            left: 10%;
        }
        100% {
            top: -10%;
            left: -10%;
        }
    }
    `,

    5:
    `
    /* HTML */
    <div id='button'>
        Button/Icon
    </div>

    /* CSS Styles */
    /* https: //www.youtube.com/watch?v=GXYESjILPzU&ab_channel=WebD */
    #button {
        --size: 80px;
    }

    #button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--size);
        height: var(--size);
        box-sizing: border-box;
        border-radius: calc(var(--size) / 10);
        color: rgb(3, 212, 132);
        background-color: #ffffff;
        box-shadow:
            calc(var(--size) / -24) calc(var(--size) / -24) calc(var(--size) / 12) #ffffff,
            calc(var(--size) / 24) calc(var(--size) / 24) calc(var(--size) / 8) #6687a8,
            inset calc(var(--size) / -24) calc(var(--size) / -24) calc(var(--size) / 12) #6687a8,
            inset calc(var(--size) / 24) calc(var(--size) / 24) calc(var(--size) / 12) #ffffff;
        transition: 0.5s;
        cursor: pointer;
    }

    #button:hover {
        box-shadow:
            0px 0px 0px #ffffff,
            0px 0px 0px #6687a8,
            inset calc(var(--size) / -24) calc(var(--size) / -24) calc(var(--size) / 12) #6687a8,
            inset calc(var(--size) / 24) calc(var(--size) / 24) calc(var(--size) / 12) #ffffff;
    }
    `,

    6:
    `
    /* HTML */
    <div id='button'>
        <span>{'\u279c'}</span>
        Button
    </div>

    /* CSS Styles */
    /* https://www.youtube.com/watch?v=L-tPKFxrvLk&list=WL&index=30&t=208s&ab_channel=OnlineTutorials */
    #button {
        --width: 200px;
        --height: 60px;
    }

    #button {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: var(--width);
        height: var(--height);
        padding-left: calc(var(--width) / 5);
        border-top: 0.5px solid rgba(255, 255, 255, 0.35);
        border-left: 0.5px solid rgba(255, 255, 255, 0.35);
        text-decoration: none;
        letter-spacing: 2px;
        border-radius: var(--height);
        overflow: hidden;
        color: rgba(255, 255, 255, 0.5);
        background-color: rgba(255, 255, 255, 0.1);
        transition: 0.5s;
        cursor: pointer;
    }

    #button:hover {
        padding-left: 0px;
        padding-right: calc(var(--width) / 5);
        color: rgba(255, 255, 255, 1);
    }

    #button span {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: calc(var(--width) / 40);
        width: calc(var(--width) / 4);
        height: calc(var(--width) / 4);
        font-size: 1em;
        color: #1c1c1c;
        background-color: #04fe4d;
        border-radius: 50%;
        transition: 0.5s ease-in-out;
    }

    #button:hover span {
        left: calc(100% - calc(var(--width) / 40) - calc(var(--width) / 4));
    }

    #button:after {
        content: ' ';
        position: absolute;
        width: calc(var(--width) / 2);
        height: 100%;
        background-color: rgba(255, 255, 255, 0.25);
        transform: translateX(calc(var(--width) * -0.9)) skewX(30deg);;
        transition: 0.75s ease-in-out;
        z-index: 1;
    }

    #button:hover:after {
        transform: translateX(calc(var(--width) * 0.9)) skewX(30deg);
    }
    `,

    7:
    `
    /* HTML */
    <div id='button'><span>Button</span></div>
    <div id='button'><span id='heart'>{'\u2764'}</span></div>

    /* CSS Styles */
    * https: //www.youtube.com/watch?v=83qXTul1oP4&list=WL&index=16&ab_channel=OnlineTutorials */
    @import url('https://fonts.googleapis.com/css2?family=Courgette&family=Roboto+Slab:wght@200&family=Roboto:wght@500&display=swap');

    #button {
        --size: 100px;
    }

    #button {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        text-shadow: -2px -2px 5px #ffffff;
        font-family: 'Courgette', cursive;
        font-size: calc(var(--size) / 4.25);
        color: #333333;
        filter: drop-shadow(calc(var(--size) / 30) calc(var(--size) / 30) calc(var(--size) / 15) #ffffff);
        box-shadow:
            calc(var(--size) / 15) calc(var(--size) / 15) calc(var(--size) / 15) rgba(0, 0, 0, 0.05),
            calc(var(--size) / 15) calc(var(--size) / 15) calc(var(--size) / 7.5) rgba(0, 0, 0, 0.05),
            inset calc(var(--size) / 15) calc(var(--size) / 15) calc(var(--size) / 15) rgba(0, 0, 0, 0.05),
            inset calc(var(--size) / -15) calc(var(--size) / -15) calc(var(--size) / 10) rgba(255, 255, 255, 0.9);
    }

    #button:before {
        content: '';
        position: absolute;
        top: calc(var(--size) / 4.5);
        left: calc(var(--size) / 6);
        width: calc(var(--size) / 7.5);
        height: calc(var(--size) / 7.5);
        border-radius: 50%;
        background-color: #ffffff;
        filter: blur(calc(var(--size) / 75));
    }

    #button:after {
        content: '';
        position: absolute;
        top: calc(var(--size) / 6);
        left: calc(var(--size) / 3);
        width: calc(var(--size) / 15);
        height: calc(var(--size) / 15);
        border-radius: 50%;
        background-color: #ffffff;
        filter: blur(calc(var(--size) / 75));
    }

    #button:hover {
        box-shadow:
            calc(var(--size) / 15) calc(var(--size) / 15) calc(var(--size) / 15) rgba(0, 0, 0, 0.08),
            calc(var(--size) / 15) calc(var(--size) / 15) calc(var(--size) / 7.5) rgba(0, 0, 0, 0.08),
            inset calc(var(--size) / 15) calc(var(--size) / 15) calc(var(--size) / 15) rgba(0, 0, 0, 0.08),
            inset calc(var(--size) / -15) calc(var(--size) / -15) calc(var(--size) / 10) rgba(255, 255, 255, 0.9);
        cursor: pointer;
    }

    #button #heart {
        font-size: calc(var(--size) / 2);
        color: #ff5353;
    }
    `
}

export default module_data;