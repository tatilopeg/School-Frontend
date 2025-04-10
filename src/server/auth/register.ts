import type { AuthModel } from "@/models/AuthModel";

interface ResponseModel {
  success: boolean;
  message: string;
}

export const registerUser = async (user:AuthModel): Promise<ResponseModel | null> => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const body = JSON.stringify(user);
  console.log('Peticion:',body)

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
      method: "POST",
      headers,
      body
    });

    if (!response.ok) return null;
    const data: ResponseModel = await response.json();
    return data;
  } catch (error) {
    console.log(`Fetch error ${error}`);
    return null;
  }
};
