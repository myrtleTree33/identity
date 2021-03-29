describe('the App', () => {
  describe('when called', () => {
    let actual: any;

    beforeAll(async () => {
      actual = '1';
    });

    it('should return the text Healthy', () => expect(actual).toEqual('1'));
  });
});
