*** Settings ***
Resource       ../../resources/home-page.resource
Suite Setup    User opens browser


*** Test Cases ***
Open home page
    When user navigates to home page
    Then user should see welcome greeting