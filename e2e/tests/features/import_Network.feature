Feature: Import Network, Run Assesment and Calculate on the ConnectLV project

    Background: Pre-Condition,
        Given a user visits ConnectLV homepage
        And the user selects file
        And selects import network


    Scenario Outline: User should be able to import and load a network with valid number
        And enters valid network number as "<networkNumber>"
        And click the search button
        When the user click the load button
        Then the user should see network imported on the screen

        Examples:
            | networkNumber |
            | 892072        |
            | 882209        |

    Scenario: User should be able to import Network and Run Assessment
        And enters valid network number as "<networkNumber>"
        And click the search button
        And the user click the load button
        When the user click the run Assesment button
        And user accept the alert message
        Then user should see network assessmet on the screen

        Examples:
            | networkNumber |
            | 882209        |

    Scenario: User should be able to import Network and Run Assessment and Calculate
        And enters valid network number as "<networkNumber>"
        And click the search button
        And the user click the load button
        And the user click the run Assesment button
        And user accept the alert message
        When the user click the Calculate button
        Then user should see the Network Data on the screen

        Examples:
            | networkNumber |
            | 882209        |

    Scenario: User enters invalid network number
        When the user enters invalid network number as '<number>'
        And click the search button
        Then the user should the alert '<messageType>' on the screen

        Examples:
            | number | messageType                               |
            | 88220  | Network does not have a power transformer |

