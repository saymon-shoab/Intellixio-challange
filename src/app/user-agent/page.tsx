import React from "react";
import { headers } from "next/headers";
import { UserAgentProvider } from "@/components/providers/userAgentProvider";
import { UserAgent } from "@/views/userAgent/userAgent";

const UserAgentRoot = () => {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "Unknown User-Agent";

  return (
    <UserAgentProvider userAgent={userAgent}>
      <UserAgent />
    </UserAgentProvider>
  );
};

export default UserAgentRoot;

