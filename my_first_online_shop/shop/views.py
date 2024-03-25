from django.shortcuts import render
from . import choises


def home(request):
    context = {
        "title": "Online Shop",
        'producers': choises.BRAND,
        'processors': choises.PROCESSOR,
        'screen_coatings': choises.SCREEN_COATING,
        'screen_diagonals': choises.SCREEN_DIAGONAL,
        'screen_resolutions': choises.SCREEN_RESOLUTION,    
        'rams': choises.RAM,
        'processor_cores': choises.PROCESSOR_CORES,
        'ssd_scopes': choises.SSD_SCOPE,
        "oss": choises.OS,
        'video_card_types': choises.VIDEO_CARD_TYPE,
        'colors': choises.COLOR,
        'additionallyes': choises.ADDITIONALLY,
        
    }
    return render(request, "html/home.html", context)
