const checkbox_data = {
    1 :
    `
    /* HTML */
    <div id='checkbox'>
        <input type='checkbox' id='check' />
        <label for='check'>
            <div id='tick_mark'></div>
        </label>
    </div>

    /* CSS Styles */
    #checkbox {
        --diameter: 70px;
        --uncheck-background-color: #f72414;
        --check-background-color: #07d410;
    }

    #checkbox {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
    }

    #checkbox input[type='checkbox'] {
        display: none;
    }

    #checkbox label {
        appearance: none;
        -webkit-appearance: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--diameter);
        height: var(--diameter);
        margin: 0 auto;
        outline: 0;
        border: calc(var(--diameter) * 0.02) solid rgba(0, 0, 0, 0.44);
        border-radius: 50%;
        overflow: hidden;
        cursor: pointer;
        background-color: var(--uncheck-background-color);
        transform: translate(0);
        transition: 0.2s ease;
    }

    #checkbox label::before {
        content: '';
        position: absolute;
        top: 50%;
        width: calc(var(--diameter) * 0.6);
        height: calc(var(--diameter) * 0.6);
        margin: 0 auto;
        border: calc(var(--diameter) * 0.01) solid black;
        border-radius: 50%;
        background-color: #fff;
        transform: translateY(-50%);
        transition: 0.2s ease width, 0.2s ease height;
    }

    #checkbox label:hover::before {
        width: calc(var(--diameter) * 0.5);
        height: calc(var(--diameter) * 0.5);
    }

    #checkbox label:active {
        transform: translate(0) scale(0.9);
    }

    #checkbox input[type='checkbox']:checked+label {
        background-color: var(--check-background-color);
        box-shadow: 0 calc(var(--diameter) * 0.07) calc(var(--diameter) * 0.1) #92ff97;
    }

    #checkbox input[type='checkbox']:checked+label::before {
        content: '';
        width: 0;
        height: 0;
        border: 0;
    }

    #checkbox #tick_mark {
        position: absolute;
        width: calc(var(--diameter) * 0.6);
        height: calc(var(--diameter) * 0.6);
        margin: 0 auto;
        transform:
            rotateZ(-40deg) translateX(calc(var(--diameter) * 0.05)) translateY(calc(var(--diameter) * 0.01))
    }

    #checkbox #tick_mark::before,
    #checkbox #tick_mark::after {
        content: '';
        position: absolute;
        border-radius: calc(var(--diameter) * 0.02);
        background-color: #fff;
        opacity: 0;
        transition: 0.2s ease transform, 0.2s ease opacity;
    }

    #checkbox #tick_mark::before {
        left: 0;
        bottom: 0;
        width: calc(var(--diameter) * 0.1);
        height: calc(var(--diameter) * 0.3);
        box-shadow: calc(var(--diameter) * -0.02) 0 calc(var(--diameter) * 0.05) rgba(0, 0, 0, 0.23);
        transform: translateY(calc(var(--diameter) * -0.68));
    }

    #checkbox #tick_mark::after {
        left: 0;
        bottom: 0;
        width: 100%;
        height: calc(var(--diameter) * 0.1);
        box-shadow: 0 calc(var(--diameter) * 0.03) calc(var(--diameter) * 0.05) rgba(0, 0, 0, 0.23);
        transform: translateX(calc(var(--diameter) * 0.78));
    }

    #checkbox input[type='checkbox']:checked+label #tick_mark::before {
        opacity: 1;
        transform:
            translateY(calc(var(--diameter) * -0.2));
    }

    #checkbox input[type='checkbox']:checked+label #tick_mark::after {
        opacity: 1;
        transform: translateY(calc(var(--diameter) * -0.2));
    }
    `,

    2:
    `
    /* index.html */
    <head>
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet">
    </head>

    /* HTML */
    <div id='checkbox'>
        <label>
            <input type='checkbox' id='check' />
            <i className='fa fa-power-off'></i>
        </label>
    </div>

    /* CSS Styles */
    /* https://www.youtube.com/watch?v=tVL7Au0B1Cs&list=WL&index=11&ab_channel=OnlineTutorials */
    #checkbox {
        --size: 60px;
    }

    #checkbox {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
    }

    #checkbox label {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        cursor: pointer;
    }

    #checkbox label input[type='checkbox'] {
        appearance: none;
        -webkit-appearance: none;
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        background: #1b1b1b;
        box-shadow:
            0 calc(var(--size) / 20) calc(var(--size) / 15) rgba(0, 0, 0, 1),
            inset 0 calc(var(--size) / -30) calc(var(--size) / 12) rgba(0, 0, 0, 0.8),
            inset 0 calc(var(--size) / 30) calc(var(--size) / 30) rgba(255, 255, 255, 0.5),
            0 0 0 calc(var(--size) / 30) #000,
            0 0 0 calc(var(--size) / 12) #0c0c0c,
            0 0 0 calc(var(--size) / 10)#080808;
        cursor: pointer;
    }

    #checkbox label .fa {
        position: absolute;
        font-size: calc(var(--size) / 1.875);
        color: #0c0c0c;
    }

    #checkbox label input[type='checkbox']:checked {
        box-shadow:
            0 calc(var(--size) / 20) calc(var(--size) / 15) rgba(0, 0, 0, 1),
            inset 0 calc(var(--size) / -30) calc(var(--size) / 12) rgba(0, 0, 0, 0.8),
            inset 0 calc(var(--size) / 30) calc(var(--size) / 30) rgba(255, 255, 255, 0.5),
            0 0 0 calc(var(--size) / 30) #000,
            0 0 0 calc(var(--size) / 12) #0c0c0c,
            0 0 0 calc(var(--size) / 10)#00ffe7;
    }

    #checkbox label input[type='checkbox']:checked ~ .fa {
        color: #00ffe7;
        text-shadow:
            0 0 15px #00a1ff,
            0 0 30px #00a1ff;
    }
    `,

    3:
    `
    /* HTML */
    <div id='checkbox'>
        <input type='checkbox' id='check' />
    </div>

    /* CSS Styles */
    #checkbox {
        --size: 60px;
    }

    #checkbox {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
    }

    #checkbox input[type='checkbox'] {
        appearance: none;
        -webkit-appearance: none;
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        background: #f00;
        box-shadow:
            0 calc(var(--size) / 20) calc(var(--size) / 15) rgba(0, 0, 0, 1),
            inset 0 calc(var(--size) / -30) calc(var(--size) / 12) rgba(0, 0, 0, 0.8),
            inset 0 calc(var(--size) / 30) calc(var(--size) / 30) rgba(255, 255, 255, 0.5),
            0 0 0 calc(var(--size) / 30) #000,
            0 0 0 calc(var(--size) / 12) #0c0c0c,
            0 0 0 calc(var(--size) / 10)#f00;
        cursor: pointer;
    }

    #checkbox input[type='checkbox']:checked {
        background-color: #0f0;
        box-shadow:
            0 calc(var(--size) / 20) calc(var(--size) / 15) rgba(0, 0, 0, 1),
            inset 0 calc(var(--size) / -30) calc(var(--size) / 12) rgba(0, 0, 0, 0.8),
            inset 0 calc(var(--size) / 30) calc(var(--size) / 30) rgba(255, 255, 255, 0.5),
            0 0 0 calc(var(--size) / 30) #000,
            0 0 0 calc(var(--size) / 12) #0c0c0c,
            0 0 0 calc(var(--size) / 10)#0f0;
    }
    `
}

export default checkbox_data;