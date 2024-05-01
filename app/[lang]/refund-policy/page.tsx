import Contact from "@/components/Contact";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Image from "next/image";
import kmage from "../../../public/assets/2151005448.jpg";

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
              Refund Policy
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
          <h2 className="mb-0 text-3xl lg:text-4xl text-left  leading-6  tracking-tighter  mt-8 font-bold  text-white w-full sm:w-[400px]">
            {" "}
            OpticTv Refund Policy:
          </h2>

          <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
            {" "}
            At OpticTv, we take pride in offering our customers the best IPTV
            service possible. We believe in our service and we stand behind it.
            We want you to be completely satisfied with your purchase, and we
            understand that sometimes things may not work out as expected.
          </p>

          <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
            Therefore, we offer a 7-day money-back guarantee on all our
            subscription plans. If for any reason you are not satisfied with our
            service, you can request a refund within the first 7 days of your
            subscription. After the 7-day period, no refunds will be issued.
          </p>

          <h3 className="mb-0 text-3xl lg:text-4xl text-left  leading-6  tracking-tighter  mt-8 font-bold  text-white w-full sm:w-[400px]">
            {" "}
            Refund Eligibility:
          </h3>

          <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
            {" "}
            To be eligible for a refund, you must meet the following criteria:
          </p>

          <ul>
            <li className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              Your request for a refund must be made within 7 days of your
              subscription start date.
            </li>
            <li className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              You must have purchased the subscription directly from our website
              or authorized resellers.
            </li>
            <li className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              Your subscription must not have been used for more than 7 days.
            </li>
            <li className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              You must provide us with a valid reason for your refund request.
            </li>
            <li className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
              Please note that we do not provide refunds for issues related to
              your device, Internet service provider, or your inability to use
              our service due to technical issues outside of our control.
              Additionally, if we suspect fraudulent or abusive behavior, we
              reserve the right to deny a refund request.
            </li>
            <li></li>
          </ul>

          <h3 className="mb-0 text-3xl lg:text-4xl text-left  leading-6  tracking-tighter  mt-8 font-bold  text-white w-full sm:w-[400px]">
            Refund Process:
          </h3>

          <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
            {" "}
            To request a refund, please email us at{" "}
            <a className="underline text-[#b43072]" href="">
              support@optictv.online
            </a>{" "}
            or our number on Whatsapp with your order number and reason for
            requesting a refund. Our support team will review your request and
            respond within 24 hours.
          </p>

          <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
            {" "}
            If your refund request is approved, we will process the refund to
            your original method of payment within 7 business days.
          </p>

          <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
            {" "}
            Please note that if you paid with a credit or debit card, the refund
            may take several days to appear on your statement depending on your
            {"bank's"} policies.
          </p>

          <h3 className="mb-0 text-3xl lg:text-4xl text-left  leading-6  tracking-tighter  mt-8 font-bold  text-white w-full sm:w-[400px]">
            {" "}
            Cancellation:
          </h3>

          <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
            {" "}
            If you decide to cancel your subscription before the end of the
            subscription term, your service will continue until the end of the
            term, and no refunds will be issued for the remaining period.
          </p>

          <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
            {" "}
            If you have any questions about our refund policy or need assistance
            with your refund request, please contact our support team at {""}
            <a className="underline text-[#b43072]" href="">
              support@optictv.online
            </a>
          </p>

          <p className="mt-4 text-base text-[#888888]  z-50 relative   mx-auto mb-1">
            {" "}
            Thank you for choosing OpticTv. We are committed to providing you
            with the best IPTV service and support.
          </p>
        </div>
      </div>
    </div>
  );
}
export default page;
