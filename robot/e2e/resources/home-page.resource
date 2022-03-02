*** Settings ***
Documentation    Resource file for common keywords
Resource         common.resource


*** Keywords ***
User should see welcome greeting
    Get Text    h1    ==    Welcome to board game search!