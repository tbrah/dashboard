import { OrderByDonePipe } from './order-by-done.pipe';

describe('OrderByDonePipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByDonePipe();
    expect(pipe).toBeTruthy();
  });
});
