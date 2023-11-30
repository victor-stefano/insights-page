import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-gpt',
  templateUrl: './gpt.component.html',
  styleUrls: ['./gpt.component.scss']
})
export class GptComponent {
  
  isWidgetSmallerThan768 = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.verificarTamanhoWidget();
  }

  ngOnInit() {
    this.verificarTamanhoWidget();
  }

  verificarTamanhoWidget() {
    this.isWidgetSmallerThan768 = window.innerWidth < 768;
  }
}
