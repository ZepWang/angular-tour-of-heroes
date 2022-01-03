import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
} from '@angular/forms';
import { GetEmployeeInfo } from './show-info-request.payload';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.scss'],
})
export class ShowInfoComponent implements OnInit {
  //I am familiar with REST API and AJAX/Axios;
  url = '';
  API_URL = 'http://localhost:8080/reportingStructure/';

  employeeId1 = '16a596ae-edd3-4847-99fe-c4518e82c86f';
  employeeId2 = 'b7839309-3348-463b-a7e3-5de1c168beb3';
  employeeId3 = '03aa1462-ffa9-4978-901b-7c001562cf6f';
  employeeId4 = 'c0c2293d-16bd-4603-8e08-638a9d18b22c';

  items = [] as any;
  directReports = [] as any;
  emplyeeInfo: string = '';
  department: string = '';
  position: string = '';
  firstName: string = '';
  lastName: string = '';
  showInfo: boolean = false;
  NumOfReport: string = '';
  constructor(private http: HttpClient) {}

  loadInfo() {
    this.http
      .get(this.url)
      .toPromise()
      .then((data: any) => {
        console.log(data);

        this.department = data.employee.department;
        this.position = data.employee.position;
        this.firstName = data.employee.firstName;
        this.lastName = data.employee.lastName;
        this.NumOfReport = data.numberOfReports;
        this.emplyeeInfo = JSON.stringify(data);
        this.directReports = data.employee.directReports;

        // for (let key in data)
        //   if (data.hasOwnProperty(key)) this.items.push(data[key]);
      });
  }

  ngOnInit(): void {}

  showPerson1() {
    this.url = this.API_URL + this.employeeId1;
    this.loadInfo();
  }
  showPerson2() {
    this.url = this.API_URL + this.employeeId2;
    this.loadInfo();
  }
  showPerson3() {
    this.url = this.API_URL + this.employeeId3;
    this.loadInfo();
  }
  showPerson4() {
    this.url = this.API_URL + this.employeeId4;
    this.loadInfo();
  }
  showJson() {
    this.showInfo = true;
  }
  hideJson() {
    this.showInfo = false;
  }
  submit(event: any) {
    this.url = this.API_URL + event.target.value;

    this.loadInfo();
  }
}
