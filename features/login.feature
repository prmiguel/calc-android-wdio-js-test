Feature:  Adding numbers with a Calculator
  
  In order to not learn math
  As someone who is bad at math
  I want to be able to add numbers using a Calculator
  
  Scenario Outline:  Add two numbers
    Given I have a Calculator
    When I add <num1> and <num2>
    Then the sum should be <result>
    Examples:
      | num1 | num2 | result |
      | 0    | 0    | 0      |
      | 0    | 1    | 1      |
      | 6    | 0    | 6      |
      | 1    | 8    | 9      |
      | 5    | 5    | 10     |
