const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="nimsararesanfu62@gmail.com"
global.location="Kurunegala,Sri lanka."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Resandu_Nimsara";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/F51KqNDf8xVGzRlZrkPIrg";
global.website=process.env.GURL || "https://chat.whatsapp.com/F51KqNDf8xVGzRlZrkPIrg" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴇꜱᴀɴᴅᴜ-ᴍᴅ" 


global.devs = "94781876282" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94781876282";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_09_06_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk4LFxuICAgICAgICA3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDYwLFxuICAgICAgICA5NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI1LFxuICAgICAgICA1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAyLFxuICAgICAgICA1MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDM5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgODIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE1LFxuICAgICAgICA4NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODcsXG4gICAgICAgIDY3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICA4NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjA1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYzLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDksXG4gICAgICAgIDgzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDksXG4gICAgICAgIDI4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTksXG4gICAgICAgIDY0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzgsXG4gICAgICAgIDk5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3OCxcbiAgICAgICAgODAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMixcbiAgICAgICAgOTksXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDY5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwLFxuICAgICAgICA2MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwLFxuICAgICAgICA2LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInVDY1pOK3hhRjlGanZ6OTA5OEVWd2d0bG85REFVZnowYjJEVS9NZjFNZlk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlV5X2xEZG9hU2hHUzdnTkM5Wk56N0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjU1MjE5MzgtMWYwZi00YWQ0LTg3MGMtYjBmYTg3OTQzYzJhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUsXG4gICAgICAyMjEsXG4gICAgICAyMTQsXG4gICAgICA2MyxcbiAgICAgIDE2MCxcbiAgICAgIDE0OSxcbiAgICAgIDEyMixcbiAgICAgIDEwOCxcbiAgICAgIDEwLFxuICAgICAgMTE2LFxuICAgICAgMjUsXG4gICAgICA1OSxcbiAgICAgIDk3LFxuICAgICAgMjM1LFxuICAgICAgNCxcbiAgICAgIDEyOSxcbiAgICAgIDkyLFxuICAgICAgMTcsXG4gICAgICAxMixcbiAgICAgIDM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NixcbiAgICAgIDIwNixcbiAgICAgIDI2LFxuICAgICAgMTEwLFxuICAgICAgODMsXG4gICAgICAxOTEsXG4gICAgICAyMzEsXG4gICAgICAyMzgsXG4gICAgICA5OSxcbiAgICAgIDcwLFxuICAgICAgNzcsXG4gICAgICAyMDQsXG4gICAgICA2MyxcbiAgICAgIDEzLFxuICAgICAgMjA2LFxuICAgICAgMTIsXG4gICAgICA2NSxcbiAgICAgIDEzNSxcbiAgICAgIDYxLFxuICAgICAgNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMktNVDE2OVhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzgxODc2MjgyOjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2XpfCdl6HwnZeWIF9fIPCdl5XwnZei8J2Xp1wiLFxuICAgIFwibGlkXCI6IFwiMjc2MTkyNTY5NjUxMzUxOjIyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0x5cjZNc0NFTDJGNnJJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUldwVXNmRkpMMlByTVFZNU02U05COFdHV0lwRU5sMC8yOXc4UTZlVFVUVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmU3VQV0FBR255MW43cENObW1aeHl3TnJ1QlVuSDdVZVgxT2hTTm5MYzZ3WGIrSjJ5aWxBWHE2dWorckZIRWVoWWFwckVsZ0pNT0JEUTA0ZWxIOGxDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI4QUpsellqVlhYMDNqbVBVS200d3czb1FIdVVORnpFT3J1b3NYL1VxbEpiK2VUK3RGSFVNMXcyWk5oalVKTDB2ZkhGK3dHdHFpbGRtKzV5WFBVQnFqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc4MTg3NjI4MjoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzIwNzc0NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1hbVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTWFtLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNUxSTENoaU9VMlM1T0d2SnFZT2FOWk1wWXhTeUpOdHBMRU9hdTYzL1RFcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2OTU4NjY4MTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTcxODE1Nzk1NzZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
