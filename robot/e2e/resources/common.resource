*** Settings ***
Library    Browser


*** Variables ***
${BROWSER}    firefox


*** Keywords ***
User opens browser
    New Browser    ${BROWSER}

User navigates to home page
    New Page    ${HOME_PAGE}