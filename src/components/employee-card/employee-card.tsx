import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'employee-card',
  styleUrl: 'employee-card.css',
  shadow: true,
})
export class EmployeeCard {
  @State() employees: any[] = [];

  @Prop() endPoint: string = '/assets/employees-list-1.json';
  @Prop() currencySymbol: string = '€';
  @Prop() employeeId: number = 1;

  async getEmployee() {
    const response = await fetch(this.endPoint);
    this.employees = await response.json();
  }

  async componentWillLoad() {
    await this.getEmployee();
  }

  render() {
    const employee = this.employees.find(emp => emp.id === this.employeeId);

    return (
      <Host>
        <div>
          {employee ? (
            <div>
              <h2>{employee.name}</h2>
              <p>
                <strong>{employee.department}: </strong>
                {employee.title}
              </p>
              <p>level: {employee.experience_level}</p>
              <p>
                salary: {this.currencySymbol}
                {employee.salary}
              </p>
            </div>
          ) : (
            <p>Employee with ID {this.employeeId} not found.</p>
          )}
        </div>
      </Host>
    );
  }
}
