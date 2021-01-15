import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TrailerSearchService } from './trailer-search.service'

@Component({
  selector: 'app-trailer-question',
  templateUrl: './trailer-question.component.html',
  styleUrls: ['./trailer-question.component.css']
})

export class TrailerQuestionComponent implements OnInit {

  @Input() quizedMovie;
  
  isTrailer = false
  imageSource: any
  videoSource: any
  videoSourceRaw: any
  
  constructor(private trailerSearchService: TrailerSearchService) { }

  ngOnInit() {
    this.getTrailer()      
  }

  takePicture() {
    var canvas = <HTMLCanvasElement>document.getElementById("canvas");
    var ctx = canvas.getContext("2d"); 
    canvas.width = 560;
    canvas.height = 345;
    const vid = document.getElementById('trailer') as HTMLVideoElement
    ctx.drawImage(vid, 0, 0, canvas.width, canvas.height);
    var img = new Image();    
    img.src = canvas.toDataURL()
    console.log(img.src)
    this.imageSource= img.src  
  }

  getTrailer() {
    this.trailerSearchService.getTrailer(this.quizedMovie.title, this.quizedMovie.year)
      .subscribe(r=> {this.videoSourceRaw = r[0]
                      console.log(r)
                    })
    this.videoSource = "http://localhost:4200/api/videoplayback?expire=1610718413&ei=bUgBYJ6XKf2qmLAP5KqFgAo&ip=90.2.146.62&id=o-AP3XkBBrGerH_nWWzRbdr_c3S4DARAeihOWuXItnpYd8&itag=136&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278&source=youtube&requiressl=yes&mh=j8&mm=31%2C29&mn=sn-25glen7e%2Csn-25ge7nzs&ms=au%2Crdu&mv=m&mvi=5&pl=17&initcwndbps=870000&vprv=1&mime=video%2Fmp4&ns=4va37z3xk0aiQAIPb8kBZgMF&gir=yes&clen=8933986&dur=150.680&lmt=1590853077151995&mt=1610696482&fvip=5&keepalive=yes&c=WEB&txp=5535432&n=H4iCaQz1iwCA8s&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgd0iiM3WD139K3d-3Fds2RYj2qB89ODQWnHWRe1GMo44CIAsdGJo39ACHN2DLRu9gmsL9x7LAtmLfmrTtyNoGIWcW&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAPdqYhXMqJWjnDE-ZnG1IPttYcw45kNZ-S6EhC_PULeHAiB5ojgXAeHBPGZm-jg4KQzk5bCd9aI5Wyn0F7pcHmkCHg%3D%3D&ratebypass=yes"
  }
} 
