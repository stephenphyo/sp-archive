const textanimation_data = {
    1 :
    `
    /* HTML */
    <p id='textanimation'>
        <span>S</span>
        <span>t</span>
        <span>e</span>
        <span>p</span>
        <span>h</span>
        <span>e</span>
        <span>n</span>
    </p>

    /* CSS Styles */
    /* https: //www.youtube.com/watch?v=1B3FgFXn274&list=WL&index=3&t=5s&ab_channel=OnlineTutorials */
    @import url('https://fonts.googleapis.com/css?family=Bad+Script');

    #textanimation {
        --font-family: 'Bad Script', cursive;
        --font-size: 36px;
        --font-weight: 600;
    }

    #textanimation {
        font-family: var(--font-family);
        font-size: var(--font-size);
        font-weight: var(--font-weight);
    }

    #textanimation span {
        animation: textanimation001 2s linear infinite;
    }

    #textanimation span:nth-child(1) {
        animation-delay: 0s;
    }
    #textanimation span:nth-child(2) {
        animation-delay: 0.25s;
    }
    #textanimation span:nth-child(3) {
        animation-delay: 0.5s;
    }
    #textanimation span:nth-child(4) {
        animation-delay: 0.75s;
    }
    #textanimation span:nth-child(5) {
        animation-delay: 1s;
    }
    #textanimation span:nth-child(6) {
        animation-delay: 1.25s;
    }
    #textanimation span:nth-child(7) {
        animation-delay: 1.5s;
    }

    @keyframes textanimation001 {
        0%, 100% {
            color: #ffffff;
            filter: blur(0.5px);
            text-shadow:
                0 0 10px #00b3ff,
                0 0 20px #00b3ff,
                0 0 40px #00b3ff,
                0 0 80px #00b3ff,
                0 0 120px #00b3ff,
                0 0 200px #00b3ff,
                0 0 300px #00b3ff,
                0 0 400px #00b3ff;
        }
        5%, 95% {
            color: #111111;
            filter: blur(0px);
            text-shadow: none;
        }
    }
    `
}

export default textanimation_data;