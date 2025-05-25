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
        The proposed solution involves creating an integrated smart city system
        using computer vision technology. This system will monitor and optimize
        various aspects of urban infrastructure, including vehicle parking,
        traffic management, public safety, and waste management. By leveraging
        advanced cameras, sensors, and machine learning algorithms, the system
        will provide real-time data analysis and automated responses to improve
        city operations and enhance the quality of life for residents.
      </div>

      <Card className="mx-auto">
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
      </Card>
    </div>
  );
};

export default Solution;
