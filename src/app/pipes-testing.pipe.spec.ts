import { PipesTestingPipe } from './pipes-testing.pipe';

describe('PipesTestingPipe', () => {
  it('create an instance', () => {
    const pipe = new PipesTestingPipe();
    expect(pipe).toBeTruthy();
  });
});
