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

  async getEmployee() {
    const response = await fetch(this.endPoint);
    this.employees = await response.json();
  }

  async componentWillLoad() {
    await this.getEmployee();
  }

  render() {
    return (
      <Host>
        <div>
          {this.employees.map(employee => (
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
          ))}
        </div>
      </Host>
    );
  }
}
