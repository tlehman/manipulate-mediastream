# Manipulating MediaStreams in HTML5

This is a working example of manipulating a video stream using HTML5 `<video>` elements, the `getUserMedia` method which returns a `Promise<MediaStream>` object. 

The `MediaStream` object wraps the video stream from your webcam. Then, it attachs the stream to the input `<canvas>` element. This will allow us to pull the array of pixel data from the canvas.

Finally, the output `<canvas>` element is where we draw the manipulated pixel data.

## How to use
open index.html, click "Allow" to let your browser use your camera. Then click "Manipulate", that will stream the video into the canvases.

# Credits
This example was based on [this awesome tutorial from deepstream.io](https://deepstream.io/tutorials/webrtc/webrtc-video-manipulation/). Head over to DeepStream.io and check out their sweet website.