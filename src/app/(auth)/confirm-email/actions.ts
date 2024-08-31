export default async function confirmEmail(token: string) {  try {
    const response = await fetch(`http://localhost:6060/auth/verify/${token}`);
    return await response.json();
  } catch (error: any) {
    throw new Error(error);
  }
}
