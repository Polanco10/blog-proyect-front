import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.scss']
})
export class ArticleNewComponent implements OnInit {
  tagsList: string[] = ['Angular', 'Programacion', 'Front-end']

  form = this.fb.group({
    title: new FormControl('', Validators.required),
    tags: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form.value)
  }

}
