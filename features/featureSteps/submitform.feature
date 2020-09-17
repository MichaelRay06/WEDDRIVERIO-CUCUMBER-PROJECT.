Feature: form submission


Scenario Outline: As a user, I could verify my form was submirted successfully
Given I am on tools.qa.com demo site
When I click on form and click practise form
When I enter <myirstName> and <mylastName> and  <myEmail> and <myphoneNumber> 
When I select my gender

Examples:
|myirstName      |mylastName         |myEmail                            |myphoneNumber|
|Wale            |OriOlowo           |wale_oriolowo97@gmail.com          |0111111111 |


