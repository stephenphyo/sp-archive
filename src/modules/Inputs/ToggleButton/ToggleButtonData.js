const togglebutton_data = {
    1 :
    `
    /* HTML */
    <div id='toggle'>
        <input type='checkbox' />
    </div>

    /* CSS Style */
    #toggle {
        --width: 100px;
        --height: 50px;
        --background-color: #fafafa;
        --label-color: #86868b;
        --transition: 0.25s;
    }

    #toggle input[type='checkbox'] {
        appearance: none;
        -webkit-appearance: none;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        height: var(--height);
        width: var(--width);
        border: calc(var(--height) / 10) solid var(--background-color);
        border-radius: calc(var(--width) / 2);
        outline: 0;
        cursor: pointer;
        font-size: var(--font-size);
        box-shadow:
            calc(var(--width) / 33.3) calc(var(--height) / 16.7) calc(var(--height) / 3.125) rgba(189, 189, 189, 0.6),
            calc(var(--width) / -33.3) calc(var(--height) / -16.7) calc(var(--height) / 3.125) rgba(255, 255, 255, 0.5),
            inset calc(var(--width) / 10) calc(var(--height) / 5) calc(var(--height) / 3.33) calc(var(--height) / -5) #c3c3c3,
            inset calc(var(--width) / -10) calc(var(--height) / -5) calc(var(--height) / 3.33) calc(var(--height) / -5) #fff;
    }

    #toggle input[type='checkbox']::before {
        content: '';
        position: absolute;
        left: calc(var(--width) * 0.09375);
        height: calc(var(--height) * 0.625);
        width: calc(var(--height) * 0.625);
        margin: auto;
        border-radius: 50%;
        background-color: var(--background-color);
        box-shadow:
            calc(var(--width) / 14.29) calc(var(--height) / 7.14) calc(var(--height) / 3.33) #c3c3c3,
            calc(var(--width) / 11.11) calc(var(--height) / 5.55) calc(var(--height) / 3.125) rgba(189, 189, 189, 0.6);
        transition: var(--transition);
        z-index: 2;
    }

    #toggle input[type='checkbox']::after {
        content: 'OFF';
        position: absolute;
        right: calc(var(--width) * 0.1);
        font-family: 'Helvetica Neue', 'Times New Roman', 'sans-serif';
        font-size: calc(var(--width) / 6.25);
        font-weight: 400;
        letter-spacing: 0.004em;
        color: var(--label-color);
    }

    #toggle input[type='checkbox']:checked {
        background: #0071e3;
        box-shadow:
            calc(var(--width) / 11.1) calc(var(--height) / 11.1) calc(var(--height) / 3.125) rgba(189, 189, 189, 0.6),
            calc(var(--width) / -11.1) calc(var(--height) / -11.1) calc(var(--height) / 3.125) rgba(255, 255, 255, 0.5),
            inset calc(var(--width) / 10) calc(var(--height) / 5) calc(var(--height) / 3.33) calc(var(--height) / -5) rgb(0, 71, 185),
            inset calc(var(--width) / -10) calc(var(--height) / -5) calc(var(--height) / 3.33) calc(var(--height) / -5) rgb(0, 71, 185);
    }

    #toggle input[type='checkbox']:checked::before {
        left: calc(var(--width) * 0.52);
        box-shadow: none;
    }

    #toggle input[type='checkbox']:checked::after {
        content: 'ON';
        left: calc(var(--width) * 0.15625);
        color: #f5f5f7;
    }

    @media (prefers-color-scheme: light) {
        #toggle input[type='checkbox'] {
            box-shadow:
                calc(var(--width) / 33.3) calc(var(--height) / 16.7) calc(var(--height) / 3.125) rgba(189, 189, 189, 0.6),
                calc(var(--width) / -33.3) calc(var(--height) / -16.7) calc(var(--height) / 3.125) rgba(255, 255, 255, 0.5),
                inset calc(var(--width) / 10) calc(var(--height) / 5) calc(var(--height) / 3.33) calc(var(--height) / -5) #c3c3c3,
                inset calc(var(--width) / -10) calc(var(--height) / -5) calc(var(--height) / 3.33) calc(var(--height) / -5) #fff;
        }
    }

    @media (prefers-color-scheme: dark) {
        #toggle input[type='checkbox'] {
            box-shadow:
                calc(var(--width) / -12.5) calc(var(--height) / -12.5) calc(var(--height) / 6.25) 0px rgba(255, 255, 255, 0.05),
                calc(var(--width) / 12.5) calc(var(--height) / 12.5) calc(var(--height) / 4.17) 0px rgba(0, 0, 0, 0.5),
                inset calc(var(--width) / -25) calc(var(--height) / -12.5) calc(var(--height) / 12.5) 0px rgba(255, 255, 255, 0.05),
                inset calc(var(--width) / 25) calc(var(--height) / 12.5) calc(var(--height) / 12.5) 0px rgba(0, 0, 0, 0.5);
        }
    }

    @media (prefers-color-scheme: light) {
        #toggle input[type='checkbox']::before {
            box-shadow:
                calc(var(--width) / 14.29) calc(var(--height) / 7.14) calc(var(--height) / 3.33) #c3c3c3,
                calc(var(--width) / 11.11) calc(var(--height) / 5.55) calc(var(--height) / 3.125) rgba(189, 189, 189, 0.6);
        }
    }

    @media (prefers-color-scheme: dark) {
        #toggle input[type='checkbox']::before {
            box-shadow:
                calc(var(--width) / -12.5) calc(var(--height) / -12.5) calc(var(--height) / 6.25) 0px rgba(255, 255, 255, 0.05),
                calc(var(--width) / 12.5) calc(var(--height) / 12.5) calc(var(--height) / 4.17) 0px rgba(0, 0, 0, 0.5);
        }
    }
    `,

    2:
    `
    /* HTML */
    <div id='toggle'>
        <input type='checkbox' />
    </div>

    /* CSS Styles */
    /* https://www.youtube.com/watch?v=z3TgmTi42ic&list=WL&index=1&t=72s&ab_channel=OnlineTutorials */
    #toggle {
        --width: 100px;
        --height: 40px;
        --transition: 0.4s;
    }

    #toggle {
        position: absolute;
    }

    #toggle input[type='checkbox'] {
        appearance: none;
        -webkit-appearance: none;
        position: relative;
        width: var(--width);
        height: var(--height);
        outline: none;
        border-radius: calc(var(--height) / 2);
        background: linear-gradient(0deg, #333, #000);
        box-shadow:
            0 0 0 calc(var(--width) / 30) #353535,
            0 0 0 calc(var(--width) / 24) #3e3e3e,
            inset 0 0 calc(var(--width) / 12) rgba(0, 0, 0, 1),
            0 calc(var(--height) / 8) calc(var(--width) / 6) rgba(0, 0, 0, 0.5),
            inset 0 0 calc(var(--width) / 8) rgba(0, 0, 0, 0.2);
        cursor: pointer;
        transition: var(--transition);
    }

    #toggle input[type='checkbox']:checked {
        background: linear-gradient(0deg, #6dd1ff, #20b7ff);
        box-shadow:
            0 0 calc(var(--width) / 60) #6dd1ff,
            0 0 0 calc(var(--width) / 30) #353535,
            0 0 0 calc(var(--width) / 24) #3e3e3e,
            inset 0 0 calc(var(--width) / 12) rgba(0, 0, 0, 1),
            0 calc(var(--height) / 8) calc(var(--width) / 6) rgba(0, 0, 0, 0.5),
            inset 0 0 calc(var(--width) / 8) rgba(0, 0, 0, 0.2);
    }

    #toggle input[type='checkbox']::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: calc(var(--width) * 2 / 3);
        height: var(--height);
        border-radius: calc(var(--height) / 2);
        background: linear-gradient(0deg, #000, #6b6b6b);
        box-shadow: 0 0 0 1px #232323;
        transform: scale(0.98, 0.96);
        transition: var(--transition);
    }

    #toggle input[type='checkbox']:checked::before {
        left: calc(var(--width) / 3);
    }

    #toggle input[type='checkbox']::after {
        content: '';
        position: absolute;
        top: calc(50% - calc(var(--width) / 60));
        left: calc(calc(var(--width) * 2 / 3) - calc(var(--width) / 8));
        width: calc(var(--width) / 30);
        height: calc(var(--width) / 30);
        border-radius: 50%;
        background: linear-gradient(0deg, #6b6b6b, #000);
        transition: var(--transition);
    }

    #toggle input[type='checkbox']:checked::after {
        left: calc(100% - calc(var(--width) / 8));
        background: #63cdff;
        box-shadow:
            0 0 calc(var(--width) / 24) #13b3ff,
            0 0 calc(var(--width) / 8) #13b3ff;
    }
    `,

    3:
    `
    /* HTML */
    <div id='toggle'>
        <input type='checkbox' />
    </div>

    /* CSS Styles */
    #toggle {
        --width: 40px;
        --height: 20px;
        --background-color: #63cdff;
        --transition: 0.4s;
    }

    #toggle {
        position: absolute;
    }

    #toggle input[type='checkbox'] {
        appearance: none;
        -webkit-appearance: none;
        position: relative;
        width: var(--width);
        height: var(--height);
        outline: none;
        border-radius: calc(var(--height) / 2);
        background: gray;
        cursor: pointer;
    }

    #toggle input[type='checkbox']:checked {
        background: var(--background-color);
    }

    #toggle input[type='checkbox']::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: calc(var(--width) / 2);
        height: calc(var(--width) / 2);
        border-radius: 20px;
        transform: scale(0.8);
        transition: var(--transition);
        background-color: #ffffff;
    }

    #toggle input[type='checkbox']:checked::before {
        left: calc(var(--width) / 2);
    }
    `,

    4:
    `
    /* HTML */
    <div id='toggle'>
        <input type='checkbox' />
    </div>

    /* CSS Styles */
    /* https://www.youtube.com/watch?v=JcU0tKqZ3b4&list=WL&index=32&ab_channel=OnlineTutorials */
    #toggle {
        --width: 100px;
        --height: 40px;
        --transition: 0.5s;
    }

    #toggle {
        position: absolute;
    }

    #toggle input[type='checkbox'] {
        appearance: none;
        -webkit-appearance: none;
        position: relative;
        width: var(--width);
        height: var(--height);
        box-sizing: border-box;
        overflow: hidden;
        border: calc(var(--height) / 10) solid #111;
        border-radius: calc(var(--width) / 15);
        background: #111;
        box-shadow: 0 calc(var(--height) / 4) calc(var(--height) / 2) rgba(0, 0, 0, 0.4);
        cursor: pointer;
    }

    #toggle input[type='checkbox']::before {
        content: 'OFF';
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: calc(var(--width) / 1.9);
        height: 100%;
        border-radius: 0 calc(var(--width) / 25) calc(var(--width) / 25) 0;
        font-family: 'Helvetica Neue', 'Times New Romam', 'sans-serif';
        font-size: calc(var(--width) / 6.25);
        font-weight: bold;
        color: #ffffff;
        background: #ff002d;
        transition: var(--transition) ease-out;
    }

    #toggle input[type='checkbox']::after {
        content: 'ON';
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 100%;
        text-align: center;
        width: calc(var(--width) / 1.9);
        height: 100%;
        border-radius: calc(var(--width) / 25) 0 0 calc(var(--width) / 25);
        font-family: 'Helvetica Neue', 'Times New Romam', 'sans-serif';
        font-size: calc(var(--width) / 6.25);
        font-weight: bold;
        color: #ffffff;
        background: #00da00;
        transition: var(--transition) ease-out;
    }

    #toggle input[type='checkbox']:checked::before {
        transform: translateX(calc(-100% - 1px));
    }

    #toggle input[type='checkbox']:checked::after {
        transform: translateX(-100%);
    }
    `
}

export default togglebutton_data;