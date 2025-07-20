"use client";

import { useEffect } from "react";

import TextComponent from "@/components/TestComponent";
import ENDPOINTS from "@/constants/endpoints";
import { getCookie } from "@/libs/auth-actions";
import apiService from "@/utils/axios";

export default function TextPage() {
  const getData = async () => {
    try {
      console.log("Fetching data...");
      const response = await apiService.get(ENDPOINTS.ME, {
        headers: { Authorization: `Bearer ${getCookie("access_token")}` },
      });
      console.log("Data fetched successfully:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <main className="p-8 max-w-md mx-auto">
      <TextComponent />
    </main>
  );
}
