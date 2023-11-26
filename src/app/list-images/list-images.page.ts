import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

export interface InfoImage {
  id: string, 
  photo: string, 
  text: string
}

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.page.html',
  styleUrls: ['./list-images.page.scss'],
})
export class ListImagesPage implements OnInit {
  allItems: Array<InfoImage> = [];
  items: Array<InfoImage> = [];
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.allItems.length + 1;
    if (count < 4000){
      for (let i = 0; i < 50; i++){
        let id: string = (count + i).toString();
        let infImg: InfoImage = {id: id, photo: "https://picsum.photos/500/500?random=" + id, text: "Image " + id};
        this.allItems.push(infImg);
        if (this.allItems.length == 4000){
          break;
        }
      }
    }
    this.items = [...this.allItems];
  }

  onIonInfinite(ev: any) {
    this.generateItems();
    
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

  onSearch(event: any){
    const value = event.target.value;
    if (value){
      this.items = this.allItems.filter(item => item.id.includes(value.toLowerCase()) || item.text.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
    } else {
      this.items = [...this.allItems];
    }
  }
}
