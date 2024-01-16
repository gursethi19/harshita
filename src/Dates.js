import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarWithDescription = () => {
  const [dateData, setDateData] = useState([
    { date: new Date(2024, 0, 7), description: 'Harshi Mom', note: 'Had a talk with Harshis mom for the very first time' },
    { date: new Date(2024, 0, 9), description: 'Harshi Mom', note: 'Had a talk with Harshis mom second time' },
    { date: new Date(2023, 11, 17), description: 'Harshi 4.0', note: 'Harshita came back into my life finally and this time she remained' },
    { date: new Date(2023, 10, 19), description: 'Harshi 3.0', note: 'It was my birthday.Harshita wished me,sent me a cake and also she cried at the end.' },
    { date: new Date(2023, 9, 27), description: 'Office Party', note: 'It was my office party and we were not taling to each other but when i came back prateek told me that harshi approached back and asked prateek that she wants to hear my voice and see my picture.' },
    { date: new Date(2023, 5, 14), description: 'Came in my life', note: '♡ Harshita walked into my life ♡' },
    { date: new Date(2024, 0, 15), description: 'Harshi Mom', note: 'Had a talk with Harshis mom for AROUND 2 HOURS' },

    // Add more date-description-note data as needed
  ]);

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const matchingDate = dateData.find((item) => {
      const itemDate = new Date(item.date).setHours(0, 0, 0, 0);
      return itemDate === date.setHours(0, 0, 0, 0);
    });
    if (matchingDate) {
      setSelectedDate(matchingDate);
    } else {
      setSelectedDate(null);
    }
  };

  const handleNoteChange = (event) => {
    const updatedNote = event.target.value;
    const updatedDateData = dateData.map((item) =>
      item.date === selectedDate.date ? { ...item, note: updatedNote } : item
    );
    setDateData(updatedDateData);
  };

  const tileContent = ({ date, view }) => {
    const currentDate = date.setHours(0, 0, 0, 0);
    const matchingDate = dateData.find((item) => {
      const itemDate = new Date(item.date).setHours(0, 0, 0, 0);
      return itemDate === currentDate;
    });

    return matchingDate ? <p>{matchingDate.description}</p> : null;
  };

  return (
    <div>
      <h1>Calendar with Descriptions and Notes</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '0 0 70%', marginRight: '20px' }}>
          <Calendar tileContent={tileContent} onChange={handleDateChange} value={selectedDate ? selectedDate.date : null} />
        </div>
        <div style={{ flex: '0 0 30%' }}>
          <h3>{selectedDate ? selectedDate.description : 'Select a date'}</h3>
          {selectedDate && (
            <div>
              {/* <p>{selectedDate.note}</p> */}
              <textarea value={selectedDate.note} onChange={handleNoteChange} rows={5} style={{ width: '100%' }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarWithDescription;
