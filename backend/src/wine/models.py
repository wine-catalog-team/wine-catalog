from django.core.validators import MinValueValidator
from django.db import models
from django.utils.translation import gettext as _


class Wine(models.Model):
    type = models.CharField(max_length=120)
    grape_variety = models.CharField(max_length=120)
    vintage = models.DateField(auto_now=True)
    alcohol = models.PositiveSmallIntegerField()
    sugar = models.PositiveSmallIntegerField()
    acidity = models.FloatField(validators=[MinValueValidator(0.0)])
    bottle_volume = models.FloatField(validators=[MinValueValidator(0.0)])
    serving_temperature = models.PositiveSmallIntegerField()
    aging = models.CharField(max_length=120)
    pairing = models.CharField(max_length=120)
    aroma = models.CharField(max_length=120)
    taste = models.CharField(max_length=120)
    color = models.CharField(max_length=120)
    description = models.TextField(blank=True, null=True)
    short_description = models.CharField(max_length=120, blank=True, null=True)

    class Meta:
        verbose_name = _("Wine")
        verbose_name_plural = _("Wines")

    def __str__(self):
        return f"{self.type} {self.grape_variety}"
