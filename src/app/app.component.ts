import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'codepen-clone-angular';
  html: any;
  css: any;
  javascript: any;
  srcDoc: any;
  private destroy$ = new Subject<void>();

  private codeChangeSubject = new Subject<void>();
  codeChange$ = this.codeChangeSubject.asObservable();
  timeout: any;

  constructor() {}

  ngOnInit(): void {
    this.updateSrcDoc();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  setHTML(event: any) {
    this.html = event;
    this.updateSrcDoc();
  }

  setCSS(event: any) {
    this.css = event;
    this.updateSrcDoc();
  }

  setJavascript(event: any) {
    this.javascript = event;
    this.updateSrcDoc();
  }

  private updateSrcDoc(): void {
    if (this.timeout) clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.srcDoc = `
        <html>
          <body>${this.html}</body>
          <style>${this.css}</style>
          <script>${this.javascript}</script>
        </html>
      `;
    }, 250);

    // Listen for the `destroy$` event and unsubscribe to avoid memory leaks
    this.destroy$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => clearTimeout(this.timeout));
  }
}
