import { useState } from "react";
import Comment from "./Comment";
import { Icon } from "@iconify/react/dist/iconify.js";

type Comment = {
   username: string;
   name: string;
   text: string;
   replies: Comment[];
};

const commentsData: Comment[] = [
   {
      username: "akshay_saini",
      name: "Akshay Saini",
      text: "This is such an insightful article! I’ve been following similar topics for a while, and I must say this breakdown is one of the best I’ve seen. It not only highlights the core issues but also provides actionable solutions. Great job!",
      replies: [
         {
            username: "rohit_sharma",
            name: "Rohit Sharma",
            text: "I completely agree! The author really understands the subject matter, and the way it's explained here is both engaging and practical. I especially loved how the examples are tied back to real-world scenarios. It makes the concepts so much easier to grasp.",
            replies: [
               {
                  username: "sneha_kapoor",
                  name: "Sneha Kapoor",
                  text: "Exactly my thoughts, Rohit! I’ve read so many articles that either overcomplicate the topic or don’t go into enough depth. This one strikes the perfect balance. I’d definitely recommend this to anyone trying to get a better understanding of this subject.",
                  replies: [
                     {
                        username: "amit_gupta",
                        name: "Amit Gupta",
                        text: "Couldn't agree more, Sneha. The practical approach mentioned here is something I’d love to implement in my workplace. Do you think such methods would work in a fast-paced environment where deadlines are tight?",
                        replies: [
                           {
                              username: "priya_verma",
                              name: "Priya Verma",
                              text: "I think it can work, Amit, but it would depend on the willingness of the team to adapt. Fast-paced environments can be challenging, but with the right mindset and some minor tweaks, these strategies could really improve efficiency.",
                              replies: [],
                           },
                        ],
                     },
                  ],
               },
            ],
         },
         {
            username: "karan_mehta",
            name: "Karan Mehta",
            text: "I loved this article too! The points made here are not only valid but also thought-provoking. It’s rare to find content that makes you reflect on your own practices and inspires you to make meaningful changes. Hoping to see more from this author!",
            replies: [],
         },
      ],
   },
   {
      username: "rajesh_khanna",
      name: "Rajesh Khanna",
      text: "The examples in this article are fantastic, but I feel like the inclusion of more detailed case studies would elevate the content even further. Case studies bring a sense of relatability, and seeing real-world applications of these ideas would help solidify the concepts even more.",
      replies: [
         {
            username: "meera_nair",
            name: "Meera Nair",
            text: "That’s such a good point, Rajesh. Case studies not only make the content more relatable but also demonstrate how these concepts have been successfully applied. It helps bridge the gap between theory and practice.",
            replies: [
               {
                  username: "siddharth_rao",
                  name: "Siddharth Rao",
                  text: "Totally agree, Meera. I’ve read articles that were loaded with theory but lacked practical examples. Adding even one or two case studies would make the concepts stick better. Do you have any specific examples in mind that could work here?",
                  replies: [
                     {
                        username: "nidhi_sharma",
                        name: "Nidhi Sharma",
                        text: "Actually, I do! There are a few companies that implemented similar strategies and saw incredible results. I’ll list them in a follow-up comment. It could be a great addition to the content!",
                        replies: [],
                     },
                  ],
               },
            ],
         },
      ],
   },
   {
      username: "alok_tiwari",
      name: "Alok Tiwari",
      text: "This article really struck a chord with me. It’s rare to come across content that feels so personal and relatable. The way the author describes the challenges and provides simple yet effective solutions is commendable. I can’t wait to implement some of these ideas in my own workflow!",
      replies: [
         {
            username: "shruti_joshi",
            name: "Shruti Joshi",
            text: "I feel the same way, Alok! It’s almost as if the author understands the exact struggles we face and has tailored this article to address them. This level of connection with the audience is what sets this apart.",
            replies: [
               {
                  username: "harish_patel",
                  name: "Harish Patel",
                  text: "Absolutely, Shruti! I’ve read a lot of articles on similar topics, but this one feels different. It’s practical, it’s motivational, and most importantly, it’s actionable. The tips here are things I can start doing right away!",
                  replies: [
                     {
                        username: "sunita_reddy",
                        name: "Sunita Reddy",
                        text: "I couldn’t agree more, Harish. Sometimes, articles are filled with jargon and abstract ideas that don’t really help. But this one? It’s like a breath of fresh air. I’m definitely bookmarking this for future reference.",
                        replies: [
                           {
                              username: "vikram_das",
                              name: "Vikram Das",
                              text: "Exactly, Sunita! This is the kind of content that deserves to be shared far and wide. It’s practical, well-written, and incredibly helpful. Let’s spread the word so more people can benefit from it!",
                              replies: [],
                           },
                        ],
                     },
                  ],
               },
            ],
         },
      ],
   },
];

const CommentsList = ({ comments }: { comments: Comment[] }) => {
   const [showReply, setShowReply] = useState(false);

   return comments?.map((comment) => (
      <div>
         <Comment key={comment.username} {...comment} />
         {comment.replies.length > 0 && (
            <div className="ml-16 mt-2" key={comment.name}>
               <button
                  onClick={() => setShowReply((prev) => !prev)}
                  className="text-sm flex gap-1 mb-3 items-center font-medium text-[#065fd4]"
               >
                  {
                     <Icon
                        icon={
                           showReply
                              ? "mdi-light:chevron-up"
                              : "mdi-light:chevron-down"
                        }
                        className={`text-2xl ${showReply ? " -mt-[2px]" : ""}`}
                     ></Icon>
                  }
                  {comment.replies.length} replies
               </button>

               {showReply && (
                  <CommentsList key={comment.name} comments={comment.replies} />
               )}
            </div>
         )}
      </div>
   ));
};

const CommentsContainer = () => {
   return (
      <div className="flex flex-col gap-2 mt-10">
         <div className="text-xl flex font-bold">1,454 Comments</div>
         <div className="flex flex-col gap-5">
            <CommentsList comments={commentsData} />
         </div>
      </div>
   );
};

export default CommentsContainer;
