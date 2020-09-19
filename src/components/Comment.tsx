import React from 'react';
import Profile from './Profile';
import HighlightContainer from './HighlightContainer';

interface Props {
  comment: { name: string; title: string; points: number; content: string; image: string };
}

const Comment: React.FC<Props> = ({ comment }) => (
  <div className="flex flex-col w-full">
    {/* Comment header */}
    <div className="flex flex-row w-full">
      <Profile image={comment.image} nomenu />
      <div className="flex items-center h-12 ml-5 font-sans text-lg font-bold">{comment.name}</div>
      <div className="flex-auto">
        <div className="flex items-center justify-center w-10 h-full ml-auto text-lg">
          {/* Points */}
          <HighlightContainer className="font-sans font-bold">
            <span className="text-2xl">{comment.points}</span>
            <span className="px-1 text-xl font-medium text-purple-400">/</span>
            <span className="text-lg text-purple-400">10</span>
          </HighlightContainer>
        </div>
      </div>
    </div>
    {/* Comment title */}
    <h3 className="mt-3 font-sans text-xl font-bold">{comment.title}</h3>
    {/* Comment itself */}
    <p className="mt-1 text-lg text-gray-700">{comment.content}</p>
  </div>
);

export default Comment;
