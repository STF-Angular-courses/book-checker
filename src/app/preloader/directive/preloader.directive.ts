import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';
import { preloader } from '../assets/preloader';

@Directive({
  selector: '[appPreloader]'
})
export class PreloaderDirective implements OnChanges {
  @Input('appPreloader')
  private loading = false;

  private overlay: HTMLElement;

  constructor(
    private element: ElementRef,
  ) {
    this.createLoader();

    element.nativeElement.style.position = 'relative';
    element.nativeElement.appendChild(this.overlay);
  }

  private createLoader() {
    this.overlay = document.createElement('div');
    this.overlay.style.display = 'none';
    this.overlay.style.position = 'absolute';
    this.overlay.style.top = '0';
    this.overlay.style.left = '0';
    this.overlay.style.zIndex = '999';
    this.overlay.style.width = '100%';
    this.overlay.style.minWidth = '300px';
    this.overlay.style.height = '100%';
    this.overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';

    const spinner = document.createElement('div');
    spinner.style.position = 'absolute';
    spinner.style.width = '200px';
    spinner.style.height = '200px';
    spinner.style.left = '50%';
    spinner.style.top = '50%';
    spinner.style.transform = 'translate(-50%, -50%)';
    spinner.innerHTML = preloader;
    this.overlay.appendChild(spinner);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.overlay.style.display = changes.loading.currentValue ? 'block' : 'none';
  }
}
