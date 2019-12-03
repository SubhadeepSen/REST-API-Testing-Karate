#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

Feature: Test User API
  Scenario: Fetch all message queues
    Given url baseUrl + '/queues'
    And header Authorization = authToken
    When method GET
    Then status 200
    And match response == [{"queueId": "1", "queueName": "sample"}]
    And match response[0].queueName == 'sample'
  Scenario: Fetch all messages
    Given url baseUrl + '/messages/sample'
    And header Authorization = authToken
    When method GET
    Then status 200
    And match response == [{"messageId": "1","queueName": "sample","message": "test message"}]
    And match response[0].message == 'test message'