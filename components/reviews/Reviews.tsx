import Section from "@/components/Section";
import { FaQuoteRight, FaStar } from "react-icons/fa";

function Reviews() {
    return (
        <Section
            id="reviews"
            title="Reviews"
            subtitle="What my client says"
            description="See what our satisfied clients have to say about us. Our commitment to excellence speaks for itself through their testimonials. Explore their experiences and the impact we've had on their projects.">
            <ReviewCard reviewBy={"Nanda Kishore M."} rating={5.0}>
                My second time working with Tausif and I am really satisfied. He goes over and above to ensure that all the specifications are met.
                And the quality is great. Highly recommend.
            </ReviewCard>
            <ReviewCard reviewBy={"Austin A."} rating={5.0}>
                Brilliant and artistic front end designer. People like this are hard to find. Keep him close.
            </ReviewCard>
            <ReviewCard reviewBy={"Patrick E."} rating={5.0}>
                It was a pleasure working with Md Tausif I.; very good communication; perfect understanding of what to do; changes quickly done; very
                neat design and professional coding. Happy to work with you again. ;)
            </ReviewCard>
        </Section>
    );
}

export default Reviews;

const ReviewCard = ({ children, reviewBy, rating }: { children: React.ReactNode; reviewBy: string; rating?: number }) => {
    return (
        <div className="p-4 md:w-1/2 lg:w-1/3 w-full">
            <div className="h-full bg-content2 text-content2-foreground p-8 rounded-md border-2 dark:border-default-200">
                <div className="flex justify-between items-center mb-4">
                    <div className="text-3xl text-gray-400">
                        <FaQuoteRight />
                    </div>
                    <div className="flex text-xl text-warning">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>

                <p className="leading-relaxed mb-6 dark:text-gray-300 text-sm">{children}</p>
                <span className="inline-flex items-center">
                    <span className="flex-grow flex flex-col pl-2">
                        <span className="font-medium text-gray-900 dark:text-white">- {reviewBy}</span>
                        <span className="text-gray-500 text-sm font-light dark:text-gray-400">&nbsp;&nbsp;Freelancer Client</span>
                    </span>
                </span>
            </div>
        </div>
    );
};
