### Aktualizace
- Konverze na statický web
- Překonfigurování nginx z proxypass na /var/www/svet-prace.cz/out
- Aktualizace systémových komponent react
- Build přes npm run build do out ze kterého je staticky servírováno
- svetprace.service je zakázaná (nepoužívá se)

### Tech stack
- Next.js
- Tailwind CSS
- Anime.js

### Deployment
- Automatic deploy to stage (on Vercel) - [svet-prace.vercel.app](https://svet-prace.vercel.app)
- Manual deploy to production (on prem)
    - SSH into server
    - `git clone https://github.com/radimdev/svet-prace.git` if it is a new deployment
    - cd into project directory (e.g. /var/www/svet-prace/)
    - `git fetch && git pull` if it is an update
    - `systemctl stop svetprace.service`
    - `npm run build`
    - `systemctl start svetprace.service`

