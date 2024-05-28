describe('Podcast Detail View', () => {
  it('visits the main page, navigates to One Song podcast and episode Introducing: Broken Record', () => {
    cy.visit('/');
    cy.get('a[href="/podcast/1696154359"]').click();
    cy.contains('16/05/2024');
    cy.contains('59:11');
    cy.contains('Introducing: Broken Record').click();
    cy.contains('This week on One Song we’re sharing another music podcast');
  });
});
