import { Component, OnInit } from '@angular/core';
const DISH={
  id:'0',
  name:'Uthappapizza',
  image:'assets/images/uthappizza.png',
  label:'Hot',
  featured:true,
  category:'mains',
  price:'4.99',
  description:'A unique combination of Indian Uthapam (pancake) and Italian pizza ,topped with Cerigonola olives,ripe vine cherry tomatoes,vidalia onion,Guntur chillies and Buffalo Paneer',
  comments:[
    {
      rating:5,
      comment:'Imagine all the eatables,living in confusion!',
      author:'John Lemon',
      date:'2012-10-16T17:57:28.5569944Z'

    },
    {
      rating:4,
      comment:'Sends anyone to heaven. I wish i could get my mother to eat it!',
      author:'Paul McVities',
      date:'2014-09-05T17:57:28.556094Z'

    },
    {
      rating:3,
      comment:'Eat it just it it',
      author:'Michael Jaikishan',
      date:'2015-02-13T17:57:28.556094Z'

    },
    {
      rating:4,
      comment:'Ultimate,Reaching for the stars',
      author:'Ringo Starry',
      date:'2013-12-02T17:57:28.556094Z'

    },
    {
      rating:2,
      comment:' Its your birthday,we are gonna to party ',
      author:'25 Cent',
      date:'2011-12-02T17:57:28.556094Z'

    },
  ]

};


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})


export class DishdetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dish=DISH;

}
