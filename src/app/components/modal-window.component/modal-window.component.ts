import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { CategoriesService } from '../../services';

@Component({
  selector: 'cat-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss'],
})
export class ModalWindowComponent implements OnInit, OnDestroy {
  @Input() isModalWindowShown: boolean;
  @Output() closeWindows: EventEmitter<boolean> = new EventEmitter<boolean>();
  public isRegistrationPopUp: boolean = false;
  
  onCloseModalWindows() {
    this.closeWindows.emit();
  }

  constructor(private route: ActivatedRoute, /*private categoriesService: CategoriesService*/) {
   }

  public isRegistartionShown(): boolean{
    return this.isRegistrationPopUp && this.isModalWindowShown;
  }
  
  public isSignInShown(): boolean {
    return !this.isRegistrationPopUp && this.isModalWindowShown;
  }

  public switchPopUp(): boolean{
    return this.isRegistrationPopUp = !this.isRegistrationPopUp;
  }

  public ngOnInit(): void {

  }

  public ngOnDestroy() :void {

  }
};