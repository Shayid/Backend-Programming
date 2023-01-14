(function(){"use strict";var e=require("crypto"),n=require("base64url"),i=require("fs"),r=Date.now(),t=n(e.randomBytes(64));i.appendFile("./config/app.js","\n//UNIX="+r+"\n//APP_KEY="+t,function(e){if(e)throw e}),i.appendFile(".env","\n#UNIX="+r+"\n#APP_KEY="+t,function(e){if(e)throw e;process.exit(0)})}).call(this);

//UNIX=1642578561379
//APP_KEY=OdyH39rwvIyJw8SowVamd3XiufjJTgmTJiFNi3CpKEdXur9nSU2V8t6CFl5UdqJFEd891YTcdyz0fdlvmUMWlQ