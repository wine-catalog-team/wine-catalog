from django.urls import include, path
from rest_framework import routers

from wine.views import WineViewSet

router = routers.DefaultRouter()
router.register("wines", WineViewSet)

app_name = "wine"

urlpatterns = [
    path("", include(router.urls)),
]
