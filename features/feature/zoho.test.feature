Feature: The Internet Guinea Pig Website

  Scenario: As a user, I can log into the secure area

    Given I am on the login page
    When I click submit button with my user email as username and user password as password
    Then I should see a flash message 


