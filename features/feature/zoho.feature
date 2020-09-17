Feature: testing the Zoho site modules

  Scenario Outline: As a user, I can vrify my log in email

    Given I am on the zoho web  page
    When I click submit button with my user email as <userEmail> and user password as <userPassword>
    Then I should be able to confirm user ID message as <confirmUserID>

    Examples:
      | userEmail               | userPassword             | confirmUserID           |
      #| bfatogun@yahoo.com      | 54fatogun54              | bfatogun@yahoo.com      |
      | mr.raymich50@gmail.com  | 54SonsofGod54            | mr.raymich50@gmail.com     |
     
