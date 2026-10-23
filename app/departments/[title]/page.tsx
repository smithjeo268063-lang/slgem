import NextImage from "next/image";
import { notFound } from "next/navigation";

import { apiGet, ApiError, getRecordImage, getRecordTitle } from "@/lib/api";
import type { ApiRecord } from "@/lib/api";
import DepartmentDonationForm from "./department-donation-form";
import VisionarySection from "@/components/vision-section";

export const instant = false;

export default async function DepartmentDetailPage({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;
  let department: ApiRecord;
  try {
    department = await apiGet<ApiRecord>(
      `/departments/${encodeURIComponent(title)}`,
    );
  } catch (error) {
    if (error instanceof ApiError && error.statusCode === 404) notFound();
    throw error;
  }
  const departmentTitle = getRecordTitle(department);
  const departmentImage =
    getRecordImage(department) || "/images/mission/the_event.jpg";

  return (
    <main className="overflow-x-clip px-4 pb-16 pt-24 sm:px-8 sm:pt-24 lg:px-20 lg:pt-40">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* <Link
          href="/departments"
          className="text-sm font-bold uppercase text-[#4C4C4C] transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
        >
          Departments
        </Link> */}

        <section className="flex flex-col gap-5 pb-16 sm:gap-8 sm:pb-20 lg:gap-10 lg:pb-25">
          <h1 className="w-[80%] lg:w-full lg:self-center text-[36px] leading-[1.12] tracking-tight font-bold-font sm:text-[56px] lg:text-center lg:text-[88px] lg:leading-[98px]">
            {departmentTitle} Department
          </h1>
          <div className="h-[220px] w-full overflow-hidden rounded-[24px] sm:h-[240px] sm:rounded-[36px] lg:h-[380px] lg:rounded-[50px]">
            <NextImage
              src={departmentImage}
              alt={departmentTitle}
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
            />
          </div>
          <p className="max-w-[1010px] text-[19px] leading-[1.6] text-[#4C4C4C] sm:text-xl lg:text-[28px]">
            {department?.description}
          </p>
        </section>

        <section className="w-full  px-[0] py-[0px] lg:px-0 lg:py-5">
          <div className="mx-auto grid w-full min-w-0 max-w-[1858px] grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-[40%_60%] lg:gap-12">
            {/* LEFT CONTENT */}
            <div className="flex w-full min-w-0 flex-col">
              <p className="inline-flex min-h-fit pb-1 lg:pl-2 w-fit items-center hover:border-b-2 hover:border-[#888888] text-[16px] lg:text-sm font-bold text-black transition-colors hover:text-[#4C4C4C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
                {departmentTitle}
              </p>
              <h2 className="m-0 mt-3 lg:mt-5 max-w-[610px] text-[28px] font-bold-font leading-[1.12] tracking-[0px] text-[#111827] sm:mt-[26px] sm:text-[46px] lg:text-[58px]">
                Join The {departmentTitle}
                <br />
                Department
              </h2>
            </div>

            {/* RIGHT FORM CARD */}
            <div className="w-full min-w-0 rounded-[24px] bg-[#F1F2F5] px-5 py-7 sm:rounded-[32px] sm:px-8 sm:py-12 lg:rounded-[40px] lg:min-h-fit lg:px-[7.2%] lg:py-[54px]">
              <DepartmentDonationForm
                className="flex w-full flex-col"
                departmentSlug={department?.slug ?? title}
              >
                {/* DESCRIPTION */}
                <p className="m-0 max-w-[850px] text-[18px] font-normal leading-[1.5] tracking-[0px] text-[#4B5563]/80 sm:text-[20px] sm:leading-[1.65] lg:text-[18px]">
                  Fill out the form below to let us know you would like to join
                  the {departmentTitle} department.
                </p>

                {/* FULL NAME */}
                <div className="mt-4 w-full sm:mt-[22px]">
                  <label
                    htmlFor="fullName"
                    className="block text-[16px] font-bold leading-[30px] tracking-[-0.35px] text-[#111827]"
                  >
                    Your Full Names
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="mt-0 h-12 w-full min-w-0 rounded-[5px] border-0 border-b border-[#111111] bg-transparent px-0 pb-[2px] text-base font-normal leading-[30px] tracking-[0px] text-[#111827] outline-none placeholder:text-[#A5AFBF] focus:border-[#111111] focus:ring-0 sm:h-[45px] sm:text-[18px]"
                  />
                </div>

                {/* EMAIL */}
                <div className="mt-4 w-full sm:mt-[22px]">
                  <label
                    htmlFor="email"
                    className="block text-[16px] font-bold leading-[30px] tracking-[-0.35px] text-[#111827]"
                  >
                    Your Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="mt-0 h-12 w-full min-w-0 rounded-[5px] border-0 border-b border-[#111111] bg-transparent px-0 pb-[2px] text-base font-normal leading-[30px] tracking-[0px] text-[#111827] outline-none placeholder:text-[#A5AFBF] focus:border-[#111111] focus:ring-0 sm:h-[45px] sm:text-[18px]"
                  />
                </div>

                <div className="mt-4 w-full sm:mt-[22px]">
                  <label
                    htmlFor="phone"
                    className="block text-[16px] font-bold leading-[30px] tracking-[-0.35px] text-[#111827]"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    className="mt-0 h-12 w-full min-w-0 rounded-[5px] border-0 border-b border-[#111111] bg-transparent px-0 pb-[2px] text-base font-normal leading-[30px] tracking-[0px] text-[#111827] outline-none placeholder:text-[#A5AFBF] focus:border-[#111111] focus:ring-0 sm:h-[45px] sm:text-[18px]"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="mt-5 flex h-16 w-full items-center justify-center rounded-full bg-[#0E004E] px-3 text-center text-base font-bold leading-[1.3] tracking-[0.4px] text-white transition-all duration-300 hover:bg-[#130066] active:scale-[0.99] sm:mt-[22px] sm:h-[78px] sm:px-0 sm:text-[18px] sm:leading-[30px] sm:tracking-[0.7px]"
                >
                  JOIN DEPARTMENT
                </button>
              </DepartmentDonationForm>
            </div>
          </div>
        </section>

        {/* <DepartmentVisionSection /> */}

        <VisionarySection />
      </div>
    </main>
  );
}
