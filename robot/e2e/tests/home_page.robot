*** Settings ***
Resource           ..${/}resources/home_page.resource
Suite Setup        User opens browser
Suite Teardown     Close Browser


*** Test Cases ***
Open home page
    When user navigates to home page
    Then user should see welcome greeting