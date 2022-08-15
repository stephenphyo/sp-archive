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
    `
}

export default module_data;