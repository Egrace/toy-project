import tensorflow as tf
from keras.models import model_from_json
from keras import backend as K
K.set_image_dim_ordering('th')


class Model:
    def __init__(self):
        with open('/code/model_architecture.json', 'r') as f:
            self.model = model_from_json(f.read())

        self.model.load_weights('/code/model_weights.h5')
        self.model._make_predict_function()
        self.graph = tf.get_default_graph()

    def predict(self, image):
        with self.graph.as_default():
            return self.model.predict(image)[0].argmax()
