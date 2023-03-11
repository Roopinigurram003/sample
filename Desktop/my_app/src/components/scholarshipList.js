import React from 'react';
import './style.css';

const scholarships = [
  {
    id: 1,
    title: 'John Doe Scholarship',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    amount: '$5000',
    link: 'https://example.com/scholarship/john-doe'
  },
  {
    id: 2,
    title: 'Jane Smith Scholarship',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    amount: '$7500',
    link: 'https://example.com/scholarship/jane-smith'
  },
  {
    id: 3,
    title: 'Joe Bloggs Scholarship',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    amount: '$10000',
    link: 'https://example.com/scholarship/joe-bloggs'
  }
];

function ScholarshipList() {
  return (
    <div className="container">
      <h1>List of Available Scholarships</h1>
      <ul id="scholarship-list">
        {scholarships.map((scholarship) => (
          <li key={scholarship.id}>
            <a href={scholarship.link} target="_blank" rel="noopener noreferrer">
              <h2>{scholarship.title}</h2>
            </a>
            <p className="description">{scholarship.description}</p>
            <p className="amount">Amount: {scholarship.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScholarshipList;
