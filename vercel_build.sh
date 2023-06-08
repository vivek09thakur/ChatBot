#!/bin/bash
# pip install -r requirements.txt
# python manage.py collectstatic --noinput
# python manage.py migrate
# python manage.py runserver 0.0.0.0:$PORT

echo "BUILD START"
python3.9 -m pip install -r requirements.txt
python3.9 manage.py collectstatic --noinput --clear
echo "BUILD END"


