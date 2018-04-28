import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ResourcesService, SearchCriteria } from '../../../../services/resources.service';
import { ActivatedRoute } from '@angular/router';
import { ShareService } from '../../../../services/share.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from '../../../../services/local-storage.service';
import { NotificationService } from '../../../../components/snackbar/notification.service';

@Component({
  selector: 'app-anexo-create',
  templateUrl: './anexo-create.component.html',
  styleUrls: ['./anexo-create.component.css']
})
export class AnexoCreateComponent implements OnInit {
  public form: FormGroup;
  public loading: boolean = false;
  public id;
  @ViewChild('fileInput') fileInput: ElementRef;
  public anexos;
  public total;
  constructor(
    private route: ActivatedRoute,
    private resources: ResourcesService,
    private shared: ShareService,
    private fb: FormBuilder,
    private localStorage: LocalStorageService,
    private ns:NotificationService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      solicitacion: ['', Validators.required],
      attachment: null
    });
    this.resources.path = "anexo"
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getAnexos();
    })

  }
  getAnexos() {
    let criteria = new SearchCriteria();
    criteria.zfTableColumn = JSON.stringify({
      solicitacion: this.id
    })
    this.resources.getList(criteria).subscribe(
      resp => {
        this.anexos = resp.result.sEcho;
        this.total = resp.result.iTotalDisplayRecords;
        this.form.get('solicitacion').patchValue(this.id)
      }
    )
  }

  getAnexo(name) {
    return this.shared.getCover(name)
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      this.form.get('attachment').setValue(file);
    }
  }

  private prepareSave(): any {
    let input = new FormData();
    input.append('solicitacion', this.form.get('solicitacion').value);
    input.append('attachment', this.form.get('attachment').value);
    input.append('empresa', this.localStorage.getObject(this.localStorage.ADMIN_KEY).empresa);
    return input;
  }

  onSubmit() {
    const formModel = this.prepareSave();
    this.loading = true;
    // In a real-world app you'd have a http request / service call here like
    this.resources.path = "anexo"
    this.resources.create(formModel).subscribe(
      resp => {
        this.loading = false;
        this.ns.notify(resp.result.msg);
        this.getAnexos();
      },
      error => {
        this.loading = false;
      }
    )
  }

  clearFile() {
    this.form.get('attachment').setValue(null);
    this.fileInput.nativeElement.value = '';
  }

  delete(id) {
    this.resources.path = "anexo"
    this.resources.delete(id).subscribe(
      resp => {
        this.getAnexos();
        this.ns.notify(resp.result.msg)
      }
    )
  }

}
