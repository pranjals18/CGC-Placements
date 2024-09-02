"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import {
  FaMoneyBillAlt,
  FaMapMarkerAlt,
  FaBriefcase,
  FaCalendarAlt,
  FaUserAlt,
  FaTachometerAlt,
} from "react-icons/fa";
import { useExpandContext } from "@/app/(Context)/ExpandContext";
import Loader from "@/app/(components)/(loader)/Loader"; // Import the loader component

// Define TypeScript interfaces for data
interface Company {
  name: string;
  image: string;
  email: string;
  address: string;
  contact: string;
  website: string;
}

interface Role {
  title: string;
  description: string;
  application_deadline: string;
  eligibility: number;
  min_experience: number;
  salary: number;
  employment_type: string;
  location: string;
}

interface JobData {
  company: Company;
  roles: Role[];
  _id: string;
  status: string;
  applications: Application[];
}

interface Application {
  // Define application fields if applicable
}

async function fetchJobData(jobId: string): Promise<JobData | null> {
  try {
    const response = await fetch(`http://localhost:5000/job/get/${jobId}`);
    if (!response.ok) throw new Error("Failed to fetch job data");
    return await response.json();
  } catch (error) {
    console.error("Error fetching job data:", error);
    return null;
  }
}

export default function JobPage({ params }: { params: { id: string } }) {
  const { expand } = useExpandContext();
  const [jobData, setJobData] = useState<JobData | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = params; // Get ID from params

  useEffect(() => {
    const loadJobData = async () => {
      const data = await fetchJobData(id);
      if (data) {
        setJobData(data);
      } else {
        notFound();
      }
      // Ensure the loader is shown for at least 1 second
      setTimeout(() => setLoading(false), 500);
    };

    loadJobData();
  }, [id]);

  if (loading) return <Loader />; // Show loader until loading is complete

  if (!jobData) return <div className="p-7 text-center">Job details not found.</div>;

  // Function to format numbers
  const formatNumber = (number: number) => {
    return new Intl.NumberFormat("en-US").format(number);
  };

  // Function to format dates
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  return (
    <div
      className={`p-7 bg-slate-200 transition-all duration-300 ${
        expand ? "ml-56" : "ml-20"
      }`}
    >
      <h1 className="text-2xl font-bold mb-6 mt-2 text-gray-600 border-b">
        Job Details
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Company Details Card */}
        <div className="bg-white p-6 shadow-md rounded-md ml-4">
          <div className="flex flex-col items-center mb-4">
            <a
              href={jobData.company.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={jobData.company.image}
                alt={jobData.company.name}
                className="w-36 h-36 rounded-full mb-2"
              />
            </a>
            <h2 className="text-xl font-semibold">{jobData.company.name}</h2>
          </div>
          <div className="grid grid-cols-1 pl-6 md:grid-cols-2 gap-2 text-left">
            <p className="text-gray-600 font-semibold">Address:</p>
            <p className="text-gray-600">{jobData.company.address}</p>

            <p className="text-gray-600 font-semibold">Contact:</p>
            <p className="text-gray-600">{jobData.company.contact}</p>

            <p className="text-gray-600 font-semibold">Email:</p>
            <p className="text-blue-500">
              <a href={`mailto:${jobData.company.email}`} className="text-blue-500">
                {jobData.company.email}
              </a>
            </p>

            <p className="text-gray-600 font-semibold">Website:</p>
            <p className="text-blue-500">
              <a href={jobData.company.website} target="_blank" rel="noopener noreferrer">
                {jobData.company.website}
              </a>
            </p>
          </div>
        </div>

        {/* Job Role Details Card */}
        <div className="bg-white p-6 shadow-md rounded-md space-y-4 ml-4">
          {jobData.roles.map((role, index) => (
            <div key={index} className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md flex items-center space-x-3">
                <FaMoneyBillAlt className="text-green-500" />
                <p className="text-lg font-semibold">
                  Salary: <span className="font-normal">${formatNumber(role.salary)}</span>
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-md flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-500" />
                <p className="text-lg font-semibold">
                  Location: <span className="font-normal">{role.location}</span>
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-md flex items-center space-x-3">
                <FaBriefcase className="text-orange-500" />
                <p className="text-lg font-semibold">
                  Employment Type: <span className="font-normal">{role.employment_type}</span>
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-md flex items-center space-x-3">
                <FaCalendarAlt className="text-red-500" />
                <p className="text-lg font-semibold">
                  Application Deadline: <span className="font-normal">{formatDate(role.application_deadline)}</span>
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-md flex items-center space-x-3">
                <FaUserAlt className="text-purple-500" />
                <p className="text-lg font-semibold">
                  Minimum Experience: <span className="font-normal">{role.min_experience} years</span>
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-md flex items-center space-x-3">
                <FaTachometerAlt className="text-teal-500" />
                <p className="text-lg font-semibold">
                  Eligibility: <span className="font-normal">{role.eligibility}%</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Description and Apply Button Card */}
      {jobData.roles.map((role, index) => (
        <div
          key={index}
          className="bg-white p-6 pl-12 shadow-md rounded-md space-y-4 ml-4"
        >
          <h2 className="text-xl font-semibold mb-4">Job Description</h2>
          <p className="text-gray-700 mb-4">{role.description}</p>
          <div className="flex justify-center mt-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
              Apply Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
