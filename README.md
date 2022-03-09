# data-parser-csv

apps to learn ts with udemy material about how to parse, analyze, and report data from csv with typescript

# Overview

    apps will load the data using Node std lib, then parse the data and doing some analysis to the data and then report the result from the analysist.

# Env Setup

    fs libraries for typescript - npm install @types/node

# Issues

1. Magic string comparisons - no one understand it in your way understand that things.
   solve : stated the magic string into understandable variable.
   ts solution: ENUMS

   1. follow near-identical syntax rules as normal object.
   2. enums when converted to js will creates an object with same keys and values
   3. goal is to SIGNAL to other engineers about the relation values
   4. use whenever we have a small fixed set of values that are all closely related and known at compile time

2. The data's too hardcode
