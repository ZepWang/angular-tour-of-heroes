import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-info2',
  templateUrl: './show-info2.component.html',
  styleUrls: ['./show-info2.component.scss'],
})
export class ShowInfo2Component implements OnInit {
  //I am familiar with REST API and AJAX/Axios;
  url = '';
  API_URL = 'http://localhost:8080/compensation/';

  employeeId1 = '62c1084e-6e34-4630-93fd-9153afb65309';

  items = [] as any;
  directReports = [] as any;
  emplyeeInfo: string = '';
  department: string = '';
  position: string = '';
  firstName: string = '';
  lastName: string = '';
  showInfo: boolean = false;
  NumOfReport: string = '';
  salary: string = '';
  effectiveDate = '';
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
        this.salary = data.salary;
        this.effectiveDate = data.effectiveDate;

        // for (let key in data)
        //   if (data.hasOwnProperty(key)) this.items.push(data[key]);
      });
  }

  ngOnInit(): void {}

  showPerson1() {
    this.url = this.API_URL + this.employeeId1;
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
