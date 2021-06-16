import React from 'react';
import UserChallengeItem from '../../../components/UserChallengeItem/UserChallengeItem';

export default function Challenge() {
  let challengeContent: any[] = [];
  for (let i = 17; i < 20; i++) {
    challengeContent.push(
      <UserChallengeItem
        day="09/07/2020"
        title={`CHALLENGE #${i}: Finding the best algorithm - Competing other programers`}
        totalUser="137"
        description=" A programming issue could have many solutions. The complexity of the algorithm in the solutions vary depending on the data. Let’s find the best solution to compete against other developers."
      ></UserChallengeItem>,
    );
  }
  return (
    <div className=" min-h-full p-24">
      <span className="text-lg font-medium text text-purple-800 mb-3 inline-block rounded-lg p-4 py-2 bg-white">
        Challenge List
      </span>
      <div className="challenge-list">{challengeContent}</div>
    </div>
  );
}
