import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { information } from '../interfaces/interfaces.information';
import { CallerService } from '../service/service.caller';
import { blank } from '../mockeddata/mockeddata.personmocked';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss'],
})
export class InsertComponent {
  personForm: FormGroup;
  insertPerson: information;
  collegeCheck: boolean;
  highSchoolCheck: boolean;
  workCheck: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private CallerService: CallerService
  ) {
    this.personForm = this.formBuilder.group({
      person: this.formBuilder.group({
        name: this.formBuilder.control('', [Validators.required]),
        lastName: this.formBuilder.control('', [Validators.required]),
        age: this.formBuilder.control('', [
          Validators.required,
          Validators.min(1),
        ]),
      }),
      address: this.formBuilder.group({
        city: this.formBuilder.control('', [Validators.required]),
        cap: this.formBuilder.control('', [Validators.required]),
        street: this.formBuilder.control('', [Validators.required]),
        at: this.formBuilder.control(''),
      }),
      profession: this.formBuilder.group({
        college: this.formBuilder.control(''),
        highSchool: this.formBuilder.control(''),
        salary: this.formBuilder.control(''),
        rank: this.formBuilder.control(''),
      }),
    });
    this.insertPerson = blank;
    this.collegeCheck = false;
    this.highSchoolCheck = false;
    this.workCheck = false;
  }

  openList(): void {
    this.router.navigate(['/reader']);
  }

  setChecked(data: profession): void {
    if (data === 'college') {
      this.collegeCheck = !this.collegeCheck;
    } else if (data === 'work') {
      this.workCheck = !this.workCheck;
    } else {
      this.highSchoolCheck = !this.highSchoolCheck;
    }
  }

  savePerson(): void {
    if (this.personForm.invalid) {
      alert('Dati non validi');
      return;
    }
    this.insertPerson = {
      person: {
        name: this.personForm.get('person')?.get('name')?.value,
        lastname: this.personForm.get('person')?.get('lastName')?.value,
        age: this.personForm.get('person')?.get('age')?.value,
      },
      address: {
        city: this.personForm.get('address')?.get('city')?.value,
        cap: this.personForm.get('address')?.get('cap')?.value,
        street: this.personForm.get('address')?.get('street')?.value,
        at: this.personForm.get('address')?.get('at')?.value,
      },
      culture: {
        college: this.personForm.get('profession')?.get('college')?.value,
        highSchool: this.personForm.get('profession')?.get('highSchool')?.value,
      },
      work: {
        salary: this.personForm.get('profession')?.get('salary')?.value,
        rank: this.personForm.get('profession')?.get('rank')?.value,
      },
    };
    this.CallerService.sendDataByEvent(this.insertPerson);
  }
}

type profession = 'college' | 'highSchool' | 'work';
