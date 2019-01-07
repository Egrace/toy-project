from django.apps import AppConfig

from digits_recognizer.kernel.recognizer import Recognizer


class DigitsRecognizerConfig(AppConfig):
    name = 'digits_recognizer'
    recognizer = Recognizer()
