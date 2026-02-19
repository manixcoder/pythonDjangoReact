from django.db import models

# Create your models here.

class UserDetail(models.Model):
    FullName = models.CharField(max_length=100)
    Email = models.EmailField(unique=True)
    Password = models.CharField(max_length=100)
    CreatedAt = models.DateTimeField(auto_now_add=True)


class Expense(models.Model):
    user_id = models.ForeignKey(UserDetail, on_delete=models.CASCADE)
    ExpenseDate = models.DateField(null=True, blank=True)
    ExpenseItem = models.CharField(max_length=255)
    ExpenseCost = models.DecimalField(max_digits=10, decimal_places=2)
    CreatedAt = models.DateTimeField(auto_now_add=True)