import React from "react";
import { useRouter } from "next/router";

const wrtingPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>id:{id}</div>;
};

export default wrtingPage;
