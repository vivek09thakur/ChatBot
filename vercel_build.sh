#!/bin/bash
pip install -r requirements.txt
python manage.py collectstatic --noinput
python manage.py migrate
python manage.py runserver 0.0.0.0:$PORT
