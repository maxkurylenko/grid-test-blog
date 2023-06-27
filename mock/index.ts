import axios from "axios";
import MockAdapter from 'axios-mock-adapter';
import PostDTO from "../dto/Post.dto";

const mock = new MockAdapter(axios);

const posts: PostDTO[] = [
  {
    id: 1,
    title: 'Post 1',
    author: 'Admin',
    text: `Google parent Alphabet has partnered with AI start-up Replit to help developers write and edit code using generative AI.

    Under the partnership announced yesterday (28 March), Replit developers will get access to Google Cloud infrastructure, services and foundation models via Ghostwriter, the start-up’s software development AI.
    
    Meanwhile, Google Cloud and Workspace developers will get access to Replit’s collaborative code editing platform that is already used by 20m programmers.`,
  },
  {
    id: 2,
    title: 'Post 2',
    author: 'Admin',
    text: "Scientists have built a new, comprehensive AutoML platform designed for biologists with little to no ML experience. New automated machine learning platform enables easy, all-in-one analysis, design, and interpretation of biological sequences with minimal coding. Their platform, called BioAutoMATED, can use sequences of nucleic acids, peptides, or glycans as input data, and its performance is comparable to other AutoML platforms while requiring minimal user input.",
  },
  {
    id: 5,
    title: 'Post 3',
    author: 'Admin',
    text: 'In the space of a few months generative AI models, such as ChatGPT, Google’s Bard and Midjourney, have been adopted by more and more people in a variety of professional and personal ways. But growing research is underlining that they are encoding biases and negative stereotypes in their users, as well as mass generating and spreading seemingly accurate but nonsensical information. Worryingly, marginalized groups are disproportionately affected by the fabrication of this nonsensical information.',
  },
];

mock.onGet('/post').reply(function (config) {
  const cutSize = 100;
  return [200, posts.map((post) => ({
    id: post.id,
    title: post.title,
    description: post.text.slice(0, cutSize) + (post.text.length > cutSize ? '...' : ''),
  }))];
});

mock.onGet(/\/post\/(\d+)/).reply(function (config) {
  const match = config.url.match(/\/post\/(\d+)/);
  const postId = Number(match[1]);

  if (Number.isNaN(postId)) {
    return [400, {
      message: 'Invalid post id',
    }];
  }

  const post = posts.find((post) => post.id === postId);
  if (!post) {
    return [404, {
      message: 'Post not found',
    }];
  }

  return [200, post];
});