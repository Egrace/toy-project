from skimage.io import imread
from skimage.util import invert
from skimage.color import rgb2gray
from skimage.transform import resize


class ImagePreprocessor:
    def preprocess(self, image):
        original_image = imread(image)
        resized_image = resize(original_image, (28, 28), anti_aliasing=True)
        gray_scaled_image = rgb2gray(resized_image)
        inverted_image = invert(gray_scaled_image)

        return inverted_image.reshape(1, 1, 28, 28).astype('float32')
