declare interface UserI {
  id?: number;
  email?: string;
  name: string;
  last_name: string;
  profile_pic: string;
  certified?: number;
  admin?: number;
  points: number;
  grade?: GradeI;
  created_at?: string;
}
