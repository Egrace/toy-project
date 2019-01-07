from rest_framework.response import Response
from rest_framework.views import APIView

from digits_recognizer.apps import DigitsRecognizerConfig


class PerformRecognize(APIView):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.recognizer = DigitsRecognizerConfig.recognizer

    def post(self, request, format=None):
        encoded_image = request.data['image'].split('data:image/jpeg;base64,')[1]

        result = self.recognizer.recognize(encoded_image)
        return Response(str(result))
