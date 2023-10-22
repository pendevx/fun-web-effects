const SENSITIVITY = 100;
const HEIGHT_STRETCH = 50;
const WIDTH_STRETCH = 120;
const MAX_SCALE = 0.5;

const elements = document.querySelectorAll(".icon");
let moved = new Array(elements.length).fill(false);
const positions = [...elements].map(x => {
    const clientRect = x.getBoundingClientRect();

    return {
        centerX: clientRect.left + clientRect.width / 2, 
        centerY: clientRect.top + clientRect.height / 2
    };
});

function mouseMoved(e) {
    const { clientX } = e;

    for (let i = 0; i < elements.length; i++) {
        const distanceX = clientX - positions[i].centerX;

        if (Math.abs(distanceX) < Math.PI * WIDTH_STRETCH / 2) {
            const height = Math.sin((1 / WIDTH_STRETCH) * distanceX + Math.PI / 2) * HEIGHT_STRETCH;
            elements[i].style.transform = `translateY(-${height}px) scale(${height / HEIGHT_STRETCH * MAX_SCALE + 1})`;
        } else {
            elements[i].style.transform = "";
        }
    }
    
}

document.onmousemove = mouseMoved;
