## Broadmoor MagicMirror

This is the Broadmoor [MagicMirror](https://magicmirror.builders/) project.

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
cp ~/MagicMirror/config/config.js.sample ~/MagicMirror/config/config.js
cd ~/MagicMirror/modules
git clone https://github.com/hakanmhmd/MMM-Stock
git clone https://github.com/barnabycolby/MMM-Carousel
git clone https://github.com/jclarke0000/MMM-MyCommute.git
cd MMM-MyCommute
npm install
cd ~/MagicMirror
```

#### Basic Configuration & Test

```
cd ~/MagicMirror
node server
```

You can now browse to http://localhost:8080 to view the site.

#### Broadmoor config.js

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