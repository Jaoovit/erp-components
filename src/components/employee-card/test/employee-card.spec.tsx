import { newSpecPage } from '@stencil/core/testing';
import { EmployeeCard } from '../employee-card';

describe('employee-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EmployeeCard],
      html: `<employee-card></employee-card>`,
    });
    expect(page.root).toEqualHtml(`
      <employee-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </employee-card>
    `);
  });
});
