
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useAddclass = (instructorEmail) => {
  const [axiosSecure] = useAxiosSecure();
  const {user}=useAuth();

  const { data: classesData = {}, isLoading } = useQuery(
    ['classes-by-instructor', instructorEmail],
    async () => {
      const response = await axiosSecure(`/classes-by-instructor?instructorEmail=${user.email}`);
      return response.data;
    }
  );

  const { classes = []} = classesData;

  return { classes, isLoading };
};

export default useAddclass;
