const loader_data = {
    1:
    `
    /* HTML */
    <div id='loader'>
        <div></div><div></div><div></div>
    </div>

    /* CSS Styles */
    #loader {
        --diameter: 18px;
        --gap: 3px;
        --color: gray;
    }

    #loader {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 100%;
        height: 100%;
        gap: var(--gap);
    }

    #loader div {
        display: inline-block;
        width: var(--diameter);
        height: var(--diameter);
        border-radius: 50%;
        background: var(--color);
        animation: loader 0.9s infinite;
    }

    #loader div:nth-child(1) {
        animation-delay: 0s;
    }

    #loader div:nth-child(2) {
        animation-delay: 0.2s;
    }

    #loader div:nth-child(3) {
        animation-delay: 0.4s;
    }

    @keyframes loader {
        0% {
            transform: scale(1);
        }
        50%, 100% {
            transform: scale(0.7);
        }
    }
    `,

    2:
    `
    /* HTML */
    <div id='loader'>
        <div></div><div></div><div></div>
    </div>

    /* CSS Styles */
    #loader {
        --width: 16px;
        --height: 32px;
        --gap: 5px;
        --color: gray;
    }

    #loader {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 100%;
        height: 100%;
        gap: var(--gap);
    }

    #loader div {
        display: inline-block;
        width: var(--width);
        background: var(--color);
        animation: loader 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    }

    #loader div:nth-child(1) {
        animation-delay: 0s;
    }

    #loader div:nth-child(2) {
        animation-delay: 0.12s;
    }

    #loader div:nth-child(3) {
        animation-delay: 0.24s;
    }

    @keyframes loader {
        0% {
            height: calc(var(--height) * 2);
        }
        50%, 100% {
            height: var(--height);
        }
    }
    `,

    3:
    `
    /* HTML */
    <div id='loader'></div>

    /* CSS Styles */
    #loader {
        --diameter: 60px;
        --color: gray;
    }

    #loader {
        display: inline-block;
        width: var(--diameter);
        height: var(--diameter);
    }

    #loader:after {
        content: ' ';
        display: block;
        width: calc(var(--diameter) * 0.8);
        height: calc(var(--diameter) * 0.8);
        margin: calc(var(--diameter) * 0.1);
        border-radius: 50%;
        border: calc(var(--diameter) * 0.075) solid var(--color);
        border-color: var(--color) transparent var(--color) transparent;
        animation: loader003 1.2s linear infinite;
    }

    @keyframes loader003 {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    `
}

export default loader_data;