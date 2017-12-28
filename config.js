/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
  address: "", // Address to listen on, can be:
  // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
  // - another specific IPv4/6 to listen on a specific interface
  // - "", "0.0.0.0", "::" to listen on any interface
  // Default, when address config is left out, is "localhost"
  port: 8080,
  ipWhitelist: [], // Set [] to allow all IP addresses
  // or add a specific IPv4 of 192.168.1.5 :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
  // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

  language: "en",
  timeFormat: 12,
  units: "imperial",

  modules: [
    {
      module: "MMM-Carousel",
      config: {
        transitionInterval: 6000,
        ignoreModules: [
          "alert",
          "updatenotifications",
          "clock",
          "calendar",
          "currentweather",
          "newsfeed",
          "alert",
          "updatenotifications"
        ],
        mode: "global"
      }
    },
    {
      module: "alert"
    },
    {
      module: "updatenotification",
      position: "top_bar"
    },
    {
      module: "clock",
      position: "top_left"
    },
    {
      module: "calendar",
      header: "Broadmoor Calendar",
      position: "top_left",
      config: {
        timeFormat: "absolute",
        getRelative: 0,
        urgency: 2,
        fadePoint: 0.7,
        dateFormat: "ddd, MMM do",
        excludedEvents: ["Breakfast", "Lunch"],
        calendars: [
          {
            // Broadmoor Dining
            symbol: "cutlery ",
            maximumEntries: 2,
            url:
              "https://calendar.google.com/calendar/ical/l590gdr0r354jdqs2pln2miic4%40group.calendar.google.com/public/basic.ics"
          },
          {
            symbol: "calendar-check-o ",
            maximumEntries: 2,
            url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
          },
          {
            // Broadmoor Course
            symbol: "flag ",
            url:
              "https://calendar.google.com/calendar/ical/5a35kj35cn8mae8scdretdamv4%40group.calendar.google.com/public/basic.ics"
          },
          {
            // Broadmoor Men
            symbol: "male ",
            url:
              "https://calendar.google.com/calendar/ical/obigr2oehd5p1q61j36jhqd2n0%40group.calendar.google.com/public/basic.ics"
          }
        ]
      }
    },
    {
      module: "currentweather",
      position: "top_right",
      config: {
        location: "Seattle",
        locationID: "5809844", //ID from http://www.openweathermap.org/help/city_list.txt
        appid: "7073df10e3943340533031563fdfcdc5"
      }
    },
    {
      module: "weatherforecast",
      position: "top_right",
      header: "Weather Forecast",
      config: {
        location: "Seattle",
        locationID: "5809844", //ID from http://www.openweathermap.org/help/city_list.txt
        appid: "7073df10e3943340533031563fdfcdc5"
      }
    },
    {
      // https://github.com/jclarke0000/MMM-MyCommute
      // AIzaSyDWKGWE3cOhC2EEM6Pn2B5IfU1cG98LjAo
      module: "MMM-MyCommute",
      position: "top_right",
      header: "Traffic",
      classes: "default everyone",
      config: {
        apikey: "AIzaSyDWKGWE3cOhC2EEM6Pn2B5IfU1cG98LjAo",
        origin: "2340 Broadmoor Dr E, Seattle, WA 98112",
        destinations: [
          {
            destination: "Pike Place Market, Seattle, WA",
            label: "Pike Place"
          },
          {
            destination: "575 Bellevue Square, Bellevue, WA 98004",
            label: "Bellevue"
          },
          {
            destination: "SeaTac, WA 98158",
            label: "SeaTac"
          }
        ]
      }
    },
    {
      module: "newsfeed",
      position: "bottom_bar",
      config: {
        maxNewsItems: 4,
        ignoreOldItems: true,
        ignoreOlderThan: 604800000, // 7 days
        feeds: [
          {
            title: "Seattle Times",
            url: "https://www.seattletimes.com/feed/"
          },
          {
            title: "ESPN Golf News",
            url: "http://sports.espn.go.com/espn/rss/golf/news"
          }
        ],
        showSourceTitle: true,
        showPublishDate: true
      }
    }
  ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
  module.exports = config;
}
