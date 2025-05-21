from rest_framework import mixins, viewsets

from wine.models import Wine
from wine.serializers import WineDetailSerializer


class WineViewSet(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    mixins.CreateModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin,
    viewsets.GenericViewSet,
):
    queryset = Wine.objects.all()
    serializer_class = WineDetailSerializer
