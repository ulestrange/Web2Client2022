import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TestItem, TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-fbtest',
  templateUrl: './fbtest.component.html',
  styleUrls: ['./fbtest.component.css']
})
export class FbtestComponent implements OnInit {

  testItems: TestItem[] = [];

  myForm: FormGroup = new FormGroup({});

  constructor(private testService: TestServiceService,
    private fb: FormBuilder) {


  }

  ngOnInit(): void {
    this.testService.getItems().subscribe({
      next: (value: TestItem[]) => this.testItems = value,
    })

    let tagFormGroups = this.testItems[0].tags.map(
      tag => this.newTagGroup(tag));

    let tagFormArray = this.fb.array(tagFormGroups);

    this.myForm = this.fb.group({
      title: new FormControl(this.testItems[0].title),
      tags: tagFormArray
    });


  }

  newTagGroup(tag: String): FormGroup {
    return this.fb.group({
      tag: tag
    })
  }

  addTagGroup(): void {
    const tagForm = this.fb.group({
      tag: [''],
    });
    this.tags.push(tagForm);
  }

  deleteTagGroup(tagNumber: number) :void {
    this.tags.removeAt(tagNumber);

  }


  // short hand name getter for tags
  get tags() {
    return this.myForm.controls["tags"] as FormArray;
  }



  onSubmit() {
    console.log('forms submitted with: ');
    console.table(this.myForm?.value);
    // this.bookFormClose.emit(this.bookForm?.value);
  }

}