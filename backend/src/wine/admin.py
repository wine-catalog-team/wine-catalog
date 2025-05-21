from django.contrib import admin

from wine.models import Wine


@admin.register(Wine)
class WineAdmin(admin.ModelAdmin):
    list_display = [
        "type",
        "grape_variety",
        "vintage",
        "alcohol",
        "sugar",
        "acidity",
        "bottle_volume",
        "serving_temperature",
        "aging",
        "pairing",
        "aroma",
        "taste",
        "color",
    ]
