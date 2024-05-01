import Contact from "@/components/Contact";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Image from "next/image";
import kmage from "../../../public/assets/2151005448.jpg";
import Link from "next/link";

function page() {
  return (
    <div className="text-white mt-[-80px] z-20   relative overflow-hidden mx-auto       pt-8 lg:pt-28 ">
      <div className="absolute  top-[40%] left-[55%] z-30 h-[800px] w-full gradient-two pointer-events-none" />
      <div className="relative mt-[-90px] h-screen">
        <Image
          src={kmage}
          className="absolute top-0 opacity-70  object-cover h-screen"
          width={4608}
          height={3072}
          alt="kmage"
        />

        <div className="flex relative z-50 pt-[16rem] md:pt-[15rem] justify-center mb-20 flex-wrap  px-4  sm:px-6 lg:px-8 ">
          <div className="md:flex">
            <span className=" text-center uppercase md:font-medium   block  mb-3 md:mb-0 text-base  md:mr-8 mt-4  tracking-tighter text-white md:text-gradient ">
              Privacy Policy
            </span>

            <div>
              {" "}
              <h1 className="sm:w-[635px] text-center md:text-left relative z-50 lg:text-6xl text-3xl font-bold tracking-tighter  leading-6 text-white sm:text-6xl">
                {"we'd"} love to Build more Transparency.
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute h-full inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-[#000000]" />
      </div>
      <div className="absolute  top-[50%] left-[-55%] z-30 h-[800px] w-full gradient pointer-events-none" />
      <div className="absolute  top-[10%] left-[55%] z-30 h-[800px] w-full gradient-two pointer-events-none" />

      <div className="mt-[-8rem] lg:mt-[-145px] relative z-50 pb-20">
        <div className="container">
          <div className="box-one">
            <h2 className="mb-0 text-3xl lg:text-4xl text-left  leading-6  tracking-tighter  mt-8 font-bold  text-white w-full sm:w-[400px]">
              {" "}
              OpticTv Refund Policy:
            </h2>
            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              At OpticTv, accessible from{" "}
              <Link href="/" className="underline text-[#b43072]">
                https://www.optictv.online
              </Link>
              , one of our main priorities is the privacy of our visitors. This
              Privacy Policy document contains types of information that is
              collected and recorded by OpticTv and how we use it.
            </p>

            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us.
            </p>

            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              This Privacy Policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in OpticTv. This policy is not
              applicable to any information collected offline or via channels
              other than this website.
            </p>
          </div>
          <div className="box-tho">
            <h2 className="mb-0 text-3xl lg:text-4xl text-left  leading-6  tracking-tighter  mt-8 font-bold  text-white w-full ">
              Consent
            </h2>

            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              By using our website, you hereby consent to our Privacy Policy and
              agree to its terms.
            </p>
          </div>

          <div className="box-three">
            <h2 className="mb-0 text-3xl lg:text-4xl text-left  leading-6  tracking-tighter  mt-8 font-bold  text-white w-full ">
              Information we collect
            </h2>

            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              The personal information that you are asked to provide, and the
              reasons why you are asked to provide it, will be made clear to you
              at the point we ask you to provide your personal information.
            </p>
            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              If you contact us directly, we may receive additional information
              about you such as your name, email address, phone number, the
              contents of the message and/or attachments you may send us, and
              any other information you may choose to provide.
            </p>
            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              When you register for an Account, we may ask for your contact
              information, including items such as name, company name, address,
              email address, and telephone number.
            </p>
          </div>
          <div className="box-foor">
            <h2 className="mb-0 text-3xl lg:text-4xl text-left  leading-6  tracking-tighter  mt-8 font-bold  text-white w-full ">
              How we use your information
            </h2>

            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              We use the information we collect in various ways, including to:
            </p>

            <ul>
              <li className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto ">
                Provide, operate, and maintain our website
              </li>
              <li className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto ">
                Improve, personalize, and expand our website
              </li>
              <li className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto ">
                Understand and analyze how you use our website
              </li>
              <li className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto ">
                Develop new products, services, features, and functionality
              </li>
              <li className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto ">
                Send you emails
              </li>
              <li className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto ">
                Find and prevent fraud
              </li>
              <li className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto ">
                Communicate with you, either directly or through one of our
                partners, including for customer service, to provide you with
                updates and other information relating to the website, and for
                marketing and promotional purposes
              </li>
            </ul>
          </div>
          <div className="box-five">
            <h2 className="mb-0 text-3xl lg:text-4xl text-left  leading-6  tracking-tighter  mt-8 font-bold  text-white w-full ">
              Log Files
            </h2>
            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              OpticTv follows a standard procedure of using log files. These
              files log visitors when they visit websites. All hosting companies
              do this and a part of hosting services analytics. The information
              collected by log files include internet protocol (IP) addresses,
              browser type, Internet Service Provider (ISP), date and time
              stamp, referring/exit pages, and possibly the number of clicks.
              These are not linked to any information that is personally
              identifiable. The purpose of the information is for analyzing
              trends, administering the site, tracking users movement on the
              website, and gathering demographic information.
            </p>
          </div>

          <div className="box-sex">
            <h2 className="mb-0 text-3xl lg:text-4xl text-left  leading-6  tracking-tighter  mt-8 font-bold  text-white w-full">
              Cookies and Web Beacons
            </h2>

            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              Like any other website, OpticTv uses cookies. These cookies are
              used to store information including visitors preferences, and the
              pages on the website that the visitor accessed or visited. The
              information is used to optimize the users experience by
              customizing our web page content based on visitors browser type
              and/or other information.
            </p>
          </div>

          <div className="box-seven">
            <h2 className="mb-0 text-3xl lg:text-4xl text-left  leading-6  tracking-tighter  mt-8 font-bold  text-white w-full ">
              Advertising Partners Privacy Policies
            </h2>

            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of OpticTv.
            </p>

            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              Third-party ad servers or ad networks uses technologies like
              cookies, JavaScript, or Web Beacons that are used in their
              respective advertisements and links that appear on OpticTv, which
              are sent directly to users browser. They automatically receive
              your IP address when this occurs. These technologies are used to
              measure the effectiveness of their advertising campaigns and/or to
              personalize the advertising content that you see on websites that
              you visit.
            </p>

            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              Note that OpticTv has no access to or control over these cookies
              that are used by third-party advertisers.
            </p>
          </div>
          <div className="box-eight">
            <h2 className="mb-0 text-3xl lg:text-4xl text-left  leading-6  tracking-tighter  mt-8 font-bold  text-white w-full ">
              Third Party Privacy Policies
            </h2>

            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              {"OpticTv's"} Privacy Policy does not apply to other advertisers
              or websites. Thus, we are advising you to consult the respective
              Privacy Policies of these third-party ad servers for more detailed
              information. It may include their practices and instructions about
              how to opt-out of certain options.{" "}
            </p>

            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              You can choose to disable cookies through your individual browser
              options. To know more detailed information about cookie management
              with specific web browsers, it can be found at the browsers
              respective websites.
            </p>
          </div>
          <div className="box-nine">
            <h2 className="mb-0 text-3xl lg:text-4xl text-left  leading-6  tracking-tighter  mt-8 font-bold  text-white w-full ">
              CCPA Privacy Rights (Do Not Sell My Personal Information)
            </h2>

            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              Under the CCPA, among other rights, California consumers have the
              right to:
            </p>
            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              Request that a business that collects a {"consumer's"} personal
              data disclose the categories and specific pieces of personal data
              that a business has collected about consumers.
            </p>
            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              Request that a business delete any personal data about the
              consumer that a business has collected.
            </p>
            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              Request that a business that sells a {"consumer's"} personal data,
              not sell the {"consumer's"} personal data.
            </p>
            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>
          </div>
          <div className="box-teen">
            <h2 className="mb-0 text-3xl lg:text-4xl text-left  leading-6  tracking-tighter  mt-8 font-bold  text-white w-full ">
              GDPR Data Protection Rights
            </h2>

            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              We would like to make sure you are fully aware of all of your data
              protection rights. Every user is entitled to the following:
            </p>
            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              The right to access – You have the right to request copies of your
              personal data. We may charge you a small fee for this service.
            </p>
            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              The right to rectification – You have the right to request that we
              correct any information you believe is inaccurate. You also have
              the right to request that we complete the information you believe
              is incomplete.
            </p>
            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              The right to erasure – You have the right to request that we erase
              your personal data, under certain conditions.
            </p>
            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              The right to restrict processing – You have the right to request
              that we restrict the processing of your personal data, under
              certain conditions.
            </p>
            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              The right to object to processing – You have the right to object
              to our processing of your personal data, under certain conditions.
            </p>
            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              The right to data portability – You have the right to request that
              we transfer the data that we have collected to another
              organization, or directly to you, under certain conditions.
            </p>
            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>
          </div>
          <div className="box-eleven">
            <h2 className="mb-0 text-3xl lg:text-4xl text-left  leading-6  tracking-tighter  mt-8 font-bold  text-white w-full ">
              {"Children's"} Information
            </h2>

            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity.
            </p>

            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              OpticTv does not knowingly collect any Personal Identifiable
              Information from children under the age of 13. If you think that
              your child provided this kind of information on our website, we
              strongly encourage you to contact us immediately and we will do
              our best efforts to promptly remove such information from our
              records.
            </p>
          </div>
          <div className="box-twelve">
            <h2 className="mb-0 text-3xl lg:text-4xl text-left  leading-6  tracking-tighter  mt-8 font-bold  text-white w-full ">
              Changes to This Privacy Policy
            </h2>

            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              We may update our Privacy Policy from time to time. Thus, we
              advise you to review this page periodically for any changes. We
              will notify you of any changes by posting the new Privacy Policy
              on this page. These changes are effective immediately, after they
              are posted on this page.
            </p>
          </div>
          <div className="box-therteen">
            <h2 className="mb-0 text-3xl lg:text-4xl text-left  leading-6  tracking-tighter  mt-8 font-bold  text-white w-full ">
              Contact Us
            </h2>

            <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              If you have any questions or suggestions about our Privacy Policy,
              do not hesitate to contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default page;
