import React from 'react';
import AdminChallengeItem from '../../../components/AdminChallengeItem/AdminChallengeItem';

export default function AdminChallenge() {
  let challengeContent: any[] = [];
  for (let i = 17; i < 20; i++) {
    challengeContent.push(
      <AdminChallengeItem
        day="09/07/2020"
        title={`CHALLENGE #${i}: Finding the best algorithm - Competing other programers`}
        totalUser="137"
        description=" A programming issue could have many solutions. The complexity of the algorithm in the solutions vary depending on the data. Let’s find the best solution to compete against other developers."
      ></AdminChallengeItem>,
    );
  }
  return (
    <div className="bg-white min-h-full p-5">
      <h1 className="text-lg font-medium text text-purple-800 mb-3">Challenge List</h1>
      <div className="challenge-list">{challengeContent}</div>
    </div>
  );
}
