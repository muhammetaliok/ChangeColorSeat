from django.shortcuts import render

# Create your views here.
def change_color(request):
    context={}
    return render(request,"change.html",context)