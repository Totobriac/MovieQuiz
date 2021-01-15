import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { SearchMovie } from './movie-search.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  constructor(private searchMovie: SearchMovie ) { }
  model: any
  @Output() movie = new EventEmitter()

  ngOnInit(): void {
  }

  submitForm(form: any) {    
    this.searchMovie.searchMovie(form)       
    .subscribe((r:any) => {this.movie.emit(r)
                            console.log(r)})    
  }

}
