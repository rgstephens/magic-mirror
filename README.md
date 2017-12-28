## Broadmoor MagicMirror

This is the Broadmoor [MagicMirror](https://magicmirror.builders/) project which is housed on Github [here](https://github.com/rgstephens/magic-mirror)

MagicMirror has lot's of add-on modules and you can create your own. The full list is [here](https://github.com/MichMich/MagicMirror/wiki/MagicMirror%C2%B2-Modules).

## Installation Instructions

Start by installing MagicMirror. The standard installation instructions can be found [here](https://github.com/MichMich/MagicMirror) but I've provided them below.

#### Install Nodejs

If you don't have Node.js and npm installed, do that first.  On Ubuntu distributions:

```
sudo apt-get update
sudo apt-get install -y build-essential libssl-dev
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | sh
source ~/.profile
nvm ls-remote
nvm install 9.3.0
nvm use 9.3.0
```

#### Install MagicMirror

On a Raspberry Pi, enter this one command:

```
bash -c "$(curl -sL https://raw.githubusercontent.com/MichMich/MagicMirror/master/installers/raspberry.sh)"
```

On other platforms, execute:

```
git clone https://github.com/MichMich/MagicMirror
cd ~/MagicMirror
npm install
cd vendor
npm install
cd ~/MagicMirror
```

#### Install Modules

While we're at the command line, let's install all of the modules we're going to use for the Broadmoor MagicMirror:

```
cd ~/MagicMirror/modules
git clone https://github.com/hakanmhmd/MMM-Stock
git clone https://github.com/barnabycolby/MMM-Carousel
git clone https://github.com/jclarke0000/MMM-MyCommute.git
cd MMM-MyCommute
npm install
cd ~/MagicMirror
```

#### Download config.js and run

```
cd ~/MagicMirror
curl -LJO https://raw.github.com/rgstephens/magic-mirror/master/config.js > ~/MagicMirror/config/config.js
node serveronly
```

You can now browse to http://localhost:8080 to view the site.

## ToDo

* Center Slider
  * Today @ Broadmoor Calendar
  * Upcoming Events
  * Announcements
* Remote config/control of MMM
  * [MMM-Remote-Control](https://github.com/Jopyth/MMM-Remote-Control)
  * [Telegram based](https://github.com/eouia/MMM-TelegramBot)
  * [Json Editor](https://github.com/jdorn/json-editor)
* Voice control of MMM
  * [Voice Control w/Alexa](https://github.com/joanaz/MMM-MirrorMirrorOnTheWall)
* Tournament Results & Brackets
  * [In iframe](https://github.com/alberttwong/MMM-iFrame)


## Module Configuration Notes

#### Newsfeeds

* Seattle Times:  https://www.seattletimes.com/feed/
* ESPN Golf:        http://sports.espn.go.com/espn/rss/golf/news
* NY Times:       http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml

These don't seem too good

* NY Times Golf:   http://feeds.nytimes.com/nyt/rss/Golf (not kept up to date)
* Golf Channel:      http://www.golfchannel.com/news/all/rss/news/feed.xml (broken)
* Golf Digest All:   http://www.golfdigest.com/services/rss/feeds/gd_everything.xml (junk)
* Golf Digest News:  http://www.golfdigest.com/services/rss/feeds/news.xml (junk)

Site with list of [golf newsfeeds](http://www.linkstimes.com/news_links.php)

## Ubuntu System Startup

To set MagicMirror to startup with the system using systemctl use the magicmirror.service file included in this package and place it at `/lib/systemd/system/magicmirror.service`. Once that is done, execute these commands:

```
systemctl daemon-reload
systemctl is-enabled magicmirror
systemctl enable magicmirror
sudo systemctl start magicmirror
systemctl status magicmirror
journalctl -u magicmirror.service
```