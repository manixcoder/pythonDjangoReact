from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt # Import the csrf_exempt decorator to exempt views from CSRF protection
import json # Import the json module to handle JSON data 
from .models import * # Import all models from the current app to use them in the views   

# Create your views here.
@csrf_exempt # Exempt the view from CSRF protection

#Signup API
def signup(request):
    if request.method == 'POST':
        # Handle user signup logic here
        data = json.loads(request.body) # Parse the JSON data from the request body
        print(data) # Print the parsed JSON data for debugging
        fullname = data.get('FullName') # Access the 'FullName' field from the parsed JSON data
        email = data.get('Email') # Access the 'Email' field from the parsed JSON data
        password = data.get('Password') # Access the 'Password' field from the parsed JSON data

        if UserDetail.objects.filter(Email=email).exists(): # Check if a user with the same email already exists in the database
            return JsonResponse({'message': 'Email already exists'}, status=400) # Return an error response if the email already exists
        
        UserDetail.objects.create(FullName=fullname, Email=email, Password=password) # Create a new user detail record in the database

        return JsonResponse({'message': 'User signed up successfully'}, status=201) # Return a success response if the user is signed up successfully
    else:
        return JsonResponse({'message': 'Invalid request method'}, status=400)