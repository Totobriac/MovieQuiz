from django.urls import path
from services import views 

urlpatterns = [    
    path('search_movie/<str:movie>', views.MovieSearch.as_view(), name='movie_search'),
    path('search_actors/<str:actors>', views.ActorsSearch.as_view(), name='actors_search'),
    path('search_trailer/<str:info>', views.TrailerSearch.as_view(), name='trailer_search')
]