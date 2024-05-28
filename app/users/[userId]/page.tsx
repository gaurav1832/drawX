import React from "react";

interface userIdPageProps {
  params: {
    userId: string;
  };
}

const page = ({ params }: userIdPageProps) => {
  return <div>userid: {params.userId}</div>;
};

export default page;
