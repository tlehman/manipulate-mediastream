
const width = 300;
const height = 225;
function drawToCanvas() {
    const video1 = document.getElementById("video1");
    const canvas1 = document.getElementById("canvas1");
    const canvas2 = document.getElementById("canvas2");
    const inputCtx = canvas1.getContext("2d");
    const outputCtx = canvas2.getContext("2d");
    inputCtx.drawImage(video1, 0, 0, width, height);
    outputCtx.drawImage(video1, 0, 0, width, height);
    // get the pixel data from input canvas
    const pixelData = inputCtx.getImageData(0, 0, width, height);
    const arr = pixelData.data;

    // Iterate through every pixel
    for (let i = 0; i < arr.length; i += 4) {
        const x = i/4 % (width);
        const y = i / (width * 4);
        if(x > 140 && x < 160 || y > 110 && y < 130) {
            arr[i + 0] = 0;
            arr[i + 1] = 0;
            arr[i + 2] = 0;
            arr[i + 3] = 0;
        }
    }

    // write the manipulated pixel data to the second canvas
    outputCtx.putImageData(pixelData, 0, 0);
    // recurse to itself for every animation frame
    requestAnimationFrame(drawToCanvas);
}
async function attachUserMediaToVideo() {
    // attach user MediaStream to <video> element
    const constraints = {
        audio: false,
        video: {
            width: { min: 300 },
            height: { min: 225 },
        },
    };
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    const video1 = document.getElementById("video1");
    video1.srcObject = stream;
}

attachUserMediaToVideo();
