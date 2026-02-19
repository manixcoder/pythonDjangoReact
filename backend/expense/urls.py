from django.urls import path
from .views import * # Import all views from the current app to use them in the URL patterns

urlpatterns = [
    path('signup/', signup, name='signup'), # Define a URL pattern for the signup view, which will be accessible at the /signup/ endpoint
]