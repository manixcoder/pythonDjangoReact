from django.contrib import admin

from .models import UserDetail, Expense # Import the models to register them in the admin site

# from .models import * # Import all models from the current app to register them in the admin site

# Register your models here.
admin.site.register(UserDetail) # Register the UserDetail model to make it accessible in the admin site
admin.site.register(Expense) # Register the Expense model to make it accessible in the admin site


