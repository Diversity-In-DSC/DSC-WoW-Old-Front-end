# Generated by Django 2.2.5 on 2019-09-14 21:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teams', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='username',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
