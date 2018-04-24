import { Injectable } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators,
    FormControl
} from '@angular/forms';

@Injectable()
export class FormService {
    public AppForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }


}