# 🤖 Discord Bot - Copy Embed System
> Copy and paste embeds from anywhere on Discord!
## Requeriments
1. Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**  
2. Node.js 18.20.1 or newer
## 🚀 Getting Started

```sh
git clone https://github.com/wMallll/copy-embed
cd copy-embed
npm install
```
After installation finishes follow the configuration instructions then run `npm run start` to start the bot.
## ⚙️ Configuration

Copy or Rename `config.json.example` to `config.json` and fill out the values:

⚠️ **Note: Never commit or share your token or API keys publicly** ⚠️ (*remember to delete the comments or the code will not run*)

```json
{
    "token": "",
    "prefix": "",
    "authorized": {
        "channels": [ 
            ""
        ], // The command will work only on these channels
        "users": [""] // Only these users will be able to execute the command
    }
}
```
## ❓ How to use
> [!WARNING]
> Pay close attention to details in order to be able to do this properly!
### Step 1
Open Google Chrome or your preferred browser (don't do this on the Discord app itself). After logging in with your account you have to go to the channel where the embed you want to copy was sent. Then, press F12 

![Step 1](https://i.imgur.com/1nffnTH.png)
### Step 2
* 2.1 Next, you must go to the "Network" section

![Step 2](https://i.imgur.com/CgIufSM.png)

* 2.2 Then you must click on Fetch/XHR

![Step 2](https://i.imgur.com/t6vCPNy.png)

### Step 3
* 3.1 This will appear on your screen (something different appears to each person, it depends on the server, the channel, the embed, among other things)

![Step 3](https://i.imgur.com/4sm1vij.png)

* 3.2 Then you must reload the page (without having closed the F12 window) and you will see that the content that appeared above will be reloaded. Once it is reloaded you will have to look for the last request that contains "messages?limit", in my case there is only one and it is this one:

![Step 3](https://i.imgur.com/WY9cJ9M.png)

### Step 4
Next, you just have to **ONE CLICK** `messages=?limit=50` and then go to the "Response" section. Now copy ALL the content you see there.

![Step 3](https://i.imgur.com/Vj7Dhnb.png)

### Step 5
* 5.1 Go to Visual Studio Code (or your preferred code editor). Don't forget to have followed the steps mentioned at the beginning of the page (**🚀 Getting Started**). Then go to the "**messages**" folder and create a file with the name you want, but it is important that it has the extension "**.json**". In my case I will choose the name `msg1.json`

![Step 3](https://i.imgur.com/ibIZJ0C.png)

* 5.2 Paste all the content you copied from the "Response" section of your browser

![Step 3](https://i.imgur.com/Zna0tt2.png)

* 5.3 Open a terminal and type the command `npm start`

![Step 3](https://i.imgur.com/NGrYOlY.png)

### Step 6

Go to the channel where you have enabled the command to be executed (in the config.json) and execute the command.

The command will be of the following format: `{prefix}{file name}`

In my case it will be `eb!msg1`

![Step 3](https://i.imgur.com/wy33PLn.png)

As you can see, exactly the same embed has been copied. Obviously you will have to replace the emojis with emojis that the bot recognizes.

* You can also choose where you want the embed to be sent. Example: `{prefix}{file name} <#ID CHANNEL>`

![Step 3](https://i.imgur.com/kpTW4wa.png)

# ⚙️ Support
If you need any kind of support or to be aware of when we will upload an easier method, you can join our discord server.

[![](https://dcbadge.vercel.app/api/server/wMal)](https://discord.gg/wMal)
#
