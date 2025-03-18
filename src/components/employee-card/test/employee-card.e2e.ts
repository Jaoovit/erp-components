import { newE2EPage } from '@stencil/core/testing';

describe('employee-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<employee-card></employee-card>');

    const element = await page.find('employee-card');
    expect(element).toHaveClass('hydrated');
  });
});
