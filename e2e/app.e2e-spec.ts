import { AbpAngularLearnningTemplatePage } from './app.po';

describe('AbpAngularLearnning App', function() {
  let page: AbpAngularLearnningTemplatePage;

  beforeEach(() => {
    page = new AbpAngularLearnningTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
