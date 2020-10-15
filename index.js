function drawToCanvas() {
    const video1 = document.getElementById("video1");
    const canvas1 = document.getElementById("canvas1");
    const canvas2 = document.getElementById("canvas2");
    const inputCtx = canvas1.getContext('2d');
    const outputCtx = canvas2.getContext('2d');
    inputCtx.drawImage(video1, 0, 0, 300, 225);
    outputCtx.drawImage(video1, 0, 0, 300, 225);
    // get the pixel data from input canvas
    const pixelData = inputCtx.getImageData( 0, 0, 300, 255 );
    var avg = 0;

    // apply a  simple greyscale transformation
    for(var i = 0; i < pixelData.data.length; i += 4 ) {
        avg = (
            pixelData.data[ i ] +
            pixelData.data[ i + 1 ] +
            pixelData.data[ i + 2 ]
        ) / 3;
        pixelData.data[ i ] = avg;
        pixelData.data[ i + 1 ] = avg;
        pixelData.data[ i + 2 ] = avg;
    }

    // write the manipulated pixel data to the second canvas
    outputCtx.putImageData( pixelData, 0, 0 );
    // recurse to itself for every animation frame
    requestAnimationFrame(drawToCanvas);
};
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