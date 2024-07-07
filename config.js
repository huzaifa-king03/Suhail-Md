const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923443219827" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923405510035";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923405510035";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'recording' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_15_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgODgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjksXG4gICAgICAgIDU1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgxLFxuICAgICAgICA2NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzksXG4gICAgICAgIDk0LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAzLFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM5LFxuICAgICAgICA2NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxODcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE3LFxuICAgICAgICA2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNyxcbiAgICAgICAgNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc0LFxuICAgICAgICA5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjExLFxuICAgICAgICA5MSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI2LFxuICAgICAgICA2NixcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTksXG4gICAgICAgIDYwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgNDYsXG4gICAgICAgIDcwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NixcbiAgICAgICAgNzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDgxLFxuICAgICAgICAxODAsXG4gICAgICAgIDU4LFxuICAgICAgICA0NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDgwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDU4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVlFEaU4ySzVxOEhhM3R4UWFqMGFRbjVIdVdacjJrVVQ2V1hqTnRnU0s0Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicjQ1RUNuaUNRektrTTd1OHI1b1NLd1wiLFxuICBcInBob25lSWRcIjogXCIzNDZiYjdmZi1iYjc4LTRhYmUtOTI5Yy1hMjg0OGFkMWM0NTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI5LFxuICAgICAgMjU0LFxuICAgICAgMTgwLFxuICAgICAgODEsXG4gICAgICAxODksXG4gICAgICAxMzksXG4gICAgICAxNzAsXG4gICAgICAxMjEsXG4gICAgICAyNTIsXG4gICAgICA5NixcbiAgICAgIDczLFxuICAgICAgMjQxLFxuICAgICAgMTAzLFxuICAgICAgODEsXG4gICAgICAxMjMsXG4gICAgICAyMzIsXG4gICAgICA1MCxcbiAgICAgIDIwNCxcbiAgICAgIDg3LFxuICAgICAgMTQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MixcbiAgICAgIDIyMixcbiAgICAgIDExOSxcbiAgICAgIDE2NixcbiAgICAgIDE5NCxcbiAgICAgIDE5OSxcbiAgICAgIDk0LFxuICAgICAgMjM4LFxuICAgICAgMzEsXG4gICAgICAyNTQsXG4gICAgICA3OSxcbiAgICAgIDMwLFxuICAgICAgMjIzLFxuICAgICAgMjQ1LFxuICAgICAgMTgyLFxuICAgICAgODEsXG4gICAgICA5NyxcbiAgICAgIDE5NyxcbiAgICAgIDEyNCxcbiAgICAgIDE3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUU0E1VjQxOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDA1NTEwMDM1OjQxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzMDQwODQzNTU3NjkzNTo0MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJNUiBYXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjZKb3ZRR0VMN09wTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5aVZJN01Wem5CcHh1N3lLUmZxZWxVWnJSa3ZuN2hLQ3UzSC82Njk4SmdJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIno0L3JNNWdXbHdUS0YwT2FBWUVlSUpjWWtTRlo2b3FaeWNaQjZWRDFzVXdrMDkrQlFtKzdJejZBZlFReWFkay9FSWd2Njl3RmxNbmNsK3I2U3VuU0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjNQVERJZ25oOEQ2Ti9DV3dZWmVsQnVVQXhRWng1eGhhKy8rRTdvNnIyaCtUbm96TTFjV2xZK09MNmZ0Y0dpS0hocjlScCtzaE5BdndvRExSVzBJdGdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQwNTUxMDAzNTo0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyNjQ1MTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNN0VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU03RS5qc29uIjogIntcImtleURhdGFcIjpcIlJMQWtUNXVuL3hQUkw5aE0xRnhvVGhJcGFEb25Yd21XSkRpQjVEZ25SbEU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg1NDQ0MDY3MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMjY0NTE5NTkzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴹᴿ ˣ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ᴹᴿ ˣ",
  ownername:process.env.OWNER_NAME|| "Saif",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
