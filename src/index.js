const pinoInit = require("pino");
const ecsPinoFormat = require("@elastic/ecs-pino-format");
const pinoTester = require("./tester")

let pino

// comment out sections te test the logging

// ///// Plain PINO
// pino = pinoInit({
//   customLevels: {
//     udebug: 32,
//     uinfo: 34,
//     uwarn: 36,
//     uerror: 38
//   },
// })

// pinoTester(pino)

// ///// Plain PINO pretty (single transport)
// pino = pinoInit({
//   level: "trace",
//   customLevels: {
//     udebug: 32,
//     uinfo: 34,
//     uwarn: 36,
//     uerror: 38
//   },
//   transport: {
//     target: 'pino-pretty',
//     options:
//     {
//       customLevels: {
//         trace: 10,
//         debug: 20,
//         info: 30,
//         udebug: 32,
//         uinfo: 34,
//         uwarn: 36,
//         uerror: 38,
//         warn: 40,
//         error: 50,
//         fatal: 60,
//       },
//       /// NOTE: the lables have to be lower case! (pino pretty doesn't recognise them if there are upper case letters)
//       /// https://www.npmjs.com/package/colorette#supported-colors - these are available colors
//       customColors:
//         "fatal:bgRed,error:red,warn:yellow,info:green,udebug:bgBlue,uinfo:bgGreen,uwarn:bgYellow,uerror:bgRed,debug:blue,trace:gray"
//     }
//   }
// })

// pinoTester(pino)

// ///// Plain PINO pretty (multi transport)
// pino = pinoInit({
//   level: "trace",
//   customLevels: {
//     udebug: 32,
//     uinfo: 34,
//     uwarn: 36,
//     uerror: 38
//   },
//   transport: {
//     targets: [{
//       target: 'pino-pretty',
//       options:
//       {
//         customLevels: {
//           trace: 10,
//           debug: 20,
//           info: 30,
//           udebug: 32,
//           uinfo: 34,
//           uwarn: 36,
//           uerror: 38,
//           warn: 40,
//           error: 50,
//           fatal: 60,
//         },
//         /// NOTE: the lables have to be lower case! (pino pretty doesn't recognise them if there are upper case letters)
//         /// https://www.npmjs.com/package/colorette#supported-colors - these are available colors
//         customColors:
//           "fatal:bgRed,error:red,warn:yellow,info:green,udebug:bgBlue,uinfo:bgGreen,uwarn:bgYellow,uerror:bgRed,debug:blue,trace:gray"
//       }
//     }]
//   }
// })

// pinoTester(pino)


// pinoTester(pino)

// ///// Plain PINO - ECS format
// pino = pinoInit({
//   ...ecsPinoFormat(),
//   level: "trace",
//   customLevels: {
//     udebug: 32,
//     uinfo: 34,
//     uwarn: 36,
//     uerror: 38
//   },
// })

// pinoTester(pino)

// ///// Plain PINO pretty (multi transport + file)
// const ecsOptions = ecsPinoFormat();
// pino = pinoInit({
//   level: "trace",
//   customLevels: {
//     udebug: 32,
//     uinfo: 34,
//     uwarn: 36,
//     uerror: 38
//   },
//   transport: {
//     targets: [{
//       target: 'pino-pretty',
//       options:
//       {
//         customLevels: {
//           trace: 10,
//           debug: 20,
//           info: 30,
//           udebug: 32,
//           uinfo: 34,
//           uwarn: 36,
//           uerror: 38,
//           warn: 40,
//           error: 50,
//           fatal: 60,
//         },
//         /// NOTE: the lables have to be lower case! (pino pretty doesn't recognise them if there are upper case letters)
//         /// https://www.npmjs.com/package/colorette#supported-colors - these are available colors
//         customColors:
//           "fatal:bgRed,error:red,warn:yellow,info:green,udebug:bgBlue,uinfo:bgGreen,uwarn:bgYellow,uerror:bgRed,debug:blue,trace:gray",
//       }
//     },
//     {
//       target: "pino/file",
//       options: {
//         destination: "./logs/logs.txt",
//         append: true,
//         mkdir: true,
//       },
//     },
//     ]
//   }
// })


// pinoTester(pino)

// ///// Plain file ECS
// const ecsOptions = ecsPinoFormat();
// pino = pinoInit({
//   ...ecsOptions,
//   level: "trace",
//   customLevels: {
//     udebug: 32,
//     uinfo: 34,
//     uwarn: 36,
//     uerror: 38
//   },
//   transport:
//   {
//     target: "pino/file",
//     options: {
//       // messageKey: 'message',
//       destination: "./logs/logs.txt",
//       append: true,
//       mkdir: true,
//     },
//   }
// })

// pinoTester(pino)

///// NOTE: due to https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm being used for 

///// custom ecs helper
const ecsOptions = ecsPinoFormat();
pino = pinoInit({
  // ...ecsOptions,
  level: "trace",
  customLevels: {
    udebug: 32,
    uinfo: 34,
    uwarn: 36,
    uerror: 38
  },
  transport:
  {
    target: "./lib/pino-file-ecs.js",
    // target: "./lib/pino-file-ecs.js",
    options: {
      // messageKey: 'message',
      destination: "./logs/logs.txt",
      append: true,
      mkdir: true,
    },
  }
})

pinoTester(pino)














// const pinoPretty = {
//   target: "pino-pretty",
//   level: Config.userLogLevel,
//   options: {
//     customLevels: {
//       udebug: 32,
//       uinfo: 34,
//       uwarn: 36,
//       uerror: 38
//     },
//     customColors: "udebug:blue,uinfo:green,uwarn:yellow,uerror:red"
//   }
// };

// const pinoRaw = {
//   target: "pino/file",
//   level: Config.userLogLevel
// };

// const pinoFile = {
//   target: "pino/file",
//   options: {
//     destination: Config.logFilePath,
//     append: true,
//     mkdir: true
//   },
//   level: Config.defaultFileLogLevel
// };

// const transport = pino.transport({ targets: [pinoRaw] });

// console.log({
//   udebug: 32,
//   uinfo: 34,
//   uwarn: 36,
//   uerror: 38
// });

// const pinoOptions = EcsPinoFormat();

// console.log("pinoOptions", pinoOptions);

// const logger = pino.default(EcsPinoFormat(), {
//   target: "pino/file",
//   options: EcsPinoFormat(),
//   level: Config.userLogLevel
// });

// const setLogLevel = (level) => {
//   logger.level = level;
// };

// logger.level = Config.baseLogLevel;

// const logMethods = ['trace', 'debug', 'info', 'warn', 'error', 'fatal'].reduce((acc, method) => {
//   acc[method] = (message) => {
//     logger[method](Pino.createPinoMessage(message));
//   };
//   return acc;
// }, {});

// const childLogMethods = ['trace', 'debug', 'info', 'warn', 'error', 'fatal'].reduce((acc, method) => {
//   acc['child' + method.charAt(0).toUpperCase() + method.slice(1)] = (logger, params) => {
//     logger[method](Pino.createPinoMessage(params));
//   };
//   return acc;
// }, {});

// const createChild = (params) => logger.child(Pino.createChildParams(params));

// const createChildFrom = (logger, params) => logger.child(Pino.createChildParams(params));
