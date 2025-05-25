const Content = () => {
  return (
    <div className="my-12" id="scope">
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-center text-2xl text-gray-700 font-semibold uppercase tracking-wide mb-3 dark:text-white">
            Domain
          </h1>
          <h2 className="text-center text-2xl text-gray-700 font-semibold uppercase tracking-wide mb-3 dark:text-white">
            Literature survey
          </h2>
          <p className="text-center text-slate-500 dark:text-slate-300">
            Globally, several digital tools have been developed to enhance language learning for young learners.
            Platforms such as Reading Eggs, ABCmouse, and Duolingo ABC use a mix of storytelling, phonics, games,
            and visual content to make language acquisition engaging and effective. These tools often incorporate
            gamification and adaptive learning to maintain student interest and cater to different proficiency levels.
            AI-powered speech recognition and feedback systems, such as Google Read Along and Ello, provide real-time
            guidance on pronunciation and fluency. These advancements reflect the growing trend of using Artificial Intelligence (AI)
            to deliver personalized learning experiences, particularly through technologies like Automatic Speech Recognition (ASR),
            Text-to-Speech (TTS), and intelligent feedback systems.
          </p>
          <br></br>
          <p className="text-center text-slate-500 dark:text-slate-300">
            In Sri Lanka, English is taught as a second or third language in most government schools. Despite curriculum reforms and the
            integration of ICT in education through platforms like e-Thaksalawa, there remains a significant gap in tools that actively
            promote reading comprehension, speaking fluency, and contextual vocabulary development. Additionally, many available tools do not
            account for Sri Lankan English pronunciation, often influenced by Sinhala or Tamil first-language structures.Studies highlight that
            primary school children in Sri Lanka often face difficulties in decoding English texts, lack confidence in speaking, and receive limited
            feedback during self-study. There is a pressing need for context-aware educational tools that are culturally relevant, linguistically
            adaptable, and accessible across urban and rural settings.
          </p>
        </div>
        <div>
          <h2 className="text-center text-2xl text-gray-700 font-semibold uppercase tracking-wide mb-3 dark:text-white">
            Research Gap
          </h2>
          <p className="text-center text-slate-500 dark:text-slate-300">
            Although there is an increasing number of digital tools aimed at supporting English language learning, especially for early learners,
            most current solutions lack the necessary pedagogical depth, localization, and adaptiveness needed to effectively serve primary school
            students in Sri Lanka. The following gaps highlight the unmet needs in current educational technologies:
          </p>
          <li className="text-center text-slate-500 dark:text-slate-300">Most existing tools emphasize vocabulary acquisition or phonics instruction,
            but they lack meaningful feedback on comprehension skills, especially at different cognitive levels</li>
          <li className="text-center text-slate-500 dark:text-slate-300">Speech-based tools like Google Read Along offer basic pronunciation practice, but:
            They do not detect or classify specific pronunciation or fluency errors (e.g., hesitations, mispronunciations, omissions).
            They fail to provide real-time corrective feedback, especially tailored to non-native accents like Sri Lankan English</li>
          <li className="text-center text-slate-500 dark:text-slate-300">Current reading tools rarely adapt content based on learner performance.
            This results in: Frustration when content is too difficult, boredom or disengagement when too easy.
            There is a clear need for tools that can automatically adjust sentence complexity.</li>
          <li className="text-center text-slate-500 dark:text-slate-300">While some tools offer multiple-choice quizzes or fixed questions, they do not:
            Generate short-answer or sentence-reordering questions dynamically,
            evaluate free-text answers or recognize partially correct responses, and provide instant, formative feedback to guide the learner</li>
          <li className="text-center text-slate-500 dark:text-slate-300">Most tools do not utilize visual learning strategies effectively.
            Children often struggle to relate words to real-world meaning without visual context.</li>
          <li className="text-center text-slate-500 dark:text-slate-300">Many tools still rely on passive learning
            (e.g., text-only exercises), leading to decreased motivation</li></div>
        <div>
          <h2 className="text-center text-2xl text-gray-700 font-semibold uppercase tracking-wide mb-3 dark:text-white">
            Research Problem
          </h2>
          <p className="text-center text-slate-500 dark:text-slate-300">
            <li className="text-center text-slate-500 dark:text-slate-300">
              Reading comprehension is a cornerstone of early education and a critical predictor of future academic achievement.
              It not only enables children to decode and understand text but also lays the foundation for learning across all subjects
              from science and history to problem-solving and communication. Without strong comprehension skills, students struggle to engage
              meaningfully with academic content, leading to long-term learning deficits. Early intervention in improving reading comprehension is
              therefore essential for educational success and lifelong learning.            </li>
            <li className="text-center text-slate-500 dark:text-slate-300">In many traditional classroom environments, especially in low-resource settings,
              teachers are required to manage large groups of students with diverse learning needs. This often leads to a "one-size-fits-all" instructional
              approach, which fails to support students who are either falling behind or advancing ahead of the average level. Key challenges include:
              High student-teacher ratios, inadequate time for one-on-one support, and lack of real-time assessment and feedback.Such limitations reduce
              the effectiveness of conventional teaching methods in nurturing foundational skills like reading fluency and comprehension,
              especially for struggling learners.</li>
            <li className="text-center text-slate-500 dark:text-slate-300">
              In Sri Lanka, primary school education faces additional hurdles that hinder effective literacy development:
              Limited teacher-student interaction: Due to curriculum pressures and time constraints, many teachers are unable
              to give personalized support to each child, particularly in English, a second or third language for most students.
              Minimal parental involvement: Many parents lack the linguistic skills or educational background to support their children’s
              English learning at home. This leaves students with limited reinforcement outside the classroom.
              Urban–rural disparities: Students in rural areas often have even fewer resources and lower exposure to English,
              exacerbating educational inequality. These factors contribute to low literacy levels, poor reading habits, and inadequate
              comprehension skills, which persist as children progress through the education system.
            </li><li className="text-center text-slate-500 dark:text-slate-300">Low Technology Adoption: Despite the proven benefits of
              integrating technology in education, its adoption in Sri Lanka remains low, hindering advancements in reading and comprehension
              skills among primary students.</li>
          </p>
        </div>
        <div>
          <h2 className="text-center text-2xl text-gray-700 font-semibold uppercase tracking-wide mb-3 dark:text-white">
            Research Objectives
          </h2>
          <p className="text-center text-slate-500 dark:text-slate-300">
            The main objective of this research is to develop a comprehensive web-based reading and comprehension assistant tailored for primary
            school students mainly focusing grade 3 - 5 students in Sri Lanka, with the aim of enhancing their reading comprehension, pronunciation, and spoken fluency. The system is
            designed to align with local educational standards, address the specific needs of Sri Lankan learners, and function effectively in both
            urban and rural school settings.
          </p>
          <p className="text-center text-slate-500 dark:text-slate-300">
            In addition to supporting students, the tool also seeks to reduce the instructional burden on teachers by automating key aspects of
            assessment, feedback, and differentiated instruction allowing teachers to focus more on facilitation than manual evaluation.
            To achieve this, the system integrates four core components, each targeting a critical area of language learning.         </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
