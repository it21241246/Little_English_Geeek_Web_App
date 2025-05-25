import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import HeroVideoDialog from "../magicui/hero-video-dialog";

const Solution = () => {
  return (
    <div>
      <h1 className="text-center text-2xl text-gray-700 font-semibold uppercase tracking-wide mt-10 mb-3 dark:text-white">
        Solution
      </h1>

      <div className="text-center text-slate-500 dark:text-slate-300 mb-12">
        To address the challenges identified in Sri Lanka’s primary English education landscape
        including poor reading comprehension, limited teacher-student interaction, and low adoption of educational technology.This research
        proposes a web-based Reading and Comprehension Assistant Tool. The solution is designed to be child-friendly, curriculum-aligned, and
        locally adaptable. This intelligent assistant integrates speech processing, adaptive learning, and gamification to offer a rich,
        interactive learning experience for students while also supporting teachers with automated assessment and feedback tools.
      </div>
      <li className="text-center text-slate-500 dark:text-slate-300 mb-12">Real-Time Fluency & Pronunciation Feedback:
        Using automatic speech recognition (ASR) and forced alignment, the system listens to students read aloud and provides immediate feedback on:
        Mispronunciations, disfluencies (pauses, hesitations), word substitutions or omissions.
        This helps students self-monitor and correct their oral reading, fostering confidence and fluency all without needing constant teacher input.</li>
      <li className="text-center text-slate-500 dark:text-slate-300 mb-12">Adaptive Comprehension Question Generation & Evaluation:
        The system intelligently generates: short-answer questions to test literal and inferential understanding, jumbled sentence tasks to reinforce
        syntax and structure, student responses are evaluated using natural language understanding (NLU) models. THis offer; instant feedback on correctness,
        suggestions or hints for partially correct answers,d ynamic adaptation of difficulty level based on performance</li>
      <li className="text-center text-slate-500 dark:text-slate-300 mb-12">Image Description for Language Enrichment:Students can view AI-generated or
        curated educational images and are prompted to: Describe what they see,  use targeted vocabulary and sentence structures,
        practice creative and descriptive writing.This activity builds contextual language use, encourages expression, and supports visual-spatial learners.</li>

      <li className="text-center text-slate-500 dark:text-slate-300 mb-12">Gamified Vocabulary Challenges: To sustain motivation, the platform includes
        interactive games such as: Word-matching and spelling games ,level-up rewards and achievement badges. These elements promote active learning,
        improve word retention, and increase student engagement, especially in younger learners with shorter attention spans.</li>

      <li className="text-center text-slate-500 dark:text-slate-300 mb-12">The system is not just student-centric. Tis also reduces teacher workload by: Automatically tracking learner progress</li>
      {/* <Card className="mx-auto">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative">
              <HeroVideoDialog
                className="block dark:hidden"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                thumbnailAlt="Hero Video"
              />
              <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                thumbnailAlt="Hero Video"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-lg md:text-2xl font-bold text-primary mb-2">
                  Exploring the Advanced Capabilities of our Smart City System:
                  A Comprehensive Demonstration
                </h2>
                <p className="text-slate-500 dark:text-slate-300 italic mb-6">
                  The main features of our proposed Smart City system are:
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "Enhanced public surveillance with real-time threat detection capabilities.",
                  "Automated waste management for efficient sorting and collection optimization.",
                  "Special accident detection on motorways for quick response to accidents and emergencies.",
                  "Efficient vehicle parking management with real-time monitoring and automated billing.",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-slate-500 dark:text-slate-300">
                This comprehensive demonstration provides viewers with an
                exclusive look at our Smart City System in operation. The video
                showcases the sophisticated functionalities of the system,
                offering a firsthand experience of its advanced capabilities in
                improving urban management and enhancing city life.
              </p>
            </div>
          </div>
        </CardContent>
      </Card> */}
    </div>
  );
};

export default Solution;
