 echo "BUILD START"
 python3.7 -m pip install -r requirements.txt
 python3.7 manage.py collectstatic --noinput --clear
 echo "BUILD END"