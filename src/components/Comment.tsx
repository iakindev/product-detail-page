import React from 'react';
import Profile from './Profile';

interface Props {
  comment: { name: string; title: string; point: number; content: string };
}

const Comment: React.FC<Props> = ({ comment }) => (
  <div className="w-full flex flex-col">
    {/* Comment header */}
    <div className="w-full flex flex-row">
      <Profile />
      <div className="h-12 flex items-center ml-5 font-sans font-bold text-lg">{comment.name}</div>
      <div className="flex-auto">
        <div className="ml-auto w-10 h-full flex items-center justify-center text-lg">
          {comment.point}/10
        </div>
      </div>
    </div>
    <h3 className="font-sans font-bold mt-3 text-xl">{comment.title}</h3>
    <p className="mt-1 text-lg">{comment.content}</p>
  </div>
);

export default Comment;
