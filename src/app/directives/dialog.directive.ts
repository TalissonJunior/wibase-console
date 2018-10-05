import { Directive, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Directive({
  selector: '[appDialog]'
})
export class DialogDirective implements OnInit {
  $dialogContainer: Element;
  $dialog: Element;

  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit() {
    this.$dialogContainer = document.querySelector('body').querySelector('modal-container');
    this.$dialog = document.querySelector('body').querySelector('.modal-content').children[0];
    
    if (this.deviceService.isDesktop()) {
      this.addDesktopClass();
    }
    else {
      this.addMobileClass();
      this.handleMobileHeader();
    }

  }

  private addDesktopClass(): void {
    this.$dialogContainer.classList.add('modal-desktop');
    this.$dialogContainer.classList.add('modal-center');
  }

  private addMobileClass(): void {
    this.$dialogContainer.classList.add('modal-mobile');
    this.$dialogContainer.classList.add('modal-mobile-tabs');
  }

  private handleMobileHeader(): void {
    let $closeIcon = this.$dialog.querySelector('[data-dialog="close"]');
    let $addButton = this.$dialog.querySelector('[data-dialog="addButton"]');

    $addButton.classList.add('btn-pure');

    if ($closeIcon && $addButton) {
      var $header = this.$dialog.querySelector('.modal-header');

      if ($header) {

        $header.appendChild($addButton);
        $header.insertBefore($closeIcon, $header.firstChild);
      }
    }
  }

}
