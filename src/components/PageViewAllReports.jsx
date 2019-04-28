import React from 'react';
import CardSingleReport from './CardSingleReport';

const ViewAllReports = () => (
  <div className="all-reports-container">
    <CardSingleReport
      imgSrc="https://res.cloudinary.com/dmx0a3nqi/image/upload/v1548974192/ncj4ltjvtepev3fqjkf1.jpg"
    />
    <CardSingleReport
      imgSrc="https://res.cloudinary.com/dmx0a3nqi/image/upload/v1548918888/btaftrjb7zhxhdsb2wbg.jpg"
      status="resolved"
    />
    <CardSingleReport
      imgSrc="https://res.cloudinary.com/dmx0a3nqi/image/upload/v1548918563/stanzapqxbml87m5brva.jpg"
      status="under-investigation"
    />
    <CardSingleReport
      imgSrc="https://res.cloudinary.com/dmx0a3nqi/image/upload/v1556371216/sklohp88foupfeuw1yyi.jpg"
      status="rejected"
    />
  </div>
);

export default ViewAllReports;
