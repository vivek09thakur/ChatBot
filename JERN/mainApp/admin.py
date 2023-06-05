from django.contrib import admin

# Register your models here.

from .models import Prompt

admin.site.register(Prompt)