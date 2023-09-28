Feature: Import Network on the ConnectLV project

    Scenario Outline: As a user I should be able to import and load a network
        Given a user visits ConnectLV homepage
        And the user selects file
        And selects import network
        And enters "<networkNumber>"
        And clicks the search button
        When the user clicks the load button
        Then the user should see network imported on the screen

        Examples:
            | networkNumber |
            | 892072        |
            | 882209        |
