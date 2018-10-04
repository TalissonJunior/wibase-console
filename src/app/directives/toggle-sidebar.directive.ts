import { Directive, HostListener, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { DeviceDetectorService } from 'ngx-device-detector';

@Directive({
  selector: '[appToggleSidebar]'
})
export class ToggleSidebarDirective {
  backDropElement: HTMLDivElement;
  bodyElement: HTMLBodyElement;
  sidebarHeader: HTMLHeadElement;

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document, private deviceService: DeviceDetectorService) { }

  ngOnInit() {
    if (!this.deviceService.isDesktop()) {

      this.backDropElement = this.createBackdropElement();
      this.bodyElement = document.querySelector('body');
      this.sidebarHeader = this.document.querySelector('header.sidebar-header');

      this.backDropElement.addEventListener('click', () => this.toggle());
    }
  }

  //toggles the class "sidebar-open" to the body, and shows the header component when clicked;
  @HostListener('click') toggle() {
    if (!this.deviceService.isDesktop()) {

      let classSidebarOpen = "sidebar-open";

      if (this.bodyElement.classList.contains(classSidebarOpen)) {
        this.bodyElement.classList.remove(classSidebarOpen);
        this.removeBackDrop();
        this.sidebarHeader.setAttribute("hidden", '');
      }
      else {
        this.sidebarHeader.removeAttribute("hidden");
        this.bodyElement.classList.add(classSidebarOpen)
        this.addBackDrop();
      }
    }
  }

  private createBackdropElement(): HTMLDivElement {
    let backdropEl = document.createElement("div");
    backdropEl.classList.add("app-backdrop");
    backdropEl.classList.add("backdrop-sidebar");

    return backdropEl;
  }

  private addBackDrop() {
    this.renderer.appendChild(this.bodyElement, this.backDropElement);
  }

  private removeBackDrop() {
    this.bodyElement.querySelector('.backdrop-sidebar').parentNode.removeChild(this.bodyElement.querySelector('.backdrop-sidebar'));
  }

}
