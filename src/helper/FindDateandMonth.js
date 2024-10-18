export const getDayFromDateStr = (dateStr) => {
    const date = new Date(dateStr.substring(0, 10));
    return date.getDate();
  };
  
  export const getMonthFromDateStr = (dateStr) => {
    const date = new Date(dateStr.substring(0, 10));
    return date.getMonth() + 1;
  };

  export const getYearFromData = (dateStr) => {
    const date = new Date(dateStr.substring(0, 10));
    console.log(dateStr)
    return date;
  }
  
  export const getCurrentWeek = (date) => {
    const monday = new Date(date);
    monday.setDate(date.getDate() - date.getDay() + 1);
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(monday);
      day.setDate(monday.getDate() + i);
      weekDates.push(day);
    }
    return weekDates;
  };
  