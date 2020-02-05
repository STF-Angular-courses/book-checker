import {
  ComponentFactoryResolver, ComponentRef,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewContainerRef
} from '@angular/core';
import { PreloaderComponent } from '../preloader/preloader.component';

@Directive({
  selector: '[appPreloader]'
})
export class PreloaderDirective implements OnChanges {
  @Input('appPreloader')
  private loading = false;

  private component: ComponentRef<PreloaderComponent>;
  private preloaderIndex?: number;

  constructor(
    private element: ElementRef,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
    this.element.nativeElement.style.position = 'relative';

    this.initPreloaderComponent();
    this.showPreloader();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.loading.currentValue) {
      this.showPreloader();

      return;
    }

    this.hidePreloader();
  }

  private initPreloaderComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PreloaderComponent);
    this.component = componentFactory.create(this.viewContainerRef.injector);
  }

  private showPreloader() {
    if (Number.isInteger(this.preloaderIndex)) {
      return;
    }

    this.viewContainerRef.insert(this.component.hostView);
    this.preloaderIndex = this.viewContainerRef.length - 1;
  }

  private hidePreloader() {
    if (!Number.isInteger(this.preloaderIndex) && !this.preloaderIndex) {
      return;
    }

    this.viewContainerRef.remove(this.preloaderIndex);
    this.preloaderIndex = undefined;
  }
}
