import { Injectable } from '@angular/core';

@Injectable()
export class PopupService {

popupState = false;
currentItem = [];

  constructor() { }

togglePopup(){
  this.popupState = !this.popupState;
}

editPopup(item){
  this.togglePopup();
  this.currentItem = item;
}
}
