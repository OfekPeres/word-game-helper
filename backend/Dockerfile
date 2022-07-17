FROM python:latest

# Copy requirements first so Docker can cache them in an early build step
COPY requirements/common.txt requirements/common.txt
RUN pip install -U pip && pip install -r requirements/common.txt

COPY ./api /app/api
COPY ./bin /app/bin
COPY ./dictionaries /app/dictionaries
COPY wsgi.py /app/wsgi.py

WORKDIR /app

RUN useradd demo
USER demo

EXPOSE 8080

ENTRYPOINT ["bash", "/app/bin/run.sh"]

