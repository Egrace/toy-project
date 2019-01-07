from digits_recognizer.kernel.model import Model
from digits_recognizer.kernel.image_decoder import ImageDecoder
from digits_recognizer.kernel.image_preprocessor import ImagePreprocessor

class Recognizer:
    def __init__(self):
        self.model = Model()
        self.decoder = ImageDecoder()
        self.preprocessor = ImagePreprocessor()

    def recognize(self, base64_image):
        decoded_image = self.decoder.decode(base64_image)
        preprocessed_image = self.preprocessor.preprocess(decoded_image)

        return self.model.predict(preprocessed_image)

