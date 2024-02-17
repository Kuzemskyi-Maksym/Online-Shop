from django.shortcuts import render


def home(request):
    context = {"title": "Online Shop"}
    return render(request, "html/home.html", context)
