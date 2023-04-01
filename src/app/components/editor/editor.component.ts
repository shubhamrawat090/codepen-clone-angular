import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent {
  editorOptions = {};

  @Input() set language(lang: any) {
    this.editorOptions = {
      theme: 'vs-dark',
      language: lang,
    };
  }

  @Input() displayName: any;
  @Input() value: any;

  @Output() onChange = new EventEmitter();

  valueChanged(event: any) {
    this.onChange.emit(event);
  }
}
