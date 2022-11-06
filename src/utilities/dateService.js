import {Platform} from 'react-native';

const datePostfix = Platform.OS === 'android' ? 'T00:00:00' : 'T00:00:00';

const DateService = {
  dayNumbers: {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  },

  getTodayString: (format = 'dd-mm-yyyy') => {
    let d = new Date();
    format = format.replace('dd', DateService.preZero(d.getDate()));
    format = format.replace('mm', DateService.preZero(d.getMonth() + 1));
    format = format.replace('yyyy', d.getFullYear());
    return format;
  },
  getFormattedDate: (d, format, dateObj = false) => {
    try {
      if (!d) {
        return '';
      }
      let doo = dateObj ? d : new Date(Date.parse(d + datePostfix));
      let date = new Date(
        doo.getTime() + Math.abs(doo.getTimezoneOffset() * 60000),
      );
      let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
      let month =
        date.getMonth() + 1 > 9
          ? date.getMonth() + 1
          : '0' + (date.getMonth() + 1);
      let year = date.getFullYear();
      if (format) {
        return format
          .replace('dd', day)
          .replace('mm', month)
          .replace('yyyy', year);
      }
      return day + '-' + month + '-' + year;
    } catch (e) {}
  },

  getUTCDate: () => {
    var tmLoc = new Date();
    let date = +(
      (tmLoc.getTime() + Math.abs(tmLoc.getTimezoneOffset() * 60000)) /
      1000
    ).toFixed(0);
    return new Date(date);
  },
  getToday: () => {
    try {
      let date = new Date();
      let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
      let month =
        date.getMonth() + 1 > 9
          ? date.getMonth() + 1
          : '0' + (date.getMonth() + 1);
      let year = date.getFullYear();
      return year + '-' + month + '-' + day;
    } catch (e) {}
  },

  changeDateFormat: (
    date,
    fromFormat = 'dd/mm/yyyy',
    toFormat = 'mm-dd-yyyy',
  ) => {
    if (date) {
      let d, m, y;

      if (fromFormat == 'dd/mm/yyyy' || fromFormat == 'dd-mm-yyyy') {
        d = date.substr(0, 2);
        m = date.substr(3, 2);
        y = date.substr(6, 4);
      } else if (fromFormat == 'mm/dd/yyyy' || fromFormat == 'mm-dd-yyyy') {
        m = date.substr(0, 2);
        d = date.substr(3, 2);
        y = date.substr(6, 4);
      } else if (fromFormat == 'yyyy/mm/dd' || fromFormat == 'yyyy-mm-dd') {
        y = date.substr(0, 4);
        m = date.substr(5, 2);
        d = date.substr(8, 2);
      }
      return toFormat.replace('dd', d).replace('mm', m).replace('yyyy', y);
    }
    return '';
  },

  ampm: (time, time24Format = true) => {
    if (time24Format) {
      if (time < '12:00') {
        return time + 'AM';
      }
      return time + 'PM';
    }
    return '';
  },

  minutesToTime: n => {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + 'h ' + rminutes + 'm';
  },

  ampmOnly: (time, time24Format) => {
    if (time < '12:00') {
      return 'AM';
    }
    return 'PM';
  },

  convertToUTC: date => {
    var tmLoc = new Date(date);
    return +(
      (tmLoc.getTime() + Math.abs(tmLoc.getTimezoneOffset() * 60000)) /
      1000
    ).toFixed(0);
  },
  getTimezoneInSeconds: () => {
    return new Date().getTimezoneOffset() * 60;
  },
  convertTimeToSeconds: hms => {
    var a = hms.split(':');
    var seconds = +a[0] * 60 * 60 + +a[1] * 60;
    return seconds;
  },
  getTime: (d, showAmPm = true) => {
    return (
      DateService.preZero(d.getHours()) +
      ':' +
      DateService.preZero(d.getMinutes()) +
      (showAmPm ? (d.getHours() >= 12 ? ' PM' : ' AM') : '')
    );
  },
  convertTime12to24: time12h => {
    const [time, modifier] = time12h.split(' ');

    let [hours, minutes] = time.split(':');

    if (hours === '12') {
      hours = '00';
    }

    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }

    return `${DateService.preZero(+hours)}:${DateService.preZero(+minutes)}`;
  },
  convert24to12: time => {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
  },

  getCurrentHour: (format12 = true) => {
    var d = new Date();
    var h = d.getHours();
    // if(h < 12){
    //     return DateService.preZero(h)
    // }
    return format12
      ? DateService.preZero(h % 12 || 12)
      : DateService.preZero(h);
  },

  getCurrentTimeUTC: () => {
    var d = new Date();
    return +(d.getTime() / 1000).toFixed(0);
    // return +((d.getTime() + d.getTimezoneOffset() * 60000) / 1000).toFixed(0);
  },
  getCurrentMinute: () => {
    var d = new Date();
    var m = d.getMinutes();
    return DateService.preZero(m);
  },
  getCurrentMpPm: () => {
    var d = new Date();
    var h = d.getHours();
    if (h < 12) {
      return 'AM';
    }
    return 'PM';
  },
  getCurrentTime: (format12 = true) => {
    var d = new Date();
    var time =
      DateService.preZero(d.getHours()) +
      ':' +
      DateService.preZero(d.getMinutes()) +
      ':' +
      DateService.preZero(d.getSeconds());
    if (format12) {
      return DateService.convert24to12(time);
    }
  },

  getServiceItemDate: (date, format = 'yyyy-mm-dd') => {
    let dayName = DateService.getDayNameFromDate(date, format);
    let day = DateService.getDateFromDate(date, format);
    let month = DateService.getMonthFromDate(date, format);
    return dayName + ' ' + day + '/' + month;
  },
  getTimeInSeconds: date => {
    // console.log("date time received is", date);
    var tmLoc = new Date(date);
    // return +(tmLoc.getTime() / 1000).toFixed(0);

    return Platform.OS === 'ios'
      ? +(tmLoc.getTime() / 1000).toFixed(0)
      : +(tmLoc.getTime() / 1000).toFixed(0) +
          new Date().getTimezoneOffset() * 60;
  },
  preZero: n => {
    if (n > 9) {
      return n;
    }
    return '0' + n;
  },
};

export default DateService;
