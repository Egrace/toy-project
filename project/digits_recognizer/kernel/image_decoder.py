import base64
import io

class ImageDecoder:
    def decode(self, base64_image):
        imgdata = base64.b64decode(base64_image)
        return io.BytesIO(imgdata)
