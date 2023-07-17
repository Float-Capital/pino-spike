## Discussion:

https://github.com/pinojs/pino/blob/32b759d7baa91ae4baa581630f4563195deceee6/pino.d.ts#L340 - a downside to formatting the time on each log. Still haven't gotten ecs to work with multi-transports though.

I wanted to have multi streams so that users logs could go to postgres, but this is an issue: https://github.com/pinojs/pino/issues/1413

Another issue is that they use the worker threads to manage their transports - so you cannot pass any 'converter functions' (eg a function to convert timestamp to the correct format) to those workers directly in their options (see this) https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm

I've seen pino used in two ways, passing options and transports as separate arguments to the function. Or passing them together in the options. I think the latter is better, but it's not clear what the difference is. Initially passing them separately was used in envio.
