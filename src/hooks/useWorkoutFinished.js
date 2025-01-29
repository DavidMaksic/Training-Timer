import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useWorkoutFinished(
   isPaused,
   sets,
   selectedWorkoutCopy,
   noRest,
   noRestCopy,
   setIsPaused
) {
   const navigate = useNavigate();

   useEffect(() => {
      if (isPaused) return;
      if (
         sets === 0 ||
         selectedWorkoutCopy?.sets === 0 ||
         noRest ||
         noRestCopy
      ) {
         setIsPaused((isPaused) => !isPaused);
         navigate('/finish-screen');
      }
   }, [
      sets,
      isPaused,
      selectedWorkoutCopy,
      setIsPaused,
      noRest,
      noRestCopy,
      navigate,
   ]);
}

export default useWorkoutFinished;
