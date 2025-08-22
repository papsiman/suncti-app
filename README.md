npm run build
pm2 delete all
pm2 start "npm run start" --name "suncti" --cron-restart="0 0 * * *" --max-memory-restart 300M