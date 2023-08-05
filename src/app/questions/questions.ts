import {InjectionToken} from '@angular/core';

export interface Question {
  id: string;
  text: string;
  answers: Record<'a' | 'b' | 'c' | 'd' | 'e', string>;
}

export const QUESTIONS_TOKEN = new InjectionToken<Question[]>('questions', {
  factory: () => [
    {
      id: 'breathblood1',
      text: "Think about your life as if it's a story, and you're the main protagonist. Do you tend to view yourself as lone hero, who along the way meets other supporting characters, who only have a tangential relation to your personal journey? Or do you view yourself as just one hero in an ever-shifting ensemble of important protagonists?",
      answers: {
        a: 'Loner hero, all the way.',
        b: 'Often lone hero. Not always.',
        c: "Either one. Can't say for sure.",
        d: 'Often part of an ensemble. Not always.',
        e: 'Part of an ensemble, all the way.',
      },
    },
    {
      id: 'breathblood2',
      text: "When you want to help people accomplish something, and they don't know what they're doing, are you inclined to show them how to do it? Or are you inclined to make them feel motivated or inspired to do it?",
      answers: {
        a: 'Definitely show them.',
        b: 'Lean toward showing them.',
        c: "I'll go either way.",
        d: 'Lean toward motivating them.',
        e: 'Definitely motivate them.',
      },
    },
    {
      id: 'lightvoid1',
      text: 'When you are learning about a new subject, or reading a fascinating story, do you feel a strong desire to know everything about it, and have all your questions answered? Or are you more compelled or inspired by the feelings of mystery surrounding not knowing everything?',
      answers: {
        a: "I absolutely need to know everything. I'm obsessive about it.",
        b: "I'm very curious, drawn toward knowing.",
        c: "Can't decide.",
        d: "I'm ok not having all answers. Sense of mystery is fun.",
        e: "Totally fine not knowing everything. I'd rather relax.",
      },
    },
    {
      id: 'lightvoid2',
      text: "When you hear someone explaining something to someone else, in a way that is questionable, or in a way that makes you suspect they don't fully understand the subject they are explaining, are you more inclined to: teach them everything you know about the subject, to set the record straight? Or just cast doubt on the misinformation, without offering much in the way of correction?",
      answers: {
        a: "I'll jump right in, set the record straight on everything.",
        b: "I'll provide a correction or two, but won't get carried away.",
        c: "I'd probably stay out of it.",
        d: "I wouldn't be too specific, but I'd let people know it sounds fishy.",
        e: "I wouldn't bother reeducating people, but I'd absolutely punch as many holes in their story as I could.",
      },
    },
    {
      id: 'timespace1',
      text: 'If you could choose one ability, which would it be? The ability to travel to any period in history on Earth at will, past or future? Or the ability to safely travel (such as, on a nice ship) anywhere in the universe at will, instantly?',
      answers: {
        a: 'Definitely time travel. No question.',
        b: 'Leaning toward time travel, but the other sounds pretty cool.',
        c: 'Too hard to choose.',
        d: 'Leaning toward space travel, but the other sounds pretty cool.',
        e: 'Definitely space travel. No question.',
      },
    },
    {
      id: 'timespace2',
      text: "If you are working on a project (something you're doing for yourself, not for anyone else), are you obsessively focused on the end result of the project? Or are you enjoying the process, regardless of how it turns out?",
      answers: {
        a: 'End result is easily the most important thing.',
        b: 'Result is very important, but would like to enjoy it along the way too.',
        c: 'Result and process about equally important.',
        d: 'Enjoying the process is very important, but would like it to feel worthwhile at end too.',
        e: 'Enjoying the process is easily the most important thing.',
      },
    },
    {
      id: 'heartmind1',
      text: "Which option best describes what's more important to you? Understanding yourself, and fully knowing who you are? Or thinking rationally, and making strong decisions?",
      answers: {
        a: 'Definitely understanding myself. If I had to pick one over the other, that would be my clear priority.',
        b: 'Leaning toward understanding myself.',
        c: "Can't really decide.",
        d: 'Leaning toward thinking rationally.',
        e: 'Definitely thinking rationally. If I had to pick one over the other, that would be my priority.',
      },
    },
    {
      id: 'heartmind2',
      text: 'What idea is more interesting to you? The ability to fully understand your potential as a person? Or the ability to fully understand all potential consequences of your actions before taking them?',
      answers: {
        a: 'Want to understand my personal potential, no question.',
        b: 'Somewhat more interested in understanding my personal potential.',
        c: 'Both equally desirable.',
        d: 'Somewhat more interested in understanding all consequences of my actions.',
        e: 'Want to understand all consequences of my actions, no question.',
      },
    },
    {
      id: 'hoperage1',
      text: "Which better describes your attitude? Having great conviction in certain beliefs or ideas you're attracted to? Or casting strong doubt on beliefs or ideas you dislike?",
      answers: {
        a: 'Definitely having conviction in beliefs I like.',
        b: 'A little more attracted to having conviction in beliefs I like.',
        c: "Can't decide.",
        d: 'A little more attracted to casting doubt on beliefs I dislike.',
        e: 'Definitely casting doubt on beliefs I dislike.',
      },
    },
    {
      id: 'hoperage2',
      text: "When circumstances are intolerably bad, which are you more inclined to do? Come up with the best alternatives or solutions, and work as hard as you can to make those happen instead? Or don't worry about a better alternative, burn it all down, and whatever follows, you'll just deal with it as it comes?",
      answers: {
        a: "I'm not doing a thing until I have a better solution in place first.",
        b: 'Inclined to have a solution first, but not absolutely.',
        c: "I don't have an opinion on this.",
        d: 'Inclined to get out the bad situation as soon as possible, but not averse to considering alternatives.',
        e: "Burn it down. I'm absolutely getting out of the bad situation asap, will deal with the consequences later.",
      },
    },
    {
      id: 'lifedoom1',
      text: 'If you see someone suffering, are you most inclined to do whatever you can to help them get better? Or is your instinct to relate to their suffering, to empathize, without necessarily considering how you can help?',
      answers: {
        a: "I'll do whatever's in my power to help them. That's all I'm thinking about.",
        b: "I'll focus mostly on helping, but won't be able to stop myself from relating to the problem somewhat.",
        c: "Not sure how I'd react.",
        d: "My first impulse would be to empathize with their suffering, but after that I'd probably figure out what I could do to help.",
        e: "I'm really not great at helping. I'm generally overcome with other feelings relating to their suffering, which makes me not that useful.",
      },
    },
    {
      id: 'lifedoom2',
      text: "When someone suffers misfortune so terrible that you know there is nothing anyone can do for them, are you most inclined to: feel horrible that nothing can be done? Or feel resigned to the sense that this is the way of the world, and some things just can't be helped?",
      answers: {
        a: "Feel absolutely horrible that there's no way to help this person. Would probably end up trying to think of ways to help regardless.",
        b: "Would feel bad there's nothing that can be done. Would probably accept there's no way to help though.",
        c: 'Hard to say.',
        d: "Likely would feel somewhat resigned right away. Might briefly consider how to help, but... no. It's not realistic.",
        e: "Feel absolutely resigned to their terrible situation, because that's just the way things so often are.",
      },
    },
  ],
});
