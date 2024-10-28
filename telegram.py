from telegram import Update
from telegram.ext import Updater, CommandHandler, CallbackContext

TOKEN = 'YOUR_TELEGRAM_BOT_TOKEN'

def start(update: Update, context: CallbackContext) -> None:
    update.message.reply_text('Привет! Я ваш бот для уведомлений о новых записях.')

def notify_new_entry(entry: str):
    updater = Updater(TOKEN)
    updater.bot.send_message(chat_id='YOUR_CHAT_ID', text=f'Новое воспоминание: {entry}')

def main():
    updater = Updater(TOKEN)
    updater.dispatcher.add_handler(CommandHandler('start', start))
    updater.start_polling()
    updater.idle()

if __name__ == '__main__':
    main()
