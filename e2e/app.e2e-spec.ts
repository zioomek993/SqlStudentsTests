import { SqlStudentsTestsPage } from './app.po';

describe('sql-students-tests App', () => {
  let page: SqlStudentsTestsPage;

  beforeEach(() => {
    page = new SqlStudentsTestsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
