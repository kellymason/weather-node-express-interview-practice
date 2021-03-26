# Node Weather App
This app ~can~ _should_ tell you today's weather forecast!

Unfortunately, it's not currently very helpful - it simply tells you that it's cold everywhere.

It looks like there are some great utility files that could help us take in location information from a user and deliver the forecast. Update `utils/forecast.js` to take in a **latitude** and **longitude** value, and return a nicely formatted weather forecast.

## Instructions
- [ ] Get the app running, update the forecast router to return the weather. Decide how you would like the user to format their location in the request, and how you want to display the information.
- [ ] Test the endpoint
- [ ] Open a descriptive PR with your changes

## Local Development
```
git clone
npm install
npm run start
```

# Example API call:
```
curl --location --request GET 'http://localhost:3001/forecast' \
--data-raw ''
```
