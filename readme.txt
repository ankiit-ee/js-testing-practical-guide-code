Unit Tests
-building blocks
    -functions
    -classes
    -componenet

App = combination of all units

Why unit tests?
-avoid manual testing
-covers entire codebase
-code changes are tested against all scenarioes instantly
-write clean and better code


Unit testing         +           Integration testing         +        End to end testing
spot pinpoint breaks             tests combination of units           Test realistic user flows


Testing Pyramid


                                            E2E Test
                                        
                                  --------Integration Test---------

                        --------------------Unit Test------------------------


Project setup & Required tools
Testing Fundamentals
Writing Good Tests
Advanced Testing concepts
Mocks & Spies
Tests & The DOM


Testing setup
-Test runner and assertion Library
-JEST
*** JEST does not work well with ES Modules
So, use Vitest

Basics
-Creating unit tests
-AAA Arrange Act Assert