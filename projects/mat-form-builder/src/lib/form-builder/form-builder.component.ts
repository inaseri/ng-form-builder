import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormBuilderInterface} from "./form-builder-model";

interface FormObject {
  [key: string]: any;
}

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit, OnChanges {

  @Input() items: FormBuilderInterface[] = [];
  @Input() formAppearance = 'outline' || 'legacy' || 'standard' || 'fill';
  @Input() saveButtonName = 'Save';
  @Input() saveButtonColor: string = 'warn';
  @Input() showSaveButton = true;
  @Input() checkForValid = true;
  @Input() buttonWidth: any;
  @Input() patchValue: any;
  @Input() fileDownloadPath: any;
  @Input() resetForm!: boolean;

  @Output() formResult: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() valueChangesForm: EventEmitter<any> = new EventEmitter<any>();
  @Output() mainFormValueChanges: EventEmitter<any> = new EventEmitter<any>();

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.resetForm) {
      this.form.reset();
    }
  }

  ngOnInit(): void {
    this.createForm();
    if (this.patchValue) {
      this.form.patchValue(this.patchValue);
      for (const item of this.items) {
        if (item.isFile) {
          this.form.get(item.formControlName)?.setValue(this.patchValue[item.formControlName]);
        }
      }
    }
  }

  createForm(): void {
    const group: FormObject = {};
    for (const item of this.items) {
      const validators = item.validators;
      group[item.formControlName] = ['', validators];
    }
    this.form = this.formBuilder.group(group);
    this.form.valueChanges.subscribe((result) => {
      this.valueChangesForm.emit(result);
    });
    this.mainFormValueChanges.emit(this.form);
  }

  addFile(files: any, formControlName: string): void {
    this.form.get(formControlName)?.patchValue(files?.target.files?.item(0));
  }

  triggerFileSelect(id: string): void {
    document.getElementById(id)?.click();
  }

  openImage(): void {
    let token: any;
    const user = sessionStorage.getItem('user');
    if (user != null) {
      token = JSON.parse(user).token;
    }

    const headres = new HttpHeaders({
      Authorization: `${token}`
    });
    this.http.get(this.fileDownloadPath, {responseType: 'arraybuffer', headers: headres}).subscribe(response => {
      const blob = new Blob([response], {type: '*/*'});
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = this.fileDownloadPath.split('?')[1].replace('fileName=', '');
      link.click();
      window.URL.revokeObjectURL(url);

    });
  }

  returnForm(): void {
    this.formResult.emit(this.form);
  }
}
