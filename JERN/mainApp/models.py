import datetime
from django.db import models
from django.utils import timezone

# Create your models here.
class Prompt(models.Model):

    def __str__(self):
        return self.prompt_text
    
    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)
    
    prompt_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')

class Answer(models.Model):

    def __str__(self):
        return self.choice_text
    
    prompt = models.ForeignKey(Prompt,on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0,)