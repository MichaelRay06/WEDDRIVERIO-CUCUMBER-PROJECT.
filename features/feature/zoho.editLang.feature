Feature: I could edit my language.



Scenario Outline: As a user, I can edit my spoken language


    Given I am on the zoho web  page
    When I click submit button with my user email as <userEmail> and user password as <userPassword>
    When I click edit button 
    When I click on select language text box   
    When I type in my language as <editedLanguage>      
   #When I selected my spoken language as <selectedLangText>  
    When I save my profile  
    Then I could verify that <mylanguage> was successfuly Edited 
  
  
Examples:
| userEmail               | userPassword     |editedLanguage      |mylanguage    |
| mr.raymich50@gmail.com  | 54SonsofGod54    |yo                  |Yoruba        |