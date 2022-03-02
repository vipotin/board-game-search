*** Settings ***
Library    Browser


*** Variables ***
${BROWSER}    chromium


*** Keywords ***
User opens browser
    Open Browser    ${BROWSER}

User navigates to home page
    New Page    ${HOME_PAGE}