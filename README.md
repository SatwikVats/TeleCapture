# TeleCapture

This is a system which receives feedback from Telegram (third party API) and sends it to all relevant users (collaboration) along with showing previous messages (database).

## Bot Setup

We are using [Local Bot API](https://core.telegram.org/bots/api#using-a-local-bot-api-server)
- If a new message is sent (We perform a create operation for both cache and DB)
- If an existing message is edited (We perform an update operation for both cache and DB)


## Setting up the Webhook

We are using long-polling to dynamically receive updates.

## Caching

We have used Redis Open-source for this project.
Three types of data structures have been used given the operations possible on each data structure in our use-case.

## Steps to run the application locally

## Steps to run the application locally (using Docker)

## Troubleshooting

If you get this error in the console while establishing bot client

```
error: [polling_error] {"code":"EFATAL","message":"EFATAL: Error: getaddrinfo ENOTFOUND api.telegram.org"}
```

Try connecting to a different network.


## References

1. https://core.telegram.org/bots/api
2. https://www.youtube.com/watch?v=bFFMX1L8TKI
3. https://javascript.info/long-polling
4. https://stackoverflow.com/questions/24501756/sort-mongodb-documents-by-timestamp-in-desc-order