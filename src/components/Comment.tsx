import React from 'react';
import Profile from './Profile';
import HighlightContainer from './HighlightContainer';

interface Props {
  comment: { name: string; title: string; points: number; content: string };
}

const Comment: React.FC<Props> = ({ comment }) => (
  <div className="w-full flex flex-col">
    {/* Comment header */}
    <div className="w-full flex flex-row">
      <Profile />
      <div className="h-12 flex items-center ml-5 font-sans font-bold text-lg">{comment.name}</div>
      <div className="flex-auto">
        <div className="ml-auto w-10 h-full flex items-center justify-center text-lg">
          <HighlightContainer className="font-sans font-bold">
            <span className="text-2xl">{comment.points}</span>
            <span className="text-xl font-medium px-1 text-purple-400">/</span>
            <span className="text-lg text-purple-400">10</span>
          </HighlightContainer>
        </div>
      </div>
    </div>
    <h3 className="font-sans font-bold mt-3 text-xl">{comment.title}</h3>
    <p className="mt-1 text-lg">{comment.content}</p>
  </div>
);

export default Comment;
