import requests
from django.http import HttpResponse
from django.views import View
from rest_framework.decorators import api_view
from django.http import JsonResponse
import subprocess


class MovieSearch(View):

    def get(self, request, movie):
        search_url = "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/" + movie
        headers = {
            'x-rapidapi-key': "3c90722e1fmshd3624c65becfb47p1d49a9jsn722fc9909dc4",
            'x-rapidapi-host': "imdb-internet-movie-database-unofficial.p.rapidapi.com"
            }
        response = requests.get( search_url, headers=headers)
        return HttpResponse(response)

        
class ActorsSearch(View):

    def get(self, request, actors):
        actorPicUrl= []
        actors_list = actors.split('-')              
        subscription_key = "9dc015a3a15c45abb05f88bcea641c2d"
        search_url = "https://api.bing.microsoft.com/v7.0/images/search"
        headers = {"Ocp-Apim-Subscription-Key" : subscription_key}
        for actor in actors_list:
            response = requests.get(search_url, headers=headers, params={"q": actor, "count": "10"})
            search_results = response.json()            
            url_list = [val["thumbnailUrl"] for val in search_results["value"]]
            actorPicUrl.append(url_list)
        return JsonResponse(actorPicUrl, safe=False)


class TrailerSearch(View):

    def get(self, request, info):
        search_url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet"
        params = {"maxResults" : 1, "q": "trailer" + info, "key": "AIzaSyDdU8fgEmwuJP-eL3v_HxNv2AogCmC7wYA"}
        response = requests.get(search_url, params=params)
        search_result = response.json()
        video_id = search_result["items"][0]["id"]["videoId"]
        video_src = subprocess.run(["youtube-dl", "-g", "https://www.youtube.com/watch?v=" + video_id], encoding='utf-8', stdout=subprocess.PIPE)
        return JsonResponse(video_src.stdout.split("\n"), safe=False)
