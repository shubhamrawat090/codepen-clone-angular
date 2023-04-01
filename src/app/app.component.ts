import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges {
  title = 'codepen-clone-angular';
  html: any;
  css: any;
  javascript: any;
  srcDoc: any;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    const timeout = setTimeout(() => {
      this.srcDoc = `
        <html>
          <body>${this.html}</body>
          <style>${this.css}</style>
          <script>${this.javascript}</script>
        </html>
      `;
    }, 250);

    clearTimeout(timeout);
  }

  setHTML(event: any) {
    this.html = event;
  }

  setCSS(event: any) {
    this.css = event;
  }

  setJavascript(event: any) {
    this.javascript = event;
  }
}
