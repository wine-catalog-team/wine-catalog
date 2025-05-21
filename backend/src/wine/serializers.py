from rest_framework import serializers

from wine.models import Wine


class WineDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wine
        fields = [
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
            "description",
            "short_description",
        ]  # TODO Отредактировать в детализированном виде


class WineListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wine
        fields = "__all__"  # ToDO Сделать для списка
