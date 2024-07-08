import axios from "@/config/axios";

export async function authenticateUser() {
  const token = localStorage.getItem("token");
  if (!token) {
    return {
      id: 0,
      auth: false,
      name: "",
      email: "",
      certified: 0,
      lastName: "",
      profilePic: "",
    };
  }
  try {
    const res = await axios.get("/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status === 200)
      return {
        auth: true,
        id: res.data.id,
        email: res.data.email,
        name: res.data.name,
        lastName: res.data.last_name,
        profilePic: res.data.profile_pic,
        certified: res.data.certified,
      };
  } catch (error) {
    return {
      id: 0,
      auth: false,
      name: "",
      email: "",
      lastName: "",
      profilePic: "",
      certified: 0,
    };
  }
}

export function setLocalStorage(prop: string, val: string) {
  localStorage.setItem(prop, val);
}
export function removeLocalStorage(prop: string) {
  localStorage.removeItem(prop);
}
