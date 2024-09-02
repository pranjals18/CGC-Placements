"use client";

import React, { useEffect, useState } from "react";
import { useExpandContext } from "@/app/(Context)/ExpandContext";
import { useRouter } from "next/navigation"; // Correct import for Next.js 13+
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Loader from "@/app/(components)/(loader)/Loader"; // Adjust the import path as needed

// Define the type for the role data
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

// Define the type for the company data
interface Company {
  name: string;
  image: string;
  email: string;
  address: string;
  contact: number;
  website: string;
}

// Define the type for the job data
interface Job {
  _id: string; // Added _ID for routing
  company: Company;
  roles: Role[];
  status: string;
  applications: any[]; // Adjust this type if you have more information about applications
}

const Jobs: React.FC = () => {
  const { expand } = useExpandContext();
  const [eligibleJobs, setEligibleJobs] = useState<Job[]>([]);
  const [nonEligibleJobs, setNonEligibleJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Added loading state
  const router = useRouter(); // Initialize useRouter for navigation

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:5000/job/get");
        const data: Job[] = await response.json();

        console.log(data);

        // Assuming the data structure has a field to determine eligibility
        const eligible = data.filter((job) =>
          job.roles.some((role) => role.eligibility > 0)
        );
        const nonEligible = data.filter((job) =>
          job.roles.every((role) => role.eligibility === 0)
        );

        setEligibleJobs(eligible);
        setNonEligibleJobs(nonEligible);
      } catch (error) {
        console.error("Failed to fetch jobs", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchJobs();
  }, []);

  const handleRowClick = (_id: string) => {
    router.push(`/jobs/${_id}`); // Redirect to the job details page
  };

  return (
    <div
      className={`p-7 bg-slate-200 transition-all duration-300 ${
        expand ? "ml-56" : "ml-20"
      }`}
    >
      <div className="mt-4 rounded-lg overflow-hidden bg-white">
        <h1 className="text-2xl font-bold p-4">All Jobs</h1>
        {loading ? (
          <Loader /> // Show loader while fetching
        ) : eligibleJobs.length > 0 ? (
          <Table>
            <TableHeader className="text-lg font-semibold bg-slate-100">
              <TableRow>
                <TableHead className="w-1/3">Company Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Job Type</TableHead>
                <TableHead>Location</TableHead>
                <TableHead className="text-right">Package(LPA)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-gray-500 font-medium">
              {eligibleJobs.flatMap((job) =>
                job.roles.map((role, index) => (
                  <TableRow
                    key={index}
                    className="hover:bg-slate-50 cursor-pointer"
                    onClick={() => handleRowClick(job._id)} // Add onClick handler
                  >
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <img
                          src={job.company.image}
                          // alt={job.company.name}
                          className="h-6 w-6 mr-2"
                        />
                        <span>{job.company.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{role.title}</TableCell>
                    <TableCell>{role.employment_type}</TableCell>
                    <TableCell>{role.location}</TableCell>
                    <TableCell className="text-right">
                      {(role.salary * 12) / 100000} LPA
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        ) : (
          <p className="p-4">No eligible jobs available.</p>
        )}
      </div>
    </div>
  );
};

export default Jobs;
