import React from 'react';

export default function UserContentChallengeDetail({ question }) {
  return (
    <div className="w-full min-h-full ">
      <div className="flex justify-between p-4">
        <div className="flex items-center">
          <span className="block  text-blue-600 font-medium">Tran Quang Si</span>{' '}
          <span className="block mx-3  text-white bg-light_green rounded-xl  px-3  py-1">Easy</span>
          <span className="block text-blue-600">100 Points</span>
        </div>
        <div>
          Character limit: <span className="text-red-600">3000</span>
        </div>
      </div>
      <div className="text-gray-700 p-4 mt-5">
        <p className="my-4">
          Given a non-empty, singly linked list with head node head, return a middle node of linked list.
        </p>
        <p className="my-4">If there are two middle nodes, return the second middle node.</p>
        <span className="text-gray-700 font-bold inline-block mt-5">Example :</span>
        <div className="bg-gray-200 w-full p-3 mt-3 rounded-lg leading-5">
          <span className="text-gray-700 font-bold "> Input:</span>
          [1,2,3,4,5] Output: Node 3 from this list (Serialization: [3,4,5]) The returned node has value 3. (The judge's
          serialization of this node is [3,4,5]). Note that we returned a ListNode object ans, such that: ans.val = 3,
          ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
        </div>
      </div>
    </div>
  );
}
