FROM python:3.6
ENV PYTHONUNBUFFERED 1
COPY . /code/
RUN pip install -r /code/project/requirements.txt
