"use client";
import React, { useState, useEffect } from "react";

export default function CommentSection() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);
  const [isInitialized, setIsInitialized] = useState(false); // Flag to prevent overwriting

  useEffect(() => {
    const storedComments = localStorage.getItem("comments"); //we use local storage when we want to store commnet on out local storage
    if (storedComments) {
      try {
        const parsedComments = JSON.parse(storedComments);
        setComments(parsedComments);
      } catch (error) {
        console.error("Error parsing comments from local storage:", error);
      }
    }
    setIsInitialized(true); // Mark initialization complete
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("comments", JSON.stringify(comments));
    }
  }, [comments, isInitialized]);

  const handleSubmit = (a: React.FormEvent<HTMLFormElement>) => {
    a.preventDefault();

    if (comment.trim()) {
      setComments([comment, ...comments]);
      setComment("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-red shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4 ">Comment Section</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={comment}
          onChange={(a) => setComment(a.target.value)}
          className="w-full p-3 border border-gray-500 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400  "
          placeholder="write your thougts here"
        />
        <button
          type="submit"
          className="mt-2 w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none "
        >
          Submit Comment
        </button>
      </form>

      <div>
        <h3 className="text-xl font-semibold mb-2">Comments:</h3>
        <div className="space-y-4">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="p-4 bg-gray-200 rounded-lg ">
                <p>{comment}</p>
              </div>
            ))
          ) : (
            <p>Be the frist to share your thougts</p>
          )}
        </div>
      </div>
    </div>
  );
}
