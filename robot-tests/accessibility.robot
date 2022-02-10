*** Settings ***
Library    SeleniumLibrary
Library    AxeLibrary

*** Test Cases ***
Google Accessibility Test
   Open Browser    https://www.google.com/    chrome    headless=true
   
   # execute accessibility tests
   &{results}=    Run Accessibility Tests    google.json
   Log   Violations Count: ${results.violations}

   # log violation result to log.html
   Log Readable Accessibility Result    violations
   [Teardown]    Close All Browsers